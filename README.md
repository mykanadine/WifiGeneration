# Incremental Readme

### Tasks Accomplished:
**1. Website Layout**



**2. Information Collection**

**3. Interactive Elements**
- Timeline
- Did You Know?
- Knowledge Check

**4. Website Deployment**

### Tasks Remaining:
1. Refine mobile layout
2. Add more visual aids

***

### June 29, 2026

- Project planning and task distribution
- Understanding submission requirements and rubrics

### July 2, 2026

- Learning about Astro and React with supplementary materials from the internet
- Editing the provided layout template to fit our proposed template
- Started more intensive research regarding the different Wi-Fi generations
- **Challenge encountered**: It was challenging to manage around the CSS syntax and codes such as `:root` and `html` to customize our own page, especially with the already existing global.css file which contains configurations that affect all pages of the website. Initially, some of the custom designs and stylings such as background wallpaper and color, font style, and box shadow color leaked into the main page. The group utilized the code `:has(.wifi_history_timeline)` attached in front of the selector to signify that only the page containing our custom timeline would be affected by the custom design edits in our CSS file. It was also a struggle to understand the code initially, since there were so many unfamiliar CSS syntax, that it was difficult to determine what codes to edit or change to achieve the designs we wanted.
- **Creative Process**: The group had already made a design template in the proposal stage, so we tried to copy it. The color scheme was retained; however, the layout deviated a bit from our initial plan since there was already a page template, and the group didn't want to change or work around it too much since that would be more difficult. The group made changes to the font, box sizes for the main content and table of contents, box shadow color, and overall color scheme of the page. The group aimed for a sleek and simple design, to make the page easy on the eyes.
- **Realizations**: Initially, the task of creating a website from scratch was daunting, but after studying the code, the group realized that most of the work would actually be more on designing the page and adding interactive elements since the skeleton code already builds the website itself and contains a template for a single webpage. While researching, the group realized that there are many existing codes in the internet for different react elements. Almost anythig can be found from timelines, to tables, graphs, 3D models, animations, and more. Thus, not everything had to be made from scratch.

### July 3, 2026

- Completed the skeleton for knowledge check and timeline
- Started adding information in the timeline.
- Added incomplete summary table
- **Challenge encountered**: A major challenge encountered through building the Knowledge Check section was handling the mobile layout. In the matching stage, the `onDragStart` and `onDragOver` events rely on the mouse. Implementing the matching in the mobile version became a challenge. The first attempt was to `addEventListener` with `touchstart` and `touchend`.

### July 4, 2026

- Completed Did You Know?
- Fixed layout for knowledge check
- Deployed the website
- Finalized information to the website
- Began working on the mobile layout

### July 5, 2026

- Fixed knowledge check layout on mobile
- Compiled and added references
- Added missing information to summary table
- **Challenge encountered**: The mobile version of the matching stage in the Knowledge Check section was being modified after deployment. The first version wasn't able to drag because touchmove wasn't added. The touchmove was added and an autoscroll was added to allow the page to autoscroll while the user is dragging the item in the mobile version. However, when it is being tried on the phone, it is sometimes working and sometimes not. The group tried to debug, but it is not working. Some of the items started to freeze on a certain area of the page and the autoscroll worked occasionally. Due to its instability, the group decided to switch to onClick for the matching stage since it works on both mobile and pc. Though the group added the onClick event, the dragging for the PC version was still preserved. On one hand, in the PC version, both dragging and dropping and selecting description and pick zone works. On the other hand, in the mobile version, only select and pick works.

### July 6, 2026

- Added information to Did You Know?
- Added missing references
- Added questions and answers for knowledge check
- Fixed layout for mobile

### July 7, 2026

- Completed documentation and AI Usage Declaration
- Added deployed website link to website description

***

### AI Usage
**1. Dola**
- Used to summarize information and brainstorm interactive elements for Knowledge Check
- Prompt: What events can be used for mobile development?
- Prompt: What events can be used for both mobile and pc?
- Prompt: Aside from multiple choice for knowledge check what else can I do to make it more interactive?
