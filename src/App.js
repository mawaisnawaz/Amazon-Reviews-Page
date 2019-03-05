import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './containers/MainContainer/MainContainer';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
`;


class App extends Component {  
    render () {
        return (
            <Container>
                <MainContainer />
            </Container>
        );
    }
}

export default App;
