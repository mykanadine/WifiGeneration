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
    improvements: "As the pioneer of wireless networking, this standard successfully cut the physical cord by establishing the first standardized framework for Wireless Local Area Networks (WLANs). It introduced the fundamental architecture that allowed devices to dynamically discover, authenticate, and connect to a central access point.",
    limitations: "One of the major drawbacks of this Wi-Fi standard was its maximum speed of only 2 Mbps, which was too slow to support activities beyond simple text-based data transfers and basic internet use. Another major limitation was that devices using Frequency-Hopping Spread Spectrum (FHSS) could not communicate with devices using Direct-Sequence Spread Spectrum (DSSS) because these were two different wireless transmission methods that were not compatible with each other. As a result, devices from different manufacturers often could not connect, leading to market fragmentation and interoperability issues."
  },
  {
    id: "wifi_2a",
    themeClass: "wifi_2a", // Custom class for unique colors
    date: "1999",
    title: "802.11b",
    description: "Made Wi-Fi popular",
    modalContent: modalContent2a,
    improvements: "This Wi-Fi standard significantly improved wireless networking by increasing the maximum speed from 2 Mbps to 11 Mbps through the use of High-Rate Direct Sequence Spread Spectrum (HR-DSSS). HR-DSSS achieved these higher speeds by using Complementary Code Keying (CCK), a more efficient data encoding technique that allowed more information to be transmitted within the same bandwidth. As a result, users experienced faster web browsing, quicker file transfers, and more reliable wireless connections. These improvements also made Wi-Fi practical and affordable for everyday home and office use. ",
    limitations: " Since this standard operated entirely on the 2.4 GHz frequency band, it often experienced interference from common household devices such as microwave ovens, cordless phones, and baby monitors, which also used the same frequency. This interference weakened the wireless signal and caused slower speeds, unstable connections, and occasional data loss. "
  },
  {
    id: "wifi_2b",
    themeClass: "wifi_2b", // Custom class for unique colors
    date: "1999",
    title: "802.11a",
    description: "Faster than 802.11b, but shorter range",
    modalContent: modalContent2b,
    improvements: " Operating as a high-speed alternative to 802.11b, this standard achieved a major increase in maximum bandwidth, reaching up to 54 Mbps by introducing Orthogonal Frequency Division Multiplexing (OFDM). OFDM improves data transmission by dividing the wireless signal into multiple smaller sub-signals that transmit data simultaneously, making communication faster, more efficient, and more resistant to interference. In addition, by operating entirely on the less congested 5 GHz frequency band, it avoided much of the interference caused by common household devices, resulting in more stable and reliable wireless connections. ",
    limitations: "  The primary drawback of utilizing the higher-frequency 5 GHz band was its significantly reduced signal range and poor physical penetration through solid walls. Additionally, because it used an entirely different frequency band, it suffered from zero backward compatibility with 802.11b devices, creating a fragmented hardware ecosystem. " 
  },
  {
    id: "wifi_3",
    themeClass: "wifi_3",// Custom class for unique colors
    date: "2003",
    title: "802.11g",
    description: "Combined the best of both earlier standards",
    modalContent: modalContent3,
    improvements: " This standard combined the best features of 802.11a and 802.11b by bringing the faster Orthogonal Frequency Division Multiplexing (OFDM) technology to the 2.4 GHz frequency band. As a result, it increased the maximum speed to 54 Mbps while maintaining the wider coverage of the 2.4 GHz band. It also remained backward compatible with older 802.11b devices, allowing users to upgrade their networks without replacing all of their existing hardware.",
    limitations: " One major drawback was that when an older 802.11b device connected to the network, the router had to slow down its communication to support the older technology, reducing the overall performance of the entire network. In addition, because it continued to operate on the 2.4 GHz frequency band, it remained vulnerable to interference from nearby Wi-Fi networks and common household devices such as microwave ovens and cordless phones, which could reduce connection speed and reliability."
  },
  {
    id: "wifi_4",
    themeClass: "wifi_4", // Custom class for unique colors
    date: "2009",
    title: "Wi-Fi 4 (802.11n)",
    description: "First considered fully ready for mainstream commercial use",
    modalContent: modalContent4,
    improvements: "This generation introduced MIMO (Multiple Input, Multiple Output), which used multiple smart antennas to broadcast data simultaneously rather than relying on a single stream. It was also the first truly dual-band standard, allowing routers to transmit over both the far-reaching 2.4 GHz band and the faster 5 GHz band at the same time. These architectural changes dramatically increased maximum throughput up to 600 Mbps and significantly extended indoor signal range",
    limitations: " Despite utilizing the 5 GHz band, devices frequently reverted back to the cluttered 2.4 GHz band, which remained plagued by interference from everyday electronics. Additionally, while MIMO supported multiple antennas, the router could still only talk to one device at a time in rapid succession. This meant that if multiple family members tried to use the internet at once, the network experienced immediate lag as it cycled through each device."
  },
  {
    id: "wifi_5",
    themeClass: "wifi_5", // Custom class for unique colors
    date: "2013",
    title: "Wi-Fi 5 (802.11ac)",
    description: "Largest single speed increase",
    modalContent: modalContent5,
    improvements: "This generation solved multi-device lag by introducing MU-MIMO (Multi-User MIMO), which allowed the router to transmit data to up to four different devices simultaneously. It also added Beamforming, a technology that detects where a device is located and shoots a targeted, concentrated beam of data directly to it rather than broadcasting equally in all directions. By focusing entirely on wider channels in the 5 GHz band, it pushed maximum speeds past the gigabit barrier.",
    limitations: " The major limitation was that its architectural upgrades, like MU-MIMO and beamforming, only functioned over the 5 GHz frequency band. Any data sent over the longer-range 2.4 GHz band was forced to drop back to old Wi-Fi 4 technology, making it incredibly slow. Furthermore, MU-MIMO only worked for downloading data, meaning uploading files or video-calling still choked under heavy network strain"
  },
  {
    id: "wifi_6",
    themeClass: "wifi_6", // Custom class for unique colors
    date: "2019",
    title: "Wi-Fi 6 (802.11ax)",
    description: "Handled many connected devices smoothly at once",
    modalContent: modalContent6,
    improvements: "Designed for crowded smart homes, this generation introduced OFDMA (Orthogonal Frequency Division Multiple Access), which allows a router to bundle data for multiple completely different devices into a single transmission. Wi-Fi 6 applied these massive upgrades to both the 2.4 GHz and 5 GHz bands, while the 6E update unlocked an entirely new, pristine 6 GHz spectrum highway with zero appliance interference. It also brought MU-MIMO to both uploads and downloads, drastically reducing network latency.",
    limitations: " The primary downside of the advanced Wi-Fi 6E upgrade is that the newly introduced 6 GHz signals have an incredibly short range and struggle to pass through thick walls or glass. To experience these high-speed benefits, consumers are forced to buy entirely new, expensive hardware, as older legacy devices cannot see or connect to the 6 GHz band. Additionally, configuring a multi-band network correctly to stop devices from constantly dropping down to slower bands became much more complex."
  },
  {
    id: "wifi_7",
    themeClass: "wifi_7", // Custom class for unique colors
    date: "2024",
    title: "Wi-Fi 7 (802.11be)",
    description: "Major generation of the wireless standard",
    modalContent: modalContent7,
    improvements: " Named as the Extremely High Throughput standard, Wi-Fi 7 introduced MLO (Multi-Link Operation), which allows a single device to connect to the 2.4 GHz, 5 GHz, and 6 GHz bands all at the same time to combine their speeds and backup data paths. It also doubled maximum channel widths to 320 MHz and implemented Multi-RU Puncturing, a feature that lets the network slice out a small, jammed piece of a radio channel while continuing to use the rest of it. These combined features skyrocketed theoretical speeds to a massive 46 Gbps while cutting latency to near-zero levels.",
    limitations: " The extreme speeds offered by this standard are largely overkill for average households, as normal consumer internet plans cannot even come close to saturating its massive bandwidth capacity. Furthermore, the specialized hardware requires significantly more power to run, causing routers to run hotter and often require bulky internal cooling sinks or fans. The premium price tag of both routers and compatible client devices makes it highly cost-prohibitive for the average user."
  }
];

export default function TimelineDemo() {
  const dialogRef = useRef(null);
  const timelineRef = useRef(null); // Reference to track the entire timeline element
  const [activeEvent, setActiveEvent] = useState(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // intersection observer forces a reset when you scroll away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // trigger animations when back in screen view
          setShouldAnimate(true);
        } else {
          // turn off and reset animation when out of screen view
          setShouldAnimate(false);
        }
      },
      { threshold: 0.05 } // animation starts when 5% of the timeline is visible
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
    <div>
    <div style={{ marginBottom: "20px", padding: "14px 16px", border: "1px solid #dbe7ff", borderRadius: "10px", background: "#f5f8ff" }}>
        <h3 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>Instruction</h3>
        <div style={{ display: "grid", gap: "10px" }}>
            <div style={{ marginTop: "4px", fontSize: "14px" }}>Explore the evolution of Wi-Fi by clicking each timeline box to discover the descriptions, improvements, and limitations.</div>
        </div>
    </div>
    <p>Over the years, Wi-Fi standards have evolved to support higher throughput and become much more efficient in bandwidth use.</p>
    {/*attach ref to a wrapper element*/}
    <div ref={timelineRef} className="wifi_history_timeline">
      {/* key attribute forces React to destroy and rebuild the animation cycle cleanly */}
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
    </div>
  );
}