import SystemOverview from "./analysisComponents/SystemOverview";
import Statistics from "./analysisComponents/Satatistics";
import Data from "./analysisComponents/Data";
import Warnings from "./analysisComponents/Warnings";
import Suggestions from "./analysisComponents/Suggestions";
import RealTimeLogs from "./analysisComponents/RealTimeLogs";


const Analysis = () => {    
return <>  
                <SystemOverview />
                <Statistics/>
                <Data />
                <Warnings />
                <Suggestions></Suggestions>
                <RealTimeLogs></RealTimeLogs>
                </>
}
export default Analysis;