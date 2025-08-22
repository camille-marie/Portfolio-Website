# Camille Toubol Fernandez - Portfolio Website

A modern, responsive portfolio website showcasing classical music excellence, audio engineering projects, and technical innovation.

## 🌟 Features

### Design & User Experience
- **Modern, Professional Design**: Clean, minimalist aesthetic with beautiful gradients and typography
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Subtle hover effects, fade-in animations, and smooth scrolling
- **Interactive Elements**: Hover states, loading animations, and dynamic navigation

### Content Sections
- **Hero Section**: Compelling introduction with call-to-action buttons
- **About Me**: Personal story and skills showcase
- **Technical Projects**: Detailed project cards with status indicators
- **Musical Performances**: Highlights of classical music achievements
- **Academic Applications**: University transfer applications and essays
- **Contact Form**: Interactive contact form with validation

### Technical Features
- **Mobile-First Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Throttled scroll events and efficient animations
- **Accessibility**: Keyboard navigation support and semantic HTML
- **Cross-Browser Compatible**: Works on all modern browsers

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. Download all files to your local directory
2. Open `index.html` in your web browser
3. The website should load immediately with all functionality

### File Structure
```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This file
└── [Your portfolio files]/
    ├── UMass Amherst Application/
    ├── University of Glasgow Application/
    └── University of Pittsburgh Application/
```

## 🎨 Customization

### Colors
The website uses a modern color palette that can be easily customized in `styles.css`:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent colors */
--primary-color: #667eea;
--secondary-color: #764ba2;
--success-color: #4caf50;
--error-color: #f44336;
```

### Typography
The website uses Inter font family for a clean, modern look. You can change this in the CSS:

```css
body {
    font-family: 'Your-Font-Name', sans-serif;
}
```

### Content Updates
To update content, simply edit the HTML file:

1. **Personal Information**: Update name, bio, and contact details
2. **Projects**: Add/remove project cards in the projects section
3. **Skills**: Modify the skills grid in the about section
4. **Links**: Update essay links and external references

## 📱 Responsive Design

The website automatically adapts to different screen sizes:

- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted grid layouts and spacing
- **Mobile**: Single-column layout with mobile navigation

## 🔧 Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Optimized scroll event handling
- Efficient CSS animations
- Minimal JavaScript footprint
- Optimized image loading

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 📝 Adding New Content

### Adding a New Project
```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
        <span class="project-status">Complete</span>
    </div>
    <p>Project description goes here.</p>
    <div class="project-tech">
        <span class="tech-tag">Technology</span>
    </div>
    <div class="project-links">
        <a href="#" class="project-link">View Details</a>
    </div>
</div>
```

### Adding a New Section
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section Title</h2>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

## 🎵 Portfolio Content Overview

### Musical Achievements
- Semi-finalist at Fischoff National Chamber Music Competition
- Collaborations with Grammy-winning ensembles (Lincoln Trio, Black Oak Ensemble)
- Original composition "White Space" performed at MIT Spatial Sound Lab
- Classical cello performance expertise

### Technical Projects
- **Surround-3 Engine**: Real-time granular synthesis system in C++
- **Pro Tools Session Analyzer**: C++ tool for audio session analysis
- **Video-to-Audio Design Analyzer**: Computer vision audio recommendations
- **Audio-Video Analysis Tools**: Educational and media processing tools

### Academic Applications
- University of Massachusetts Amherst (In Progress)
- University of Glasgow (Submitted)
- University of Pittsburgh (Submitted)

## 📧 Contact & Support

The contact form is currently set up for demonstration purposes. To make it functional:

1. **Email Integration**: Connect to an email service (SendGrid, Mailgun, etc.)
2. **Backend Processing**: Set up server-side form handling
3. **Database Storage**: Store contact form submissions if needed

## 🚀 Deployment

### Local Development
- Simply open `index.html` in your browser
- Use a local server for testing (recommended):
  ```bash
  # Python 3
  python -m http.server 8000
  
  # Node.js
  npx serve .
  
  # PHP
  php -S localhost:8000
  ```

### Web Hosting
- Upload all files to your web hosting provider
- Ensure all file paths are correct
- Test all functionality after deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your website will be available at `username.github.io/repository-name`

## 🔄 Updates & Maintenance

### Regular Updates
- Keep project statuses current
- Add new achievements and projects
- Update contact information as needed
- Refresh content to reflect current goals

### Performance Monitoring
- Test loading speeds regularly
- Optimize images and assets
- Monitor browser compatibility
- Update dependencies as needed

## 📄 License

This portfolio website template is created for Camille Toubol Fernandez. Feel free to use and modify for your own portfolio needs.

## 🙏 Acknowledgments

- **Fonts**: Inter font family from Google Fonts
- **Icons**: Font Awesome for beautiful iconography
- **Design Inspiration**: Modern web design principles and accessibility best practices

---

**Built with ❤️ for showcasing classical music excellence and technical innovation**

*Last updated: December 2024*
