import React, { Component } from 'react';

export default ({ on, onClick }) => (
    <div>
        <label className="switch">
            <input type="checkbox" checked={ on } onChange={onClick}/>
            <span className="slider round"></span>
        </label>
    </div>
);