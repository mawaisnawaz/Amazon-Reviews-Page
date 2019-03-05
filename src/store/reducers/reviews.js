import * as actionTypes from '../actions/actionTypes';
import { updateObject, updateArray } from '../utility';

const FILTER_VALUE = {
    search : '',
    sort_by : 'MOST_RECENT',
    stars: [5]
}

const initial_state  = {  
    error: null,
    loading: false,
    reviewsData : [],
    filteredReviewData: [],
    pageNumber: 1,
};

const fetchStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const fetchSuccess = (state, action) => {
    const updatedReviewData = updateArray(state.reviewsData, action.response.data.reviews);
    return filterData(state,updatedReviewData);
};

const fetchFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const updatePageNumber = (state,action) => {
    const updatedPageNumber = state.pageNumber + 1;
    return updateObject( state, { pageNumber: updatedPageNumber } );
}

const filterData = (state,reviewData) => {
    let data = [...reviewData];

    if(FILTER_VALUE.search !==""){
        data = data.filter((review) => {
        let reviewTitle = review.title.toLowerCase();
        return reviewTitle.indexOf(
            FILTER_VALUE.search.toLowerCase()) !== -1
        });
    }

    data = data.filter(review => FILTER_VALUE.stars.includes(review.stars));
    
    if(FILTER_VALUE.sort_by === "MOST_RECENT"){
        data.sort(function(a,b){ return b.reviewCreated <  a.reviewCreated ? -1 : 1; });
    }else{
        data.sort(function(a,b){ return b.reviewCreated >  a.reviewCreated ? -1 : 1; });
    }

    return updateObject( state, { 
        reviewsData: reviewData,
        filteredReviewData: data,
        loading: false,
        error: false
    });
}

const updateFilterValues = (state,action) => {
    if(action.filterType === 'stars'){
        const starsArray = FILTER_VALUE.stars;
        if(starsArray.indexOf(parseInt(action.filterValue, 10)) === -1){
            starsArray.push(parseInt(action.filterValue, 10));
        }else{
            starsArray.splice(starsArray.indexOf(parseInt(action.filterValue, 10)), 1)
        }

        FILTER_VALUE[action.filterType]= starsArray;
    }else{
        FILTER_VALUE[action.filterType]= action.filterValue;
    }

    
    return filterData(state,state.reviewsData);
}

const resetFilterValues = (state,action) => {
    FILTER_VALUE.search= '';
    FILTER_VALUE.sort_by= 'MOST_RECENT';
    FILTER_VALUE.stars= [5];
    return filterData(state,state.reviewsData);
}

const reducer = ( state = initial_state, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_START: return fetchStart(state, action);
        case actionTypes.FETCH_SUCCESS: return fetchSuccess(state, action);
        case actionTypes.FETCH_FAIL: return fetchFail(state, action);
        case actionTypes.UPDATE_PAGE_NUMBER : return updatePageNumber (state,action);
        case actionTypes.UPDATE_FILTER_VALUES : return updateFilterValues(state,action);
        case actionTypes.RESET_FILTER_VALUES : return resetFilterValues(state,action);
        default: return state;
    }
};

export default reducer;