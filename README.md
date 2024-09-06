# Arthur Robine - Portfolio

This is the portfolio of **Arthur Robine**, a web developer specializing in building elegant, accessible, and functional web solutions. The website is a single-page application (SPA) built with React, TypeScript, and Vite. It supports multiple languages (English and French) and is optimized for search engines (SEO) with structured data.

## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [SEO Setup](#seo-setup)
- [Contact](#contact)

## Demo

Check out the live portfolio here: [arthurrobine.fr](https://arthurrobine.fr)

## Technologies

- **Framework**: [React](https://reactjs.org/)
- **TypeScript**: Static typing for JavaScript.
- **Vite**: Build tool for faster development and optimized builds.
- **i18next**: Internationalization library for React to support multiple languages.
- **React Helmet Async**: Manage document head, including meta tags for SEO and social sharing.
- **Slick Carousel**: For the carousel component in the projects section.
- **React Modal**: To display project images in a modal.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Structured Data**: JSON-LD for SEO.

## Features

- **Multilingual Support**: Supports both English and French. Users can toggle between languages using the language selector.
- **SEO Optimized**: The project uses React Helmet Async to manage meta tags and JSON-LD for structured data.
- **Single Page Application**: The website is a single page with smooth scrolling between sections.
- **Carousel for Projects**: Each project has a carousel with project images and details.
- **Responsive Design**: The website is fully responsive and works on all screen sizes.

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **Git**: You'll need Git to clone the repository.

### Clone the Repository

```bash
git clone git@github.com:ArthurRbn/portfolio.git
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

To start the project in development mode:

```bash
npm run dev
```

The app will be served on `http://localhost:3000`. Open the URL in your browser to view the portfolio.

### Build for Production

To build the project for production:

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

## Project Structure

```bash
├── src
│   ├── components      # Reusable React components (HeaderLink, LanguageSelector, etc.)
│   ├── utils           # Helper functions, structured data generation
│   ├── App.tsx         # Main app file
│   ├── main.tsx        # ReactDOM.render and app initialization
│   ├── MainRouter.tsx  # Routes setup
│   ├── i18n.ts         # i18next configuration
│   └── style           # CSS files
├── public
│   ├── favicon.ico     # Favicon for the website
│   ├── robots.txt      # Robots.txt file for search engine crawlers
│   ├── sitemap.xml     # Sitemap for search engines
│   ├── assets          # Static images, icons, etc.
│   └── locales         # Language translations (EN/FR JSON files)
├── README.md           # This README file
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
├── index.html          # Main HTML file
└── vite.config.ts      # Vite configuration
```

## SEO Setup

- **Canonical URL & hreflang**: The website uses React Helmet to dynamically update canonical URLs and `hreflang` attributes based on the selected language. This ensures search engines index the correct language version and prevents duplicate content issues.
- **Meta Tags**: Each section has its meta tags for SEO, such as the description, keywords, Open Graph tags for social sharing, and Twitter Cards.
- **Structured Data (JSON-LD)**: Structured data is used to enhance SEO with relevant schema types for WebPage, Person (for the portfolio owner), and Project (for individual projects).

### Example JSON-LD for Project Section:

```json
{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "Calendify",
    "description": "A modern calendar application for appointment scheduling.",
    "author": {
      "@type": "Person",
      "name": "Arthur Robine"
    },
    "image": "https://arthurrobine.fr/assets/calendify/calendify-1.png",
    "url": "https://calendify.arthurrobine.fr",
    "sameAs": "https://github.com/ArthurRbn/Calendify"
  }
}
```

## Contact

Feel free to reach out if you have any questions or would like to collaborate!

- **Email**: [arthur.robine@gmail.com](mailto:arthur.robine@gmail.com)
- **LinkedIn**: [Arthur Robine](https://www.linkedin.com/in/arthur-robine/)
- **GitHub**: [ArthurRbn](https://github.com/ArthurRbn)

---
