import React, { Component } from 'react';
import classes from './MainContainer.css';
import { connect } from 'react-redux';
import axios from 'axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Reviews from '../../components/Reviews/Reviews';
import Spinner from '../../components/UI/Spinner/Spinner';
import Filters from '../../components/Filters/Filters'

class MainContainer extends Component {  
    state = { 
        starsIsChecked : {
            1: false,
            2: false,
            3: false,
            4: false,
            5: true
        }
    }
    componentDidMount () {
        this.props.getReviewsData(this.props.pageNumber);
    } 
    _handleWaypointEnter = () => {
        this.props.updatePageNumber();
        this.props.getReviewsData(this.props.pageNumber);
    }
    handleInputChange = (event) => {
        const searchFieldValue = event.target.value;
        this.props.updateFilterValues('search', searchFieldValue);
    }
    selectChangeHandler = (event) => {
        const orderBy = event.target.value;
        this.props.updateFilterValues('sort_by', orderBy);
    }
    handleCheckboxChange = (event) => {
        const checkBoxValue = event.target.value;
        this.props.updateFilterValues('stars', checkBoxValue);

        const starsFilter = this.state.starsIsChecked;
        starsFilter[checkBoxValue] = event.target.checked;
        this.setState({ starsIsChecked: starsFilter })
    }
    resetFilterValues = () => {
        this.setState({ 
            starsIsChecked : {
                1: false,
                2: false,
                3: false,
                4: false,
                5: true
            } 
        })   

        this.props.resetFilterValues();
    }

    render () {  
        let reviewsData = this.props.error ? <p style={{ textAlign: 'center' }}>Something went wrong!</p> : <Spinner/>;

        if(!this.props.isLoading && this.props.reviewsData){
            reviewsData = ( <Reviews data={ this.props.reviewsData } handleWaypointEnter={this._handleWaypointEnter }/> );
        }

        return (          
            <main className={classes.mainContainer}>    
                <Filters 
                    changed={ this.selectChangeHandler } 
                    handleCheckboxChange={this.handleCheckboxChange.bind(this)} 
                    starsIsChecked={this.state.starsIsChecked}
                    handleInputChange = {this.handleInputChange}
                    resetFilterValues = {this.resetFilterValues.bind(this)} 
                />                                
                { reviewsData }
            </main>      
        );
    }
}

const mapStateToProps = state => {
    return {
        reviewsData : state.reviews.filteredReviewData,
        error: state.reviews.error,
        pageNumber : state.reviews.pageNumber,
        isLoading: state.reviews.loading
        // outputValues : state.upStream.outputValue
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getReviewsData: (page) => dispatch(actions.getReviewsData(page)),
        updatePageNumber : () => dispatch(actions.updatePageNumber()),
        resetFilterValues : () => dispatch(actions.resetFilterValues()),
        updateFilterValues: (type,value) => dispatch(actions.updateFilterValues(type,value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MainContainer , axios));