import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useRef, useState, useEffect } from 'react';
import '../styles/wifi.css'; 

const TIMELINE_DATA = [
  {
    id: "wifi_1-3",
    themeClass: "wifi_1-3", // Custom class for unique colors
    date: "2011 - present",
    title: "Wifi 0-3",
    subtitle: "History",
    description: "Lorem ipsum....",
    modalContent: "More details!"
  },
  {
    id: "wifi_4",
    themeClass: "wifi_4", // Custom class for unique colors
    date: "2010 - 2011",
    title: "Wifi 4",
    subtitle: "History",
    description: "Lorem ipsum....",
    modalContent: "More details!"
  },
  {
    id: "wifi_5",
    themeClass: "wifi_5", // Custom class for unique colors
    date: "November 2012",
    title: "Wifi 5",
    subtitle: "History",
    description: "Lorem ipsum....",
    modalContent: "More details!"
  },
  {
    id: "wifi_6",
    themeClass: "wifi_6", // Custom class for unique colors
    date: "November 2012",
    title: "Wifi 6",
    subtitle: "History",
    description: "Lorem ipsum....",
    modalContent: "More details!"
  },
  {
    id: "wifi_7",
    themeClass: "wifi_7", // Custom class for unique colors
    date: "November 2012",
    title: "Wifi 7",
    subtitle: "History",
    description: "Lorem ipsum....",
    modalContent: "More details!"
  }
];

export default function TimelineDemo() {
  const dialogRef = useRef(null);
  const timelineRef = useRef(null); // Reference to track the entire timeline element
  const [activeEvent, setActiveEvent] = useState(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Intersection Observer forces a reset when you scroll away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // It's back on screen! Trigger animations
          setShouldAnimate(true);
        } else {
          // It left the screen! Turn off animation so it can reset
          setShouldAnimate(false);
        }
      },
      { threshold: 0.05 } // Fires as soon as 5% of the timeline is visible
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (eventData) => {
    setActiveEvent(eventData);
    dialogRef.current?.showModal();
  };

  return (
    // 1. Attach the ref to a wrapper element
    <div ref={timelineRef} className="wifi_history_timeline">
      {/* 2. Key attribute forces React to destroy and rebuild the animation cycle cleanly */}
      <VerticalTimeline key={shouldAnimate ? "visible" : "hidden"} animate={shouldAnimate}>
        {TIMELINE_DATA.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            date={event.date}
            className={`custom-timeline-element ${event.themeClass}`}
            iconOnClick={() => openModal(event)}
            onTimelineElementClick={() => openModal(event)}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{event.subtitle}</h4>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <dialog ref={dialogRef} className="timeline-modal">
        <h2>{activeEvent?.title} Details</h2>
        <p>{activeEvent?.modalContent}</p>
        <button onClick={() => dialogRef.current?.close()}>Close</button>
      </dialog>
    </div>
  );
}