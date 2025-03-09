# Error: Missing script "dev" when running npm run dev

## Error Description

When trying to run `npm run dev`, the following error is encountered:

```
npm error Missing script: "dev"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: /Users/stevengonsalvez/.npm/_logs/2025-02-22T15_11_10_327Z-debug-0.log
```

## Expected Behavior

The `npm run dev` command should start the development server.

## Current Configuration

The current scripts in package.json only include:
- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`

There is no `dev` script defined.

## Possible Solutions

Consider adding a `dev` script to package.json that maps to the appropriate command for starting the development server.