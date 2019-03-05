
import React from 'react';
import Review from "./Review/Review";
import styled from "styled-components";
import  Waypoint  from 'react-waypoint';

export const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const reviews = (props) => {
    return (<ReviewsContainer>
        {props.data.map((e, i) => {
            return (
                <Review data={ e }  key={i} ></Review>
            );
        })}
        <Waypoint
            onEnter={props.handleWaypointEnter}
        />
    </ReviewsContainer>)
};

export default reviews;