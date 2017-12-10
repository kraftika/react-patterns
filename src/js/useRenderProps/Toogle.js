import React, { Component } from 'react';

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
        return this.props.render({
            on: this.state.on,
            onToogle: this.toogle
        })
    }
}

export default Toogle;