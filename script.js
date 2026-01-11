/* === Toggle Menu === */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* === Scroll Logic === */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Select the link that matches the current section ID
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        };
    });

    /* Sticky Glass Header */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Close menu on scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* === Scroll Reveal Animations === */
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom', interval: 200 }); 
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content, .jewel-card', { origin: 'right', interval: 200 }); // Staggered reveal for cards

/* ================= typed js ================= */
const typed = new Typed('.multiple-text', {
    strings: [
        'Computer Engineering Undergraduate',
        'Web Designer', 
        'Content Writer & Creator',
        'Pencil Artist'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});


/* ================= MERGED POPUP LOGIC ================= */
    function openPopup(type) {
        // 1. Get all the elements we need to change
        const popup = document.getElementById('custom-popup');
        const icon = document.getElementById('popup-icon-display');
        const title = document.getElementById('popup-title');
        const text = document.getElementById('popup-text');
        const box = document.querySelector('.popup-box'); // Needed for changing border colors

        // 2. Reset Styles (Important!)
        // This ensures the box goes back to default Purple when you switch between buttons
        box.style.borderColor = "rgba(170, 0, 255, 0.5)"; 
        box.style.boxShadow = "none"; 
        
        // 3. Show the popup
        popup.style.display = 'flex';

        // 4. SWITCH CONTENT BASED ON TYPE
        if (type === 'languages') {
            // --- CASE 1: PROGRAMMING LANGUAGES ---
            title.innerText = "Programming Languages";
            icon.innerHTML = "<i class='bx bx-code-block' style='font-size: 3rem; color: #00c8ff;'></i>";
            
            // The Grid Layout for Languages
            text.innerHTML = `
                <div class="languages-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; text-align: left; margin-top: 10px;">
                    <span><i class='bx bxl-python' style='color:#ffde57;'></i> Python</span>
                    <span><i class='bx bxl-java' style='color:#f89820;'></i> Java</span>
                    <span><i class='bx bx-code-alt' style='color:#00599c;'></i> C</span>
                    <span><i class='bx bxl-html5' style='color:#e34c26;'></i> HTML/CSS</span>
                    <span><i class='bx bxl-javascript' style='color:#f0db4f;'></i> JavaScript</span>
                    <span><i class='bx bxl-typescript' style='color:#007acc;'></i> TypeScript</span>
                    <span><i class='bx bxl-dart' style='color:#00b4ab;'></i> Dart</span>
                    <span><i class='bx bx-code-curly' style='color:#4fb4d7;'></i> Ballerina</span>
                    <span><i class='bx bxl-php' style='color:#787cb5;'></i> PHP</span>
                </div>
            `;
            
        } else if (type === 'gmail') {
            // --- CASE 2: GMAIL ---
            title.innerText = "Send me an Email";
            icon.innerHTML = "<i class='bx bxl-gmail' style='font-size: 3rem; color: #EA4335;'></i>";
            text.innerHTML = "<span style='font-size: 1.2rem;'>uvinduakash3@gmail.com</span>";
            
            // Gmail Specific Styling (Red/Orange Glow)
            box.style.borderColor = "#EA4335";
            box.style.boxShadow = "0 0 20px rgba(234, 67, 53, 0.3)";

        } else if (type === 'whatsapp') {
            // --- CASE 3: WHATSAPP ---
            title.innerText = "Chat on WhatsApp";
            icon.innerHTML = "<i class='bx bxl-whatsapp' style='font-size: 3rem; color: #25D366;'></i>";
            text.innerHTML = "<span style='font-size: 1.2rem;'>+94 718844726</span>";
            
            // WhatsApp Specific Styling (Teal/Green Glow)
            box.style.borderColor = "#25D366";
            box.style.boxShadow = "0 0 20px rgba(37, 211, 102, 0.3)";
        }
    }

    // Function to Close the Popup
    function closePopup() {
        document.getElementById('custom-popup').style.display = 'none';
    }

    // Close when clicking outside the box
    document.getElementById('custom-popup').addEventListener('click', function(e) {
        if (e.target === this) {
            closePopup();
        }
    });

  /* --- MAIN ACCORDION TOGGLE --- */
    function toggleAccordion(element) {
        // Toggle the 'active' class on the clicked box
        element.classList.toggle('active');
        
        // Optional: Close other main boxes when one opens (Accordion style)
        // If you want them all to stay open, delete the lines below:
        const allBoxes = document.querySelectorAll('.accordion-box');
        allBoxes.forEach(box => {
            if (box !== element) {
                box.classList.remove('active');
            }
        });
    }

    /* --- MAIN ACCORDION TOGGLE --- */
    function toggleAccordion(headerElement) {
        // 1. Find the wrapper box for THIS header
        // .closest() looks up the tree to find the nearest class matching 'accordion-box'
        const box = headerElement.closest('.accordion-box');
        const content = box.querySelector('.accordion-content');
        
        const isOpen = box.classList.contains('active');

        // 2. Close all other boxes (Optional - keeps UI clean)
        document.querySelectorAll('.accordion-box').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('active');
                otherBox.querySelector('.accordion-content').style.maxHeight = null;
            }
        });

        // 3. Toggle THIS box
        if (!isOpen) {
            box.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            box.classList.remove('active');
            content.style.maxHeight = null;
        }
    }

    /* --- NESTED TOGGLE (Drawings) --- */
    function toggleNested(header) {
        event.stopPropagation(); // Stop click from closing the main box

        const nestedBox = header.closest('.nested-box');
        const content = nestedBox.querySelector('.nested-content');
        const icon = header.querySelector('i'); // Grabs the plus/minus icon
        
        // Find the Main Parent (The big Drawings box content wrapper)
        const mainContent = nestedBox.closest('.accordion-content');

        const isOpen = nestedBox.classList.contains('active');

        if (!isOpen) {
            // OPEN
            nestedBox.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
            
            // Swap Icon to Minus
            if(icon.classList.contains('bx-plus')) {
                icon.classList.replace('bx-plus', 'bx-minus');
            }

            // Grow Main Box
            mainContent.style.maxHeight = (mainContent.scrollHeight + content.scrollHeight) + "px";

        } else {
            // CLOSE
            nestedBox.classList.remove('active');
            content.style.maxHeight = null;
            
            // Swap Icon to Plus
            if(icon.classList.contains('bx-minus')) {
                icon.classList.replace('bx-minus', 'bx-plus');
            }

            // Shrink Main Box (Small delay to allow transition)
            setTimeout(() => {
                 mainContent.style.maxHeight = mainContent.scrollHeight + "px";
            }, 100); 
        }
    }


    /* --- WORK DATA STORAGE --- */
    const workData = {
        // === UNIVERSITY PROJECTS (4 Images + Desc) ===
        'pharmacy': {
            title: "Pharmacy Management System",
            desc: "This is my 1st web development project in 1st year in university. This system developed using HTML, CSS for frontend and backend used PHP. I used MySQL for the database and localhosting using WampServer.",
            images: [
                "images/pharmacy1.png", 
                "images/pharmacy2.png", 
                "images/pharmacy3.png", 
                "images/pharmacy4.png"
            ] 
        },
        'odl': {
            title: "Open Distance Learning System",
            desc: "This is my 2nd web development project in 2nd year in university. This system developed using HTML, CSS and JS for frontend and backend use Python Flask Framework. Also, this system includes role-based login to improve functionality. I used MySQL for database and Localhost using Wampserver.",
            images: [
                "images/odlms1.png", "images/odlms2.png", "images/odlms3.png", "images/odlms4.png"
            ]
        },
        'waste': {
            title: "Waste Management System (REBYNA)",
            desc: "This is 2nd year group project title. I was leader of our group. Also, we done it successfully and we get A- result. This project includes our conceptual idea for managing our university plastic waste.",
            images: [
                "images/rebyna1new.png", "images/rebyna2.png", "images/rebyna3.jpg", "images/rebyna4.png"
            ]
        },

        // === INDUSTRIAL PROJECTS (Desc Only) ===
        'transport': {
            title: "Transport Management System",
            desc: "This Transport Management System names JD & Brothers. It is my cousin brother's business and I joined it to handle IT section. This system is developing with CEYCODE Group. Currently, the system is in the developing stage.",
            images: [] // Empty array = No images shown
        },

        // === DRAWINGS (1 Image Only) ===
        'pencil1': { title: "Pencil Art 1", desc: "Two Parrots in Love", images: ["images/pencil1.jpg"] },
        'pencil2': { title: "Pencil Art 2", desc: "Joker - Joaquin Phoenix ", images: ["images/pencil2.jpg"] },
        'pencil3': { title: "Pencil Art 3", desc: "Mom Cat and Kitten", images: ["images/pencil3j.jpg"] },
        'pencil4': { title: "Pencil Art 4", desc: "Freedom", images: ["images/pencil4.jpg"] },
        'pencil5': { title: "Pencil Art 5", desc: "My Cricket Hero Kumar Sangakkara", images: ["images/pencil5.jpg"] },
        'pencil6': { title: "Pencil Art 6", desc: "Comedy Legend Mr.Bean", images: ["images/pencil6.jpg"] },
        
        'canvas1': { title: "Canvas Art 1", desc: "Beautiful Sunset", images: ["images/canvas1.jpg"] },
        'canvas2': { title: "Canvas Art 2", desc: "Material Drawing", images: ["images/canvas2.jpg"] }
    };

    /* --- OPEN POPUP FUNCTION --- */
    function openWorkPopup(id) {
        const data = workData[id];
        if(!data) return; // Safety check

        const popup = document.getElementById('work-popup');
        const title = document.getElementById('work-title');
        const desc = document.getElementById('work-desc');
        const gallery = document.getElementById('work-gallery');

        // 1. Set Text
        title.innerText = data.title;
        desc.innerText = data.desc;

        // 2. Build Image Gallery Based on Count
        gallery.innerHTML = ''; // Clear previous images
        gallery.className = 'work-gallery'; // Reset class

        if (data.images.length === 4) {
            // --- GRID MODE (University) ---
            gallery.classList.add('gallery-grid');
            data.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                gallery.appendChild(img);
            });
        } else if (data.images.length === 1) {
            // --- SINGLE MODE (Drawings) ---
            gallery.classList.add('gallery-single');
            const img = document.createElement('img');
            img.src = data.images[0];
            gallery.appendChild(img);
        }
        // If 0 images (Transport), gallery stays empty

        // 3. Show Popup
        popup.style.display = 'flex';
    }

    function closeWorkPopup() {
        document.getElementById('work-popup').style.display = 'none';
    }


    /* ================= EMAILJS CONTACT FORM ================= */
    // 1. Initialize EmailJS with your Public Key
    // REPLACE 'YOUR_PUBLIC_KEY' WITH THE KEY FROM EMAILJS DASHBOARD
    (function(){
        emailjs.init("kq3-IJ3sYppkp_2NY"); 
    })();

    // 2. The Send Mail Function
    function sendMail(event) {
        event.preventDefault(); // Stop page from reloading

        // Get values from form
        var params = {
            from_name: document.getElementById("user_name").value,
            from_email: document.getElementById("user_email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        // Change button text to show loading
        const btn = document.querySelector('.contact-form .btn');
        const originalText = btn.innerText;
        btn.innerText = "Sending...";

        // Send Email
        // REPLACE 'YOUR_SERVICE_ID' AND 'YOUR_TEMPLATE_ID'
        emailjs.send("service_0n1vncb", "template_gegbpli", params)
        .then(function(res) {
            // SUCCESS!
            btn.innerText = "Message Sent!";
            btn.style.background = "#00c8ff"; // Change to Success Color
            
            // Clear the form
            document.getElementById("contact-form").reset();

            // Optional: Use your custom popup to say thank you
            // openPopup('success'); // (If you want to implement a success popup)

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = ""; // Reset color
            }, 3000);

        }, function(error) {
            // ERROR
            alert("Failed to send message. Please try again.");
            btn.innerText = originalText;
        });
    }