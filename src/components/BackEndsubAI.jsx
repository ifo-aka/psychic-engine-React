
     import  { useState,useEffect,useRef ,useContext} from "react";
    import styles from "./SubAiStyle.module.css";
   import { DashboardContext } from "../store/DashboardContext";
    import { Link } from "react-router";
    const subAIs = [
        {
            id: "structure",
            name: "Structure AI",
            description: "handles backend structure api calls and data management.",
           
                   },
        {
            id: "LogicControler",
            name: "LogicControler",
            description:" handles backend logic and data management.",
            route: "/LogicControlAI"
                     },
        {
            id: "Pool Schedular AI",
            name: "Pool Schedular",
            description:
                "handles backend pool management and shedule executions.",
                route : "/poolSchedularAI"
        },
        {
            id : "Cloud Manager",
            name: "Cloud Manager Backend AI",
            description :
            "will handle cloud logic and Clouds data",
            route : "/cloudManager"

        },
         
       
    ];

    
const BackEndsubAI = () => { {
        const [activeAI, setActiveAI] = useState(null);
        const panelRef = useRef(null);
        const handleSelectAI = (aiId) => {
            if(activeAI && activeAI.id === aiId){
                setActiveAI(null);
                return;
            }
            const selected = subAIs.find((ai) => ai.id === aiId);
            setActiveAI(selected);
         
      
    
        };
        useEffect(() => {
        if (activeAI && panelRef.current) {
         
          window.scrollTo({
            top: panelRef.current.offsetTop,
            behavior: "smooth",
          });
        }
      }, [activeAI]);
      const {isMobile} = useContext(DashboardContext)
    
        return (
            <div className={` ${styles.dashboard}`}>
                <h1 className={`text-4xl font-bold mb-6  ${styles.heading}`}>Backend AI DashBoard</h1>
                <p className={`text-lg mb-10 max-w-2xl text-gray-700 ${styles.description}`}>
                    This dashboard manages and monitors all sub-AIs under the Backed AI
                    branch. Click on a sub-AI to view details and control options.
                </p>
    
                <div className={styles.AIscont}>
                    {subAIs.map((ai) => (
                        <div
                            key={ai.id}
                            onClick={() => handleSelectAI(ai.id)}
                            className={` ${styles.aiCard} ${isMobile && styles.isMobile }`}
                        >
                            <h2 className="text-xl font-semibold mb-2">{ai.name}</h2>
                            <p className="text-sm text-gray-600">{ai.description}</p>
                        </div>
                    ))}
                </div>
    
                {activeAI && (
                    <div className={`rounded  ${styles.detailPanel}`} ref={panelRef}>
                        <h3 className="text-2xl font-bold mb-4">{activeAI.name} Panel</h3>
                        <p className="text-gray-700 mb-4">{activeAI.description}</p>
                        <div className="text-sm text-gray-500 relative">
                            More controls and AI configurations will appear Click below.
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                           <Link to={activeAI.route}> <button className={styles.btn} >Details</button></Link>
                        </div>
                        
                    </div>
                    </div>
                )}
            </div>
        );
    };
  
      
}
  export default BackEndsubAI;