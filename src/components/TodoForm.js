import React from "react";
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }
  //   handleChange = e =>{
  //       this.setState({[e.target.name]: e.target.value});
  //   };
  render() {
    return (
      <form>
        <input />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm;
