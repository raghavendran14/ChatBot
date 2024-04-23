import {actions} from './actions';


const initState={
    homeState :false,
    chatbot:[]
}

export default function homeReducer(state = initState,action){
    console.log("inside store",action);
    try {
        switch (action.type) {
            case actions.SAVE_USER_DETAILS:
                return {
                    ...state,
                    homeState:!state.homeState
                };
            case actions.SAVE_CHAT:
                return{
                    ...state,
                    chatbot:action.data
                }
            default:
                return state;
        }
    
        return state;
    } catch (error) {
        console.log("Error ++", error)
    }
    
}