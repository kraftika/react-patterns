import React from 'react';
import Switch from '../basic/Switch';

export default ({on, onToogle}) => (
    <Switch on={on} onClick={onToogle} />
)