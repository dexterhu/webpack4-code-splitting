import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='main'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='text-center copyright'>Webpack v4 Code Splitting &copy; 2018 William Pruden</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
