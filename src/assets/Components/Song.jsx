import React from 'react'

function Song({name,img,song}) {

    return (
        
          
                <div className='border h-20 flex justify-start items-center m-2 bg-white border-none gap-2'>
                    <img
                        className='h-20 w-20 p-2 object-cover'
                        src={img} alt="flower" />
                    <div className='flex flex-col leading-tight'>
                        <h3>{song}</h3>
                        <h3>{name}</h3>
                    </div>
                </div>
            
      
    )
}

export default Song;