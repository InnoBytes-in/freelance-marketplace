import React  from 'react'
import Image from '../../../data/photod.jpg'
import '../ProfilePage/accounts.css';
import ViewForm from './ViewForm';

const ViewProfile = () => {
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
            <ViewForm/>
        </div>
    </div>
</div>
  )
}

export default ViewProfile
