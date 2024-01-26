import React from "react";
import styles from "./FinancialPlaning.module.css";

const FinancialPlaning = ({
  fontFamily,
  heading,
  tagline,
  plans,
  thickness,
}) => {
  return (
    <section className={styles.wrapper} style={{ fontFamily: fontFamily }}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.tagline}>{tagline}</p>
      </div>

      <div className={styles.timeline} style={{ "--thickness": thickness }}>
        {plans.map((plan, id) => (
          <div className={styles.row} key={id}>
            <div className={styles.left}>
              {id % 2 !== 0 && (
                <div
                  className={styles.stageContainer}
                  style={{ "--circleBg": plan.color }}
                >
                  <h3 className={styles.title}>{plan.title}</h3>
                  <p className={styles.info}>{plan.info}</p>
                </div>
              )}
            </div>
            <div className={styles.right}>
              {id % 2 === 0 && (
                <div
                  className={styles.stageContainer}
                  style={{ "--circleBg": plan.color }}
                >
                  <h3 className={styles.title}>{plan.title}</h3>
                  <p className={styles.info}>{plan.info}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancialPlaning;
