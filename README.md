# ⚡ Personal Portfolio Website

![Project Status](https://img.shields.io/badge/status-live-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

A fully responsive, dark-themed personal portfolio website featuring a **Neon/Glassmorphism** design. This project showcases my university coursework, industrial projects, and artwork using interactive accordions and custom JavaScript animations.

## 🚀 Live Demo
> **[Click here to view the Live Site](https://yourusername.github.io/your-repo-name)** > *(Replace the link above once your GitHub Page is active)*

---

## ✨ Key Features

* **🎨 Glassmorphism Design:** Modern, dark UI with neon glows and transparent glass effects.
* **📱 Fully Responsive:** Optimized layout for Desktops, Tablets, and Mobile phones.
* **📂 Interactive Works Section:** * Custom **Accordion Menus** for organized project categories.
    * **Dynamic Popups** (JS-driven) displaying project details with Grid layouts (for University projects) and Full-screen views (for Art).
* **📧 Functional Contact Form:** * Connected to **Gmail** via **EmailJS** (Serverless).
    * Includes auto-reply and success/error handling.
* **✨ Canvas Animations:** Custom JavaScript background animation (Floating Tech Tiles) in the Contact section.
* **🕵️ Scroll Spy:** Navigation bar automatically highlights the active section while scrolling.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Icons:** Boxicons
* **Email Service:** EmailJS (Client-side integration)
* **Hosting:** GitHub Pages

---



## ⚙️ Installation & Setup

If you want to run this project locally on your machine:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/portfolio-2026.git](https://github.com/yourusername/portfolio-2026.git)
    ```

2.  **Open in VS Code**
    ```bash
    cd portfolio-2026
    code .
    ```

3.  **Launch the Index File**
    * Simply open `index.html` in your browser.
    * OR use the "Live Server" extension in VS Code.

---

## 🔑 EmailJS Configuration

This project uses **EmailJS** for the contact form. To make the form work in your own clone, you need your own API keys:

1.  Create an account at [EmailJS.com](https://www.emailjs.com/).
2.  Create a **Service** (Gmail) and a **Template**.
3.  Open `index.html` (or your script file) and replace the placeholders:

```javascript
// Initialize with your Public Key
emailjs.init("YOUR_PUBLIC_KEY");

// In the sendMail function
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
