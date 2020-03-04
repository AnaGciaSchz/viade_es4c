import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
    return <div className="ErrorImage">
        <NavLink to="/">
          <img src="/img/error404.jpg" alt="error" height="75%" width="75%" />
        </NavLink>
        <p style={{textAlign:"center"}}>
              <Link to="/">Go back Home </Link>
            </p>
      </div>
}

export default NotFoundComponent;