package com.ifham.Server;

import java.io.BufferedReader;
import java.io.IOException;

import org.bson.Document;
import org.json.JSONObject;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/signup")
public class Signup extends HttpServlet {
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
	  protected void doOptions(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
	        setCorsHeaders(res);
	        res.setStatus(HttpServletResponse.SC_NO_CONTENT); // 204
	    }

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		setCorsHeaders(resp);
		StringBuilder sb = new StringBuilder();
		String line ;
		try(BufferedReader br = req.getReader()){
			while((line = br.readLine()) != null) {
				sb.append(line);
			}
		}
		
		JSONObject object = new JSONObject(sb.toString());
		String name = object.getString("name");
		String email = object.getString("email");
		String PhoneNO = object.getString("phoneNo");
		String password = PasswordUtil.hashPassword(object.getString("password"));
		Document userdoc = new Document("username" , name).append("email", email).append("PhoneNo", PhoneNO).append("password", password);
		collection.insertOne(userdoc);
		System.out.print(object);
		
		
		
		
		
		
		resp.setContentType("application/json");
		resp.getWriter().write("{\"hello\" : \"accept\"}");
		
		
	}
	
	
	
	
	
	

}
