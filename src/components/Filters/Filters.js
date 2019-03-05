import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import { Row, Col } from 'react-bootstrap';
import Stars from './Stars/Stars';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Select from '../UI/Select/Select';
import { FaRedo } from 'react-icons/fa';

const filters = (props) => (
    <Aux>
        <Row>
            <Col md={8}>
                <Col md={4}>
                    <Input placeholder="Search" width="250px" onChange={props.handleInputChange}/>
                </Col>
                <Col md={4}>
                    <Select onChange={props.changed}>
                        <option key="1" value="MOST_RECENT">Most Recent</option>
                        <option key="2" value="MOST_LATEST">Most Latest</option>
                    </Select>
                </Col>
                <Col md={4}><Button className="right" float="right" margin="0" onClick= {props.resetFilterValues}><FaRedo></FaRedo> REFRESH</Button></Col>
                <Col md={6}>
                    <Stars 
                        starsIsChecked={props.starsIsChecked } 
                        handleCheckboxChange={props.handleCheckboxChange}
                    />  
                </Col>
            </Col>
        </Row> 
        
    </Aux>
);

export default filters;