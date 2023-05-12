

export default function Schedule({schedule}){
  // const Scenes = schedule

  
  const mon = schedule.Midgard.mon;
  const tue = schedule.Midgard.tue;
  const wed = schedule.Midgard.wed;
  const thu = schedule.Midgard.thu;
  const fri = schedule.Midgard.fri;
  const sat = schedule.Midgard.sat;
  const sun = schedule.Midgard.sun;
console.log(schedule.Midgard.mon)
  return (
    <>
    <h1>hej</h1>
    {/* mapping each play event for a band in monday */}
    {mon.map((bandEvent) =>  (

      <section key={bandEvent.act} value={bandEvent.act}>
        <h2>{bandEvent.act}</h2>
      </section>
    )
    )
    }
    <br></br>
    {tue.map((bandEvent) =>  (

      <section key={bandEvent.act} value={bandEvent.act}>
        <h2>{bandEvent.act}</h2>
      </section>
    )
    )
    }<br></br>
    {wed.map((bandEvent) =>  (

      <section key={bandEvent.act} value={bandEvent.act}>
        <h2>{bandEvent.act}</h2>
      </section>
    )
    )
    }<br></br>
    {thu.map((bandEvent) =>  (

      <section key={bandEvent.act} value={bandEvent.act}>
        <h2>{bandEvent.act}</h2>
      </section>
    )
    )
    }
    <br></br>
    {fri.map((bandEvent) =>  (

      <section key={bandEvent.act} value={bandEvent.act}>
        <h2>{bandEvent.act}</h2>
      </section>
    )
    )
    }<br></br>
    {sat.map((bandEvent) =>  (

      <section key={bandEvent.act} value={bandEvent.act}>
        <h2>{bandEvent.act}</h2>
      </section>
    )
    )
    }
    <br></br>
    {sun.map((bandEvent) =>  (

      <section key={bandEvent.act} value={bandEvent.act}>
        <h2>{bandEvent.act}</h2>
      </section>
    )
    )
    }
 </>
  )
}
export async function getServerSideProps(){
//provide appContext in order to do 404's
const api = "http://localhost:8080/schedule";
const res = await fetch(api);
const data = await res.json();
console.log(data);
return {
  props: 
{schedule: data,}
}
}