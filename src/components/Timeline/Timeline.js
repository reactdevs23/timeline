import React from "react";

import styles from "./TimeLine.module.css";

const Timeline = ({
  heading,
  fontFamily,
  tagline,
  clockIcon,
  arrow,
  data,
  bg,
  thickness,
}) => {
  return (
    <section className={styles.wrapper} style={{ fontFamily: fontFamily }}>
      <div className={styles.headingContainer} style={{ background: bg }}>
        <div className={styles.headingAndTagline}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.tagline}>{tagline}</p>
        </div>
        <div className={styles.iconContainer}>
          <i className={clockIcon}></i>
        </div>
      </div>
      <div className={styles.cards} style={{ "--thickness": thickness }}>
        <div className={styles.arrow}>
          <i class={arrow}></i>
        </div>
        {data.map((el, id) => (
          <div
            key={id}
            className={`${styles.card} ${styles[`items-${data.length}`]}  ${
              data.length > 6 && styles[`items-6`]
            }`}
            style={{ "--background": el.bg }}
          >
            <div className={styles.circle}></div>
            <h4 className={styles.title}>{el.title}</h4>
            <p className={styles.info}>{el.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
