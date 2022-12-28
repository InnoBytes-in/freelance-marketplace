import React ,{useState,useMemo,useCallback,useContext, useEffect} from 'react'
import Image from '../../../data/photod.jpg'
import './accounts.css';
import Form from './accountpage/Form'
import { MdImageSearch } from 'react-icons/md';
import { useDropzone } from 'react-dropzone';
import dataServive from '../../../API/dataServive';
import AuthService from '../../../API/authService';
import { collapseToast, toast } from 'react-toastify';
const Account = () => {
    const[file,setFile]=useState([]);
    const user = AuthService.getCurrentUser();

    const formData = new FormData();

    const onDrop=useCallback(async(acceptedFiles) =>{
        setFile(acceptedFiles[0]);
    },[]);

    const{getRootProps,getInputProps}=useDropzone({
        onDrop,
        accept:"image/*",
        maxSize:1000000,
    });

    useEffect(() => {
        formData.append('image', file);
        console.log(file);
        dataServive.uploadImage(user.id, formData).then((response) => {
        })
        .catch((error) => {
            setFile(Image);
        })
    },[file])



  return (
    <div className='account'>
        <div className='account_info'>
            <h1>Profile Settings</h1>
            <p>
                You can set preferred display name,create your profile Url and other personal settings.
            </p>
        </div>
        <div className='account_box'>
            <div className='account_box_img' {...getRootProps()}>
                <input {...getInputProps()}/>
                <img src={Image}
                alt="account upload"
                width={250}
                height={250}
                className='account_box_img_img'
                />
                <p className='account_box_img_para'>Change Image</p>
            </div>
            <div className='account_box_from'>
                <Form/>

            </div>
        </div>
    </div>
  )
}

export default Account
