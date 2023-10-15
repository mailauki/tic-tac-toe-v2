// import Image from 'next/image'
import styles from './page.module.css'



export default function Home() {
  

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.board}>
        {[...Array(9)].map((_, index) => <div key={index} className={styles.tile}></div>)}
        </div>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  )
}
