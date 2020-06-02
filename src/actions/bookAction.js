//actions
export function putFieldValue(field, value)  {
    return {
        type: "SELECT_FILTER",
        field: field,
        value: value,
    };
}
