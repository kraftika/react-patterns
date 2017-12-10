import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import Toogle from './compoundComponents/Toogle';
import ToogleOn from './compoundComponents/ToogleOn';
import ToogleOff from './compoundComponents/ToogleOff';
import ToogleButton from './compoundComponents/ToogleButton';

const App = () => (
    <Toogle onToogle={on => console.log(on)}> 
        <ToogleOn>The button is On</ToogleOn>
        <ToogleOff>The button is Off</ToogleOff>
        <ToogleButton />
    </Toogle>
)

render(App(), document.getElementById('app'));