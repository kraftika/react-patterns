import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import Toogle from './compoundComponents/Toogle';

render(<Toogle onToogle={on => console.log(on)}/>, document.getElementById('app'));