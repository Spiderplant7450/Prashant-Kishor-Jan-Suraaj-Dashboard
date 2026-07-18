# Prashant Kishor (PK) - Verified Election Affidavit & Transparency Dashboard

An interactive, public transparency portal showcasing the verified election affidavit and comprehensive financial, asset, and educational disclosures of **Prashant Kishor (PK)**, leader and organizer of the **Jan Suraaj Party** for the Bihar Assembly Elections.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-6.x-blue?style=flat&logo=vite)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌟 Key Features

- **📊 Comprehensive Financial Analytics**: High-fidelity charts and graphs showing movable assets, deposits, savings, mutual funds, gold, and other financial instruments of Prashant Kishor and his spouse, Jahnavi Das.
- **🏠 Real Estate & Land Disclosures**: Complete mapping of immovable assets, including commercial properties (Noida, Salt Lake Sector V, etc.), residential assets, and agricultural land in Bihar, complete with current market valuation.
- **⚖️ Legal Transparency**: Full verification of legal standing showing **0 active criminal cases**, zero pending charges, and absolute legal clearance in compliance with the Election Commission of India.
- **🎓 Verified Educational Legacy**: Step-by-step verified timeline of academic achievements, from secondary education in Bihar to post-graduate studies.
- **🎗️ Jan Suraaj Campaign Legacy**: Interactive insights into the historic 3,000+ kilometer Jan Suraaj Padyatra journey across Bihar.

---

## ⚙️ Technical Stack

- **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build System**: [Vite 6](https://vite.dev/)
- **Styles & Layout**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Data Visualization**: [Recharts](https://recharts.org/) (Pie Charts, Bar Charts, Area Charts)
- **Animations**: [Motion](https://motion.dev/) (Smooth layout transitions and tab switching)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started & Local Development

To run this dashboard locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Spiderplant7450/Prashant-Kishor---Jan-Suraaj-Dashboard.git
cd Prashant-Kishor---Jan-Suraaj-Dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:3000` or `http://localhost:5173` (depending on configuration) in your browser.

### 4. Build for Production
```bash
npm run build
```
This will compile the static assets cleanly into the `dist/` directory.

---

## 🌐 Publishing to GitHub Pages

This app is pre-configured for seamless publication to GitHub Pages.

### Method 1: Easy One-Step Deployment (Recommended)

1. Make sure your local repository is connected to your GitHub remote.
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
   *This automatically triggers `npm run build` first, then packages and pushes the compiled files in `dist/` to a dedicated `gh-pages` branch on your GitHub repository.*

3. Go to your repository settings on GitHub, navigate to **Pages**, and ensure the source is set to deploy from the `gh-pages` branch. Your site will be live at:
   `https://<username>.github.io/Prashant-Kishor---Jan-Suraaj-Dashboard/`

---

### Method 2: Automatic Deployment using GitHub Actions

You can automate deployment so that every time you push code to the `main` branch, it automatically deploys to GitHub Pages.

Create a file named `.github/workflows/deploy.yml` in your repository with the following contents:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Trigger deployment on pushing to main branch

permissions:
  contents: write

jobs:
  build-and-deploy:
    concurrency: ci-${{ github.ref }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v4

      - name: Install and Build 🔧
        run: |
          npm ci
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist # The folder the action should deploy.
          branch: gh-pages # The branch the action should deploy to.
```

---

## 🔒 Privacy & Ownership Policy

- **No Hardcoded Personal Info**: No personal developer names, credentials, or private details are embedded in the code.
- **No Third-Party AI Tracking**: Built completely as a static SPA with zero AI platform trackers or external third-party playground indicators.
- **Open and Free**: Under the MIT License, anyone can copy, modify, and distribute this transparency initiative dashboard.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
