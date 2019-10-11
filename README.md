# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] Why would you use class component over function components (removing hooks from the question)?

> Class components offer detailed control over what happens during a component's life cycle and 
> allow for state management. While Hooks greatly reduces the need for class components, it is 
> definitely worth learning specifically for legacy code maintenance. Much of the current codebase 
> uses class components, so know how to work with them is essential.

- [x] Name three lifecycle methods and their purposes.

> **componentDidMount** occurs whenever a component is mounted to the virtual DOM. It is guaranteed to 
> only run once during a components life cycle, as such it is really good for running side-effect 
> causing operations like API calls.
> **componentDidUpdate** occurs every time the render method is called. This is a good time to use 
> the new data in side operations like API calls, but do not set state or you will cause an infinite 
> loop. 
> **componentWillUnmount** is the last thing to occur before a component ceases to exist. It is 
> perfect for performing any cleanup operations, like stopping intervals, in order to prevent memory 
> leaks and unwanted behavior in the application.

- [x] What is the purpose of a custom hook?

> Custom hooks allow you to write generic non-visual behavior and stateful logic for the purpose of 
> reuse throughout your application. -It supports DRY coding-

- [x] Why is it important to test our apps?

> Testing is fundamental to programming. Without it, we can't be sure that our programs are running 
> as we expect them to. Automated testing helps us ensure that previous functionality and features 
> of our project are not affected by changes made to the program later.

## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add TL as collaborator on Github.
- [x] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [x] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [x] Run `yarn` to download dependencies.
- [x] Run the server using `yarn start` or `node server.js`.
- [x] In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- [x] Still inside the `client` folder run `yarn start` to run the client application.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write a "reasonable" amount of unit tests for your React components. What does "reasonable amount" mean? That is up to you to decide. Be ready to defend your choice to your TL 👍

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API
