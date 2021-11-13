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


//--------------------------- Вариант 1


// const initialState = {counterValue: 0,}

// const reducer = (state=initialState, {type, payload} )=>{
      
//     switch (type) {
//         case 'counter/Increment':
//             return  { counterValue: state.counterValue + payload };

//             case 'counter/Decrement':
//                 return  { counterValue: state.counterValue - payload };

//             default: 
//             return  state; 
//     }
     
// };



 //--------------------------- Вариант 2


 const initialState = {
    counter: {
        value: 10,
        step: 25
    }
};


const reducer = (state=initialState, {type, payload} )=>{
      
    switch (type) {
        case 'counter/Increment':
            return  {
                 ...state,
                counter : {
                    ...state.counter,
                    value: state.counter.value + payload,
                } 
            };

        case 'counter/Decrement':
            return  { 
                ...state,
                counter : {
                    ...state.counter,
                    value: state.counter.value - payload,
                } 
            };

            default: 
            return  state; 
    }
     
};

// ========================  Переделываем Counter. end ======================== 

const store = createStore (reducer);

export default store;
