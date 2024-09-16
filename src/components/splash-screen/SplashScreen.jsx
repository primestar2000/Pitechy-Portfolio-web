import React from 'react'
import mainLogo from "../../assets/images/mainLogo.png"
import mainGif from "../../assets/images/mainGif.gif"

export default function SplashScreen() {
  return (
    <div className='w-full h-screen justify-center items-center flex '>
        <div className='relative w-[250px] lg:w-[350px] lg:h-[350px] h-[250px] p-2 flex justify-center items-center rounded-full'>
            <img className='w-[90%]' src={mainGif} alt="" srcset="" />
            <div className='w-[70%] p-4 absolute bg-white rounded-full '>
                <img className='' src={mainLogo} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}
