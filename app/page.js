'use client'

import { useState } from 'react'

import styles from './page.module.css'

import { tokens } from './utils/tokens'

export default function Home() {
  const [token, setToken] = useState("");

  function handleTokenSelect(event) {
    setToken(event.target.value);
    console.log(event.target.value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <select value={token} onChange={handleTokenSelect}>
            {tokens.map((token) => <option key={token.name} value={token.name}>{token.icon}</option>)}
          </select>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.board}>
        {[...Array(9)].map((_, index) => <div key={index} className={styles.tile}>{tokens.find((element) => element.name === token).icon}</div>)}
        </div>
      </div>

      {console.log(tokens.find((element) => element.name === token).icon)}

      <div className={styles.grid}>
      </div>
    </main>
  )
}
