import React from 'react'
import PlayStore from '../../../assets/playstore-green.png'
import Twitch from '../../../assets/twitch-white.png'
import TwitchBlack from '../../../assets/twitch-black.png'
import AppleGreen from '../../../assets/apple-green.png'
import Tiwter from '../../../assets/twitter-white.png'
import TiwterBlack from '../../../assets/twitter-black.png'
import instaWhite from '../../../assets/instagram-white.png'
import InstaBlack from '../../../assets/instagram-black.png'

const Footer= (props) => {
  return (
    <>
    {props.mobile_responsive?
    <section className='h-[100dvh] bg-black snap-start relative overflow-hidden flex justify-center items-center'>
      <div className='flex flex-col gap-8 items-center justify-center w-[86dvw]'>
        <div>
          <h1 className='text-xl text-white font-Agrandir mob:!text-[16px]'>
            Policy terms
          </h1>
          <p className='revsmlap:w-[350px] mob:!w-[86dvw] text-white font-Mulish mob:text-sm smlap:w-[300px]'>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
          </p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5'>
          <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-white rounded-md`}>
            <img 
              src={AppleGreen} 
              alt="Apple icon"
              className='w-4'
            />
            <div className={`text-white font-Agrandir text-[9px]`}>
              APP STORE
            </div>
          </button>
          <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-white rounded-md`}>
            <img 
              src={PlayStore}
              alt="PLay Store icon"
              className='w-4'
            />
            <div className={`text-white font-Agrandir text-[9px]`}>
              PLAY STORE
            </div>
          </button>
        </div>
        <div className='flex flex-row items-center gap-10'>
          <button>
            <img 
              src={Twitch} 
              alt="Twitch icon"
              className='w-7'
            />
          </button>
          <button>
            <img 
              src={Tiwter} 
              alt="Twitter icon"
              className='w-7'
            />
          </button>
          <button>
            <img 
              src={instaWhite} 
              alt="Instagram icon"
              className='w-7'
            />
          </button>
        </div>
      </div>
    </section>:
 <footer className='absolute w-[100dvw] bottom-0 flex flex-row justify-between p-6 px-14 mdlap:px-10 smlap:hidden'>
      <div className='flex flex-row items-center gap-5'>
        <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-black-800 rounded-md bg-white`}  >
          <img 
            src={AppleGreen} 
            alt="Apple icon"
            className='w-5'
          />
          <div className={`text-white} font-Agrandir text-[12px]`}>
            APP STORE
          </div>
        </button>
        <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-black-800 rounded-md bg-white}`}>
          <img 
            src={AppleGreen} 
            alt="PLay Store icon"
            className='w-5'
          />
          <div className={`text-black font-Agrandir text-[12px]`}>
            PLAY STORE
          </div>
        </button>
      </div>
      <div className='flex flex-row items-center gap-8'>
        <p  style={{fontFamily:"Mulish",fontSize:"10px",}}className={`text-black text-xs font-Mulish w-[600px]`}>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
          See our BrokerCheck. Investing involves risk  you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
        </p>
        <div className='flex flex-row items-center gap-8'  style={{marginRight:"10%"}}>
          <button>
            <img 
              src={TwitchBlack} 
              alt="Twitch icon"
              className='w-5'
            />
          </button>
          <button>
            <img 
              src={TiwterBlack} 
              alt="Twitter icon"
            />
          </button>
          <button>
            <img 
              src={InstaBlack} 
              alt="Instagram icon"
              className='w-5'
            
            />
          </button>
        </div>
      </div>
    </footer>
     
    
    }
    </>
  )
}

export default Footer
