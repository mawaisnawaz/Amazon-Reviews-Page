import React from 'react';
import Moment from 'react-moment';
import { Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import classes from './Review.css';

const review = (props) => {
    return (
        <Col md={8} className={ classes.Review }>
            <div className={ classes.topDetails}>
                <div>
                    <label>Date</label>
                    <Moment format="DD MMMM YYYY ">
                        { props.data.reviewCreated }
                    </Moment>
                </div>
                <div>
                    <label>Stars</label>
                    <StarRatings
                        rating={ props.data.stars }
                        starRatedColor="black"
                        numberOfStars={ 5 }
                        name='rating'
                        starDimension="20px"
                        />
                </div>
                <div>
                    <label>{ props.data.reviewId }</label>
                    <p>{ props.data.childAsin }</p>
                </div>
            </div>
            <h1>{ props.data.title }</h1>
            <p>{ props.data.content }</p>
        </Col>
    );
};

export default review;