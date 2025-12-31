# React Blog Platform - Frontend Developer Intern Assignment

## Overview
Build a blog platform using React that demonstrates your understanding of component-based architecture, state management, API integration, and responsive design. This assignment will help us assess your React fundamentals and frontend development skills.

**Estimated Time**: 2-3 Days

## Setup Instructions

1. Clone this repository
2. Create a new React app:
   ```bash
   npx create-react-app .
   ```
   Or use Vite (faster):
   ```bash
   npm create vite@latest . -- --template react
   ```
3. Install any additional dependencies you need
4. Start development server and begin coding
5. Commit your changes regularly with clear messages
6. Push your solution to a new branch: `solution/{your-name}`

## API Endpoints

Use the JSONPlaceholder API (free fake REST API):
- **All Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Single Post**: `https://jsonplaceholder.typicode.com/posts/{id}`
- **Comments**: `https://jsonplaceholder.typicode.com/posts/{id}/comments`
- **Users**: `https://jsonplaceholder.typicode.com/users`

## Required Features

### 1. Posts List Page (Home)
- [ ] Fetch and display all blog posts from the API
- [ ] Show posts in a card layout (grid or list)
- [ ] Each post card should display:
  - Post title
  - Post excerpt (first 100-150 characters of body)
  - Author name (you'll need to fetch user data)
  - A "Read More" button/link
- [ ] Display a loading message while fetching posts
- [ ] Display an error message if the API call fails
- [ ] Make posts clickable to navigate to detail page

### 2. Post Detail Page
- [ ] Display full post content including:
  - Complete title
  - Full body text
  - Author name
- [ ] Add a "Back to Posts" or "Home" button
- [ ] Handle loading and error states

### 3. Search Functionality
- [ ] Add a search bar on the home page
- [ ] Filter posts by title as the user types
- [ ] Search should be case-insensitive
- [ ] Show "No posts found" message when search returns no results

### 4. Responsive Design
- [ ] Readable on tablets and desktops
- [ ] Clean and organized UI with proper spacing
- [ ] Consistent styling across all pages

### 5. Navigation
- [ ] Implement routing between pages (you can use React Router or simple state management)
- [ ] Header/navbar with site title
- [ ] Working navigation between home and post detail pages

## Bonus Features (Optional - Choose Any)

These are not required but will help you stand out:

- [ ] **Filter by Author**: Dropdown to filter posts by specific authors
- [ ] **Loading Skeletons**: Show skeleton loaders instead of "Loading..." text
- [ ] **Pagination**: Display 10 posts per page with next/previous buttons
- [ ] **Dark Mode Toggle**: Simple light/dark theme switcher
- [ ] **Sort Posts**: Sort by title alphabetically or by post ID
- [ ] **Favorite Posts**: Allow users to mark posts as favorites (use localStorage)
- [ ] **Comment Count**: Show number of comments on each post card
- [ ] **Smooth Animations**: Add transitions when navigating or filtering

## Technical Requirements

### React Concepts to Demonstrate
-  Functional components (not class components)
-  useState for managing component state
-  useEffect for API calls and side effects
- Props for passing data between components
-  Conditional rendering (loading, error, empty states)
- List rendering with proper keys
   Event handling (clicks, input changes)
- Component composition (break UI into logical components)

### Code Quality Expectations
- Clean, readable code with proper indentation
- Meaningful variable and function names
- Comments for complex logic (but don't over-comment)
- No console errors or warnings in the browser
- Proper error handling for API calls
- Organized file/folder structure

### Suggested Component Structure
```
src/
  components/
    PostCard.jsx          // Individual post card
    PostList.jsx          // Grid/list of posts
    PostDetail.jsx        // Full post view
    CommentList.jsx       // List of comments
    SearchBar.jsx         // Search input component
    Header.jsx            // Navigation header
    Loading.jsx           // Loading component
  App.jsx
  App.css
  index.js
```

## Styling
- You can use plain CSS, CSS Modules, or any CSS framework you're comfortable with
- Tailwind CSS, Bootstrap, Material-UI are all acceptable
- Just make sure it looks clean and professional

## What We're Looking For

### Must Have (Core Skills)
1. **Working functionality** - All required features work as expected
2. **React fundamentals** - Proper use of hooks, components, and props
3. **API integration** - Correctly fetch and display data
4. **Code organization** - Logical component structure
5. **Error handling** - Handle loading and error states
6. **Responsive design** - Works on mobile and desktop

### Nice to Have (Shows Initiative)
- Clean UI/UX design
- Bonus features implemented
- Good git commit history
- Code comments where helpful
- Performance considerations
- Accessibility basics (semantic HTML)

## Evaluation Criteria

Your submission will be evaluated on:

**Functionality (40%)**
- All required features working correctly
- No major bugs or errors
- Good user experience

**React Skills (30%)**
- Proper use of hooks (useState, useEffect)
- Component architecture
- Props and state management
- Understanding of React patterns

**Code Quality (20%)**
- Readable and organized code
- Logical component breakdown
- Proper naming conventions
- Basic error handling

**UI/UX (10%)**
- Responsive design
- Visual consistency
- User-friendly interface
- Professional appearance

## Submission Guidelines

### Before You Submit
1. Test your app thoroughly - click everything!
4. Verify all links and navigation work
5. Check that search and filters work correctly

### How to Submit
1. Ensure your app runs with `npm start` or `npm run dev`
2. Create a new branch named `solution/{your-name}`
3. Push your code to this branch
4. Create a Pull Request with:
   - Brief description of what you built
   - List of features you completed (check off the boxes above)
   - Any bonus features you added
   - Challenges you faced and how you solved them
   - Approximate time spent
   - Screenshots (optional but appreciated)

### README (Create a new SOLUTION.md file)
Please create a `SOLUTION.md` file with:
- How to run your project locally
- Any dependencies you added
- Decisions you made (why you chose certain approaches)
- What you would improve with more time

## Resources

Here are some helpful resources:

- [React Documentation](https://react.dev) - Official React docs
- [JSONPlaceholder Guide](https://jsonplaceholder.typicode.com/guide/) - API documentation
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - How to fetch data
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial) - If using React Router

## Tips for Success

💡 **Start Simple**: Get the basic features working first, then add enhancements

💡 **Component Breakdown**: Think about which parts of the UI should be separate components

💡 **State Management**: Keep state close to where it's used, lift up when needed

💡 **Test As You Go**: Don't wait until the end to test your features

💡 **Git Commits**: Make multiple commits showing your progress (not just one big commit)

💡 **Ask Questions**: If something in the requirements is unclear, create an issue or ask!

## Questions?

If you have questions about the requirements or run into issues, please:
- Create an issue in this repository, or
- Reach out via email

We're here to help! 😊

---

**Time Management Tip**: Aim to have all required features done in 3-4 hours, then use any remaining time for bonus features or polish.

Good luck! We're excited to see what you build! 🚀
