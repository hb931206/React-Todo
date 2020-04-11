import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  addItem = (item) => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newItem],
    });
  };

  toggleItem = (itemId) => {
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem} />
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
