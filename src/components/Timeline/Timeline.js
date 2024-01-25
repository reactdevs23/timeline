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
      <div className={styles.cards}>
        <div className={styles.arrow}>
          <i class={arrow}></i>
        </div>
        {data.map((el, id) => (
          <div
            className={styles.card}
            key={id}
            style={{ "--background": el.bg }}
          >
            <h4 className={styles.title}>{el.title}</h4>
            <p className={styles.info}>{el.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
