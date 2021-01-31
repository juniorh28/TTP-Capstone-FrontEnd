import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btns--primary', 'btns--outline', 'btns--test'];

const SIZES = ['btns--medium', 'btn--large'];

const Buttons = ({
  children,
  type,
  onClick,
  buttonsStyle,
  buttonsSize
}) => {
  const checkButtonsStyle = STYLES.includes(buttonsStyle)
    ? buttonsStyle
    : STYLES[0][1];

  const checkButtonsSize = SIZES.includes(buttonsSize) ? buttonsSize : SIZES[0][1];

  return (
    <div>
    <Link to='/all' className='btn-mobile'>
      <button
        className={`btns ${checkButtonsStyle} ${checkButtonsSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
    <Link to='/placesdisplay' className='btn-mobile'>
    <button
      className={`btns ${checkButtonsStyle} ${checkButtonsSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  </Link>
  </div>
  );
};

export default Buttons;