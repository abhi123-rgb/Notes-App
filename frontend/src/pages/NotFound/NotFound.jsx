import React, { useEffect } from 'react'
import PageNotFound from "../../assets/page_notFound.jpg"
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        },2500)
    },[]);

    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <img src={PageNotFound} alt="no-notes" className='w-60' />

            <p className='w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5'>
                Page Not Found
            </p>
        </div>

    )
}

export default NotFound