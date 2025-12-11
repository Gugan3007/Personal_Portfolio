# Gugan S S - Portfolio Website

A modern, production-ready portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Multi-page Application** with React Router
- **Smooth Animations** using Framer Motion
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI/UX** with gradient effects and hover animations
- **Clean Code Architecture** with reusable components
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Production-ready** code structure

## 📁 Project Structure

```
/
├── components/
│   ├── layout/
│   │   ├── Layout.tsx       # Main layout wrapper
│   │   ├── Header.tsx       # Sticky navigation header
│   │   └── Footer.tsx       # Footer with links and social media
│   └── ui/
│       ├── Button.tsx       # Reusable button component
│       ├── SectionTitle.tsx # Section title with animations
│       ├── ProjectCard.tsx  # Project display card
│       ├── SkillCard.tsx    # Skill display card
│       └── BlogCard.tsx     # Blog post card
├── pages/
│   ├── Home.tsx            # Landing page with hero section
│   ├── About.tsx           # About page with background info
│   ├── Skills.tsx          # Skills and expertise showcase
│   ├── Projects.tsx        # Project portfolio with filters
│   ├── Experience.tsx      # Education and work experience
│   ├── Blog.tsx            # Blog listing page
│   ├── BlogPost.tsx        # Individual blog post page
│   └── Contact.tsx         # Contact form and information
├── styles/
│   └── globals.css         # Global styles and Tailwind imports
├── App.tsx                 # Main app component with routing
├── main.tsx                # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework:** React 18.3
- **Language:** TypeScript 5.4
- **Build Tool:** Vite 5.1
- **Styling:** Tailwind CSS 4.0
- **Animations:** Framer Motion (motion/react) 10.18
- **Routing:** React Router DOM 6.22
- **Icons:** Lucide React 0.344

## 📦 Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

The application will start at `http://localhost:5173`

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 🎨 Customization

### Colors
The color scheme is defined in `/styles/globals.css`:
- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Accent: Amber (#f59e0b)

You can modify these colors in the `:root` CSS variables.

### Content
Update personal information in the respective page components:
- **Home.tsx** - Hero section and introduction
- **About.tsx** - Background and biography
- **Skills.tsx** - Technical skills and expertise
- **Projects.tsx** - Project portfolio
- **Experience.tsx** - Education and work experience
- **Contact.tsx** - Contact information

### Images
The portfolio uses Figma asset imports for images. Replace the `figma:asset` imports with your own images:
```typescript
import profileImage from 'figma:asset/your-image-hash.png';
```

## 🌐 Pages

1. **Home** (`/`) - Landing page with hero section, stats, and key highlights
2. **About** (`/about`) - Detailed background, education, and values
3. **Skills** (`/skills`) - Technical skills categorized by domain
4. **Projects** (`/projects`) - Portfolio of projects with filtering
5. **Experience** (`/experience`) - Education timeline and achievements
6. **Blog** (`/blog`) - Blog posts with search functionality
7. **Blog Post** (`/blog/:id`) - Individual blog post pages
8. **Contact** (`/contact`) - Contact form and social links

## ✨ Key Features

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects on cards and buttons
- Loading states and micro-interactions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation
- Optimized layouts for all screen sizes

### Performance
- Code splitting with React Router
- Lazy loading of components
- Optimized animations with Framer Motion
- Fast build times with Vite

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus states for interactive elements

## 📝 Content Sections

### Projects Featured
1. Mood-Based Music Recommender (Python, NLP, Spotify API)
2. Humanoid Robot - Embedded Systems (STM32F4, Raspberry Pi)
3. ParamaEdu - Online Learning Platform (HTML, CSS, JavaScript)
4. Algorithm Visualizer (React, TypeScript)
5. Smart Home Automation (ESP32, IoT)
6. Data Structure Library in C

### Skills Highlighted
- **Languages:** C, C++, Python, Java, Haskell, JavaScript
- **Web:** HTML, CSS, Tailwind, Bootstrap, React
- **Databases:** MySQL, MongoDB, PostgreSQL, Firebase
- **Embedded:** STM32F4, Raspberry Pi, Arduino
- **Tools:** Git, GitHub, VS Code, MATLAB

### Education
- B.Tech in Computer Science Engineering, Amrita Vishwa Vidyapeetham (2023-2027)
- Higher Secondary Education (92%)
- Secondary Education (87%)

## 🚀 Deployment

This project can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- Any static hosting service

### Vercel Deployment
```bash
npm install -g vercel
vercel
```

### Netlify Deployment
```bash
npm run build
# Deploy the 'dist' folder
```

## 🤝 Contact Information

- **Email:** gugansaravanan3007@gmail.com
- **Phone:** +91 9150158370
- **Location:** Coimbatore, Tamil Nadu, India
- **GitHub:** github.com/gugan
- **LinkedIn:** linkedin.com/in/guganss

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for optimal performance and user experience
- Inspired by best practices in portfolio design

---

**Developed by Gugan S S**  
Computer Science Engineering Undergraduate  
Amrita Vishwa Vidyapeetham, Coimbatore
