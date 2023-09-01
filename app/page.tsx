import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text:</label>
        <input id="randomText" className='border p-2 ml-2 rounded'/>
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text:</label>
        <input id="specificText" className='border p-2 ml-2 rounded'/>
      </div>

    </main>
  );
}
