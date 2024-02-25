// import React, { useState } from 'react';
// import ManageTasks from './components/ManageTasks';
// import AllTasks from './components/AllTasks';
// import AllLists from './AllLists';
// import './App.css'

// // Remove the declaration of the 'defaultOptions' variable
// // const defaultOptions = [
// //     { value: 'default', label: 'Default' },
// //     { value: 'alphabetical', label: 'Alphabetical' },
// //     { value: 'priority', label: 'Priority' },
// //     { value: 'date', label: 'Date' },
// //     { value: 'status', label: 'Status' },
// // ];

// const HomePage = () => {
//     const [tasks, setTasks] = useState([]);
//     const [selectedOption, setSelectedOption] = useState(null);
    
//     const handleOptionChange = (defaultOptions) => {
//         setSelectedOption(defaultOptions.value);
//     };

//     const sortTasks = () => {   
//         if (selectedOption === 'alphabetical') {
//             const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
//             setTasks(sortedTasks);
//             return;
//         }
//         if (selectedOption === 'priority') {
//             const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
//             setTasks(sortedTasks);
//             return;
//         }
//         if (selectedOption === 'date') {
//             const sortedTasks = [...tasks].sort((a, b) => a.date - b.date);
//             setTasks(sortedTasks);
//             return;
//         }
//         if (selectedOption === 'status') {
//             const sortedTasks = [...tasks].sort((a, b) => a.isCompleted - b.isCompleted);
//             setTasks(sortedTasks);
//             return;
//         }
//         if (selectedOption === 'default') {
//             return;
            
//         }

//         const sortedTasks = [...tasks].reverse();
//         setTasks(sortedTasks);
//     };

//     return (
//         <div>
//             <p>HomePage</p>
//             <div>
//                 <h3>Select an option to rearrange tasks:</h3>
//                 <select onChange={(e) => handleOptionChange(e.target.value)}>
//                     <option value="default">Default</option>
//                     <option value="alphabetical">Alphabetical Order</option>
//                     <option value="priority">Priority</option>
//                     <option value="date">Date</option>
//                     <option value="status">Status</option>
//                 </select>
//                 <button onClick={sortTasks}>Sort</button>
//             </div>
//             <div>
//                 <ManageTasks tasks={tasks} setTasks={setTasks} selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
//                 <AllTasks tasks={tasks} setTasks={setTasks} selectedOption={selectedOption} handleOptionChange={handleOptionChange} handlePriorityChange={handleOptionChange} priority={selectedOption} />
//                 <AllLists />
//             </div>
//         </div>
//     );
// };

// export default HomePage;