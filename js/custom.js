// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("countdownModal");
    var span = document.getElementsByClassName("close")[0];
    var daysElement = document.getElementById("days");
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");

    var targetDate = new Date("July 1, 2025 00:00:00").getTime();

    modal.style.display = "block";

    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            modal.style.display = "none";
        }
    }, 1000);

    span.onclick = function() {
        modal.style.display = "none";
        clearInterval(countdownInterval);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            clearInterval(countdownInterval);
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var daysElement = document.getElementById("days");
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");

    var targetDate = new Date("July 1, 2025 00:00:00").getTime();

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            daysElement.textContent = 0;
            hoursElement.textContent = 0;
            minutesElement.textContent = 0;
            secondsElement.textContent = 0;
        }
    }

    updateCountdown(); // Initial call to set the countdown immediately
    var countdownInterval = setInterval(updateCountdown, 1000);
});



document.addEventListener("DOMContentLoaded", function() {
    var modalLinks = document.querySelectorAll('.angebot-link');
    var modals = document.querySelectorAll('.modal');
    var spans = document.getElementsByClassName("close");

    modalLinks.forEach(function(link) {
        link.onclick = function(event) {
            event.preventDefault();
            var modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = "block";
        }
    });

    Array.from(spans).forEach(function(span) {
        span.onclick = function() {
            Array.from(modals).forEach(function(modal) {
                modal.style.display = "none";
            });
        }
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            Array.from(modals).forEach(function(modal) {
                modal.style.display = "none";
            });
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var modalLinks = document.querySelectorAll('.angebot-link');
    var modals = document.querySelectorAll('.modal');
    var spans = document.getElementsByClassName("close");

    modalLinks.forEach(function(link) {
        link.onclick = function(event) {
            event.preventDefault();
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        }
    });

    Array.from(spans).forEach(function(span) {
        span.onclick = function() {
            Array.from(modals).forEach(function(modal) {
                modal.style.display = "none";
            });
        }
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            Array.from(modals).forEach(function(modal) {
                modal.style.display = "none";
            });
        }
    }

    // Add event listener to modal links to pass the title to the contact form
    modals.forEach(function(modal) {
        var contactLink = modal.querySelector('.contact-link');
        contactLink.onclick = function(event) {
            event.preventDefault();
            var title = modal.querySelector('h3').textContent;
            window.location.href = 'contact.html?subject=' + encodeURIComponent(title);
        }
    });
});



function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var mailtoLink = 'mailto:info@cvolution.ch'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);

    window.location.href = mailtoLink;
    
    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }