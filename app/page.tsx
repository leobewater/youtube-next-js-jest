'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [showText, setShowText] = useState(false);

  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text:</label>
        <input id="randomText" className="border p-2 ml-2 rounded" />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text:</label>
        <input id="specificText" className="border p-2 ml-2 rounded" />
      </div>
      <div>
        <input placeholder="Search..." className="border p-2 ml-2 rounded" />
      </div>
      <div>
        <input
          value="AUDI Q5"
          onChange={() => {}}
          className="border p-2 ml-2 rounded"
        />
      </div>
      <div>
        {showText && <span>This is the text!</span>}
        <button onClick={() => 
        setTimeout(() => {
          setShowText(!showText)
        }, 100)
          } className='border ml-2 p-2 bg-slate-300 rounded'>Show Text</button>
      </div>
    </main>
  );
}
