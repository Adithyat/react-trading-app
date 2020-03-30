const initialState = {
    items: [],
    error: false
};

const setStocks = (state, action) => {
    return {
        ...state,
        items: action.items,
    };
};

const fetchStocksFailed = (state, action) => {
    return {
        ...state, 
        error: true
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STOCKS_SUCCEEDED': 
            return setStocks(state, action);
        case 'FETCH_STOCKS_FAILED': 
            return fetchStocksFailed(state, action);
        default: 
            return state;
    }
};

export default reducer;