import React from 'react'
import Header from './header'
import imgDesktop from './assets/images/bg-sidebar-desktop.svg'
import imgMobile from './assets/images/bg-sidebar-mobile.svg'
import Page1 from './page-1'
import Page2 from './page-2'
import Page3 from './page-3'
import Page4 from './page-4'
import Thanking from './thanking'
import Footer from './footer'
import './App.css'

function App() {
  const [page, setPage] = React.useState(1);
  function showPage(id) {
    setPage(id);
  }
  let [orderDetails, setOrderDetails] = React.useState({
    name: '',
    email: '',
    ph_no: '',
    plan: '',
    durationIsMonthly: true,
    service: false,
    storage: false,
    profile: false,
    submitted: false
  });
  function updateOrderDetails(event) {
    let { name, value, type, checked } = event.target;
    setOrderDetails(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }
  function placeOrder() {
    setOrderDetails((prevState) => {
      return {
        ...prevState,
        submitted: !prevState.submitted
      }
    });
  }
  return (
    <div className='main'>
      <section id='header-sec'>
        <picture>
          <source srcSet={imgDesktop} media='(min-width:900px)' />
          <img src={imgMobile} alt='background image' id='background-image' />
        </picture>
        <Header pageNo={page} handeler={showPage} />
      </section>
      {!orderDetails.submitted && <section>
        {page === 1 && <Page1 data={orderDetails} handeler={updateOrderDetails} />}
        {page === 2 && <Page2 duration={orderDetails.durationIsMonthly} handeler={updateOrderDetails} selectedPlan={orderDetails.plan} />}
        {page === 3 && <Page3 handeler={updateOrderDetails} data={orderDetails} />}
        {page === 4 && <Page4 data={orderDetails} />}
        <Footer pageNo={page} handeler={setPage} postMethod={placeOrder} />
      </section>}
      {orderDetails.submitted && <section id='thank-section'><Thanking data={orderDetails} /></section>}
    </div>
  )
}

export default App
