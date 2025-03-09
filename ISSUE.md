# Add GitHub Actions workflow for npm build

## Description
This issue proposes adding a GitHub Actions workflow that will run `npm run build` to ensure the build process works correctly on every push and pull request.

## Proposed Solution
Create a GitHub Actions workflow file in `.github/workflows/` directory that:
1. Runs on push to main branch and on pull requests
2. Sets up Node.js
3. Installs dependencies
4. Executes `npm run build`
5. (Optional) Caches npm dependencies for faster builds

## Benefits
- Catch build issues early before merging
- Ensures code always builds successfully
- Provides feedback to contributors on their pull requests

Let me know if you'd like any specific configurations or additional steps in the workflow!
