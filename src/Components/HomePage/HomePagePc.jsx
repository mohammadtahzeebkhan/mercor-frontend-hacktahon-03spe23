import BankingSection from "./BankingSection/componet"
import CardandCash from "./CardandCash/component"
import LandingPage from "./LandingPage/component"
import PaymentsSection from "./PaymentSection/component"
import Investing from "./Investing/components"
let HomePagePc=()=>{
    return(


        <>
         <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden'>
    <LandingPage/>
    <PaymentsSection/>
    <BankingSection/>
    <CardandCash/>
    <Investing/>
   </div>
        
        
        
        
        </>
    )
}
export default HomePagePc