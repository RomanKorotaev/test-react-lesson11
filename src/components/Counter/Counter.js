import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';
import { connect } from 'react-redux';
import * as action from '../../redux/actions'


function Counter ({value, step, onIncrement, onDecrement}) {
     return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          step ={step}
          onIncrement={ ()=>onIncrement(step)}
          onDecrement={ ()=>onDecrement(step)}
        />

      </div>
    );
}

// сюда приходит весь стейт - state
const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step
  }
}

// сюда приходит метод стейта  - dispatch 
const mapDispatchToProps = dispatch =>{
  return {
    onIncrement: value=>dispatch(action.increment(value)),
    onDecrement: value=>dispatch(action.decrement(value)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
