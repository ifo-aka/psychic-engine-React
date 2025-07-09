import { Form } from "react-router";
import styles from "./Signup.module.css";
import { useContext,useRef,useState,useEffect} from "react";
import { DashboardContext } from "../store/DashboardContext";


    


let Signup=()=>{
    useEffect(()=>{
        if(password.current.value===""){
            setMatch(true);
            setRegexok(true)
        }
        
    })
    const {signupHandler} = useContext(DashboardContext);
    const [regexok,setRegexok]=useState("");
    const [match,setMatch] = useState("");
let password= useRef("");
    let password2= useRef("");



    function checkRegex(){
        console.log("enter")
        const regex = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&?]).{8,}$";
        let value = password.current.value;
        
        if(value.match(regex)){
         setRegexok(true);
         
        }
        else{
            console.log("false")
            setRegexok(false);
            console.log(regexok)

        }

    }
    function confirm(){
        if(password.current.value==""){
            setMatch(true)
            return;
        }
    if(password.current.value === password2.current.value){
        setMatch(true);
    }else{
        setMatch(false);
    }
    
}
  
return <> 
 <div className={styles.SignupCont}>
    <form   className={styles.signup} onSubmit={(event)=>signupHandler(match,event)}>
        <div className={styles.cont}>
            <label htmlFor="username ">Name</label><br />
        <input type="text"   id="username"  className={styles.contElement} required/>
        </div>
         <div className={styles.cont}>
            <label htmlFor="email">Email</label><br />
        <input type="email"   id="email" className={styles.contElement} required />
        </div>
         <div className={styles.cont}>
            <label htmlFor="phoneNumber">P:NO</label><br />
        <input type="number"   id="phoneNumber" className={styles.contElement} required=""  />
        </div>
         <div className={styles.cont}>
            <label htmlFor="password" className={`${!regexok && styles.redlab}`}>Password  <span>should be 8 letters atleast one uppercase one special chracter one number.</span></label><br />
        <input type="password"   id="password" className={styles.contElement} required  ref={password}  onChange={checkRegex}/>
        </div>
         <div className={ styles.cont}>
            <label htmlFor="confirm">Re-enter password</label><br />
        <input type="Password"  className={`${styles.Confirm} ${!match && styles.btnred} ${styles.contElement}`} id="confirm" required ref={password2} onChange={confirm}/>
        </div>
         <div className={`${styles.btn} ${styles.cont}`}>
            
        <button type="submit " className={` btnele  btn-outline-dark  ${styles.btnele}  ${styles.contElement}`}>SignUp</button>
        </div>
    </form>
   

 </div>




</>
}

export default Signup;