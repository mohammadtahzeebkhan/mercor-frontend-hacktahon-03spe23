import BankingSection from "./BankingSection/componet"
import CardandCash from "./CardandCash/component"
import LandingPage from "./LandingPage/component"
import PaymentsSection from "./PaymentSection/component"
import Footer from "./Footer/component"
import Investing from "./Investing/components"
let HomePageMobile=()=>{
    return(


        <>
          <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 revsmlap:hidden'>
   <LandingPage/>
    <PaymentsSection/>
    <BankingSection/>
    <CardandCash/>
    <Investing/>
    <Footer mobile_responsive={true} />
   </div>
        
        
        </>
    )
}
export default HomePageMobile