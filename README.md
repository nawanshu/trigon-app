# Triangle challenge: trigon-app
Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

## Supporting tools and technologies used

- ES6 (ES2015)
- ui-tradeshift 12.2.0
- JavaScript
- CSS
- HTML5
- Integrated development environment: Visual Studio Code 1.31.1
- Build tool: Webpack 4.29.6
- Transpiler: Babel 6/7
- Testing Tools: Mocha 6.0.2, Chai 4.2.0
- Package Manager: NPM (Node Package Manager) 5.6.0
- Node 10.0.0

## Get Started

This project was generated manually using npm, webpack and babel as a suppoting build tool. Please follow below steps to run the appliction:

### Build the project for production environment

npm run build

### Build the project for development environment

npm run dev

## Development server

- Run **npm install** to install dependecies from Node Package Manager (NPM).
- Run **npm start** for a dev server. 
- Navigate to http://localhost:8080/. The app will automatically reload if you change any of the source files.
- Used live-server for development

## Build

Run **npm run build** to build the project. The build artifacts will be stored in the dist/ directory.

## Running unit tests

Run **npm run test** to execute the unit tests via Mocha and Chai.
**Note:** For UI show case, I have added tradeshift UI dialog in the code, that will break test case because we have to mock/spy "ts" object. Please remove UI dialog to run test cases successfully. 
