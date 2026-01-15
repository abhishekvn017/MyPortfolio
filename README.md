# V N Abhishek - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Computer Science Engineering student and Full Stack Developer.

## 🌟 Features

- **Modern Design**: Dark theme with vibrant gradients and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive UI**: Smooth scrolling, typing animations, and hover effects
- **Project Showcase**: Direct integration with GitHub repositories
- **Contact Form**: Easy way for recruiters and collaborators to reach out
- **Performance Optimized**: Fast loading times and smooth animations

## 🚀 Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript
- AOS (Animate On Scroll) library
- Font Awesome icons
- Google Fonts (Inter, Space Grotesk)

## 📦 Deployment Instructions

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it: `portfolio` or `abhishekvn017.github.io`
   - Make it public

2. **Push your code to GitHub**
   ```bash
   cd e:/myportfolio
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/abhishekvn017/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Under "Source", select `main` branch
   - Click "Save"
   - Your site will be live at: `https://abhishekvn017.github.io/portfolio`

### Option 2: Netlify

1. **Sign up at [Netlify](https://netlify.com)**
2. **Drag and drop** the `myportfolio` folder to Netlify
3. **Your site is live!** Netlify provides a free URL

### Option 3: Vercel

1. **Sign up at [Vercel](https://vercel.com)**
2. **Import from GitHub** or drag and drop files
3. **Deploy** - your site is live in seconds

## 💻 Local Development

To run the portfolio locally:

1. **Navigate to the project directory**
   ```bash
   cd e:/myportfolio
   ```

2. **Open with a local server**
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Using Node.js (if you have `http-server` installed):
     ```bash
     npx http-server
     ```
   - Or simply open `index.html` in your browser

3. **View in browser**: Open `http://localhost:8000`

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;  /* Change primary color */
    --secondary-color: #ec4899; /* Change secondary color */
    /* ... other variables */
}
```

### Adding Projects
Edit the projects section in `index.html`:
```html
<div class="project-card">
    <!-- Add your project details here -->
</div>
```

### Updating Contact Information
1. Change email in `index.html` (multiple locations)
2. Update phone number and address
3. Add your LinkedIn URL

## 📱 Sections

- **Hero**: Animated introduction with typing effect
- **About**: Professional summary and contact information
- **Skills**: Technical skills organized by category
- **Projects**: Featured GitHub projects with descriptions
- **Education**: Academic background and certifications
- **Contact**: Contact form and direct communication options

## 🔗 Live Demo

Once deployed, share your portfolio at:
- GitHub Pages: `https://abhishekvn017.github.io/portfolio`
- Custom domain (optional)

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

**V N Abhishek**
- Email: abhiabde17@gmail.com
- Phone: +91 8147859842
- GitHub: [@abhishekvn017](https://github.com/abhishekvn017)

---

Made with ❤️ and ☕
