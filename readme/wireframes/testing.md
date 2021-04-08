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


## Chrome Developer Tools - Testing Log

### iPhone 5/SE

| Device | Resolution | Comment | Solution |
|---|---|---|---|
|iPhone 5/SE|320x568|Clipping noticed on index.html Hero-Image (Whale Hello) |Added media query for max-width414px background-size:containe to .hero-image|
|iPhone 5/SE|320x568|Nav not collapsing when link clicked|vanilla javascript added - detailled in bugs section|
|iPhone 5/SE|320x568|Testimonials text too larger|Added .testimonials-title to existing media query font-size:173% after checking in chrome dev tools |

### iPhone 6/7/8

| Device | Resolution | Comment | Solution |
|---|---|---|---|
|iPhone 6/7/8|357x667|||
|iPhone 6/7/8|357x667|||
|iPhone 6/7/8|357x667|||
|iPhone 6/7/8|357x667|||