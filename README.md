# JS Dev Environment for FileMaker Developers

*Develop, Render, and Deploy JavaScript for a FileMaker App*

# This Environment
## What it does
This environment allows a FileMaker developer to start coding their widget and see the results right away in a FileMaker file. Once done developing, the can be inlined and pushed to the FileMaker file for use offline.
<br/>
It's a template file, so you can use to start other projects.
## Consists of
- A repository template on Github
- A basic html / JS set up.
- package.json file for install
- A FileMaker file to show the widget rendered
- Scripts to build and upload the inlined code to FileMaker
## TO GET STARTED Using this file
1. `npm install`
2. `npm start`
3. Open the jsDev.fmp12 file.
4. Allow it to work in Dev mode.

At this point you should see the web viewer on the layout load up with the HTML and JavaScript here. Edit the JavaScript or the HTML and you'll see the render in the web viewer update.

***

# The Context of this set up
## Problem Statement

There’s always been quite the barrier in JavaScript development in FileMaker. This wall is made up of different pieces: knowing JavaScript, writing code efficiently, seeing how it works in FileMaker, using data from FileMaker, and deploying to the app. 

## Proposal

With a proper JS-in-FM development environment, FileMaker developers have most of the blocks of the wall removed. This set up allows the quickest way for a developer to create an integration using JavaScript.
This course will immerse you in the environment. By the end of your stay, you’ll be fluent in creating simple and complex problem-solving widgets for your application. Through studying the content and practicing for yourself, you’ll feel at ease with this entire workflow.



# The Course
## Essential Question

As a busy FileMaker developer, how do I build widgets efficiently and consistently?

## Objectives
1. Become fluent with VSCode for this environment's needs.
2. Learn some `git` workflows.
3. Import and use JavaScript libraries.
4. Assemble the HTML and JS and FileMaker scripting and layout objects to render a widget.
5. Summarize the dev server: its structure and use.
7. Collect data and send it to the widget.
8. Deploy the code to FileMaker.

## Projects
Throughout this course, we'll use projects to practice the workflow. These courses include:
1. A Dashboard
2. A Datatable
3. A Date Picker
4. A Progress Indicator
5. A Survery of Questions

## End of Course
The end result will be to take the dev environment and produce something on your own, with our support. You’ll be able to do your work and submit it.

## Technologies used
1. Importing `esm` modules
2. Link to cdn
3. NPM Commands
    1. `npm start`
    2. `npm build:upload`
    3. `npm install`
    4. `npm uninstall`
4. GIT commands
    1. `git init`
    2. `git commit -m ""`
    3. `git push`
    4. `git pull`
    5. etc
5. JS ES6 code syntax
6. Loading code in a web viewer methods
7. Calling FileMaker for data


