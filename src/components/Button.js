import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

 /*if we don't have any classes applied it will be first position/default btn-primary ie STYLES[0] */
const STYLES = ['btn--primary', 'btn--outline']

 /*if we don't have any classes applied it will be first position btn-medium ie SIZES[0] */
const SIZES = ['btn--medium','btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize =SIZES.includes(buttonSize) ?buttonSize :SIZES[0];
    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onclick}
            type={type}>
                {children}
            </button>
        </Link>
    )
}
