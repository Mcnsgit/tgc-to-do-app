import React from "react";
import AllTasks from "./AllTasks";

class ManageTasks extends React.Component {
    state = {
        newTaskText: '',
        selectedOption: 'default',
    };

    handleInputChange = (e) => {
        this.setState({ newTaskText: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { newTaskText } = this.state;
        if (newTaskText.trim() !== '') {
          this.props.addTask(newTaskText);
          this.setState({ newTaskText: '' });
        }
    };

    handlePriorityChange = (taskId, newPriority) => {
        this.props.handlePriorityChange(taskId, newPriority);
    };

    sortTasks = () => {
        const { selectedOption } = this.state;
        this.props.sortTasks(selectedOption);
    };
    render() {
        const { tasks, deleteTask, markAsComplete, updateTask } = this.props;
        const { newTaskText, selectedOption } = this.state;

        return (
            <><div className="manage">
                <h2><b>Manage Tasks</b></h2>                    
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Add task"
                        type="text"
                        value={newTaskText}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Add Task</button>
                </form>
                </div>
                <div className="sort">
                <select value={selectedOption} onChange={(e) => this.setState({ selectedOption: e.target.value })} title="Sort by">
                    <option value="default">Default</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="priority">Priority</option>
                    <option value="date">Date</option>
                    <option value="status">Status</option>
                </select>
                <button onClick={this.sortTasks}>Sort</button>
                <AllTasks
                    tasks={tasks}
                    deleteTask={deleteTask}
                    markAsComplete={markAsComplete}
                    updateTask={updateTask}
                />
            </div></>
        );
    }
}

export default ManageTasks;