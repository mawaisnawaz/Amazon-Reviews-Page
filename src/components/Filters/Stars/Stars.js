import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components'

const CheckboxContainer = styled.label`
    display: inline-flex;
    align-items:center;

    & + & {
        margin-left: 10px;
    }
`;

const StyledLabel = styled.span`
    margin-left: 8px;
    color: #CFCFCF;
    font-size: 14px;
`;

const StyledTitle = styled.label`
    color: #cfcfcf;
    font-size: 15px;
    display: block;
`;

const StarsFilter = styled.div`
    margin-top: 20px;
`;

const Stars = (props) => {
    return (<StarsFilter>
        <StyledTitle>Filter By:</StyledTitle>
        <CheckboxContainer>
            <Checkbox
                checked={ props.starsIsChecked[1] }
                onChange={props.handleCheckboxChange}
                value={1}
            />
            <StyledLabel>1 <FaStar /></StyledLabel>
        </CheckboxContainer>
        <CheckboxContainer>
            <Checkbox
                checked={ props.starsIsChecked[2] }
                onChange={props.handleCheckboxChange}
                value={2}
            />
            <StyledLabel>2 <FaStar /></StyledLabel>
        </CheckboxContainer>
        <CheckboxContainer>
            <Checkbox
                checked={ props.starsIsChecked[3] }
                onChange={props.handleCheckboxChange}
                value={3}
            />
            <StyledLabel>3 <FaStar /></StyledLabel>
        </CheckboxContainer>
        <CheckboxContainer>
            <Checkbox
                checked={ props.starsIsChecked[4] }
                onChange={props.handleCheckboxChange}
                value={4}
            />
            <StyledLabel>4 <FaStar /></StyledLabel>
        </CheckboxContainer>
        <CheckboxContainer>
            <Checkbox
                checked={ props.starsIsChecked[5] }
                onChange={props.handleCheckboxChange}
                value={5}
            />
            <StyledLabel>5 <FaStar /></StyledLabel>
        </CheckboxContainer>
    </StarsFilter>);
};

export default Stars;