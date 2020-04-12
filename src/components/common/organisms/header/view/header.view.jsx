
import React from 'react';
import Img from '../../../atoms/img'
import Anchor from '../../../atoms/anchor'


const Header = () => (
  <div className='header'>
    <Img className="headerLogo" src="y18.gif" altText="Hacker News Logo" />
    <nav className="navigation">
      <ul>
        <li>
          <Anchor href="news" hrefText="top" />
        </li>
        {" | "}
        <li>
          <Anchor href="latest" hrefText="new" />
        </li>
      </ul>
    </nav>
  </div>
  )

  export default Header;

