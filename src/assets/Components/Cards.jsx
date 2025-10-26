import React from 'react'
function Cards({ title, icon1: Icon1, icon2: Icon2, bgImage, Emogi, btn }) {

    return (

        <div className='w-full h-50 rounded text-black mb-3 bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>

            <div className='flex px-2 justify-between items-center'>
                <span className='flex border items-center gap-4 font-bold bg-gray-400 px-3 rounded border-none mt-2 text-xl'><Icon1 />{title}</span>
                <span className='flex items-center pr-4 text-xl text-gray-800 cursor-pointer '> <Icon2 /></span>
            </div>
            <div className='items-center justify-center pt-24 flex'>
                <button className='bg-gray-300 border py-2 px-14 text-xl font-bold rounded-2xl border-b-4 gray-700 '>{btn}</button>
            </div>
            <div className='text-center text-3xl'>{Emogi}</div>
        </div>

    )
}

export default Cards