# <mark>Evolution of Wi-Fi</mark>
## <mark>Incremental Readme</mark>
### July 3
The first version of the interactive element for Knowledge Check was done. It was working on the PC version, but the mobile version was not yet verified. The group planned to verify it after the deployment of the website. 

A major challenge encountered through building the Knowledge Check section was handling the mobile layout. In the matching stage, the `onDragStart` and `onDragOver` events rely on the mouse. Implementing the matching in the mobile version became a challenge. The first attempt was to `addEventListener` with `touchstart` and `touchend`.

### July 4
The Do You Know? button was added and the color and layout of the Knowledge Check section was further modified to match the whole.

### July 5
The mobile version of the matching stage in the Knowledge Check section was being modified after deployment. The first version wasn't able to drag because `touchmove` wasn't added. The `touchmove` was added and an autoscroll was added to allow the page to autoscroll while the user is dragging the item in the mobile version. However, when it is being tried on the phone, it is sometimes working and sometimes not. The group tried to debug, but it is not working. Some of the items started to freeze on a certain area of the page and the autoscroll worked occasionally. Due to its instability, the group decided to switch to `onClick` for the matching stage since it works on both mobile and pc. Though the group added the `onClick` event, the dragging for the PC version was still preserved. On one hand, in the PC version, both dragging and dropping and selecting description and pick zone works. On the other hand, in the mobile version, only select and pick works.

## <mark>Proposal</mark>

### Members
- Myka Nadine Chua
- Mj Esperanza
- Julienne Skye Lim
- Eiress Ong
- Kai Wen Xu


### <mark>Topic Theme</mark>
**<mark>The Evolution of Wi-Fi</mark>**

### <mark>Brief Content Overview</mark>

#### <mark>What is Wi-Fi?</mark>
1. <mark>What is Wi-Fi and its purpose?</mark>
1. <mark>How wireless communication works</mark>

#### <mark>Wi-Fi 0 to Wi-Fi 3</mark>
1. <mark>Early Wi-Fi standards and architecture behind early wireless communication </mark>
   1. <mark>802.11</mark>
   1. <mark>802.11b</mark>
   1. <mark>802.11a</mark>
   1. <mark>802.11g</mark>
1. <mark>Limitations</mark>
   1. <mark>Interference with Bluetooth devices due to sharing the same frequency bandwidth</mark>
   1. <mark>Insufficient throughput and interoperability issues</mark>

#### <mark> Wi-Fi 4 </mark>
1. <mark>Major changes and improvements introduced by Wi-Fi 4 (first to be ready for commercial use)</mark>
1. <mark>Advantages</mark>
   1. <mark>Introduction of Multiple-Input and Multiple-Output (MIMO)</mark>
   1. <mark>40 MHz channels to the physical layer</mark>
   1. <mark>Frame aggregation to the Media Access Control Layer</mark>
1. <mark>Limitations</mark>


#### <mark>Wi-Fi 5 </mark>
1. <mark>Major improvements in this Wi-Fi generation</mark>
   1. <mark>Multi-User, Multiple-Input, and Multiple-Output (MU-MIMO)</mark>
   1. <mark>Increase in bandwidth</mark>
   1. <mark>Beamforming</mark>
1. <mark>Discuss limitations</mark>


#### <mark>Wi-Fi 6 & Wi-Fi 6E </mark>
1. <mark>Improvements on previous generations</mark>
   1. <mark>Dual-band technology working in 2.4 and 5 GHz frequencies</mark>
   2. <mark>Orthogonal Frequency-Division Multiple Access (OFDMA)</mark>
   3. <mark>Wi-Fi 6E works in the 6 GHz band</mark>
1. <mark>Limitations</mark>

#### <mark>Wi-Fi 7 </mark>
1. <mark>Introduction of Multi-Link Operation</mark>
2. <mark>Highlight potential challenges and limitations</mark>

### Tech Stack Plan
- **MDX** – Content pages
- **CSS** – Styling
- **JavaScript** – Interactivity
- **JSX** – Component structure
- **Astro 6** – Framework
- **Node.js 26** – Runtime environment

### Interactive Elements

#### Did You Know?
Pressing a button will make a pop-up appear containing a fun fact about firewalls. 


#### Knowledge Check
There will be a 10 item multiple choice quiz at the end that will contain questions about the content of the exhibit.




### <mark>Desktop & Mobile-Responsive Layout</mark>
<mark>See [Google Drive Link](https://drive.google.com/file/d/1fdIMgzkq_v6f6jqpzgnoJ0aKdvYnCC3i/view?usp=sharing)</mark>


### Sources
1. [Ethernet Xpress. *Wi-Fi Generations Explained: From Wi-Fi 0 to Wi-Fi 7*](https://expl.in/wifi-generations-explained-wifi-0-to-wifi-7/)

2. [Cees Links. *The Evolution of Wi-Fi networks: from IEEE 802.11 to Wi-Fi 6E*](https://www.wevolver.com/article/the-evolution-of-wi-fi-networks-from-ieee-80211-to-wi-fi-6e)
