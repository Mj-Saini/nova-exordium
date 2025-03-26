// "use client";
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const UserEngageGraph = () => {
//   const data = {
//     labels: ["", "", "", "", "", "", "", "", "", "", "", ""], // No labels
//     datasets: [
//       {
//         label: "Data",
//         data: [300, 180, 220, 120, 400, 500, 450, 500, 380, 300, 200, 100],
//         backgroundColor: "white",
//         borderRadius: 10, // Rounded edges
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false, // Hide legend
//       },
//     },
//     scales: {
//       x: {
//         grid: { display: false },
//         ticks: { display: false }, // Hide x-axis labels
//       },
//       y: {
//         grid: { color: "rgba(255, 255, 255, 0.2)" },
//         ticks: { color: "white", font: { size: 14 } },
//       },
//     },
//   };

//   return (
//     <div className="w-full max-w-4xl p-4 rounded-xl bg-gradient-to-r from-[#1f3b3b] to-[#234040] shadow-lg">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };


// export default UserEngageGraph;

import React from 'react'

const UserEngageGraph = () => {
  return (
    <div>UserEngageGraph</div>
  )
}

export default UserEngageGraph