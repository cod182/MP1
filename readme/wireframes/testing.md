# Testing for Mileston Project 1 - Whale Hello

## Chrome Developer Tools - Lighthouse
|Pass| Page | Mobile/Desktop | Perf/Acces/Pract/SEO|Comment|
|:------------- |:-------------:| :-----:|:-------:|:-----:|
|1| index.html|Desktop | [95/94/93/100](readme/wireframes/lighthouse-results/desktop/index-desktop-1.png) |Large video content & use of gif slowing page load time. Changed from img to picture to deliver responsive images. Converted .gif to webm |
|1| index.html|Mobile | [76/94/93/100](readme/wireframes/lighthouse-results/mobile/index-mobile-1.png) | Large video content & use of gif slowing page load time. Changed from img to picture to deliver responsive images. Converted .gif to webm |
|2| index.html|Mobile | [89/94/93/100](readme/wireframes/lighthouse-results/mobile/index-mobile-2.png) |Large modal files slowing load time slightly|
|1| animation.html|Desktop | [76/97/100/90](readme/wireframes/lighthouse-results/desktop/animation-desktop-1.png) |Large modal files|Large image content & use of gif slowing page load time Change from img to picture to deliver responsive images. Convert .gif to webm|
|2| animation.html | Desktop | [91/98/100/90](readme/wireframes/lighthouse-results/desktop/animation-desktop-2.png) |Large video content & use of gif slowing page load time. Changed from img to picture to deliver responsive images. Converted .gif to webm|
|1| animation.html | Mobile | [43/96/100/92](readme/wireframes/lighthouse-results/mobile/animation-mobie-1.png) | Large video content & use of gif slowing page load time. Changed from img to picture to deliver responsive images. Converted .gif to webm |
|2| animation.html | Mobile | [89/98/100/92](readme/wireframes/lighthouse-results/mobile/animation-mobie-2.png) |img changed to picture with responsive images prevented long load times|
|1| editing.html | Desktop | [91/98/100/90](readme/wireframes/lighthouse-results/desktop/editing-desktop.png) |img changed to picture with responsive images prevented long load times|
|1| editing.html | Mobile | [90/98/93/90](readme/wireframes/lighthouse-results/mobile/editing-mobile-1.png) |img changed to picture with responsive images prevented long load times|
|1| photography.html | Desktop | [100/98/100/90](readme/wireframes/lighthouse-results/desktop/photography.html) |img changed to picture with responsive images prevented long load times|
|1| photography.html | Mobile | [96/98/93/92](readme/wireframes/lighthouse-results/mobile/photography-mobile.png) |img changed to picture with responsive images prevented long load times|
|1| videography.html | Desktop | [90/98/90/100](readme/wireframes/lighthouse-results/desktop/videography-desktop.png) |img changed to picture with responsive images prevented long load times|
|1| videography.html | Mobile | [96/98/93/92](readme/wireframes/lighthouse-results/mobile/videography-mobile.png) |img changed to picture with responsive images prevented long load times|
|1| 404.html | Desktop | [99/100/100/100](readme/wireframes/lighthouse-results/desktop/404-desktop.png) |Not a lot of content on the page so good scores|
|1| 404.html | Mobile | [98/100/100/100](readme/wireframes/lighthouse-results/mobile/404-mobile.png) |Not a lot of content on the page so good scores|

## Testing Process

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
18. Hover over (desktop) press on (mobile) Animation and click on View Portfolio Button
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
31. Hover over (desktop) press on (mobile) Editing and click on View Portfolio Button
32. Be taken to editing.html
33. Hover (desktop) over each project thumbnail to ensure they shake
34. Click on a random project thumbnail to open modal
35. Close Modal
36. Click on View Project Button below thumbnail to open modal
37. Check title, project and description is visable and project video plays
38. Close modal
39. Click Contact (Auto scroll to contact section)
40. Click Home to be taken to index.html
41. Click back arrow in browser to return to editing.html
42. Click About to be taken to index.html then auto scroll to about section
43. Click Projects (Auto scroll to Projects section)
44. Hover over (desktop) press on (mobile) Photography and click on View Portfolio Button
45. Be taken to photography.html
46. Hover (desktop) over each project thumbnail to ensure they shake
47. Click on a random project thumbnail to open modal
48. Close Modal
49. Click on View Project Button below thumbnail to open modal
50. Check title, project and description is visable and project video plays
51. Close modal
52. Click Contact (Auto scroll to contact section)
53. Click Home to be taken to index.html
54. Click back arrow in browser to return to photography.html
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
67. Click back arrow in browser to return to videography.html
68. Click About to be taken to index.html then auto scroll to about section

## Chrome Developer Tools - Testing Log
-----
### **iPhone 5/SE 320x568 & 568x320**
|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
|Verticle|320x568|Clipping noticed on index.html Hero-Image (Whale Hello) |Added media query for max-width414px background-size:containe to .hero-image|
|Verticle|320x568|Nav not collapsing when link clicked|vanilla javascript added - detailled in bugs section|
|Verticle|320x568|Testimonials text too larger|Added .testimonials-title to existing media query font-size:173% after checking in chrome dev tools |
|Verticle|320x568|Images on videography.html broken|corrected the path to image in html |
|Horizontal|568x320|Button on animation card of index.html stuck out of the bottom | added to existing media query .latest-height to 70% width|
-----
### **iPhone 6/7/8 357x667 & 667x357**

|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
|Verticle|357x667|Modal images overlapping on the bottom of each image|Changed the height on img-gal to 80%|
-----
### **iPhone 6/7/8 Plus 414x736 & 736x414**
|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
No issues found that weren't detected in previous tests
-----
### **iPad 768x1024 & 1024x768**
|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
No issues found that weren't detected in previous tests
-----
### **iPad Pro 1024x1336 1336x1024**
|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
No issues found that weren't detected in previous tests
-----
## Handheld Device Realworld Testing - Testing Log
### **iPhone XS Max**

|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
|iPhone XS Max|Verticle|About video not playing|added playsinline to video tag|
|iPhone XS Max|Verticle|contact video not playing|removed extra .mp4 text from link|
|iPhone XS Max|Verticle|about-bg video had black bar to the top and bottom after resizing for lower resolution|resized the video with custom resolution|

-----
### **iPhone 12 Pro**

|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
No issues found that weren't detected in previous tests

-----
### **iPad Pro 11**

|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
No issues found that weren't detected in previous tests

-----
### **Samsung A40**

|Page|Test|Result|
|---|---|---|
|index.html|Page Load Quickly|Pass|
|index.html|About Link Works|Pass|
|index.html|About Video Plays|Pass|
|index.html|Home Link Works|Pass|
|index.html|Project Link Works|Pass|
|index.html|Latest Project Cards Flip|Pass|
|index.html|Modal Opens/Closes|Pass|
|index.html|Top of Page Button Works|Pass|
|index.html|Contact Link Works|Pass|
|index.html|Contact Form Works|Pass|
|index.html|Brand Icon Link Works|Pass|
|index.html|Animation Page Link Works|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|
|animation.html|Modal Opens|Pass|
|animation.html|Video Plays|Pass|
|animation.html|Videos stops when Modal Closed|Pass|
|animation.html|Contact Link Works|Pass|
|animation.html|Brand Link Works|Pass|
|animation|About Link Works|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|
|editing.html|Modal Opens|Pass|
|editing.html|Video Plays|Pass||
|editing.html|Videos stops when Modal Closed|Pass|
|editing.html|Contact Link Works|Pass|
|editing.html|Brand Link Works|Pass|
|editing|About Link Works|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|
|photography.html|Modal Opens|Pass|
|photography.html|Video Plays|Pass|
|photography.html|Videos stops when Modal Closed|Pass|
|photography.html|Contact Link Works|Pass|
|photography.html|Brand Link Works|Pass|
|photography|About Link Works|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|
|videography.html|Modal Opens|Pass|
|videography.html|Video Plays|Pass|
|videography.html|Videos stops when Modal Closed|Pass|
|videography.html|Contact Link Works|Pass|
|videography.html|Brand Link Works|Pass|
|videography|About Link Works|Pass|
|404.html|Head Home Button Works|Pass|

### Issues
| Horizontal/Verticle | Resolution | Comment | Solution |
|---|---|---|---|
No issues found that weren't detected in previous tests
-----
## Screen Testing - Testing Log
-----
### **Laptop 13" Screen 1280x800**

|Page|Test|Result Safari|Result Chrome
|---|---|---|---|
|index.html|Page Load Quickly|Pass|Pass|
|index.html|About Link Works|Pass|Pass|
|index.html|About Video Plays|Pass|Pass|
|index.html|Home Link Works|Pass|Pass|
|index.html|Project Link Works|Pass|Pass|
|index.html|Latest Project Cards Flip|Pass|Pass|
|index.html|Modal Opens/Closes|Pass|Pass|
|index.html|Top of Page Button Works|Pass|Pass|
|index.html|Contact Link Works|Pass|Pass|
|index.html|Contact Form Works|Pass|Pass|
|index.html|Brand Icon Link Works|Pass|Pass|
|index.html|Animation Page Link Works|Pass|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|Pass|
|animation.html|Modal Opens|Pass|Pass|
|animation.html|Video Plays|Pass|Pass|
|animation.html|Videos stops when Modal Closed|Pass|Pass|
|animation.html|Contact Link Works|Pass|Pass|
|animation.html|Brand Link Works|Pass|Pass|
|animation|About Link Works|Pass|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|Pass|
|editing.html|Modal Opens|Pass|Pass|
|editing.html|Video Plays|Pass|Pass|
|editing.html|Videos stops when Modal Closed|Pass|Pass|
|editing.html|Contact Link Works|Pass|Pass|
|editing.html|Brand Link Works|Pass|Pass|
|editing|About Link Works|Pass|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|Pass|
|photography.html|Modal Opens|Pass|Pass|
|photography.html|Video Plays|Pass|Pass|
|photography.html|Videos stops when Modal Closed|Pass|Pass|
|photography.html|Contact Link Works|Pass|Pass|
|photography.html|Brand Link Works|Pass|Pass|
|photography|About Link Works|Pass|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|Pass|
|videography.html|Modal Opens|Pass|Pass|
|videography.html|Video Plays|Pass|Pass|
|videography.html|Videos stops when Modal Closed|Pass|Pass|
|videography.html|Contact Link Works|Pass|Pass|
|videography.html|Brand Link Works|Pass|Pass|
|videography|About Link Works|Pass|Pass|
|404.html|Head Home Button Works|Pass|Pass|

### Issues
| Resolution | Comment | Solution |
|---|---|---|
|1280x800|Contact message box on index.html, text doesn't disappear when clicked|Added the text as a placeholder|

### **Laptop 16" Screen 3072x1920**

|Page|Test|Result Safari|Result Chrome
|---|---|---|---|
|index.html|Page Load Quickly|Pass|Pass|
|index.html|About Link Works|Pass|Pass|
|index.html|About Video Plays|Pass|Pass|
|index.html|Home Link Works|Pass|Pass|
|index.html|Project Link Works|Pass|Pass|
|index.html|Latest Project Cards Flip|Pass|Pass|
|index.html|Modal Opens/Closes|Pass|Pass|
|index.html|Top of Page Button Works|Pass|Pass|
|index.html|Contact Link Works|Pass|Pass|
|index.html|Contact Form Works|Pass|Pass|
|index.html|Brand Icon Link Works|Pass|Pass|
|index.html|Animation Page Link Works|Pass|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|Pass|
|animation.html|Modal Opens|Pass|Pass|
|animation.html|Video Plays|Pass|Pass|
|animation.html|Videos stops when Modal Closed|Pass|Pass|
|animation.html|Contact Link Works|Pass|Pass|
|animation.html|Brand Link Works|Pass|Pass|
|animation|About Link Works|Pass|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|Pass|
|editing.html|Modal Opens|Pass|Pass|
|editing.html|Video Plays|Pass|Pass|
|editing.html|Videos stops when Modal Closed|Pass|Pass|
|editing.html|Contact Link Works|Pass|Pass|
|editing.html|Brand Link Works|Pass|Pass|
|editing|About Link Works|Pass|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|Pass|
|photography.html|Modal Opens|Pass|Pass|
|photography.html|Video Plays|Pass|Pass|
|photography.html|Videos stops when Modal Closed|Pass|Pass|
|photography.html|Contact Link Works|Pass|Pass|
|photography.html|Brand Link Works|Pass|Pass|
|photography|About Link Works|Pass|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|Pass|
|videography.html|Modal Opens|Pass|Pass|
|videography.html|Video Plays|Pass|Pass|
|videography.html|Videos stops when Modal Closed|Pass|Pass|
|videography.html|Contact Link Works|Pass|Pass|
|videography.html|Brand Link Works|Pass|Pass|
|videography|About Link Works|Pass|Pass|
|404.html|Head Home Button Works|Pass|Pass|

### Issues
| Resolution | Comment | Solution |
|---|---|---|
No issues found that weren't detected in previous tests

### **Desktop 22" Screen 1680x1050**

|Page|Test|Result Safari|Result Chrome
|---|---|---|---|
|index.html|Page Load Quickly|Pass|Pass|
|index.html|About Link Works|Pass|Pass|
|index.html|About Video Plays|Pass|Pass|
|index.html|Home Link Works|Pass|Pass|
|index.html|Project Link Works|Pass|Pass|
|index.html|Latest Project Cards Flip|Pass|Pass|
|index.html|Modal Opens/Closes|Pass|Pass|
|index.html|Top of Page Button Works|Pass|Pass|
|index.html|Contact Link Works|Pass|Pass|
|index.html|Contact Form Works|Pass|Pass|
|index.html|Brand Icon Link Works|Pass|Pass|
|index.html|Animation Page Link Works|Pass|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|Pass|
|animation.html|Modal Opens|Pass|Pass|
|animation.html|Video Plays|Pass|Pass|
|animation.html|Videos stops when Modal Closed|Pass|Pass|
|animation.html|Contact Link Works|Pass|Pass|
|animation.html|Brand Link Works|Pass|Pass|
|animation|About Link Works|Pass|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|Pass|
|editing.html|Modal Opens|Pass|Pass|
|editing.html|Video Plays|Pass|Pass|
|editing.html|Videos stops when Modal Closed|Pass|Pass|
|editing.html|Contact Link Works|Pass|Pass|
|editing.html|Brand Link Works|Pass|Pass|
|editing|About Link Works|Pass|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|Pass|
|photography.html|Modal Opens|Pass|Pass|
|photography.html|Video Plays|Pass|Pass|
|photography.html|Videos stops when Modal Closed|Pass|Pass|
|photography.html|Contact Link Works|Pass|Pass|
|photography.html|Brand Link Works|Pass|Pass|
|photography|About Link Works|Pass|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|Pass|
|videography.html|Modal Opens|Pass|Pass|
|videography.html|Video Plays|Pass|Pass|
|videography.html|Videos stops when Modal Closed|Pass|Pass|
|videography.html|Contact Link Works|Pass|Pass|
|videography.html|Brand Link Works|Pass|Pass|
|videography|About Link Works|Pass|Pass|
|404.html|Head Home Button Works|Pass|Pass|

### Issues
| Resolution | Comment | Solution |
|---|---|---|
No issues found that weren't detected in previous tests

### **iMac 5k 27" Screen 5120x2880**

|Page|Test|Result Safari|Result Chrome
|---|---|---|---|
|index.html|Page Load Quickly|Pass|Pass|
|index.html|About Link Works|Pass|Pass|
|index.html|About Video Plays|Pass|Pass|
|index.html|Home Link Works|Pass|Pass|
|index.html|Project Link Works|Pass|Pass|
|index.html|Latest Project Cards Flip|Pass|Pass|
|index.html|Modal Opens/Closes|Pass|Pass|
|index.html|Top of Page Button Works|Pass|Pass|
|index.html|Contact Link Works|Pass|Pass|
|index.html|Contact Form Works|Pass|Pass|
|index.html|Brand Icon Link Works|Pass|Pass|
|index.html|Animation Page Link Works|Pass|Pass|
|animation.html|Thumbnail Shakes on hover|Pass|Pass|
|animation.html|Modal Opens|Pass|Pass|
|animation.html|Video Plays|Pass|Pass|
|animation.html|Videos stops when Modal Closed|Pass|Pass|
|animation.html|Contact Link Works|Pass|Pass|
|animation.html|Brand Link Works|Pass|Pass|
|animation|About Link Works|Pass|Pass|
|editing.html|Thumbnail Shakes on hover|Pass|Pass|
|editing.html|Modal Opens|Pass|Pass|
|editing.html|Video Plays|Pass|Pass|
|editing.html|Videos stops when Modal Closed|Pass|Pass|
|editing.html|Contact Link Works|Pass|Pass|
|editing.html|Brand Link Works|Pass|Pass|
|editing|About Link Works|Pass|Pass|
|photography.html|Thumbnail Shakes on hover|Pass|Pass|
|photography.html|Modal Opens|Pass|Pass|
|photography.html|Video Plays|Pass|Pass|
|photography.html|Videos stops when Modal Closed|Pass|Pass|
|photography.html|Contact Link Works|Pass|Pass|
|photography.html|Brand Link Works|Pass|Pass|
|photography|About Link Works|Pass|Pass|
|videography.html|Thumbnail Shakes on hover|Pass|Pass|
|videography.html|Modal Opens|Pass|Pass|
|videography.html|Video Plays|Pass|Pass|
|videography.html|Videos stops when Modal Closed|Pass|Pass|
|videography.html|Contact Link Works|Pass|Pass|
|videography.html|Brand Link Works|Pass|Pass|
|videography|About Link Works|Pass|Pass|
|404.html|Head Home Button Works|Pass|Pass|

### Issues
| Resolution | Comment | Solution |
|---|---|---|
|5120x2880|hero-bg did not span whole width of page|changed background-size to cover|
|5120x2880|contact-video was rendering with black square on it|resolution of media was too high, re-encode at lower resolution|
