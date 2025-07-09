import { useRef,useContext } from "react";
import {DashboardContext} from "../store/DashboardContext";
import styles from "./Login.module.css";

const Login = ()=>{
    const {onLogin} = useContext(DashboardContext)
    const username= useRef('');
const password = useRef('');
    return <div className={styles.loginForm}>
        <div className={styles.form}>
    <label className={styles.label}>Login here</label>
    <input type="text" name="username" id="username" ref={username} className={styles.dBlock}    placeholder="Enter username"/>
    <input type="password" name="password"  id="password" ref={password} className={styles.dBlock}  placeholder="Enter password"/>
    <button type="submit" onClick={()=>onLogin(username.current.value,password.current.value)} className={`${styles.btn} ${styles.dBlock}`}>Login</button>
    </div>
    </div>
    
}
export default Login;