import React, { Component } from 'react';
import Switch from './Switch';

const TOOGLE_CONTEXT = '__toogle__';

class Toogle extends Component {
    static defaultProps = {onToogle: () => {}};
    state = {
        on: false
    }
    static childContextTypes = {
        [TOOGLE_CONTEXT]: PropTypes.object.isRequired
    };

    getChildContext = () => {
        return {
            [TOOGLE_CONTEXT]: {
                on: this.state.on,
                onToogle: this.toogle
            }
        }
    }

    toogle = () => {
        this.setState(({on}) => ({on: !on}),
        () => {
            this.props.onToogle(this.state.on);
            }
        );
    }

    render() {
        const children = React.Children.map(
            this.props.children,
            child => 
                React.cloneElement(child,
                    {
                        on: this.state.on,
                        onToogle: this.toogle
                    })
        );
        return <div>{children}</div>;
        
    }
}

export default Toogle;