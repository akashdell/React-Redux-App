import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  state = { num: 0 };
  componentWillMount() {
    console.log("component", this.props);
  }
  render() {
    return (
      <div>
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            this.setState({
              num: this.state.num + 1
            });
            this.props.addTodo(this.state.num);
          }}
        >
          Add Todo
        </button>
        <p>{this.state.num}</p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("aSad", state);
  return {
    num: state.num
  };
};
const mapDispatchToProps = () => {
  return { addTodo };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
