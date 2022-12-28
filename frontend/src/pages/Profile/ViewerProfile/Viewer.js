import React from 'react'
import ViewerForm from './ViewerForm'
import Image from '../../../data/photod.jpg'
import '../ProfilePage/accounts.css';

const Viewer = () => {
  return (
    <div className='account'>
    <div className='account_info'>
        <h1>Profile </h1>
    </div>
    <div className='account_box'>
        <div className='account_box_img'>
            <img src={Image}
            alt="account upload"
            width={250}
            height={250}
            className='account_box_img_img'
            />
        </div>
        <div className='account_box_from'>
            <ViewerForm/>
        </div>
    </div>
</div>
  )
}

export default Viewer
