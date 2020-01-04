import {combineReducers} from 'redux';

//const initialTodos = [{text:'Bar Açmak',id:1}, {text:'Ayla ile aramı düzeltmek',id:2}, {text:'Babamı yanıma almak',id:3}];

const taskReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_TASK':
        state = state.concat(action.payload);
        break;
        case 'DELETE_TASK':
        state = state.slice();
        state.splice(action.payload,1);
        break;
    }
    return state;
},
reducers = combineReducers({
    tasks:taskReducer
});


export default reducers;