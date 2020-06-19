import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    const output = this.props.results.map((res, index) => {
      return (
        <li key={index} onClick={() => this.props.onRemoveResult(index)}>
          {res}
        </li>
      );
    });
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddFive} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractFive}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store result
        </button>
        <ul className="results-list">{output}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddFive: () => dispatch({ type: actionTypes.ADD, payload: 5 }),
    onSubstractFive: () => dispatch({ type: actionTypes.SUBTRACT, payload: 5 }),
    onStoreResult: (ctr) => dispatch({ type: actionTypes.STORE, payload: ctr }),
    onRemoveResult: (idx) =>
      dispatch({ type: actionTypes.REMOVE, payload: idx }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
