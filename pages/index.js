import { Timeline } from "../components/Timeline";

export default function Home() {
  const data = [
    {
      time: "17:11",
      title: "Yet another",
      description: "Chronologically, new item in the timeline.",
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
      description: "Third event is currently taking place.",
    },
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
      description: "Third event is currently taking place.",
    },
  ];

  return <Timeline data={data} />;
}
