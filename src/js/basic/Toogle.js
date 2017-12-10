import React, { Component } from 'react';
import Switch from './Switch';

class Toogle extends Component {
    state = {
        on: false
    }

    toogle = () => {
        this.setState(({on}) => ({on: !on}));
    }

    render() {
        const {on} = this.state;
        return (
            <Switch on={on} onClick={this.toogle} /> 
        )
    }
}

export default Toogle;