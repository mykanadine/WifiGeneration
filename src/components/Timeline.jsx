import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useRef, useState, useEffect } from 'react';
import '../styles/wifi.css'; 

const modalContent1 = "This was the original blueprint for wireless networking. It established the foundational architecture for Wi-Fi but was incredibly slow by modern standards. It utilized two primary spread-spectrum technologies to transmit data: Frequency Hopping Spread Spectrum (FHSS) and Direct Sequence Spread Spectrum (DSSS). Because of its low speeds and limited range, it was mostly used in specialized industrial applications rather than commercial or home environments."
const modalContent2a = "This was the version that made Wi-Fi popular. It was affordable and fast enough for everyday use, like browsing the web and sending files. Its downside was that it used a busy radio channel, the same one used by cordless phones, microwave ovens, and Bluetooth devices, so it could suffer from interference and slowdowns when those devices were nearby."
const modalContent2b = "This version was much faster than 802.11b and used a quieter radio channel with less interference. The tradeoff was range, the signal didn't travel as far or pass through walls as well. It also couldn't connect with 802.11b devices since they used different bands, so it was mostly used in offices and businesses rather than homes."
const modalContent3 = "This version combined the best of both earlier standards, the speed of 802.11a with the wider range and lower cost of 802.11b's band. It could also work with older 802.11b devices. This combination made it the first Wi-Fi standard good enough for widespread, everyday use in homes and businesses."
const modalContent4 = "Wi-Fi 4 was the first standard branded with a generation number by the Wi-Fi Alliance and the first considered fully ready for mainstream commercial use. It marked a major jump in both speed and reliability by introducing multiple antennas and wider channels, and it was the first standard to officially support both the 2.4 GHz and 5 GHz bands."
const modalContent5 = "Wi-Fi 5 delivered the largest single speed increase in Wi-Fi's history, moving exclusively to the 5 GHz band to take advantage of wider channels and less interference. It was the first generation built with home entertainment and high-definition streaming in mind."
const modalContent6 = "Wi-Fi 6's focus shifted away from chasing higher peak speeds and toward efficiency — making networks handle many connected devices smoothly at once, which had become the real bottleneck in homes and offices full of phones, laptops, and smart devices. Wi-Fi 6E later extended the same technology into the brand-new 6 GHz band, opened by the FCC in April 2020."
const modalContent7 = "Wi-Fi 7, also called Extremely High Throughput (EHT), is a major generation of the wireless standard. Its defining architectural breakthrough is that a device is no longer limited to utilizing one frequency band at a time. Instead, it can aggregate multiple bands simultaneously to dramatically increase capacity and reduce latency, satisfying highly demanding modern applications like 8K video streaming, real-time virtual/augmented reality (XR), and cloud gaming."

const TIMELINE_DATA = [
  {
    id: "wifi_1",
    themeClass: "wifi_1", // Custom class for unique colors
    date: "1997",
    title: "802.11",
    description: "Original blueprint for wireless networking",
    modalContent: modalContent1,
    improvements: "Established the foundational architecture for Wi-Fi, utilized two primary spread-spectrum technologies to transmit data: Frequency Hopping Spread Spectrum (FHSS) and Direct Sequence Spread Spectrum (DSSS)",
    limitations: "Low speed and limited range"
  },
  {
    id: "wifi_2a",
    themeClass: "wifi_2a", // Custom class for unique colors
    date: "1999",
    title: "802.11b",
    description: "Made Wi-Fi popular",
    modalContent: modalContent2a,
    improvements: "",
    limitations: ""
  },
  {
    id: "wifi_2b",
    themeClass: "wifi_2b", // Custom class for unique colors
    date: "1999",
    title: "802.11a",
    description: "Faster than 802.11b, but shorter range",
    modalContent: modalContent2b,
    improvements: "",
    limitations: ""
  },
  {
    id: "wifi_3",
    themeClass: "wifi_3", // Custom class for unique colors
    date: "2003",
    title: "802.11g",
    description: "Combined the best of both earlier standards",
    modalContent: modalContent3,
    improvements: "",
    limitations: ""
  },
  {
    id: "wifi_4",
    themeClass: "wifi_4", // Custom class for unique colors
    date: "2009",
    title: "Wi-Fi 4",
    description: "First considered fully ready for mainstream commercial use",
    modalContent: modalContent4,
    improvements: "",
    limitations: ""
  },
  {
    id: "wifi_5",
    themeClass: "wifi_5", // Custom class for unique colors
    date: "2013",
    title: "Wi-Fi 5",
    description: "Largest single speed increase",
    modalContent: modalContent5,
    improvements: "",
    limitations: ""
  },
  {
    id: "wifi_6",
    themeClass: "wifi_6", // Custom class for unique colors
    date: "2019",
    title: "Wi-Fi 6",
    description: "Handled many connected devices smoothly at once",
    modalContent: modalContent6,
    improvements: "",
    limitations: ""
  },
  {
    id: "wifi_7",
    themeClass: "wifi_7", // Custom class for unique colors
    date: "2024",
    title: "Wi-Fi 7",
    description: "Major generation of the wireless standard",
    modalContent: modalContent7,
    improvements: "",
    limitations: ""
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
        <b>Description</b>
        <p>{activeEvent?.modalContent}</p>
        <b>Improvements</b>
        <p>{activeEvent?.improvements}</p>
        <b>Limitations</b>
        <p>{activeEvent?.limitations}</p>
        <button onClick={() => dialogRef.current?.close()}>Close</button>
      </dialog>
    </div>
  );
}