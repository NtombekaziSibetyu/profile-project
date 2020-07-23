import React from 'react';
import PropTypes from 'prop-types';

import './Background.css';
import ReactTypingEffect from 'react-typing-effect';


const Background = ({ text }) => {
    return (
        <div className='page'>
        <div className='block text-center'> 
            <ReactTypingEffect
            className='typewriter h1'  speed='500' eraseDelay='500' typingDelay='500' cursor='|'
            text={text} />
            <p className='card-text'>HTML\ CSS | Bootstrap | JavaScript | React | Python | MySQL </p>
            </div>  

    </div>
    )
}

Background.defaultProps = {
    text: ['HELLO', 'I AM NTOMBEKAZI','WELCOME TO MY PORTFOLIO']
}
Background.propTypes = {
    text: PropTypes.array.isRequired
}


export default Background
