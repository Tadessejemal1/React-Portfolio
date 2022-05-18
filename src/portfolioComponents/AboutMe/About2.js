import React from 'react';
import "./About.css";

const About2 = ({done}) => (
    <div className="progress">
        <div className="progress-done" data-done ='70' style={{
            opacity:1,
            margin:20,
            marginLeft:20,
            width: '${done}%'
        }}>
            {done}%
        </div>   
    </div>
)

export default About2;