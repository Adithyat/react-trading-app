import axios from '../axios';
import actionTypes from './actionTypes.js';

export const addStocksSucceeded = (items) => {
    return {
        type: actionTypes.ADD_STOCKS_SUCCEEDED,
        items
    };
};

export const addStocksFailed = () => {
    return {
        type: actionTypes.ADD_STOCKS_FAILED
    };
};

export const addStocks = () => {
    return dispatch => {
        axios.post('/userdata/watchlist',{
            
        })
            .then(response => {
                dispatch(addStocksSucceeded(response.data));
            })
            .catch(error => {
                dispatch(addStocksFailed());
            });
    };
};

export const fetchStocksSucceeded = (items) => {
    return {
        type: actionTypes.FETCH_STOCKS_SUCCEEDED,
        items
    };
};

export const fetchStocksFailed = () => {
    return {
        type: actionTypes.FETCH_STOCKS_FAILED
    };
};

export const fetchStocks = () => {
    return dispatch => {
        axios.get('/stocks')
            .then(response => {
                dispatch(fetchStocksSucceeded(response.data));
            })
            .catch(error => {
                dispatch(fetchStocksFailed());
            });
    };
};

export const fetchAllocationsSucceeded = (items) => {
    return {
        type: actionTypes.FETCH_ALLOCATIONS_SUCCEEDED,
        items
    };
};

export const fetchAllocationsFailed = () => {
    return {
        type: actionTypes.FETCH_ALLOCATIONS_FAILED
    };
};

export const fetchAllocations = () => {
    return dispatch => {
        axios.get('/userdata/allocations')
            .then(response => {
                dispatch(fetchAllocationsSucceeded(response.data));
            })
            .catch(error => {
                dispatch(fetchAllocationsFailed());
            });
    };
};