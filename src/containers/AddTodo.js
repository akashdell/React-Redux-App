import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
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
            // this.setState({
            //   num: this.state.num + 1
            // });
            this.props.addTodo(this.props.num);
          }}
        >
          Counter
        </button>
        <p>{this.props.num}</p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    num: state.todos.num
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: num => dispatch(addTodo(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
