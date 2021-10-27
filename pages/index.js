import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const data = [
    {
      time: "17:33",
      title: "Most immediate",
      description: "Description about what just happened",
    },
    {
      time: "17:11",
      title: "Yet another",
      description: "Chronologically, the third in the timeline.",
    },
    {
      time: "16:52",
      title: "Third event",
      description: "Some more stuff is going on.",
    },
    {
      time: "16:16",
      title: "Fourth event",
      description: "Some new development is taking place.",
    },
    {
      time: "15:45",
      title: "Random event",
      description: "Another random event is taking place.",
    },
    {
      time: "15:21",
      title: "Sixth event",
      description: "Third event is taking place.",
    },
  ];
  const [timelineData, setTimelineData] = useState();

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      if (iteration < data.length) {
        setTimelineData((timelineData) =>
          timelineData ? [...timelineData, data[iteration]] : [data[iteration]]
        );
      }
      iteration += 1;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timelineData?.length === data?.length) {
      setInterval(() => {
        setTimelineData((timelineData) => [...timelineData.slice(1)]);
      }, 1000);
    }
  }, [timelineData]);

  return (
    <>
      {timelineData &&
        timelineData.map((timeline) => (
          <div key={timeline.title}>
            {timeline.title}
            <br />
            {timeline.description}
          </div>
        ))}
      <div>yep</div>
    </>
  );
}
