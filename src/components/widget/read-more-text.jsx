import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ReadMoreText = ({ children, ...props }) => {
const [visibleText, setVisibleText] = useState(children);
const [isCollasped, setIsCollasped] = useState(false);

const handleClick = () => {
    if(isCollasped){
        setVisibleText(visibleText.slice(0, 150))
        setIsCollasped(false)
    }else{
        setVisibleText(children);
        setIsCollasped(true)
        
    }
}
  return (
    <p {...props}>
        {visibleText}
        <span className='opacity-50'>{!isCollasped && '...'}</span>
        <button onClick={handleClick} className='text-blue-400'>{""} {isCollasped ? ' Read Less' : ' Read More'}</button>
    </p>
  );
};

ReadMoreText.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children are passed and can be any renderable content
};

export default ReadMoreText;
