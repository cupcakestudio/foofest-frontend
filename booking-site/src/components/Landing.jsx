import styles from "@/styles/Home.module.css";

export default function Landing() {
  return (
    <>
      <div className={styles.date}>
        <p>FROM monday 10/07/23</p>
        <p>FROM sunday 24/07/23</p>
      </div>
      <h1>Foo Festival</h1>
      <div className={styles.landingButtons}>
        <button>BUY TICKET</button>
        <button>DOWNLOAD THE FESTIVAL APP</button>
      </div>
      <p>
        BRINGING the <span>NORSE MYTHOLOGY</span> <br /> BACK to LIFE
      </p>
    </>
  );
}
