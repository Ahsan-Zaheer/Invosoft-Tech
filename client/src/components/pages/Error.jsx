import React from 'react'
import o from '../../assets/o.svg'
import robo from '../../assets/robo_404.png'
import { Link } from 'react-router-dom';


export default function Error() {
  return (
    <div className='container'>
      <h2 className='error-title'>Something Went Wrong</h2>
      <div className='error'>
        <h1 className='error-4'>
          4
        </h1>
        <img src={o} alt="" className='o' />
        <h1 className='error-4'>
          4
        </h1>
        <img src={robo}alt="" className='error-robo' />
      </div>
      <div className="btnBg">
      <Link to='javascript:history.back()'>
        <button className='error-btn'>Go Back</button>
      </Link>
      </div>
    </div>
  )
}
