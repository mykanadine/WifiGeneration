# Evolution of Wi-Fi

## Proposal
### Members
- Myka Nadine Chua
- Mj Esperanza
- Julienne Skye Lim
- Eiress Ong
- Kai Wen Xu


### Topic Theme
**The Evolution of Wi-Fi**

### Brief Content Overview

#### What is Wi-Fi?
1. What is Wi-Fi and its purpose?
1. How wireless communication works

#### Wi-Fi 0 to Wi-Fi 3
1. Early Wi-Fi standards and architecture behind early wireless communication
   1. 802.11
   1. 802.11b
   1. 802.11a
   1. 802.11g
1. Limitations
   1. Interference with Bluetooth devices due to sharing the same frequency bandwidth
   1. Insufficient throughput and interoperability issues

#### Wi-Fi 4
1. Major changes and improvements introduced by Wi-Fi 4 (first to be ready for commercial use)
1. Advantages
   1. Introduction of Multiple-Input and Multiple-Output (MIMO)
   1. 40 MHz channels to the physical layer
   1. Frame aggregation to the Media Access Control Layer
1. Limitations


#### Wi-Fi 5 
1. Major improvements in this Wi-Fi generation
   1. Multi-User, Multiple-Input, and Multiple-Output (MU-MIMO)
   1. Increase in bandwidth
   1. Beamforming
1. Discuss limitations


#### Wi-Fi 6 & Wi-Fi 6E 
1. Improvements on previous generations
   1. Dual-band technology working in 2.4 and 5 GHz frequencies
   2. Orthogonal Frequency-Division Multiple Access (OFDMA)
   3. Wi-Fi 6E works in the 6 GHz band
1. Limitations

#### Wi-Fi 7
1. Introduction of Multi-Link Operation
2. Highlight potential challenges and limitations

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




### Desktop & Mobile-Responsive Layout
See [Google Drive Link](https://drive.google.com/file/d/1fdIMgzkq_v6f6jqpzgnoJ0aKdvYnCC3i/view?usp=sharing)


### Sources
1. [Ethernet Xpress. *Wi-Fi Generations Explained: From Wi-Fi 0 to Wi-Fi 7*](https://expl.in/wifi-generations-explained-wifi-0-to-wifi-7/)

2. [Cees Links. *The Evolution of Wi-Fi networks: from IEEE 802.11 to Wi-Fi 6E*](https://www.wevolver.com/article/the-evolution-of-wi-fi-networks-from-ieee-80211-to-wi-fi-6e)

## Technical Discussions
Throughout the project, the group aimed to build a responsive and functional website using Astro, React, CCS, and JavaScript. In order to design the webpage, the group made a new `wifi.css` file and used the `:has()` selector to scope custom designs. For the Knowledge Check section, the group planned to allow users to drag and drop the descriptions. However, the `onDragStart` and `onDragOver` mouse events are only applicable in PC. In order to allow drag and drop in mobile, events `touchstart`, `touchmove`, and `touchend` was added with `addEventListeners`. An auto-scroll was also added to allow the user to scroll while dragging, through dragging the item to the top or bottom part of the webpage considering that the screen of the mobile was much shorter. However, due to bugs, such as items freezing and auto-scroll not consistently functioning, the event `onClick` was replaced for mobile. For the mobile layout of the website, the group used `@media` and `overflow-x: hidden` to ensure proper layout on all screen sizes.

## Creative Discussions
The group followed the concept of the original proposal while adapting to the existing template given. The color scheme in the proposal was retained but not the layout. The group decided to follow the layout given but change the font, box sizes for the main content and table of contents, box shadow color, and overall color scheme of the page. The layout wasn't changed much because the group wanted a simple, clean, and easy-to-read layout. To present the information interactively, a timeline was added to show the improvements of the Wi-Fi over generations. Each box on the timeline, once clicked, will show details and explanations. Acronyms in the explanations were designed to be clickable and show animations for better understanding. A table was also added to compare Wi-Fi generations in the Summary section. Moreover, visual aids such as animated GIFs are embedded for illlustration. Aside from these, interactive elements planned in the proposal such as Did You Know? and the Knowledge Check activity were implemented to make learning engaging, while keeping navigation simple and intuitive.

## Aha Moments Discussions
The group realized the complication of making a website from scratch. With the template given as a solid base, the work actually goes more into the content, design, and adding features rather than coding everything from zero. Through researching online, the group was also able to find a lot of pre-built components that are applicable in the website, which speeds up development significantly. A key insight through developing this website was that preview in PC do not always match with mobile. Testing the website directly on different devices is essential to ensure that the website is compatible with different devices and screen sizes. Through coding, the group also understood that functionality matters more than complexity. A stable interaction method ensures the usability and experience for all users.

## Challenges Encountered Discussions
Through the development of the project, the group encountered several challenges.
1. The first challenge the group encountered was designing the webpage and carefully managing the `global.css` file. Through researching, the grouped learned to use the `:has()` selector when customizing the page's appearance to avoid unintentional change in the style of the main homepage.
2. Integrating the `react-vertical-timeline-component` was another challenge. The code came with its logic and style in a single file. The group had to go through the code and understand every single line to separate the style without breaking its functionality. After this, the group had to change the colors, scaling, and animation behavior to match the style of the website. Moreover, to make it more fascinating, the group adjusted the code to allow the animation to reset each time it appears on screen rather than appearing only once.
3. The Matching section of the Knowledge Check section was modified several times to ensure mobile compatibility. The initial plan of the group was to allow dragging and dropping on both PC and mobile. However, the mouse events `onDragStart` and `onDragOver` only work in PC. Therefore, the group tried to add `touchstart`, `touchmove`, and `touchend`. Considering that the user might need to scroll when dragging the item in mobile, an auto-scroll was also added. However, there are several bugs encountered such as items freezing in the middle of the screen or auto-scroll not functioning ocassionally. To ensure stability, the group switched to click and drop using `onClick`. This event is applicable in both PC and mobile and ensures stability of the website. In the end, the drag and drop method in PC was retained and click and drop method is usable in both PC and mobile.
4. After the deployment, the group realized several inalignment in the layout for mobile. The group had to research and learn responsive design techniques to ensure mobile compatilibility. Moreover, the changes in mobile layout had to be checked every time using the deployed link after committing and pushing the changes into GitHub. Another challenge was that some layout issues appeared on some phones but not on others. To resolve this, all group members had to test the website on their own phones to confirm that the layout will display correctly across different screen sizes and devices.

## Progress and Discussion Log

### June 29, 2026

- Project planning and task distribution
- Understanding submission requirements and rubrics

### July 2, 2026

- Learning about Astro and React with supplementary materials from the internet
- Editing the provided layout template to fit our proposed template
- Started more intensive research regarding the different Wi-Fi generations
- **Challenge encountered & Technical discussion**: It was challenging to manage around the CSS syntax and codes such as `:root` and `html` to customize our own page, especially with the already existing global.css file which contains configurations that affect all pages of the website. Initially, some of the custom designs and stylings such as background wallpaper and color, font style, and box shadow color leaked into the main page. The group utilized the code `:has(.wifi_history_timeline)` attached in front of the selector to signify that only the page containing our custom timeline would be affected by the custom design edits in our CSS file. It was also a struggle to understand the code initially, since there were so many unfamiliar CSS syntax, that it was difficult to determine what codes to edit or change to achieve the designs we wanted.
- **Creative Process**: The group had already made a design template in the proposal stage, so we tried to copy it. The color scheme was retained; however, the layout deviated a bit from our initial plan since there was already a page template, and the group didn't want to change or work around it too much since that would be more difficult. The group made changes to the font, box sizes for the main content and table of contents, box shadow color, and overall color scheme of the page. The group aimed for a sleek and simple design, to make the page easy on the eyes.
- **Realizations**: Initially, the task of creating a website from scratch was daunting, but after studying the code, the group realized that most of the work would actually be more on designing the page and adding interactive elements since the skeleton code already builds the website itself and contains a template for a single webpage. While researching, the group realized that there are many existing codes in the internet for different react elements. Almost anythig can be found from timelines, to tables, graphs, 3D models, animations, and more. Thus, not everything had to be made from scratch.

### July 3, 2026

- Completed the skeleton for knowledge check and timeline
- Started adding information in the timeline.
- Added incomplete summary table
- **Challenges encountered & Technical discussion**:
  - A major challenge encountered through building the Knowledge Check section was handling the mobile layout. In the matching stage, the `onDragStart` and `onDragOver` events rely on the mouse. Implementing the matching in the mobile version became a challenge. The first attempt was to `addEventListener` with `touchstart` and `touchend`.
  - It was also challenging to adapt the react element code of the timeline for our webpage, especially for the design and animation aspects. The design was a challenge because the code came from the `react-vertical-timeline-component` package found online. The code has both CSS stylings and the timeline itself in one file. Thus, the group had to figure out how to separate the CSS codes to a different file, and also add new edits to change different aspects of the timeline such as card colors, font colors, scaling or hovering affects, etc. The group also found it challenging to modify the main timeline code in order to reset the animation each time it appears on screen, as initially, the timeline's animation would only trigger once.
- **Creative Process**: The group wanted to make a table to clearly show the differences between wifi versions. We realized that Astro components were just written in HTML, so it was easy to implement. After that, thr group wanted it to match the rest of the layout to maintian consistency, so we edited the CSS to change the header colors. Additionally, to make the timeline more dynamic, the group decided to reset the animation each time it re-enters the view screen after scrolling away from it.

### July 4, 2026

- Completed Did You Know?
- Fixed layout for knowledge check
- Deployed the website
- Finalized information to the website
- Began working on the mobile layout
- **Challenge & Realization & Technical discussion**: Upon deployment, the group realized that edits would have to be made to fix the mobile layout. Initially, the group had thought that the mobile layout would look the same as the minimized window view on the laptop. However, it turns out that there are still quite some differences when the website is actually viewed through mobile. The differences were mainly in the CSS stylings and designs and the knowledge check layout. To counter this, the group used syntax like `@media` and `overflow-x: hidden` to ensure that the layout changes depending on screen dimensions and cuts-off excess parts of the website in a vertical view, disabling horizontal scrolling in the mobile layout.
  
### July 5, 2026

- Fixed knowledge check layout on mobile
- Compiled and added references
- Added missing information to summary table
- **Challenge encountered & Technical discussion**: The mobile version of the matching stage in the Knowledge Check section was being modified after deployment. The first version wasn't able to drag because touchmove wasn't added. The touchmove was added and an autoscroll was added to allow the page to autoscroll while the user is dragging the item in the mobile version. However, when it is being tried on the phone, it is sometimes working and sometimes not. The group tried to debug, but it is not working. Some of the items started to freeze on a certain area of the page and the autoscroll worked occasionally. Due to its instability, the group decided to switch to onClick for the matching stage since it works on both mobile and pc. Though the group added the onClick event, the dragging for the PC version was still preserved. On one hand, in the PC version, both dragging and dropping and selecting description and pick zone works. On the other hand, in the mobile version, only select and pick works.

### July 6, 2026

- Added information to Did You Know?
- Added missing references
- Added questions and answers for knowledge check
- Fixed layout for mobile

### July 7, 2026

- Completed documentation and AI Usage Declaration
- Added deployed website link to website description

### July 18,2026 - July 19,2026
- Researched and compiled more information, specifically regarding the more technical aspects of each Wi-fi Generation.
- Compiled visuals to add

### July 20, 2026

- Added CSMA/CA section
- Added visual elements to the summary section
- Added an acronym reference section with visual elements and descriptions
- Added instructions for the timeline and knowledge check section

### July 21, 2026
- Fixed layout for mobile
- Finalized Documentation
***

### AI Usage
**1. Dola**
- Used to summarize information and brainstorm interactive elements for Knowledge Check
- Prompt: What events can be used for mobile development?
- Prompt: What events can be used for both mobile and pc?
- Prompt: Aside from multiple choice for knowledge check what else can I do to make it more interactive?
