import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return true;
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className={classes.modalHeader}>
                        <h1 >add new record</h1>
                    </div>
                    <div className={classes.modalBody}>
                        {this.props.children}
                    </div> 
                </div>
            </Aux>
        )
    }
}

export default Modal; 