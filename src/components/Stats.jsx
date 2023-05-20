import React from "react";

const getStatColor = (baseStat) => {
  if (baseStat >= 120) {
    return "bg-green-500";
  } else if (baseStat >= 70) {
    return "bg-blue-500";
  } else if (baseStat >= 20) {
    return "bg-yellow-500";
  } else {
    return "bg-red-500";
  }
};

export const Stats = ({ stats }) => {
  const maxStatValue = 255;
  return (
    <ul className="list-disc pl-4">
      {stats.map((stat, index) => {
        const barWidth = Math.min(stat.base_stat, maxStatValue);
        const barColor = getStatColor(stat.base_stat); 
        return (
          <li
            key={`${stat.stat.name}-${index}`}
            className="flex items-center mb-2"
          >
            <div className="w-1/4">
              <span className="text-sm">{`${stat.stat.name}   ${stat.base_stat}`}</span>
            </div>
            <div className="w-3/4 bg-gray-300 h-4 rounded-full">
              <div
                className={`h-full rounded-full ${barColor}`}
                style={{ width: `${(barWidth / maxStatValue) * 100}%` }}
              ></div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
