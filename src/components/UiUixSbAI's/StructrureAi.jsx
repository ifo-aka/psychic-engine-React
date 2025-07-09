import React from 'react';
import styles from './StructureAi.module.css';
import { FaCogs, FaProjectDiagram, FaColumns } from 'react-icons/fa';
import UIAIWighet from '../DashBoardWighets/SubAIWighets/UIAIWidget';

const StructureAi = () => {
  const stats = [
    { label: 'Grids Optimized', value: 57, icon: <FaColumns />, color: 'bg-blue-600' },
    { label: 'Layouts Analyzed', value: 22, icon: <FaProjectDiagram />, color: 'bg-green-600' },
    { label: 'Refactor Tasks', value: 9, icon: <FaCogs />, color: 'bg-purple-600' },
  ];


  return (
    <div className={`${styles.StructureAi} p-6 bg-black min-h-screen text-white`}>
      <div className={styles.mainofUIUXSUB}>
      <h1 className="text-3xl font-bold mb-2">🧱 Structure AI</h1>
      <p className="text-gray-400 mb-6 max-w-2xl">
        Responsible for analyzing and optimizing the layout structure, grid balance, and UI component distribution.
      </p>

      {/* Stats Tiles */}
      <div className="d-flex justify-content-evenly border border-info">
        {stats.map((stat, i) => (
          <div key={i} className={`p-2 rounded shadow-md flex items-center gap-4 ${stat.color}`}>
            <div className="text-xl">{stat.icon}</div>
            <div>
              <p className="text-sm">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* /* Chart */ }
     <UIAIWighet></UIAIWighet>

      {/* Placeholder for Future Controls */}
      <div className="mt-8 text-sm text-gray-500">
        ⚙️ Controls and refactoring options will be available soon.
      </div>
      </div>
    </div>
  );
};

export default StructureAi;
