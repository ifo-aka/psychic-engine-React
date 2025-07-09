import logoImg from "../assets/mainlogo.png";
import NetworkImg from "../assets/netWork.png";
import Securityimg from "../assets/secuirity.png";
import uiuxlogo from "../assets/uiux.png";
import backendlogo from "../assets/backend.png";
import MasterAi from "../assets/master.png";
import dataAi from "../assets/DataAnalyst.png";
import { Link } from "react-router";

const ControlsAndLogo = () => {
  return (
    <>
    <div className="logo">
      <img
        src={logoImg}
        alt="Logo featuring the word DashBoarder
         in a modern font, set against a sleek dark gradient background
          that conveys a professional and welcoming atmosphere"
        className="Logoface"
      />
      </div>
      <div className="controlPanel">
        <button className="Controlsbtn">
          <Link to="/">
            <img src={MasterAi} alt="" className="NetworkAiimg" />
          </Link>
        </button>
        <button className="Controlsbtn">
          <Link to="/">
            <img src={Securityimg} alt="" className="NetworkAiimg" />
          </Link>
        </button>
        <button className="Controlsbtn">
          <Link to="/UiUxAI">
            <img src={uiuxlogo} alt="" className="NetworkAiimg" />
          </Link>
        </button>
        <button className="Controlsbtn">
          <Link to="/BackEndAI">
            <img src={backendlogo} alt="" className="NetworkAiimg" />
          </Link>
        </button>
        <button className="Controlsbtn">
          <img src={NetworkImg} alt="" className="NetworkAiimg" />
        </button>
        <button className="Controlsbtn">
          <img src={dataAi} alt="" className="NetworkAiimg" />
        </button>
      </div>
    </>
  );
};
export default ControlsAndLogo;
