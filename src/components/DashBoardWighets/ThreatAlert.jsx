import React from 'react';
import { FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';

const ThreatAlert = ({ activeThreats = 3 }) => {
  const isDanger = activeThreats >= 3;
  const bgColor = isDanger ? 'bg-red-600' : activeThreats === 0 ? 'bg-green-600' : 'bg-yellow-500';
  const icon = isDanger ? <FaExclamationTriangle /> : <FaShieldAlt />;

  return (
    <div className={`flex items-center justify-between p-4 rounded-xl shadow-lg text-white ${bgColor} w-full max-w-sm`}>
      <div className="flex items-center gap-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <p className="text-sm font-medium">Threat Alerts</p>
          <p className="text-xl font-bold">{activeThreats}</p>
        </div>
      </div>
      {isDanger && (
        <span className="text-xs bg-white text-red-600 px-2 py-1 rounded">Critical</span>
      )}
    </div>
  );
};

export default ThreatAlert;
