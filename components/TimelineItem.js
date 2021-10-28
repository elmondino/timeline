import styles from "./TimelineItem.module.css";

export const TimelineItem = ({ timeline, index }) => {
  return (
    <div
      className={`${styles.container} ${
        index % 2 === 0 ? styles.left : styles.right
      }`}
      key={timeline.title}
    >
      <div className={styles.content}>
        <div
          className={
            index % 2 === 0
              ? styles.textContainerRight
              : styles.textContainerLeft
          }
        >
          <p>{timeline.title}</p>
          <p>{timeline.description}</p>
        </div>
        <div className={styles.timeContainer}>
          <span className={styles.time}>{timeline.time}</span>
        </div>
      </div>
    </div>
  );
};
