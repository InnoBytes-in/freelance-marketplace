import React, { Fragment, useContext } from 'react';
import AuthContext from '../contexts/AuthProvider';


const ClientProfile = () => {
  const { setAuth } = useContext(AuthContext);

  
  

  return (
    <Fragment>
      <h2 className='mt-5 ml-5 font-bold'>Profile</h2>
      
      <div className='flex justify-content-around shadow-lg border-2 h-96 ml-5 mr-5'>
        <div className='col-12 col-md-3'>
          <figure className='inline-block h-12 w-12 rounded-md'>

          </figure>

        </div>
      </div>
      
    </Fragment>
  )
  

}

export default ClientProfile;