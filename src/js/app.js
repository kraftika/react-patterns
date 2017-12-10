import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import Toogle from './useRenderProps/Toogle';
import Switch from './useRenderProps/Switch';

const renderSwitch = ({on, onToogle}) => {
    return (
        <div>
            <Switch on={on} onClick={onToogle} /> 
            <div>{ on ? 'On' : 'Off' }</div>
        </div>
        
    )
}

render(<Toogle render={renderSwitch}/>, 
            document.getElementById('app'));