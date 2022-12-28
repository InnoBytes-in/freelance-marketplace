import React from 'react'
import '../ProfilePage/accountpage/Form.css'
import {HiOutlineMail} from 'react-icons/hi'
import {TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin} from 'react-icons/ti'

const ViewerForm = () => {
  return (
    <div className='Form'>
      <div className='Form_box'>
        <form>
          <div className='Form_box_input'>
            <label htmlFor="name">UserName</label>
            <div type="text"  className='Form_box_input_userName'>Pranav Kopnar</div>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="name">Profession</label>
            <div type="text" className='Form_box_input_userName'>ComputerEngineer</div>
          </div>
          
          <div className='Form_box_input'>
            <label htmlFor="email">Email</label>
            <div className='Form_box_input_box'>
              <div className='Form_box_input_box_icon'>
                <HiOutlineMail/>
              </div>
              <div type="text" placeholder='Email'>pranavkopnar@gmail.com</div>
            </div>
          </div>
          <div className='Form_box_input'>
            <label htmlFor="description">Description</label>
            <div name="" id=''placeholder="Something about yourself" className='Form_box_input_textarea h-6 w-10'>
                hello
            </div>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="facebook">Facebook</label>
            <div className='Form_box_input_box'>
              <div className='Form_box_input_box_icon'>
                <TiSocialFacebook/>
              </div>
              <div type="text" placeholder='https:' >/pranavkopnar.6/fb</div>
            </div>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="twitter">Twitter</label>
            <div className='Form_box_input_box'>
              <div className='Form_box_input_box_icon'>
                <TiSocialTwitter/>
              </div>
              <div type="text" placeholder='https:' >/pranavkopnar.6/fb</div>
            </div>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="linkedin">LinkedIn</label>
            <div className='Form_box_input_box'>
              <div className='Form_box_input_box_icon'>
                <TiSocialLinkedin/>
              </div>
              <div type="text" placeholder='https:' >/pranavkopnar.6/fb</div>
            </div>
          </div>

          <div className='Form_box_input'>
            <label htmlFor="name">Charges</label>
            <div type="text" placeholder="$/hour" className='Form_box_input_userName'>5<span>$/hour</span></div>
          </div>


          

        </form>
      </div>
    </div>
  )
}

export default ViewerForm
