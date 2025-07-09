import React, { useState, useEffect, useRef } from "react";
import styles from "./SubAiStyle.module.css";
import { Link } from "react-router";
const subAIs = [
    {
        id: "structure",
        name: "Structure AI",
        description:
            "Handles layout, grid systems, and component structure for all views.",
        route: "/StructureAI"
    },
    {
        id: "keywords",
        name: "Keywords AI",
        description:
            "Generates optimized keywords for SEO, accessibility, and content targeting.",
    },
    {
        id: "spider",
        name: "Spider AI",
        description:
            "Crawls the web to find trending keywords and ideal color combinations.",
    },
    {
        id: "animation",
        name: "Animation Control AI",
        description: "Manages UI animations, transitions, and motion logic.",
    },
];

const UiUxAIDashboard = () => {
    const [activeAI, setActiveAI] = useState(null);
    const panelRef = useRef(null);
    const handleSelectAI = (aiId) => {
        if (activeAI && activeAI.id  === aiId) {
            
            setActiveAI(null);
            return;
        }
        const selected = subAIs.find((ai) => ai.id === aiId);
        setActiveAI(selected);
     
  

    };
    useEffect(() => {
    if (activeAI && panelRef.current) {
     console.log(panelRef.current.offsetTop);
      window.scrollTo({
        top: panelRef.current.offsetTop,
        behavior: 'smooth',
        
      });
    }
  }, [activeAI]);

    return (
        <div className={` ${styles.dashboard}`}>
            <h1 className={`text-4xl font-bold mb-6  ${styles.heading}`}>UI/UX AI Dashboard</h1>
            <p className={`text-lg mb-10 max-w-2xl text-gray-700 ${styles.description}`}>
                This dashboard manages and monitors all sub-AIs under the UI/UX AI
                branch. Click on a sub-AI to view details and control options.
            </p>

            <div className={styles.AIscont}>
                {subAIs.map((ai) => (
                    <div
                        key={ai.id}
                        onClick={() => handleSelectAI(ai.id)}
                        className={`cursor-pointer  rounded-2xl shadow-md p-4 hover:shadow-lg transition ${styles.aiCard} `}
                    >
                        <h2 className="text-xl font-semibold mb-2">{ai.name}</h2>
                        <p className="text-sm text-gray-600">{ai.description}</p>
                    </div>
                ))}
                 {activeAI && (
                <div className={`rounded mx-3 ${styles.detailPanel}`} ref={panelRef}>
                    <h3 className="text-2xl font-bold mb-4 ">{activeAI.name} Panel</h3>
                    <p className="text-gray-700 mb-4">{activeAI.description}</p>
                    <div className="text-sm text-gray-500 relative">
                        More controls and AI configurations will appear here soon.
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                             <Link to={activeAI.route}> <button className={styles.btn} >Details</button></Link>
                    </div>
                    
                </div>
                </div>
            )}
            </div>

           
        </div>
    );
};
export default UiUxAIDashboard;
