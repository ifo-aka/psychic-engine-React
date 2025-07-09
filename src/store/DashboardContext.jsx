import { createContext, use } from "react";




export const DashboardContext = createContext({
   showapp : "",
   sidebarState: "",
   isMobile: "",
   showMain: "",
   showSpinner : "",
   authChecked: "",
   user: "",
  
   onLogin : ()=>{},
   signupHandler:()=>{},
   setShowMain: () => { },
   setSidebarState: () => { },
   handleSidebarclicksWhenisMobile: () => { }
});
