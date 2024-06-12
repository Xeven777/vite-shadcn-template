![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

# ViteTS + Shadcn : Starter Template for Building Web Apps with ❤️

ViteTS + Shadcn is a minimal, yet powerful starter template for building web applications using Vite, React, Tailwind CSS, Shadcn with Type safety. It's optimized for speed, developer experience, and SEO.

## Features ✨

- **Vite ⚡**: Enjoy a lightning-fast development experience with Vite's out-of-the-box Hot Module Replacement (HMR).
- **React**: Build your UI with the latest version of React.
- **Tailwind CSS**: Style your application with utility-first CSS framework Tailwind CSS.
- **TypeScript**: Improved Typesafety!
- **Shadcn UI**: Use Shadcn UI components to speed up your UI development.
- **ESLint**: Keep your code clean and consistent with ESLint.
- **Lucide Icons**: Decorate with Lucide-icons
- **SEO Optimized**: Meta tags, OG tags, and descriptions are all set up for you.

## Getting Started

Follow these steps to get the project up and running:

1. **Clone the repository:**
   Run the following command to create a shallow clone of the repository:

   ```sh
   git clone --depth 1 https://github.com/Xeven777/vite-shadcn-template
   ```

   This will create a new directory named `vite-shadcn-template` in your current directory.

2. **Remove the old `.git` directory and initialize a new one:**
   Navigate to the new `vite-shadcn-template` directory and run the following commands:

   ```sh
   cd vite-shadcn-template
   rm -rf .git
   git init
   ```

3. **Install the dependencies:**
   Run the following command to install the project dependencies:

   ```sh
   npm install
   ```

4. **Start the development server:**
   After installing the dependencies, start the development server by running:
   ```sh
   npm run dev
   ```

Now, you should be able to see the application running at `localhost:5173` in your web browser! ✨

#### You can also download the code as Zip or use it as a template.

## Project Structure

- `src/`: This directory contains all the React components and CSS for the application.
  - `App.jsx`: The main component that wraps the entire application.
  - `index.css`: Global styles for the application.
  - `main.jsx`: The entry point for the application.
  - `home/`: This directory contains the Home component.
  - `about/`: This directory contains the About component.
  - `components/`: This directory contains reusable components like `Tag.jsx`.
- `public/`: This directory contains public assets that can be referenced in the HTML.
- `index.html`: The main HTML page that is served when someone visits your site.
- `package.json`: This file lists the packages your project depends on and specifies versions of a package that your project can use using semantic versioning rules.
- `vite.config.js`: This file contains configuration for Vite.
- `tailwind.config.js`: This file contains configuration for Tailwind CSS.
- `.eslintrc.cjs`: This file contains configuration for ESLint.
- `postcss.config.js`: This file contains configuration for PostCSS.

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
