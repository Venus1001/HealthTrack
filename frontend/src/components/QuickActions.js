// import React, { useState } from "react";
// import Button from "./ui/Button";
// import Input from "./ui/input";
// import Label from "./ui/Label";

// const QuickActions = () => {
//   const [activeForm, setActiveForm] = useState(null);

//   const handleOpenForm = (action) => {
//     setActiveForm(action);
//   };

//   const handleCloseForm = () => {
//     setActiveForm(null);
//   };

//   return (
//     <div className="quick-actions-container">
//       <header className="header">
//         <div className="header-logo">
//           <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g clipPath="url(#clip0_6_535)">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
//                 fill="currentColor"
//               ></path>
//             </g>
//             <defs>
//               <clipPath id="clip0_6_535">
//                 <rect width="48" height="48" fill="white"></rect>
//               </clipPath>
//             </defs>
//           </svg>
//           <h2>HealthTrack</h2>
//         </div>
//       </header>
//       <h2 className="quick-actions-title">Quick Actions</h2>
//       <div className="quick-actions">
//         <button className="action-btn" onClick={() => handleOpenForm("Log Weight")}>
//           Log Weight
//         </button>
//         <button className="action-btn" onClick={() => handleOpenForm("Log Sleep")}>
//           Log Sleep
//         </button>
//         <button className="action-btn" onClick={() => handleOpenForm("Log Food")}>
//           Log Food
//         </button>
//         <button className="action-btn" onClick={() => handleOpenForm("Log Workout")}>
//           Log Workout
//         </button>
//         <button className="action-btn" onClick={() => handleOpenForm("Log Blood Pressure")}>
//           Log Blood Pressure
//         </button>
//         <button className="action-btn" onClick={() => handleOpenForm("Log Heart Rate")}>
//           Log Heart Rate
//         </button>
//       </div>

//       {activeForm === "Log Weight" && (
//         <div className="log-form">
//           <h3>Log Weight</h3>
//           <form>
//             <Label>Weight (kg):</Label>
//             <Input type="number" placeholder="Enter your weight" />
//             <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//             <Button type="submit" className="small-btn">Submit</Button>
//               <Button type="button" className="small-btn" onClick={handleCloseForm}>Cancel</Button>
//             </div>
//           </form>
//         </div>
//       )}
//        {activeForm === "Log Sleep" && (
//         <div className="log-form">
//           <h3>Log Sleep</h3>
//           <form>
//             <Label>Time:</Label>
//             <Input type="number" placeholder="Enter your Time" />
//             <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//             <Button type="submit" className="small-btn">Submit</Button>
//             <Button type="button" className="small-btn" onClick={handleCloseForm}>Cancel</Button>
//             </div>
//           </form>
//         </div>
//       )}

//        {activeForm === "Log Food" && (
//         <div className="log-form">
//           <h3>Log Food</h3>
//           <form>
//             <Label>Category:</Label>
//             <Input type="text" placeholder="Enter your Food Category" />
//             <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//             <Button type="submit" className="small-btn">Submit</Button>
//             <Button type="button" className="small-btn" onClick={handleCloseForm}>Cancel</Button>
//             </div>
//           </form>
//         </div>
//       )}

//       {activeForm === "Log Workout" && (
//         <div className="log-form">
//           <h3>Log Workout</h3>
//           <form>
//             <Label>Activity:</Label>
//             <Input type="text" placeholder="Enter your Food Activity" />
//             <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//             <Button type="submit" className="small-btn">Submit</Button>
//             <Button type="button" className="small-btn" onClick={handleCloseForm}>Cancel</Button>
//             </div>
//           </form>
//         </div>
//       )}

//      {activeForm === "Log Blood Pressure" && (
//         <div className="log-form">
//           <h3>Log Blood Pressure</h3>
//           <form>
//             <Label>Numbers:</Label>
//             <Input type="number" placeholder="Enter your Numbers" />
//             <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//             <Button type="submit" className="small-btn">Submit</Button>
//             <Button type="button" className="small-btn" onClick={handleCloseForm}>Cancel</Button>
//             </div>
//           </form>
//         </div>
//       )}

//      {activeForm === "Log Heart Rate" && (
//         <div className="log-form">
//           <h3>Log Heart Rate</h3>
//           <form>
//             <Label>Numbers:</Label>
//             <Input type="number" placeholder="Enter your Numbers" />
//             <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//             <Button type="submit" className="small-btn">Submit</Button>
//             <Button type="button" className="small-btn" onClick={handleCloseForm}>Cancel</Button>
//             </div>
//           </form>
//         </div>
//       )}

//     </div>
//   );
// };

// export default QuickActions;
