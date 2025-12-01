# Nguyễn Hoàng Lê - Personal Portfolio

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Vite. Deployed on Vercel.

## 🚀 Features

- **Modern Design**: Beautiful, clean UI with gradient effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Dark Mode Ready**: Built with dark mode support (via Tailwind)
- **Fast Performance**: Optimized with Vite for lightning-fast builds

## 📋 Sections

1. **Hero Section**: Introduction with social links
2. **About**: Personal information and goals
3. **Technologies**: Comprehensive tech stack showcase
4. **Projects**: Featured projects including:
   - Simple-WebRTC
   - NutriCook
   - Healthmate-Care-System
   - HomeMobile
   - DjangoWebBikeRental
   - PickleCoach-AI
   - EV-Charging-Station-Management-System (In Development)
5. **Contact**: Contact form and information
6. **Footer**: Social links and copyright

## 🛠️ Technologies

- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and dev server
- **Lucide React**: Beautiful icon library
- **React DOM**: For rendering

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Profile
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Configuration

The project includes a `vercel.json` file with the following configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

Vercel will automatically use these settings.

## 📁 Project Structure

```
Profile/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Technologies.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the following files to update your information:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Contact**: `src/components/Contact.jsx`
- **Footer**: `src/components/Footer.jsx`

### Update Colors

Edit `tailwind.config.js` to customize the color scheme.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Nguyễn Hoàng Lê**

- Email: nguyenhoangle070105@gmail.com
- GitHub: [@NguyenHoangLe0701](https://github.com/NguyenHoangLe0701)

---

Made with ❤️ using React & Tailwind CSS

