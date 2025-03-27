# Implement Left Navigation Drawer with Pet API Integration

## Description
Implement a left navigation drawer that contains mock navigation items. When clicked, these items should make calls to public dog/cat APIs and display the results on a dedicated page.

## Requirements

### Navigation Drawer
- Create a responsive left navigation drawer that can be toggled open/closed
- Drawer should include:
  - Header section with app name/logo
  - Navigation items with appropriate icons
  - At least 2 pet-related categories (e.g., "Dogs", "Cats")
  - Sub-items under each category (e.g., "Random Dog", "Dog Breeds", "Random Cat", "Cat Facts")
- Drawer should be responsive and collapse/hide on smaller screens
- Include a hamburger/toggle button to show/hide the drawer
- Navigation drawer should respect the current theme (dark/light mode)

### API Integration
- Integrate with public pet APIs:
  - For dogs: Consider using [Dog API](https://dog.ceo/dog-api/) or similar
  - For cats: Consider using [Cat API](https://thecatapi.com/) or similar
- Each navigation item should lead to a dedicated page that displays content from these APIs
- Implement proper loading states and error handling for API calls

### Page Content
- Create a main content area that displays the API results
- Design different page layouts based on the type of content:
  - Grid layout for displaying multiple images
  - Card layout for displaying facts or information
- Ensure the content layout is responsive and works well on all screen sizes

### Routing
- Set up client-side routing to handle navigation between different pages
- URLs should reflect the current section (e.g., "/dogs/random", "/cats/facts")
- Implement proper navigation history so browser back/forward buttons work correctly

## Technical Considerations
- Consider adding a routing library like React Router
- You may need to add state management to handle the drawer state
- CORS issues may arise when calling third-party APIs - consider how to handle these
- Cache API responses where appropriate to minimize redundant API calls
- Ensure responsive design works across different device sizes

## Acceptance Criteria
- [ ] Left navigation drawer renders correctly with all required components
- [ ] Drawer can be opened and closed via a toggle button
- [ ] Navigation items are properly categorized and include icons
- [ ] Clicking on navigation items loads the appropriate content from pet APIs
- [ ] Loading states and error handling are implemented for API calls
- [ ] Content is displayed in an appealing and responsive layout
- [ ] Routing works correctly with proper URL changes and history management
- [ ] Dark/light theme switching is applied consistently to the drawer and content

## Additional Notes
This feature will enhance the UI/UX of the application while providing an opportunity to learn about drawer navigation patterns, API integration, and routing in React. Implementation will be done by the assignee as a learning exercise.