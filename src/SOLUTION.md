# Solution – React Blog Platform

## How to Run the Project Locally

### Option 1: Using npm
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: npm install react-router-dom
4. Start the development server: npm start
5. Open `http://localhost:3000` in your browser

### Option 2: Live Demo
The project is also deployed on Netlify and can be accessed via the live demo link: https://blogsbsm.netlify.app

---

## Dependencies Added

- **react-router-dom**  
  Used for client-side routing between the posts list page and individual post detail pages.

No other external libraries were added; the project mainly relies on core React features.

---

## Decisions Made

- **Functional Components & Hooks**  
  I used functional components with `useState` and `useEffect` as they are the modern and recommended React approach, making the code easier to read and maintain.

- **Component-Based Architecture**  
  The UI was broken down into reusable components (Header, PostList, PostCard, PostDetail, SearchBar, Loading) to keep responsibilities separated and improve readability.

- **React Router for Navigation**  
  React Router was chosen to handle navigation between the home page and post detail pages without full page reloads, providing a smoother user experience.

- **Client-Side Data Fetching**  
  Data is fetched directly from the JSONPlaceholder API using `fetch` inside `useEffect`, keeping the logic simple and aligned with the assignment requirements.

- **Minimal Styling Approach**  
  Plain CSS was used to keep the focus on functionality and React fundamentals rather than heavy UI frameworks.

---

## Bonus Features Implemented

- **Filter by Author**  
  Added a dropdown to filter posts by specific authors.

- **Loading Skeletons**  
  Skeleton loaders are shown instead of plain “Loading…” text to improve perceived performance and user experience.

- **Pagination**  
  Implemented pagination to display 10 posts per page with next/previous navigation.

---

## What I Would Improve with More Time

- Add sorting options (by title or post ID)
- Improve UI/UX with better animations and transitions
- Simple light/dark theme switcher
- Show number of comments on each post card
