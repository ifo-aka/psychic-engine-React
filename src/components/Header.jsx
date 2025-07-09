import Sidebar from "./Sidebar/Sidebar";
import {useSelector,useDispatch} from "react-redux";
import { uiuxAction } from "../store/store";


import { Link, Outlet } from "react-router";
import { DashboardContext } from "../store/DashboardContext";


import "./Header.css";
import { useContext } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const { Pname } = useSelector((store) => store.profileName);
  const isLogin = useSelector((store)=>store.login.status);
  const {sidebarState}= useSelector((store)=>store.uiux);


  const { isMobile ,showMain,setShowMain,setSidebarState} = useContext(DashboardContext);
  
  return (
    <div className="main">
      <div className="headerAndthreeDot">
        {isMobile && (
          <div className="threeDotcont">
            <span
              className="dots"
              onClick={() => {
                setShowMain(!showMain);
                
                dispatch(uiuxAction.handleSidebar(!sidebarState));
              }}
            >
              ...
            </span>
          </div>
        )}
    
        <div className="Headermsg">
          <h1>Welcome to AI's dashboard</h1>
          
          </div>
          { !isMobile && !isLogin &&
          <div className="loginOrSignup">
      <Link to={"/signup"} className="signup link">SignUp</Link>
       <Link to={"/Login"} className="login link">LogIn</Link>

     </div>
}
           {Pname != null &&
            <div className="currentUser">
             
          <span className="userName" title={Pname}>
            {Pname.charAt(0).toUpperCase()  }
          </span>
           
        </div>
     }
     
      </div>
  
        <div className="sidebarandMain">
          <Sidebar></Sidebar>
    {showMain && (
          <Outlet />
    )}
        </div>
      
    </div>
  );
};
export default Header;
