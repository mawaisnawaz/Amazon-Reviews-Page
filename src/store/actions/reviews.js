import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    };
};

export const fetchSuccess = (response) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        response: response
    };
};

export const fetchFail = (error) => {
    return {
        type: actionTypes.FETCH_FAIL,
        error: error
    };
};

export const updatePageNumber = () => {
    return {
        type: actionTypes.UPDATE_PAGE_NUMBER
    }
}

export const resetFilterValues = () => {
    return {
        type: actionTypes.RESET_FILTER_VALUES
    }
}

export const updateFilterValues = (filterType, filterValue) => {
    return {
        type: actionTypes.UPDATE_FILTER_VALUES,
        filterType: filterType,
        filterValue: filterValue
    }
}
export const getReviewsData = (page) => {
    return dispatch => {
        dispatch(fetchStart());  
        let url = `/reviews/${ page }`;
        axios({
            method:'GET',
            url:url,
            headers: { 'content-type': ' text/plain' },
        }).then(response => {
            dispatch(fetchSuccess(response));
        }).catch(err => {
            dispatch(fetchFail(err));
        });
    };
};