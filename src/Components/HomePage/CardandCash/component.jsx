import React from 'react'
import CardPhone from '../../../assets/boost-phone.svg'
import CardStairs2 from '../../../assets/boost-stairs-2.svg'
import CardCoffee from '../../../assets/boost-coffee.svg'
import CardBurger from '../../../assets/boost-burger.svg'
import CardHand from '../../../assets/boost-hand.svg'
import CardShoes from '../../../assets/boost-shoe.svg'
import CardStairs1 from '../../../assets/boost-stairs-1.svg'
import CardCard from '../../../assets/boost-card.svg'

const CardandCash = () => {
  return (
    <>
    <section className='h-[100dvh] bg-black snap-start relative'>
      <div className='absolute flex items-center gap-10 smlap:flex-col-reverse revsmlap:w-[24vw] top-[50%] right-[50%] -translate-y-[50%] -translate-x-[22%] mob:top-[42%] smlap:w-[300px] smlap:translate-x-[50%] smlap:gap-8 mob:!w-[200px] z-50'>
        <div className='relative z-10 revsmlap:bottom-16'>
          <h1  style={{fontWeight:"800",fontSize:"40px"}}className='text-3xl mob:text-xl font-Agrandir text-[#00D54B]'>
            Cash Card & Boost
          </h1>
          <p style={{fontWeight:"400",fontSize:"16px"}} className='revsmlap:w-[350px] mob:w-[86dvw] text-white font-Mulish mob:text-sm'>
            The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
          </p>
        </div>
        <img
          src={CardPhone}
          alt="Boost phone" 
          className='smlap:w-[150px] revsmlap:w-[70%] revsmlap:translate-y-[5%]'
        />
      </div>
      <img
        src={CardStairs2}
        alt="Boost Stairs 2" 
        className='absolute bottom-0 left-0 w-[23%]'
      />
      <img
        src={CardStairs1}
        alt="Boost Stairs 1" 
        className='absolute bottom-0 right-0 w-[60%]'
      />
      <img
        src={CardShoes}
        alt="Boost Shoe"
        className='absolute bottom-[34.7%] right-[1.4%] w-[6.5%] smlap:!hidden mdlap:translate-y-[15%]'
      />
      <img
        src={CardCoffee} 
        alt="Boost Coffee" 
        className='absolute bottom-[16%] right-[20%] w-[5%] smlap:hidden mdlap:translate-y-[15%]'
      />
      <img
        src={CardBurger}
        alt="Boost Burger" 
        className='absolute bottom-[35%] right-[26.5%] w-[4.8%] smlap:hidden mdlap:translate-y-[15%]'
      />
      <img
        src={CardCard}
        alt="Boost Card" 
        className='absolute bottom-[55%] right-[20%] w-[5%] smlap:hidden mdlap:translate-y-[15%]'
      />
      <img
        src={CardHand}
        alt="Boost Hand" 
        className='absolute top-[12%] right-[13%] w-[4.7%] smlap:hidden mdlap:translate-y-[22%]'
      />
    </section>
    
    </>
  )
}

export default CardandCash
