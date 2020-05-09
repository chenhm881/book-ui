export default function queryStore(
    state = {
        isLoading: false,
        queryResult: {},
    }, action
){
    switch (action.type) {
    case "QUERY_LIST":
        return Object.assign({}, state, {
            isLoading: action.isLoading,
            queryResult: action.queryResult,
        });
    default:
        return state;
    }
}