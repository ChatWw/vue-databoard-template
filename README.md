[中文](./README_zh.md)|[English](./README.md)

# vren-vue2-screen-template

Project Introduction: This is a large-screen project template developed based on Vue 2, Element-UI, ECharts, ECharts-GL and SCSS, designed for quickly building large-screen projects. All redundant business function modules have been completely removed from this template, leaving only the core functional templates of the project. After downloading the project, you can carry out customized development according to your project requirements.

> If you like this project, please feel free to give it a Star. Thank you!

## Directory Structure
```
├── .gitignore
├── .prettierignore
├── .prettierrc
├── README.md
├── babel.config.js
├── jsconfig.json
├── node_modules/
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── src/
│   ├── App.vue
│   ├── api
│   ├── assets
│   ├── components
│   ├── layout
│   ├── main.js
│   ├── router
│   ├── store
│   ├── styles
│   ├── utils
│   ├── va.js
│   └── views
└── vue.config.js
```

This template uses pxtorem for unit conversion. The default configuration in the project's `postcss.config.js` is rootValue: 192, which is 1/10 of the design draft width (1920px/10 = 192).

This template has configured the Element-UI component library and uses SCSS for style writing. The theme variables of Element-UI are configured by default, which can be modified in the project's `src/styles/element-variables.scss`.

This template provides basic router and store. A global axios instance has been configured in `src/utils/http.js`, and the ECharts chart library and ECharts-GL 3D chart library have been installed, which can be deleted according to project requirements.

This template provides three universal components:

-   `src/components/SpecialFonts`: Special font component, used where special fonts are needed on the page.
-   `src/components/sTable`: Table component, used where tables are needed on the page.
-   `src/components/vaIcon`: Icon component, used where icons are needed on the page.

## Debugging

```
// Install dependencies
npm install

// Run the project
npm run local

// Build the project
npm run build
```

## Git Commit Message Specification
When making a git commit, you must fill in a commit message that complies with the specification. The format is "commit type: detailed description of this commit", e.g., `git commit -m 'feat: add delete function for a certain business'`.

- feat: Add new features
- fix: Bug fixes
- docs: Documentation modifications
- style: Modify code format (no code logic changes)
- refactor: Code optimization or refactoring
- perf: Performance optimization
- test: Improve test cases
- build: Change the build process (e.g., add new dependency libraries, tools)
- chore: Modifications outside of src and test directories
- revert: Roll back code