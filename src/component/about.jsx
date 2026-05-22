import React from 'react'

export default function About() {
  return (
    <div className='bg-gray-300 min-h-screen'>
        <div className="flex justify-around animate-slide-in-right">
            {/* left section hai */}
            <div className='mx-20 my-55 w-170'> 
                <h1 className='text-5xl font-bold '>Shine your Products <br/> and designs <span className='color-blue'>with our service</span></h1>
                <p className='mt-10 opacity-95'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro incidunt officia error quam voluptate, officiis a sint adipisci, delectus placeat cum reiciendis quasi facilis consectetur aperiam exercitationem! Quia corporis praesentium assumenda, earum numquam reiciendis.</p>
                <button className='mt-10 bg-black text-white px-10 py-2.5 mr-10 drop-shadow-2xl'>
                    Explore now
                </button>
                <button className='mt-10 outline-2 px-10 py-2.5'>
                    our services
                </button>
            </div>
            
            {/* right section hai */}
            <div className='mx-20 my-55 object-cover h-160 w-160 drop-shadow-2xl'>
                <img src="/src/assets/image.png" alt="  p" />    
            </div>
        </div>
    </div>
  )
}
