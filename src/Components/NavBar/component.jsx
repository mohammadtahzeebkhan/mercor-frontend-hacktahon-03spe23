import React, { useState } from 'react';
import Eye from '../../assets/eye.png';
import Logo from '../../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscClose } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const HumburgerFun = () => setShowMobileMenu(!showMobileMenu);
  const container = {
    closed: { opacity: 0, width: '0vw', height: '100vh' },
    open: {
      opacity: 1,
      width: '100vw',
      height: '100vh',
    },
  };

  return (
    <div>
      <motion.div
        className=' bg-black z-50 flex justify-center items-center gap-6 revsmlap:hidden fixed top-0 left-0 h-[100vh] text-white font-Agrandir text-[12px]'
        initial='closed'
        variants={container}
        animate={showMobileMenu ? 'open' : 'closed'}
      >
        <div style={{ fontSize: '18px' }} className='flex flex-col justify-center gap-6 text-lg h-[100dvh]'>
          <Link to="/legal">LEGAL</Link>
          <Link to="/licenses">LICENSES</Link>
          <Link to="/status">STATUS</Link>
          <Link to="/security">SECURITY</Link>
          <Link to="/careers">CAREERS</Link>
          <Link to="/press">PRESS</Link>
          <Link to="/support">SUPPORT</Link>
          <Link to="/codeblog">CODEBLOG</Link>
          <div className='absolute top-3 right-2'>
            <button onClick={HumburgerFun}>
              <VscClose className='text-white w-10 h-10' />
            </button>
          </div>
        </div>
      </motion.div>
      <div className='f pl-6 pr-8 overflow-hidden lex w-[100dvw] justify-between items-center p-4 mob:px-4 relative z-40'>
        <img src={Logo} alt="CashApp Logo" className='w-6' />
        <div style={{ fontSize: "18px", fontWeight: "800" }} className='smlap:hidden flex items-center justify-center gap-6 text-white font-Agrandir text-[12px]'>
          <button>SIGN IN</button>
          <Link to="/legal">LEGAL</Link>
          <Link to="/licenses">LICENSES</Link>
          <Link to="/security">SECURITY</Link>
          <Link to="/careers">CAREERS</Link>
          <Link to="/press">PRESS</Link>
          <Link to="/support">SUPPORT</Link>
          <Link to="/status">STATUS</Link>
          <Link to="/codeblog">CODEBLOG</Link>
        </div>
        <div className='flex justify-end items-center revsmlap:hidden w-full mob:pr-4 mob:gap-4 gap-6 pr-6 '>
          <button onClick={HumburgerFun}>
            <GiHamburgerMenu className='text-white w-7 h-7' />
          </button>
        </div>
        <img src={Eye} alt="eye" className='w-12' />
      </div>
    </div>
  );
};

export default Navbar;
