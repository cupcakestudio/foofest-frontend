import stylesSchedule from "../styles/Schedule.module.css";
import { useState } from "react";

export default function Schedule({ schedule }) {
  const [day, setDay] = useState("monday");

  const Midmon = schedule.Midgard.mon;
  const Midtue = schedule.Midgard.tue;
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

  //filter for button days
  function changeDay(event) {
    if (event.target.value === "monday") {
      setDay("monday");
      console.log(day);
    }
    if (event.target.value === "tuesday") {
      setDay("tuesday");
      console.log(day);
    }
  }

  return (
    <>
      <h1>Schedule</h1>
      {/* schedule timetable */}
      <div className={stylesSchedule.schedule_timetable}>
        <section className="program_day">
          <span className="program_day-date"></span>
        </section>
        {/* BUTTONS TO CHOOSE DAYS */}
        <button onClick={changeDay} value="monday">
          Monday
        </button>
        <button onClick={changeDay} value="tuesday">
          Tuesday
        </button>
        <button onClick={changeDay}>Wednesday</button>
        <button onClick={changeDay}>Thursday</button>
        {/* schedule scenes grid */}
        <p>{day}</p>
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
                    <div className={stylesSchedule.timeSlot_}>
                      <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                    </div>
                    <h2>{bandEvent.act}</h2>
                  </article>
                </section>
              ))}
            </div>
          </div>
          {/* <div className="schedule_scene">
            <span className="schedule_scene_label"> Vanaheim</span>
            <div className="schedule_act">
              {Vanmon.map((bandEvent) => (
                <section
                  key={bandEvent.act}
                  value={bandEvent.act}
                  className={stylesSchedule.bandEvent_section}
                >
                  <article className={stylesSchedule.Vanaheim_bandEvent}>
                    <div className={stylesSchedule.timeSlot_}>
                      <h3>{bandEvent.start}</h3>
                      <h3>{bandEvent.end}</h3>
                    </div>
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
                    <div className={stylesSchedule.timeSlot_}>
                      {" "}
                      <h3>{bandEvent.start}</h3>
                      <h3>{bandEvent.end}</h3>
                    </div>
                    <h2>{bandEvent.act}</h2>
                  </article>
                </section>
              ))}
            </div>
          </div> */}
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
