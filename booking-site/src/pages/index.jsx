import styles from "@/styles/Home.module.css";

export default function Home({ bandData }) {
  console.log(bandData);
  return (
    <>
      {bandData.map((perBand) => (
        //key & value fortæller hvad bands sorteres på
        <section key={bandData.slug} value={bandData.slug}>
          <h2>{perBand.name}</h2>
        </section>
      ))}
    </>
  );
}
export async function getServerSideProps() {
  const apiEndpoints = ["http://localhost:8080/bands", "http://localhost:8080/schedule", "http://localhost:8080/available-spots"];

  // mapper igennem hver array alt efter hvilket endpoint det er og fetcher
  const apiRequest = apiEndpoints.map((endpoint) => fetch(endpoint));
  // Promise.all venter på alle apiRequest er kørt igennem før den går videre.
  const [bandRes, scheduleRes, spotRes] = await Promise.all(apiRequest);

  const bandData = await bandRes.json();
  const scheduleData = await scheduleRes.json();
  const spotData = await spotRes.json();

  console.log({
    bandData,
    scheduleData,
    spotData,
  });
  return {
    props: {
      bandData,
      scheduleData,
      spotData,
    },
  };
}
