import Lines from '../../../assets/VectorLines.svg'
import Phone from '../../../assets/LandingPagePhone.svg'
import Arrow from '../../../assets/DwonArrow.svg'
import Cube from '../../../assets/cube.svg'
import Stairs from '../../../assets/stairs.svg'
import Cubes from '../../../assets/Cubes.svg'
import Pillar from '../../../assets/Pillar.svg'
import Navbar from '../../NavBar/component'
import AppleGreen from '../../../assets/apple-green.png'
import TiwterWhite from '../../../assets/twitter-white.png'
import instaWhite from '../../../assets/instagram-white.png'
import playStore from '../../../assets/playstore-green.png'
import Twitch from '../../../assets/twitch-white.png'


const LandingPage=()=>{
    const customFontStyle = {
         fontFamily: 'Agrandir', 
        // Adjust the font size as needed
        fontWeight:"800",
        fontSize:"193px",
      /*   position: "relative" */
        

      };
    

return(
    <>
    

    <div className='h-[100dvh] bg-black snap-start relative overflow-hidden'>
    <Navbar/>
        <img 
            src={Lines} 
            alt="Vector blast"
            className='w-[100dvw] h-[100dvh] object-cover absolute top-0 left-0' 
        />
        <div className='text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-46%] text-[150px] smlap:text-[110px] mob:!text-[75px] leading-[1] font-Agrandir p-10'>
            <div className='relative z-10'>CASH</div>
            <div className='relative z-20'>APP</div>
            <img 
                src={Phone} 
                alt="Intro phone"
                className='h-full w-auto absolute z-[15] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' 
            />
        </div>
        <img 
            src={Arrow} 
            alt="Scroll down indicator"
            className='w-7 h-9 mob:w-5 mob:h-7 absolute bottom-0 left-[50%] translate-x-[-50%] mb-6' 
        />
        <div>
            <img 
                src={Cube} 
                alt="Intro Cube 1"
                className='absolute left-[15%] w-28 smlap:left-[10%] smlap:w-24 smlap:top-[10%] mob:!left-[7%] mob:top-[10%] mob:!w-16' 
            />
            <img 
                src={Stairs} 
                alt="Intro Stairs"
                className='z-5 absolute right-[12%] w-52 smlap:right-[3%] smlap:w-44 smlap:top-[10%] mob:!right-[6%] mob:!w-28' 
            />
            <img 
                src={Cubes} 
                alt="Intro Cubes 1"
                className='absolute left-[15%] bottom-12 w-52 smlap:left-[10%] smlap:w-32 smlap:bottom-[10%] mob:!left-[7%] mob:!w-28' 
            />
            <img 
                src={Pillar} 
                alt="Intro Pillar 1"
                className='absolute right-[18%] bottom-[11%] w-72 smlap:right-[-7%] smlap:bottom-[-5%] smlap:w-72 mob:!right-[-10%] mob:!bottom-[7%] mob:!w-40' 
            />
        </div>
        <footer className='absolute w-[100dvw] bottom-0 flex flex-row justify-between p-6 px-14 mdlap:px-10 smlap:hidden'>
      <div className='flex flex-row items-center gap-5'>
        <button className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-black-800 rounded-md bg-black
        `}  >
          <img 
            src={AppleGreen} 
            alt="Apple icon"
            className='w-5'
          />
          <div className={`text-white font-Agrandir text-[12px]`}>
            APP STORE
          </div>
        </button>
        <button style={{background:"black"}} className={`p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-black-800 rounded-md bg-black}`}>
          <img 
            src={playStore} 
            alt="PLay Store icon"
            className='w-5'
          />
          <div className={`text-white font-Agrandir text-[12px]`}>
            PLAY STORE
          </div>
        </button>
      </div>
      <div className='flex flex-row items-center gap-8'>
        <p  style={{fontFamily:"Mulish",fontSize:"10px",}}className={`text-white text-xs font-Mulish w-[600px]`}>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
          See our BrokerCheck. Investing involves risk  you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
        </p>
        <div className='flex flex-row items-center gap-8'  style={{marginRight:"10%"}}>
          <button>
            <img 
              src={Twitch} 
              alt="Twitch icon"
              className='w-5'
            />
          </button>
          <button>
            <img 
              src={TiwterWhite} 
              alt="Twitter icon"
              className='w-5'
            />
          </button>
          <button>
            <img 
              src={instaWhite} 
              alt="Instagram icon"
              className='w-5'
            
            />
          </button>
        </div>
      </div>
    </footer>
    </div>
  
    </>

)


}

export default LandingPage;