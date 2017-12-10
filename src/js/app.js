import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import Toogle from './useComponentStateInitializer/Toogle';
import Switch from './useComponentStateInitializer/Switch';

const renderSwitch = ({on, onToogle, onReset}) => {
    return (
        <div>
            <Switch on={on} 
                    onClick={onToogle} 
                    /> 
            <div>{ on ? 'On' : 'Off' }</div>
            <button onClick={onReset}>Reset</button>
        </div>
        
    )
}

render(<Toogle render={renderSwitch} defaultOn={true}/>, 
            document.getElementById('app'));