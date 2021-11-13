import { createStore } from "redux";

//----------------Базовая теория. start---------------
// const reducer = (state={}, action)=>{
//     console.log ("Лог экшена (action)  в reducer : ", action);
//     let newState = {};
//     return newState = action; 
// };

// const store = createStore (reducer);
//----------------Базовая теория. end---------------



// ========================  Переделываем Counter. start ========================  

const initialState = {counterValue: 0};


const reducer = (state=initialState, {type, payload} )=>{
      
    switch (type) {
        case 'counter/Increment':
            return  { counterValue: state.counterValue + payload };

            case 'counter/Decrement':
                return  { counterValue: state.counterValue - payload };

            default: 
            return  state; 
    }
     
};

// ========================  Базовая Counter. end ======================== 

const store = createStore (reducer);

export default store;
