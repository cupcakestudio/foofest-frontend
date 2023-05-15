import stylesSchedule from "../styles/Schedule.module.css";
import { useState } from "react";

export default function Schedule({ schedule }) {
  const [stage, setStage] = useState("Midgard");

  const Midmon = schedule.Midgard.mon;
  const Midtue = schedule.Midgard.tue;
  const Midwed = schedule.Midgard.wed;
  const Midthu = schedule.Midgard.thu;
  const Midfri = schedule.Midgard.fri;
  const Midsat = schedule.Midgard.sat;
  const Midsun = schedule.Midgard.sun;

  //JOTUNHEIM
  const Jotmon = schedule.Jotunheim.mon;
  const Jottue = schedule.Jotunheim.tue;
  const Jotwed = schedule.Jotunheim.wed;
  const Jotthu = schedule.Jotunheim.thu;
  const Jotfri = schedule.Jotunheim.fri;
  const Jotsat = schedule.Jotunheim.sat;
  const Jotsun = schedule.Jotunheim.sun;

  //VANAHEIM
  const Vanmon = schedule.Vanaheim.mon;
  const Vantue = schedule.Vanaheim.tue;
  const Vanwed = schedule.Vanaheim.wed;
  const Vanthu = schedule.Vanaheim.thu;
  const Vanfri = schedule.Vanaheim.fri;
  const Vansat = schedule.Vanaheim.sat;
  const Vansun = schedule.Vanaheim.sun;

  //filter for button days
  function changeDay(event) {
    if (event.target.value === "Midgard") {
      setStage("Midgard");
      console.log(stage);
    }
    if (event.target.value === "Vanaheim") {
      setStage("Vanaheim");
      console.log(stage);
    }
    if (event.target.value === "Jotunheim") {
      setStage("Jotunheim");
      console.log(stage);
    }
  }

  return (
    <>
      <h1>Schedule</h1>
      {/* schedule timetable */}
      {/* BUTTONS TO CHOOSE DAYS */}
      <button onClick={changeDay} value="Midgard">
        Midgard
      </button>
      <button onClick={changeDay} value="Vanaheim">
        Vanaheim
      </button>
      <button onClick={changeDay} value="Jotunheim">
        Jotunheim
      </button>{" "}
      <p>{stage}</p>
      <br></br>
      {/* <button onClick={changeDay}>Thursday</button> */}
      {/* schedule scenes grid 
      Indpisration from tinderbox grid and hour indication setup:
      https://tinderbox.dk/program/?gad=1&gclid=CjwKCAjwjYKjBhB5EiwAiFdSfiRSNWo1SbtqktdsBSz9BluuzPH0NGo6nI9zuTTo43puyqPPzRvPhBoCFG4QAvD_BwE*/}
      {/* times section */}
      <div className={stylesSchedule.timetable}>
        <section className="00:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            00:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="02:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            02:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="04:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            04:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="06:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            06:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="08:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            08:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="10:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            10:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="12:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            12:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="14:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            14:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="16:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            16:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="18:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            18:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="20:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            20:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
        <section className="22:00_hour">
          <span className={stylesSchedule.timetable_hour}>
            22:00
            <span className={stylesSchedule.hourLine_Quarter_highlight}></span>
            <span className={stylesSchedule.hourLine_Quarter}></span>
          </span>
        </section>
      </div>
      {/* {schedule with acts section} */}
      <section className={stylesSchedule.days_program}>
        <div className={stylesSchedule.act_wrapper}>
          <div className={stylesSchedule.schedule_scenes}>
            {/* section with day labels */}
            <section className={stylesSchedule.day_label}>
              <span className={stylesSchedule.scene_label}> Monday</span>
              <span className={stylesSchedule.scene_label}> Tuesday</span>
              <span className={stylesSchedule.scene_label}> Wednesday</span>
              <span className={stylesSchedule.scene_label}> Thursday</span>
              <span className={stylesSchedule.scene_label}> Friday</span>
              <span className={stylesSchedule.scene_label}> Saturday</span>
              <span className={stylesSchedule.scene_label}> Sunday</span>
            </section>
            <div>
              {stage === "Midgard" ? (
                <div className={stylesSchedule.schema_grid}>
                  <div className={stylesSchedule.schedule_act}>
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
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Midtue.map((bandEvent) => (
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
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Midwed.map((bandEvent) => (
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
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Midthu.map((bandEvent) => (
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
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Midfri.map((bandEvent) => (
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
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Midsat.map((bandEvent) => (
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
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Midsun.map((bandEvent) => (
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
                    ))}{" "}
                  </div>
                </div>
              ) : null}
              {/* VANAHEIM */}
              {stage === "Vanaheim" ? (
                <div className={stylesSchedule.schema_grid}>
                  <div className={stylesSchedule.schedule_act}>
                    {Vanmon.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Vanaheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Vantue.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Vanaheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Vanwed.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Vanaheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Vanthu.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Vanaheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Vanfri.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Vanaheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Vansat.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Vanaheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Vansun.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Vanaheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                </div>
              ) : null}
              {/* JOTUNHEIM */}
              {stage === "Jotunheim" ? (
                <div className={stylesSchedule.schema_grid}>
                  <div className={stylesSchedule.schedule_act}>
                    {Jotmon.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Jotunheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Jottue.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Jotunheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Jotwed.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Jotunheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Jotthu.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Jotunheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Jotfri.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Jotunheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Jotsat.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Jotunheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                  <div className={stylesSchedule.schedule_act}>
                    {Jotsun.map((bandEvent) => (
                      <section
                        key={bandEvent.act}
                        value={bandEvent.act}
                        className={stylesSchedule.bandEvent_section}
                      >
                        <article className={stylesSchedule.Jotunheim_bandEvent}>
                          <div className={stylesSchedule.timeSlot_}>
                            <h3>{bandEvent.start}</h3> <h3>{bandEvent.end}</h3>
                          </div>
                          <h2>{bandEvent.act}</h2>
                        </article>
                      </section>
                    ))}{" "}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
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
