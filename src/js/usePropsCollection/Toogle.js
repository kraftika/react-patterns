import React, { Component } from 'react';
import Switch from './Switch';

class Toogle extends Component {
    static defaultProps = {onToogle: () => {}};
    state = {
        on: this.props.defaultOn
    }

    toogle = () => {
        this.setState(({on}) => ({on: !on}),
        () => {
            this.props.onToogle(this.state.on);
            }
        );
    }

    render() {
        return this.props.render({
            on: this.state.on,
            onToogle: this.toogle
        });
    }
}

export default Toogle;