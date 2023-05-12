import stylesSchedule from "../styles/Schedule.module.css";

export default function Schedule({ schedule }) {
  const Midmon = schedule.Midgard.mon;
  // const Midtue = schedule.Midgard.tue;
  // const Midwed = schedule.Midgard.wed;
  // const Midthu = schedule.Midgard.thu;
  // const Midfri = schedule.Midgard.fri;
  // const Midsat = schedule.Midgard.sat;
  // const Midsun = schedule.Midgard.sun;

  //JOTUNHEIM
  const Jotmon = schedule.Jotunheim.mon;
  // const Jottue = schedule.Jotunheim.tue;
  // const Jotwed = schedule.Jotunheim.wed;
  // const Jotthu = schedule.Jotunheim.thu;
  // const Jotfri = schedule.Jotunheim.fri;
  // const Jotsat = schedule.Jotunheim.sat;
  // const Jotsun = schedule.Jotunheim.sun;

  //VANAHEIM
  const Vanmon = schedule.Vanaheim.mon;
  // const Vantue = schedule.Vanaheim.tue;
  // const Vanwed = schedule.Vanaheim.wed;
  // const Vanthu = schedule.Vanaheim.thu;
  // const Vanfri = schedule.Vanaheim.fri;
  // const Vansat = schedule.Vanaheim.sat;
  // const Vansun = schedule.Vanaheim.sun;

  return (
    <>
      {/* schedule timetable */}
      <div className={stylesSchedule.schedule_timetable}>
        <section className="program_day">
          <span className="program_day-date"></span>
        </section>
        <aside> hej </aside>
        {/* schedule scenes grid */}
        <div className={stylesSchedule.schedule_scenes}>
          <div className="schedule_scene">
            <span className="schedule_scene_label"> Midgard</span>
            <div className="schedule_act">
              {Midmon.map((bandEvent) => (
                <section
                  key={bandEvent.act}
                  value={bandEvent.act}
                  className={stylesSchedule.bandEvent_section}
                >
                  <article className={stylesSchedule.Midgard_bandEvent}>
                    <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                    <h2>{bandEvent.act}</h2>
                  </article>
                </section>
              ))}
            </div>
          </div>
          <div className="schedule_scene">
            <span className="schedule_scene_label"> Vanaheim</span>
            <div className="schedule_act">
              {Vanmon.map((bandEvent) => (
                <section
                  key={bandEvent.act}
                  value={bandEvent.act}
                  className={stylesSchedule.bandEvent_section}
                >
                  <article className={stylesSchedule.Vanaheim_bandEvent}>
                    <h3>{bandEvent.start}</h3>
                    <h3>{bandEvent.end}</h3>
                    <h2>{bandEvent.act}</h2>
                  </article>
                </section>
              ))}
            </div>
          </div>
          <div className="schedule_scene">
            <span className="schedule_scene_label"> Jotunheim</span>
            <div className="schedule_act">
              {Jotmon.map((bandEvent) => (
                <section
                  key={bandEvent.act}
                  value={bandEvent.act}
                  className={stylesSchedule.bandEvent_section}
                >
                  <article className={stylesSchedule.Jotunheim_bandEvent}>
                    <h3>{bandEvent.start}</h3>
                    <h3>{bandEvent.end}</h3>
                    <h2>{bandEvent.act}</h2>
                  </article>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  //provide appContext in order to do 404's
  const api = "http://localhost:8080/schedule";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  return {
    props: { schedule: data },
  };
}
