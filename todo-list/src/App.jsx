import React, { useState } from 'react';
import './App.css';
import ManageTasks from './components/ManageTasks';
// Remove the unused import statements
// import AllTasks from './AllTasks';
// import AllLists from '../AllLists';
// import ManageTasks from './ManageTasks';



 
const App = () => {    
  const [tasks, setTasks] = useState([    

    { id: 1, text: 'Task 1', isCompleted: false, priority: 1, date: new Date() },
    { id: 2, text: 'Task 2', isCompleted: false, priority: 2, date: new Date() },
    { id: 3, text: 'Task 3', isCompleted: false, priority: 3, date: new Date() }

  ]);  const [selectedOption, setSelectedOption] = useState(null);
 const addTask = (newTaskText) => {
    setTasks(prevTasks => [
      ...prevTasks,
      { id: prevTasks.length + 1, text: newTaskText, isCompleted: false }
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const markAsComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  const updateTask = (taskId, newText) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };
    

    const sortTasks = () => {

      if (selectedOption === 'alphabetical') {
        const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
        setTasks(sortedTasks);
        return;
      }
      if (selectedOption === 'priority') {
        const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
        setTasks(sortedTasks);
        return;
      }
      if (selectedOption === 'date') {
        const sortedTasks = [...tasks].sort((a, b) => a.date - b.date);
        setTasks(sortedTasks);
        return;
      }
      if (selectedOption === 'status') {
        const sortedTasks = [...tasks].sort((a, b) => a.isCompleted - b.isCompleted);
        setTasks(sortedTasks);
        return;
      }
      if (selectedOption === 'default') {
        return;

      }

      const sortedTasks = [...tasks].reverse();
      setTasks(sortedTasks);
    };

    return (
      <div>
        <p>HomePage</p>
        <div>
          <h3>Select an option to rearrange tasks:</h3>
          <select onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="default">Default</option>
            <option value="alphabetical">Alphabetical Order</option>
            <option value="priority">Priority</option>
            <option value="date">Date</option>
            <option value="status">Status</option>
          </select>
          <button onClick={sortTasks}>Sort</button>

          <div>
            <nav className='menu'>

            </nav>
            <main>
              <ManageTasks
                tasks={tasks}
                addTask={addTask}
                deleteTask={deleteTask}
                markAsComplete={markAsComplete}
                updateTask={updateTask}
                setTasks={setTasks}
              />
            </main>
          </div>
          </div>
          </div>
          );
          };


          export default App;