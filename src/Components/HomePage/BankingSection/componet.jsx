import React from 'react'
import BankPiller from '../../../assets/banking-column.svg'
import BankPhone from '../../../assets/banking-phone.svg'
import BankHole from '../../../assets/banking-hole.svg'
import BankHole1 from '../../../assets/banking-hole1.svg'
import BankTrack1 from '../../../assets/banking-track-1.svg'
import BankTrack2 from '../../../assets/banking-track-2.svg'
import BankRamp1 from '../../../assets/banking-ramp-1.svg'
import BankStairs1 from '../../../assets/banking-stairs-1.svg'
import BankCubes from '../../../assets/banking-cubes.svg'
import BankMonster from '../../../assets/banking-monster.svg'
import BankTube from '../../../assets/banking-tube.svg'
import BankRamp2 from '../../../assets/banking-ramp-2.svg'
import BankStairs2 from '../../../assets/banking-stairs-2.svg'
const BankingSection= () => {
  return (
    <>
    
    <section className='h-[100dvh] bg-[#00D54B] snap-start relative'>
      <div className='absolute flex items-center smlap:flex-col-reverse revsmlap:w-[370px] top-[50%] right-[50%] -translate-y-[50%] -translate-x-[25%] smlap:w-[300px] smlap:translate-x-[50%] smlap:gap-10 mob:!w-[200px] z-50'>
        <div className='relative z-10 revsmlap:left-10'>
          <h1 style={{fontWeight:"800",fontSize:"40px"}} className='text-3xl mob:text-xl font-Agrandir text-white'>
            Banking
          </h1>
          <p className='revsmlap:w-[350px] mob:w-[86dvw] font-Mulish mob:text-sm'>
            Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
            and account number.
          </p>
        </div>
        <img
          src={BankPhone}
          alt="Banking phone" 
        />
      </div>
      <img
        src={BankHole} 
        alt="Banking hole top"
        className='absolute top-0 left-0 smlap:w-[240px] mob:!w-[150px]' 
      />
      <img
        src={BankPiller}
        alt="Banking column" 
        className='absolute top-[14%] left-[5%] z-10 mdlap:scale-[!80%] mob:hidden'
      />
      <img
        src={BankStairs2}
        alt="Banking Stairs 2"
        className='absolute bottom-[13%] left-[4%] z-10 mob:hidden' 
      />
      <img
        src={BankRamp2} 
        alt="Banking Ramp 2"
        className='absolute bottom-[4%] left-[13%] smlap:hidden' 
      />
      <img
        src={BankTube}
        alt="Banking Tube"
        className='absolute bottom-0 left-[36%] smlap:hidden' 
      />
      <img
        src={BankHole1} 
        alt="Banking Hole bottom"
        className='absolute bottom-0 right-[19%]' 
      />
      <img
        src={BankMonster} 
        alt="Banking Monster"
        className='absolute bottom-[7%] right-[5%] mob:bottom-[9%]' 
      />
      <img
        src={BankCubes} 
        alt="Banking Cubes"
        className='absolute bottom-[11%] right-[20%] smlap:hidden' 
      />
      <img
        src={BankStairs1} 
        alt="Banking Stairs 1"
        className='absolute bottom-[30%] right-[9%] mob:hidden' 
      />
      <img
        src={BankRamp1} 
        alt="Banking Ramp 1"
        className='absolute bottom-[47%] right-[20%] smlap:hidden' 
      />
      <img
        src={BankTrack2} 
        alt="Banking Track 2"
        className='absolute top-[1%] right-[12%] smlap:right-[6%] smlap:w-[220px] mob:!w-[160px] mob:!top-[5%]' 
      />
       <img
        src={BankTrack1} 
        alt="Banking Track 2"
        className='absolute top-[25%] right-[50%] smlap:right-[6%] smlap:w-[220px] mob:!w-[160px] mob:!top-[5%]' 
      />
    </section>
    </>
  )
}

export default  BankingSection

