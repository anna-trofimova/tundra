import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
              <ul>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/brands'>Brands</Link></li>
          <li><Link to='/culture'>Culture</Link></li>
          <li><Link to='contacts'>Contacts</Link></li>
        </ul>
    </div>
  )
}
