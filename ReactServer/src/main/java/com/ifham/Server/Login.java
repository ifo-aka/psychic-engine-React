package com.ifham.Server;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.UUID;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.json.JSONObject;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import static com.mongodb.client.model.Filters.eq;

@WebServlet("/Login")
public class Login extends HttpServlet {
    static MongoClient client = MongoClients.create("mongodb://localhost:27017");
    static MongoDatabase database = client.getDatabase("LoginM");
    static MongoCollection<Document> collection = database.getCollection("login");

    private static final long serialVersionUID = 1L;

    private void setCorsHeaders(HttpServletResponse res) {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Access-Control-Allow-Credentials", "true");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        setCorsHeaders(resp);
        resp.setContentType("application/json");

        HttpSession session = req.getSession(false); // false: don't create new
        if (session != null && Boolean.TRUE.equals(session.getAttribute("loggedIn"))) {
            String user = (String) session.getAttribute("username");
            JSONObject resJson = new JSONObject();
            resJson.put("status", "success");
            resJson.put("user", user);
            resp.getWriter().write(resJson.toString());
        } else {
            JSONObject resJson = new JSONObject();
            resJson.put("status", "unauthorized");
            resp.getWriter().write(resJson.toString());
        }
    }

    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        setCorsHeaders(res);
        res.setStatus(HttpServletResponse.SC_NO_CONTENT); // 204
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        setCorsHeaders(res);
        res.setContentType("application/json");

        // Read JSON request body
        StringBuilder sb = new StringBuilder();
        String line;
        try (BufferedReader reader = req.getReader()) {
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }

        JSONObject json = new JSONObject(sb.toString());
        String username = json.getString("username");
        String password = json.getString("password");

        // Validate credentials
        Bson filter = eq("username", username);
        Document userdoc = collection.find(filter).first();
        String hashedRequestPass = PasswordUtil.hashPassword(password);

        if (userdoc != null && hashedRequestPass.equals(userdoc.getString("password"))) {
            //  Successful login
            HttpSession session = req.getSession(); // will create new session
            session.setAttribute("loggedIn", true);
            session.setAttribute("username", username);
            session.setAttribute("secret", UUID.randomUUID().toString());
            session.setMaxInactiveInterval(10 * 60); // 10 minutes

            JSONObject resJson = new JSONObject();
            resJson.put("status", "success");
            resJson.put("user", username);
            res.getWriter().write(resJson.toString());
        } else {
            // ❌ Failed login
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            JSONObject resJson = new JSONObject();
            resJson.put("status", "failed");
            resJson.put("reason", "Invalid credentials or user not found");
            res.getWriter().write(resJson.toString());
        }
    }
}
