export const Reducer = (state , action) => {
    switch(action.type){
        case 'DELETE':
            return {
                ...state,
                transition: state.transition.filter(trans => trans.id !== action.payload)
            };
        default:
            return state;
    }
}