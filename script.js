// Search functionality for input fields with the class 'searchInput'
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#searchInput');
    const items = document.querySelectorAll('li'); // Make sure these list items exist!

    searchInput.addEventListener('keyup', function () {
        let filter = this.value.toUpperCase();

        items.forEach(item => {
            let text = item.textContent || item.innerText;
            if (text.toUpperCase().indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});


// Function to provide instructions for bookmarking the page
function bookmarkPage() {
    let userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('chrome') > -1 || userAgent.indexOf('edge') > -1) {
        alert('Press Ctrl + D (Windows) or Cmd + D (Mac) to bookmark this page in Chrome/MS Edge.');
    } else if (userAgent.indexOf('firefox') > -1) {
        alert('Press Ctrl + D (Windows) or Cmd + D (Mac) to bookmark this page in Firefox.');
    } else if (userAgent.indexOf('safari') > -1) {
        alert('Press Cmd + D to bookmark this page in Safari.');
    } else if (userAgent.indexOf('msie') > -1 || !!document.documentMode == true) { // IE check
        alert('Press Ctrl + D to bookmark this page in Internet Explorer.');
    } else if (userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr') > -1) {
        alert('Press Ctrl + D (Windows) or Cmd + D (Mac) to bookmark this page in Opera.');
    } else {
        alert('Press Ctrl + D (Windows) or Cmd + D (Mac) to bookmark this page.');
    }
}
 // for particle effect
    particlesJS.load('particles-js', 'particles.json', function () {
      console.log('particles.js loaded - callback');
    });