import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';
import { connect } from 'react-redux';
import * as action from '../../redux/actions'


function Counter ({value, onIncrement, onDecrement}) {
     return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={onIncrement} onDecrement={onDecrement}  />

      </div>
    );
}

// сюда приходит весь стейт - state
const mapStateToProps = state => {
  return {
    value: state.counterValue,
  }
}

// сюда приходит метод стейта  - dispatch 
const mapDispatchToProps = dispatch =>{
  return {
    onIncrement: ()=>dispatch(action.increment(5) ),
    onDecrement: ()=>dispatch(action.decrement(5) ),
  }

}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
