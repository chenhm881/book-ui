export function queryList(isLoading, queryResult)  {
    return { 
        type: "QUERY_LIST", 
        isLoading: isLoading,
        queryResult: queryResult, 
    };
}


