export const Reducer = (state , action) => {
    switch(action.type){
        case "DELETE":
            return {
                ...state,
                transection : state.transection.filter(item => item.id !== action.payload)
            }
        case "ADD":
            return{
                ...state,
                transection:[action.payload , ...state.transection]
            }
        default:
            return state;
    }
}