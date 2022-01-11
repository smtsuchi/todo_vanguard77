import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Window() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
    useEffect(()=> {
      window.addEventListener('resize', handleResize)
    //   clean up
      return () => {
          window.removeEventListener('resize', handleResize)
      }
    },[])
    return (
        <div>
            this is Window Width: {windowWidth}
            <Link to='/'>Home</Link>
        </div>
    )
}
