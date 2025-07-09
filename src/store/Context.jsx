import { useLayoutEffect, useEffect, useState, useRef } from "react";
import { DashboardContext } from "./DashboardContext";
import { profileAction,LoginAction,uiuxAction } from "./store";
import {useDispatch} from "react-redux"





const DashboardContextProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showMain, setShowMain] = useState(true);
   const [showapp,setShowApp]= useState(true);
   const [showSpinner,setShowSpinner] = useState(false);
   const [authChecked, setAuthChecked] = useState(false);
  //  const[isLogin,setIslogin]= useState(false);

  const prevWidth = useRef(window.innerWidth);
  const dispatch = useDispatch();


   useEffect(()=>{
   
    fetch("http://localhost:8080/ReactServer/Login",{
      credentials: "include",
    }).then(data=>{
      
      return data.json();
      })
    .then(data=>{
     console.log(data);
      if(data.status == "success"){
        
        dispatch(profileAction.updateName( data.user));
        // console.log(profileAction.updateName(data.user))
        setShowApp(true);
   
        dispatch(LoginAction.setLogin(true));
        
        
      }
      else{
        
      }
    }).catch(e=>{
      
    }).finally(()=>{
      setAuthChecked(true);
    });
   },[]);
const onLogin = (username, password) => {
  setShowSpinner(true);
  fetch("http://localhost:8080/ReactServer/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include", // allow cookies if needed
    body: JSON.stringify({ username, password })
  })
    .then((response) => {
      
      if (!response.ok) throw new Error("Login failed");
      return response.json();
    })
    .then((data) => {
     
      if (data.status === "success") {
       dispatch( profileAction.updateName( data.user));
       
       dispatch( LoginAction.setLogin(true));
        setShowApp(true);
        setShowSpinner(false);
        open("/");
        
        
      } else {
        alert("Invalid credentials");
       dispatch(LoginAction.setLogin(false))
        setShowSpinner(false);
      }
    })
    .catch((error) => {
      setShowSpinner(false);
     
      dispatch(LoginAction.setLogin(false));
      console.error("Login error:", error);
      alert("Login request failed");
    });
};



const signupHandler= (confirm,Event)=>{
    Event.preventDefault();
if(!confirm){
  alert('please match the password.')
  return;
}
    let values=[];
   for(let i=0;i<5;i++ ){
    values[i]=Event.target[i].value;
   }
   let obj={
    name:"",
    email:"",
    phoneNo:"",
    password : "",
    
   }
   obj.name=values[0];
   obj.email=values[1];
   obj.phoneNo=values[2];
   obj.password=values[3];
   console.log(obj);
    fetch("http://localhost:8080/ReactServer/signup",{
      method: "post",
      headers:{"Content-Type": "application/json"},
      credentials: "include",
      body: JSON.stringify(obj)
    }
    )
    .then(data=>data.json()).then(data=>{
      console.log(data)
      alert('Succesfull now login and start use.')
      open("/")
    })
    .catch(error=>{
      console.log(error);
      alert("check your network and try again")
    })
      
}

  // Initial setup (no flash)
  useLayoutEffect(() => {
    const width = window.innerWidth;
    
    if (width < 950) {
      // setSidebarState(false);
      dispatch(uiuxAction.handleSidebar(false))
      setIsMobile(true);
    } else {
      // setSidebarState(true);
      dispatch(uiuxAction.handleSidebar(true))
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      
      const wasMobile = prevWidth.current < 950;

      const isNowMobile = currentWidth < 950;

      if (wasMobile !== isNowMobile) {
        // breakpoint crossed
        if (isNowMobile) {
          // setSidebarState(false);
          dispatch(uiuxAction.handleSidebar(false));
          setIsMobile(true);
        } else {
          // setSidebarState(true);
          dispatch(uiuxAction.handleSidebar(true));
          setIsMobile(false);
          if (!showMain) {
            setShowMain(true);
          }
        }
      }

      // update width tracker
      prevWidth.current = currentWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMain]);

  const handleSidebarclicksWhenisMobile = () => {
    if (isMobile && sidebarState) {
      // setSidebarState(false);
      dispatch(uiuxAction.handleSidebar(false));
      setShowMain(true);
    }
  };

  return (

    <DashboardContext.Provider
      value={{
        showapp,
        sidebarState,
        isMobile,
        showMain,
        showSpinner,
        authChecked,
       
       
        onLogin,
        signupHandler,
        setShowMain,
        setSidebarState,
        handleSidebarclicksWhenisMobile,
      }}
    >
      <div>{children}</div>
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
