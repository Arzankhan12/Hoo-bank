import styles from "./styles";
import {NavBars , Billing , Business , CardDeals , Client , Hero , ClientToAction, Statictics, Testimonial , Footer } from "./Components"

const App = () => {
  return (
  <div className="w-full overflow-hidden bg-primary">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBars/>
       </div>
    </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
      </div>
    </div>
    
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Statictics />
        <Business />
        <Billing />
        <CardDeals />
        <Testimonial />
        <Client/>
        <ClientToAction />
        <Footer />
        </div>

    </div>
  </div>
  )
}

export default App