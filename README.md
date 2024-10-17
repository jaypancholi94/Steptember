# Steptember 🚶‍♂️

Steptember is a step-tracking app that allows users to record their daily steps and view key metrics like total `steps`, `average step count`, `distance covered`, and `calories` burned based on their `weight`. The app also provides detailed insights through visual graphs.

> Note: All user information, including name, weight, and step records, is stored in the browser's local storage to maintain state between sessions

## Technologies Used

- **[Next.js](https://nextjs.org/)**: React framework for building fast and scalable web applications.
- **[React](https://react.dev/)**: JavaScript library for building interactive user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[shadcn](https://ui.shadcn.com/)**: Component library for building accessible, composable UI.
- **[Redux](https://redux-toolkit.js.org/)**: State management library for predictable state handling.
- **[Recharts](https://recharts.org/en-US)**: Library for building customizable charts and graphs.
- **[Bun](https://bun.sh/)**: Fast JavaScript runtime and package manager.
- **[Vercel](https://vercel.com/)**: Deployment platform for frontend applications.

## Features

- 📝 **User Input:** Collects user information such as name and weight (used to calculate calories burned).
- 📊 **Dashboard:** Displays metrics including weight, total steps, average step count, distance covered, and calories burned.
- 🦶 **Step Logging:** Users can record their daily steps, which are displayed in a table with date, steps, distance traveled, and action buttons to edit or delete entries.
- 📈 **Progress Visualization:** Graphs to showcase the user's step progress over time.
- ⚠️ **Error Handling:** The app validates user input and displays appropriate error messages for invalid data or actions.
- 📱 **Responsive Design:** Optimized for both mobile and desktop devices.

## Live Demo

Check out the app live: [Steptember](https://steptember.vercel.app/)

## Getting Started

This project uses the [Bun](https://bun.sh) package manager. To get started, make sure you have Bun installed. (or use `npm` 😛)

### 1. Clone the Repository

```bash
git clone https://github.com/jaypancholi94/steptember.git
cd steptember
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the Application

To start the app in development mode:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The app will be available at <http://localhost:3000>.
