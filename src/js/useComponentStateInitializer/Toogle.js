import React, { Component } from 'react';

class Toogle extends Component {
    static defaultProps = {onToogle: () => {}};
    initialState = {
        on: this.props.defaultOn
    }
    state = this.initialState;

    toogle = () => {
        this.setState(({on}) => ({on: !on}),
        () => {
            this.props.onToogle(this.state.on);
            }
        );
    }

    onReset = () => {
        this.setState(this.initialState);
    }

    render() {
        return this.props.render({
            on: this.state.on,
            onToogle: this.toogle,
            onReset: this.onReset
        })
    }
}

export default Toogle;