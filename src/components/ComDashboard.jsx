
import ControlsAndLogo from './ControlsAndlogo';
import Analysis from './Analysis';
import RealTimecom from './RealTimecom';
import Styles from "./ComDashboard.module.css"




const ComDashboard = () => {
return <div className={Styles.dashboard}>
        <div className={Styles.controlsAndLogo}>
        <ControlsAndLogo  />
        </div>
        <div className={Styles.dashBoardContent}>
          <Analysis></Analysis>
      </div>
      <div className={Styles.aiCommunicator}>
        <div className={Styles.aiCommunicatorWrapper}>
        <RealTimecom></RealTimecom>
        </div>
      </div>
</div>
}
export default ComDashboard;