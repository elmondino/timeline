import { useState, useEffect } from "react";
import styles from "./Timeline.module.css";
import { TimelineItem } from "./TimelineItem";

export const Timeline = ({ data }) => {
  const [timelineData, setTimelineData] = useState([
    {
      time: "17:33",
      title: "Most immediate",
      description: "Description about what just happened",
    },
  ]);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      if (iteration < data.length) {
        setTimelineData((timelineData) =>
          timelineData ? [...timelineData, data[iteration]] : [data[iteration]]
        );
      }
      iteration += 1;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timelineData?.length >= 7) {
      setTimelineData((timelineData) => [...timelineData.slice(1)]);
    }
  }, [timelineData]);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.timeline}>
        {timelineData &&
          timelineData.map((timeline, index) => (
            <TimelineItem timeline={timeline} index={index} />
          ))}
      </div>
    </main>
  );
};
