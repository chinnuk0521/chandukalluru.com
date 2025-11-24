# The Chandu Chronicle - Newspaper-Style Portfolio Website

A unique personal portfolio website designed to look like a classic newspaper, inspired by The Hindu. This website showcases professional experience, projects, proposals, and achievements in an elegant, print-newspaper aesthetic with modern web functionality.

🌐 **Live Website**: [chandukalluru.com](https://chandukalluru.com)

## 📰 About

The Chandu Chronicle is a personal portfolio website that combines the timeless appeal of traditional newspaper design with modern web technologies. Every page is styled to look like a newspaper page, complete with masthead, columns, headlines, and editorial sections.

## ✨ Features

### Design & Aesthetics
- **Newspaper-Style Layout**: Multi-column grid layouts mimicking traditional newspaper design
- **Classic Typography**: Serif fonts (Georgia, Times New Roman) with proper hierarchy
- **Paper Texture**: Subtle background texture for authentic newspaper feel
- **Drop Caps**: Traditional drop-cap styling for article introductions
- **Black & White Photography**: Profile photo with grayscale filter
- **Column Rules**: Dashed vertical dividers between columns
- **Masthead**: Professional newspaper header with date, volume, and navigation

### Functionality
- **Dynamic Date & Time**: Automatically updates to show current date and time
- **Auto-Updating Experience**: Professional experience calculated from start date (May 2022)
- **Read More/Less**: Expandable content sections for proposals and projects
- **Citation Links**: Newspaper-style citation references [1], [2] with smooth scrolling
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Navigation**: Internal links with smooth scroll behavior
- **Social Icons**: LinkedIn and GitHub icons with black & white styling

### Pages & Sections
1. **Front Page** (`index.html`) - Main introduction and quick news
2. **Headlines** (`headlines.html`) - Projects and achievements in headline format
3. **Editorial** (`editorial.html`) - Thoughts and articles
4. **Business** (`business.html`) - Work experience and technical skills
5. **Projects** (`projects.html`) - Detailed project showcase
6. **Proposals** (`proposals.html`) - Innovative proposals and ideas
7. **Classifieds** (`classifieds.html`) - Contact information and professional summary

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for content structure
- **CSS3**: Advanced styling with Grid, Flexbox, and custom properties
- **JavaScript (Vanilla)**: Dynamic content updates and interactivity
- **No Frameworks**: Pure, lightweight, and fast-loading

## 📁 File Structure

```
chandukalluru.com/
│
├── index.html          # Front Page
├── headlines.html      # Headlines & Achievements
├── editorial.html      # Editorial Articles
├── business.html       # Work Experience & Skills
├── projects.html      # Projects Portfolio
├── proposals.html      # Proposals & Innovation
├── classifieds.html    # Contact & Summary
│
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
│
├── Chandu.jpg          # Profile photo
│
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A web server (for local development) or GitHub Pages (for hosting)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/chinnuk0521/chandukalluru.com.git
   cd chandukalluru.com
   ```

2. **Open in browser**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**
   - Navigate to `http://localhost:8000` (or the port you specified)

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `main` branch as source
   - Choose `/ (root)` folder
   - Click Save

2. **Custom Domain Setup**
   - In Pages settings, add your custom domain: `chandukalluru.com`
   - Update DNS records with your domain provider:
     - Type: `A` or `CNAME`
     - Value: GitHub Pages IP or `chinnuk0521.github.io`
   - Wait for DNS propagation (can take up to 24 hours)

3. **HTTPS**
   - GitHub Pages automatically provides HTTPS for custom domains
   - Enable "Enforce HTTPS" in Pages settings

### Alternative Hosting Options
- **Netlify**: Drag and drop the folder or connect GitHub repository
- **Vercel**: Import GitHub repository
- **Traditional Web Hosting**: Upload files via FTP/SFTP

## 🎨 Customization

### Updating Personal Information

1. **Profile Photo**: Replace `Chandu.jpg` with your photo
2. **Personal Details**: Update content in `index.html` (Front Page section)
3. **Work Experience**: Edit `business.html` (Business section)
4. **Projects**: Modify `projects.html` (Projects section)
5. **Contact Info**: Update `index.html` and `classifieds.html`

### Styling Customization

- **Colors**: Edit color values in `style.css`
- **Typography**: Modify font families and sizes in `style.css`
- **Layout**: Adjust grid columns and spacing in `style.css`

### Dynamic Content

- **Experience Calculation**: Update start date in `script.js` (line ~30)
  ```javascript
  const startDate = new Date(2022, 4, 1); // May 2022
  ```
- **Date/Time Format**: Modify `updateDateTime()` function in `script.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (2-4 columns)
- **Tablet**: 768px - 1199px (2 columns)
- **Mobile**: < 768px (1 column)

## 🔗 External Links

- **LinkedIn**: [linkedin.com/in/chandu-kalluru](https://linkedin.com/in/chandu-kalluru)
- **GitHub**: [github.com/chinnuk0521](https://github.com/chinnuk0521)
- **Chandu UI**: [chanduui.space](https://chanduui.space)
- **NPM Package**: [npmjs.com/~chanduui](https://www.npmjs.com/~chanduui)

## 📊 Key Sections

### Front Page
- Professional introduction
- Current role and focus
- Quick news (Education, Contact, etc.)
- Profile photo with newspaper-style caption

### Headlines
- Project announcements
- Achievement highlights
- News-style headlines with excerpts

### Business
- Work experience timeline
- Technical skills
- Professional achievements

### Projects
- **Chandu UI Component Library**: React component library published to NPM
- **Data Visualization Portfolio**: 5 advanced projects with 43+ visualizations
- **Clykur Platform**: AI-powered freelance network

### Proposals
- Healthcare Platform Proposal
- Global Freelance Network
- Decentralized GPU Compute Marketplace
- Skill-Based Hiring Platform

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## 👤 Author

**Chandu Kalluru**
- Email: chandu.kalluru@outlook.com
- LinkedIn: [linkedin.com/in/chandu-kalluru](https://linkedin.com/in/chandu-kalluru)
- GitHub: [github.com/chinnuk0521](https://github.com/chinnuk0521)

## 🙏 Acknowledgments

- Design inspired by **The Hindu** newspaper
- Typography and layout patterns from classic newspaper design
- Modern web standards and best practices

## 📈 Future Enhancements

- [ ] Dark mode toggle
- [ ] Print stylesheet optimization
- [ ] RSS feed integration
- [ ] Blog functionality
- [ ] Search functionality
- [ ] Multi-language support

## 🤝 Contributing

This is a personal portfolio website. However, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For inquiries, collaborations, or questions:
- **Personal Email**: chandu.kalluru@outlook.com
- **Collaboration Email**: buildwithchandu@hotmail.com
- **Phone**: +91-8179299096

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Last updated: January 2025*

