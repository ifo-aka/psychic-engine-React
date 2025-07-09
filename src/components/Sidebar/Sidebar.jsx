// Sidebar.jsx
import { useState ,useContext} from 'react';
import './Sidebar.css';
import { Link } from 'react-router';
import "./sidebar.css"
import { DashboardContext } from "../../store/DashboardContext";
import { useSelector } from 'react-redux';
function Sidebar() {
  const [openMenu, setOpenMenu] = useState('');
   const context = useContext(DashboardContext);
  // const sidebarState = context.sidebarState;
  const ismobile= context.isMobile;
  const isLogin= useSelector((store)=>store.login)
  const    {sidebarState} =useSelector((store)=>store.uiux)
  console.log(sidebarState)
 

   const {handleSidebarclicksWhenisMobile,isMobile}=useContext(DashboardContext)

  

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? '' : menuName);
  };

 

  return sidebarState && <div className={`sidebar ${ismobile && "mobile"}`}>
      <div className="sidebar-title">AI Control Panel {ismobile && <span> X</span>} </div>

      <div className={`menu ${ismobile&& "mobile"}`}>
       <Link to="/" className='menu-item home-link'> <div className="home" onClick={handleSidebarclicksWhenisMobile}>Home</div></Link>
        <div className="menu-item" onClick={() => toggleMenu('uiux')}>UI/UX AI</div>
        {openMenu === 'uiux' && (
          <div className="submenu">
            <Link to="/StructureAI" onClick={handleSidebarclicksWhenisMobile}>Structure AI</Link>
            <div>Keywords AI</div>
            <div>Spider AI</div>
            <div>Animation Control AI</div>
          </div>
        )}

        <div className="menu-item" onClick={() => toggleMenu('backend')}>Backend AI</div>
        {openMenu === 'backend' && (
          <div className="submenu">
            <Link to="/BackEndAI" onClick={handleSidebarclicksWhenisMobile}>Main Backend SubAI</Link>
            <div>Database AI</div>
            <div>API Handler AI</div>
          </div>
        )}

        <div className="menu-item">Security AI</div>
        <div className="menu-item">Network AI</div>
        <div className="menu-item">Toolbox</div>
        {isMobile &&  !isLogin &&   <div className="d-flex flex-column">
      <Link to={"/signup"} className="signup bg-none m-2 text-center text-decoration-none  menu-item" onClick={handleSidebarclicksWhenisMobile}>SignUp</Link>
       <Link to={"/Login"} className="login bg-none m-2 text-center text-decoration-none  menu-item" onClick={handleSidebarclicksWhenisMobile}>LogIn</Link>

     </div>}
      </div>
    </div>
 
  
}
export default Sidebar;

