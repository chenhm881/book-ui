export default function bookStore(
    state = {
        params: {
            numRequested: 1,
            id: "1"
        },
    }, action
){
    switch (action.type) {
        case "SELECT_FILTER":
            state.params[action.field] = action.value;
            return Object.assign({}, state, {
                params: state.params
            });
        default:
            return state;
    }
}
