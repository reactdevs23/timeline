import React from "react";
import styles from "./WeddingTimeline.module.css";

const WeddingTimeline = ({ fontFamily, heading, events, thickness }) => {
  return (
    <section className={styles.wrapper} style={{ fontFamily: fontFamily }}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
      </div>

      <div className={styles.timeline} style={{ "--thickness": thickness }}>
        {events.map((event, id) => (
          <div className={styles.row} key={id}>
            <div className={styles.left}>
              <img src={event.img} alt="#" className={styles.img} />
            </div>
            <div className={styles.right}>
              <div
                className={styles.stageContainer}
                style={{ "--circleBg": event.color }}
              >
                <p className={styles.time}>{event.time}</p>
                <p className={styles.event}>{event.event}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingTimeline;
