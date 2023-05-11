
import styles from '@/styles/Home.module.css'

export default function Home({bands}) {
  console.log(bands)
  return (
    <>
     {bands.map((perBand) => (
                <section key={bands.slug} value={bands.slug}>
                  {perBand.name}
                </section>
              ))}
    </>
  )
}
export async function getServerSideProps() {
  //provide appContext in order to do 404's
  const api = "http://localhost:8080/bands";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  return {
    props: 
  {bands: data,}
}

}
