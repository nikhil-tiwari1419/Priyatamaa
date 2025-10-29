import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
    const navigate = useNavigate();
    const GoToFirstpage = () => {
        navigate("/Firstpage")
    }
    return (
        <div className='bg-blend-soft-light min-h-screen max-w-md mx-auto '>
            <button
            className='text-4xl'
                onClick={GoToFirstpage}
            >
                |Go To first page
            </button>

        </div>
    )
}

export default Main