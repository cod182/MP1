# Milestone Project 1


## Whale Hello

## Project

The use will be to display and advertise the services offered by a Videographer/Photographer/Animator/Editor. The site will show previous projects undertaken as well as the services they are offer. The site will container all contact information as well as links to social media.

# Showcase

A deployed link to the site can be found [here](https://cod182.github.io/Milestone-Project-1/)

![Preivew](readme/wireframes/site-responsive.png)


# UX

## User Story

The end user is someone who is looking to hire a Videographer/Photographer/Animator/Editor to undertake a project for them. The site would be aimed at small businesses, local and nation wide.The site will mainly be accessed on mobile devices due to the current trend, but will be designed for desktop also.

The end user will want to see previous projects that that been undertaken and an average cost of the service. There will be a contact form with required the information of type fo projects project and description.

Information must be clearly displayed and accessible. The colour scheme will be bright and clean with the photography work integrated through some sections.

Embedded video will be available on project pages where applicable.

## Strategy

### User Needs

- The user needs the site to be accessible mainly on mobile device but equally on tablets and desktops. 
- Information must be easy to access, clearly displayed and easy to digest.

Technical Capabilities

- It is possible to create this site efficiently using the bootstrap framework and HTML/CSS that I have learned.

### Business Vision

- The business wants to advertise their work and gain new clientele in order to grow. 
- The site needs to clearly show all important work and let people contact them easily. 
- The site must remain professional and simply to use.


## Scope

- The site will include information about the company, their goals and ethos and their previous work. T
- here will be easily accessible previous work  to show the skillset of the company. 
- If the user is happy with what they see, they are able to get in contact to enquire about working on a project and can also share the work.


## Structure

- The structure will be a single landing page, containing an about section, latest projects section and contact section, there will also be links to full archive of projects.
- The flow of the landing page will being with the company logo at full height, below this there will be an about section introducing the company, giving information about them and their ethos. 
- This is then followed by latest projects showing their latest work, there will be links to another page to view the full project archive contains videos and descriptions. 
- Finally there will be a contact section that will allow users to get in touch to enquire about working on a project.


## Skeleton

### Wireframes

#### Original Wireframes
- [XS >576px](assets/images/wireframes/original-wireframes/xs-width-_576px375px.png)
- [SM ≥576px](assets/images/wireframes/original-wireframes/sm-width-≥576px.png)
- [MD ≥768px](assets/images/wireframes/original-wireframes/md-width-≥768px.png)
- [LG ≥992px](assets/images/wireframes/original-wireframes/lg-width-≥992px.png)
- [XXL ≥1400px](assets/images/wireframes/original-wireframes/xxl-width-≥1400px.png)

#### New Wireframes
- [XS >576px](assets/images/wireframes/new-wireframes/xs-width-_576px375px.png)
- [SM ≥576px](assets/images/wireframes/new-wireframes/sm-width-≥576px.png)
- [MD ≥768px](assets/images/wireframes/new-wireframes/md-width-≥768px.png)
- [LG ≥992px](assets/images/wireframes/new-wireframes/lg-width-≥992px.png)
- [XXL ≥1400px](assets/images/wireframes/new-wireframes/xxl-width-≥1400px.png)

## Surface

The finished site will be a single page introducing the company, and showing their work.

### Home
The home page will contain a Navbar along the top that will shrink on tablets and mobile. It will also containt an full height hero image of the companies logo.

### About
The about seciton wil have an image background. The section will contain an introducton section on the left with a skills pane, on the right there will ba overview video. Below these there will be testimonials from clients. On mobile the elements will bee full width and stacked.

### Latest Projects
The latest projects section will display the latest projects from each aspect of the company. There will also be link to archive pages for each of the project caracories.

### Contact
The contact section will be have a solid background. To the left will be an animated gif and to the right will be a contact form. The contact form will allow a prospective lient to enter required details and send a message to the company.

### Archive Pages
Each catagories page will be similar. There will be a number of projects displayed will relevant information on each. There will be a favourite projects section that will contain 3 projects. Below this there will be a Archived Projects section containing an unlimited number of projects.

  
The colours to be using on the page are a contrasting <span style="color:#845EC2">purple</span> and <span style="color:#FF9671">orange</span>.
The fonts to be used on the site are Roboto and Lato.


Visual Design
	Colours, typography, effects, imagery
	Reinforce the content
	Guide the user through tasks and information
	Minimise cognative overload. Max intuitive learning
	Appropriate content
	Final Design

##Features

### Existing Features

### Features to be implemented

- Mailing List sign up for project updates
- Top of page button only appearing after hero image
- Breakdown of gerneral costs for each service
- Mail server connection for contact form

## Technoogies used
- HTML5
- CSS3
- Javascript
- Bootstrap v5 beta 2
- Hover 2.3.1
- Google Chrome Dev tools for debugging
- Google Lighthouse for audits

# Testing

## Planning

At the beginning of the project I was aware of the audience for the website and their needs when visiting. I considered the devices that would be used when visiting and took note of ensuring the pages looked their best when visited.

The devices I plan to test the websit with are:

- Chrome Developer Tools
    - iPhone 5/SE (320x568)
    - iPhone 6/7/8 (357x667)
    - iPhone 6/7/8 Plus (414x736)
    - iPad (768x1024)
    - iPad Pro (1024x1366)

- Handheld Device Realworld Testing
    - iPhone XS Max
    - iPhone 12
    - iPad Pro 11"
    - Samsung Galaxy A40

- Screen Testing
    - Laptop Screen 13" (1280x800)
        - Safari
        - Chrome
    - Laptop Screen 16" (3072x1920)
        - Safari
        - Chrome
    - Desktop Screen 22" (1680 × 1050)
        - Safari
        - Chrome
    - iMac 5K Screen 27" (5120x2880)
        - Safari
        - Chrome
---

## Running Tests

### HTML5 
The code was validated using [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input)

|Page|Result|Resolution|
|----------|------|---|
|index.html|Error found on contact form method & action|Backend needs to be linked on next release
|photography.html|Error found on contact form method & action|Backend needs to be linked on next release
|animation.html|Error found on contact form method & action|Backend needs to be linked on next release
|editing.html|Error found on contact form method & action / aria-abelledby errors on modals|Backend needs to be linked on next release / removed aria-labelledby
|videography.html|Error found on contact form method & action|Backend needs to be linked on next release
|404.html|Stray /head tag found|Removed unused /head tag

### CSS3 
The code was validated using [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input)

No Errors Found

The process for testing the site was as follows:
1. Load page
2. Click About (Auto scroll to about section)
3. Briefly view background video
4. Scroll down to more of the about section
5. Click Home (Auto screoll to top of screen)
6. Click projects (Auto scroll to Projects section)
7. Hover over (desktop) or press on (mobile) each latest project card
8. Click the + on Photography card to view modal
9. Click on random picture to view full size
10. Close both modals
11. Click Top of page button (arrow on right) to return to top of the screen
12. Click on Contact (Auto scroll to contact section)
13. Enter details in contact form, leaveing 1 requured secion empty
14. Click Send Message to check required field is requested
15. Complete form and send message again to ensure it is submitted
16. Click the Whale Hello brand icon in the top left (Auto scroll to top)
17. Click Projects (Auto scroll to Projects section)
18. Hover over (desktop) press on (mobiel) Animation and click on View Portfolio Button
19. Be taken to animation.html
20. Hover (desktop) over each project thumbnail to ensure they shake
21. Click on a random project thumbnail to open modal
22. Close Modal
23. Click on View Project Button below thumbnail to open modal
24. Check title, project and description is visable and project video plays
25. Close modal
26. Click Contact (Auto scroll to contact section)
27. Click Home to be taken to index.html
28. Click back arrow in browser to return to animation.html
29. Click About to be taken to index.html then auto scroll to about section
30. Click Projects (Auto scroll to Projects section)
31. Hover over (desktop) press on (mobiel) Editing and click on View Portfolio Button
32. Be taken to editing.html
33. Hover (desktop) over each project thumbnail to ensure they shake
34. Click on a random project thumbnail to open modal
35. Close Modal
36. Click on View Project Button below thumbnail to open modal
37. Check title, project and description is visable and project video plays
38. Close modal
39. Click Contact (Auto scroll to contact section)
40. Click Home to be taken to index.html
41. Click back arrow in browser to return to animation.html
42. Click About to be taken to index.html then auto scroll to about section
43. Click Projects (Auto scroll to Projects section)
44. Hover over (desktop) press on (mobiel) Photography and click on View Portfolio Button
45. Be taken to photography.html
46. Hover (desktop) over each project thumbnail to ensure they shake
47. Click on a random project thumbnail to open modal
48. Close Modal
49. Click on View Project Button below thumbnail to open modal
50. Check title, project and description is visable and project video plays
51. Close modal
52. Click Contact (Auto scroll to contact section)
53. Click Home to be taken to index.html
54. Click back arrow in browser to return to animation.html
55. Click About to be taken to index.html then auto scroll to about section
56. Click Projects (Auto scroll to Projects section)
57. Hover over (desktop) press on (mobiel) Videography and click on View Portfolio Button
58. Be taken to videography.html
59. Hover (desktop) over each project thumbnail to ensure they shake
60. Click on a random project thumbnail to open modal
61. Close Modal
62. Click on View Project Button below thumbnail to open modal
63. Check title, project and description is visable and project video plays
64. Close modal
65. Click Contact (Auto scroll to contact section)
66. Click Home to be taken to index.html
67. Click back arrow in browser to return to animation.html
68. Click About to be taken to index.html then auto scroll to about section


## Deployment

The project was created in GitPod and hosted through GitHub. 
To clone the project:

- Go [Here](https://github.com/cod182/Milestone-Project-1)
- Click Code
- Choose either
    - Open with GitHub Desktop
    - Download as Zip
- You can now open the project in a IDE or host to a server


## Bugs

# Credits

- Media
    - Whale Hello provided 99% of images and video
    - vippng.com provided the waves image on index.html [Link To Site](https://www.vippng.com/maxp/bxbwRm/)
    - Mi Little Pad, Kids With Bricks and Cardiff Canine Citizens provided their logos for use on the site.

- Fonts
    - Google Fonts provided the roboto and lato fonts [Link To Site](https://fonts.google.com/)

- Icons
    - Fontawesome provided all the icons used. [Link To Site](https://fontawesome.com/)

- Modal
    - The start of the modal was provided by bootstrap and then built upon

- Image Flip bord on index.html
    - Codepen.io user Jeet provided an template card flip that was expanded upon to fulfil the sites needs [Link To Site](https://codepen.io/JEETPAL/details/ZMvwjV)     

- Video Backgroun
    - W3Schools [Link To Site](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video)
- Tutorials
    - WebDesign provided tutorials for creating verticle text [Link To Site](https://webdesign.tutsplus.com/)

- Javascript
    - James Bainbridge (Provided assistance in creating a script to stop videos playing when the modal was closed)
    - Stackoverflow (Porvided guidance toward closing of nav bar when link was clicked)

- General Information
    - User nemixu gave a highly informative talk on the project requirments.

---
## This project is for educational purposes only

### Created by Codie Stephens-Evans