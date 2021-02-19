export const Reducer = (state , action) => {
    switch(action.type){
        // case "DELETE":
        //     return {
        //         ...state,
        //         transition: state.transition.filter(trans => trans.id !== action.payload)
        //     }
        case "ADD":
            return{
                ...state,
                transection:[action.payload , ...state.transection]
            }
        default:
            return state;
    }
}