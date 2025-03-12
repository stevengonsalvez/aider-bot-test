# Implement Hero Banner on Landing Page

## Description
Add a hero banner section to the landing page with default call-to-action buttons.

## Requirements
- Create a hero banner as the first element in the landing page that occupies the full width of the screen
- The hero banner should:
  - Have a visually appealing background (either an image or a gradient)
  - Include a compelling headline that introduces the purpose of the site
  - Include a brief subheading or description
  - Feature at least two call-to-action buttons (e.g., "Get Started", "Learn More")
- The hero banner should be responsive and look good on all screen sizes
- The hero banner should maintain the application's theme support (dark/light mode)
- The styling should be consistent with the existing application style

## Technical Considerations
- Implement within the existing React component structure
- Update the CSS to accommodate the new hero section
- Ensure that the existing theme toggle functionality works with the new hero banner
- Possibly refactor the current structure to better accommodate a landing page layout
- Use responsive design principles to ensure it works well on mobile, tablet, and desktop

## Acceptance Criteria
- [ ] Hero banner is visible at the top of the landing page
- [ ] Banner includes headline, subheading, and call-to-action buttons
- [ ] Banner properly adjusts to screen size (responsive design)
- [ ] Dark/light theme switching is properly applied to the banner
- [ ] Layout and design are visually appealing and professional

## Additional Notes
This is a learning exercise to enhance the front-end development skills. Code will be implemented by the assignee as a learning opportunity.
# Feature Request: Add Theme Toggle (Dark/Light Mode)

## Feature Description

Add a theme toggle functionality that allows users to switch between dark mode and light mode in the application.

## User Story

As a user,
I want to be able to toggle between dark and light themes,
So that I can customize the application's appearance based on my preference or viewing conditions.

## Expected Behavior

1. The application should default to dark mode (current styling)
2. A visible toggle button should be positioned in a convenient location (e.g., top-right corner)
3. Clicking the toggle button should switch all UI elements to an appropriate light theme
4. Clicking again should revert to the dark theme
5. The toggle button should visually indicate the current mode and what clicking will change to (e.g., show a sun icon when in dark mode, moon icon when in light mode)

## Technical Requirements

1. Use React's state management to track the current theme
2. Apply conditional CSS classes based on the selected theme
3. Ensure all UI elements properly respond to theme changes
4. Maintain good contrast ratios for accessibility in both themes
5. Preserve all existing functionality while adding this feature

## Visual Guidelines

### Dark Mode (Default/Current)
- Dark background (#282c34 or current)
- Light text (white or current)
- Blue accents (#61dafb or current)

### Light Mode (New)
- Light background (e.g., #f5f5f5)
- Dark text (e.g., #333)
- Blue accents (slightly darker than current, for better contrast)

## Success Criteria

- Users can easily toggle between themes with a single click
- All text remains readable in both themes
- The UI feels cohesive in both themes
- The toggle button clearly indicates the current state
- The application remembers the user's preference during the session

## Out of Scope

- Persisting theme preference between sessions (could be a future enhancement)
- System preference detection
- Animation transitions between themes

## Implementation Notes

This feature should be implemented with minimal changes to the existing structure. The current component architecture should be maintained.

## Additional Resources

For reference on accessible color contrasts:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

For icons if needed:
- Consider using emoji for simplicity (☀️/🌙) or a simple text label