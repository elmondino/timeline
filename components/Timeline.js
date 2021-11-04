import { useState, useEffect } from "react";
import styles from "./Timeline.module.css";
import { TimelineItem } from "./TimelineItem";

export const Timeline = ({ data }) => {

  const maxElements = 7;

  const [timelineData, setTimelineData] = useState([
    {
      time: "17:33",
      title: "Most immediate",
      description: "Description about what just happened",
    },
  ]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      if (iteration < data.length) {
        setTimelineData((timelineData) =>
          timelineData ? [...timelineData, data[iteration]] : [data[iteration]]
        );
        iteration += 1;
        setTick(iteration);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timelineData?.length > maxElements) {
      setTimelineData((timelineData) => [...timelineData.slice(1)]);
    }
  }, [timelineData]);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.timeline}>
        {timelineData &&
          timelineData.map((timeline, index) => {
            const globalIndex = tick + index + timelineData.length;
            const side = globalIndex % 2 == 0 ? 'left' : 'right';
            return <TimelineItem key={globalIndex} timeline={timeline} side={side} />
          })
        }
      </div>
    </main>
  );
};
