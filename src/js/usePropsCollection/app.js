import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import Switch from './basic/Switch';

import Toogle from './useRenderProps/Toogle';

// This is not used
const renderSwitch = ({on, onToogle}) => {
    return (
        <Switch on={on} onClick={onToogle} /> 
    )
}

const App = () => (
    <Toogle renderSwitch={({on, onToogle}) => (
            <div>
                <Switch on={on} onClick={onToogle} /> 
                <button onClick={onToogle}>{ on ? 'On' : 'Off' }</button>
            </div>
        )}> 
    </Toogle>
)

render(App(), document.getElementById('app'));