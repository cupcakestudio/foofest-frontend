import styles from "@/styles/Home.module.css";

export default function Home({ bands }) {
  console.log(bands);
  return (
    <>
      {bands.map((perBand) => (
        //key & value fortæller hvad bands sorteres på
        <section key={bands.slug} value={bands.slug}>
          <h2>{perBand.name}</h2>
        </section>
      ))}
    </>
  );
}
export async function getServerSideProps() {
  //provide appContext in order to do 404's
  const api = "http://localhost:8080/bands";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  return {
    props: { bands: data },
  };}

  
// export async function getServerSideProps() {
//   //provide appContext in order to do 404's
//   const api = "http://localhost:8080/schedule";
//   const res = await fetch(api);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: { schedule: data },
//   };
// }
// export async function getServerSideProps() {
//   //provide appContext in order to do 404's
//   const api = "http://localhost:8080/available-spots";
//   const res = await fetch(api);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: { spots: data },
//   };
// }
