import React, { Component } from 'react';
import Switch from './Switch';

class Toogle extends Component {
    static defaultProps = {onToogle: () => {}};
    state = {
        on: false
    }

    toogle = () => {
        this.setState(({on}) => ({on: !on}),
        () => {
            this.props.onToogle(this.state.on);
            }
        );
    }

    render() {
        const {on} = this.state;
        return (
            <Switch on={on} onClick={this.toogle} /> 
        )
    }
}

export default Toogle;