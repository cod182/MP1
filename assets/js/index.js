// Help with this code provided by James Bainbridge
const videoModals = document.querySelectorAll('[data-video-modal]');

for (let i = 0; i < videoModals.length; i++) {
    const closeButton = videoModals[i].querySelector('[data-bs-dismiss]');

    closeButton.addEventListener('click', function() {
        const iframe = videoModals[i].querySelector('iframe');
        const video = videoModals[i].querySelector('video');

        if(iframe) {
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        } else if(video) {
            video.pause();
        }
      });
}
// Help with this code provided by stackoverflow searches
document.addEventListener("click", function(event) {
   if (event.target.classList.contains('nav-link')) {
      document.getElementById('navbar-sm-dropdown').classList.remove("show");
    }
  });