import React from 'react'
import './Form.css'
import {HiOutlineMail} from 'react-icons/hi'
import { MdOutlineHttp} from 'react-icons/md'
import {TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin} from 'react-icons/ti'




const Form = () => {
  return (
    <div className='Form'>
      <div className='Form_box'>
        <form>
          <div className='Form_box_input'>
            <label htmlFor="name">UserName</label>
            <input type="text" placeholder="Pranav Kopnar" className='Form_box_input_userName'/>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="name">Profession</label>
            <input type="text" placeholder="e.g ComputerEngineer" className='Form_box_input_userName'/>
          </div>
          
          <div className='Form_box_input'>
            <label htmlFor="email">Email</label>
            <div className='Form_box_input_box'>
              <div className='Form_box_input_box_icon'>
                <HiOutlineMail/>
              </div>
              <input type="text" placeholder='Email'/>
            </div>
          </div>
          <div className='Form_box_input'>
            <label htmlFor="description">Description</label>
            <textarea name="" id='' cols={30} rows={6} placeholder="Something about yourself" className='Form_box_input_textarea'></textarea>
          </div>

    

          <div className='Form_box_input'>
            <label htmlFor="facebook">Facebook</label>
            <div className='Form_box_input_box'>
              <div className='Form_box_input_box_icon'>
                <TiSocialFacebook/>
              </div>
              <input type="text" placeholder='https:' />
            </div>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="twitter">Twitter</label>
            <div className='Form_box_input_box'>
              <div className='Form_box_input_box_icon'>
                <TiSocialTwitter/>
              </div>
              <input type="text" placeholder='https:' />
            </div>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="linkedin">LinkedIn</label>
            <div className='Form_box_input_box'>
              <div className='Form_box_input_box_icon'>
                <TiSocialLinkedin/>
              </div>
              <input type="text" placeholder='https:' />
            </div>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="name">Charges</label>
            <input type="text" placeholder="$/hour" className='Form_box_input_userName'/>
          </div>


          <div className='Form_box_btn'>
            <button className='button'>
              Update Profile
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Form
