import React, { useState } from 'react';

const ManageTasks = ({ addTask, tasks, setTasks }) => {
    const [newTaskText, setNewTaskText] = useState('');

    const handleInputChange = (e) => {
        setNewTaskText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTaskText.trim() !== '') {
            addTask(newTaskText);
            setNewTaskText('');
        }
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const handlePriorityChange = (taskId, newPriority) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, priority: newPriority };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleTextChange = (taskId, newText) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, text: newText };
            }
            return task;
        });
        setTasks(updatedTasks);
    };
    const performSortingAndOptimization = (selectedOption) => {
        let sortedTasks = [...tasks];
        switch (selectedOption) {
            case 'alphabetical':
                sortedTasks.sort((a, b) => a.text.localeCompare(b.text)); // Sort tasks alphabetically based on text
                break;
            case 'priority':
                sortedTasks.sort((a, b) => a.priority - b.priority); // Sort tasks by priority
                break;
            // Add more cases for additional options if needed
            default:
                // Default case: do nothing or apply a default sorting/optimization logic
                break;
        }
        // Perform any additional optimization steps based on the selected option
        return sortedTasks;
    };

    // Example usage
    const selectedOption = 'alphabetical';
    
    console.log('Original tasks:', tasks);
    const sortedAndOptimizedTasks = performSortingAndOptimization(selectedOption);
    console.log(`Sorted and optimized tasks based on '${selectedOption}':`, sortedAndOptimizedTasks);

    return (
        <div>
            <p>ManageTasks</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTaskText}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks && tasks.length > 0 ? (
                    tasks.map(task => (
                        <li key={task.id}>
                            <input
                                type="text"
                                value={task.text}
                                onChange={(e) => handleTextChange(task.id, e.target.value)}
                            />
                            <input
                            type="input"
                            name="priority"
                            id="priority"
                            min="1"
                            max="5"
                            step="1"
                            defaultValue="1"
                            value={task.priority || ''}
                            onChange={(e) => handlePriorityChange(task.id, e.target.value)}
                            />                        
                             <button onClick={() => deleteTask(task.id)}>Delete</button>

                        </li>                  

                    ))
                ) : (
                    <li>No tasks available</li>
                )}
            </ul>
        </div>
    );
};

export default ManageTasks;
