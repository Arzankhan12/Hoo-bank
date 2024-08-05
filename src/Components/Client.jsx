import { clients } from "../Constants"
import styles from "../styles"

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full sm:min-w-[192px]`}>
        {clients.map((client)=>(
          <div key={client.id} className={`${styles.flexCenter} flex-1`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Client