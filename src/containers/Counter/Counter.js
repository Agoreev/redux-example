import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  add,
  subtract,
  store,
  remove,
} from "../../store/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
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
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddFive: () => dispatch(add(5)),
    onSubstractFive: () => dispatch(subtract(5)),
    onStoreResult: (ctr) => dispatch(store(ctr)),
    onRemoveResult: (idx) => dispatch(remove(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
