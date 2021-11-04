import styles from "./TimelineItem.module.css";

export const TimelineItem = ({ timeline, side }) => {
  return (
    <div
      className={`${styles.container} ${
        side === 'left' ? styles.left : styles.right
      }`}
      key={timeline.title}
    >
      <div className={styles.content}>
        <div
          className={
            side === 'left'
              ? styles.textContainerLeft
              : styles.textContainerRight
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
