# Front-End React + Redux Exercise
## Concept
You are a freelance developer who has been tasked with the responsibility of writing a grocery list application for a client of yours. You have inherited a bit of code from a previous developer so bits and pieces of the application have been completed. Your job is to finish what they started and complete the grocery list application.

After taking a look at the application, you have assesed that you need to complete the following items that the other developer didn't finish

#### Tasks
 - Finish the **ListTable** component so that the items in the grocery list will display inside of a table
 - Add buttons within the table that will remove, select, and deselect and item from the list (you will need to write custom reducers and action creators for each of those actions).
 - Finish the **ListSelection** component so that when an item inside the table is clicked, it will display inside of that component


#### Helpful Hints & Constraints
- **ListContainer** is already a Container component that is aware of the redux store as well as the dispatch. There is no need to create another container out of the other components that you will need to finish.
- Use the container as your main hub for both data and actions and then see what you can pass to each of the components.
- All of your Redux functionality is inside of the **ducks** directory. This file follows a pattern called ducks which groups all of related redux functionality into one file to avoid rework and segmentation.
- **DO NOT** worry yourself with styling the components. If you feel compelled, go ahead, but you will not be assessed your style comprehension.
- An original grocery list has been provided and hooked up to the container. Feel free to inspect console and view the list.

## Getting started
  1. Clone this respo
  2. cd into the new directory
  3. run `yarn`
  4. run `yarn start`
  5. open to http://localhost:3000/

## Exercise Contraints
Use whatever resources you're most comfortable with to complete the assignment. This is designed to be a real-world exercise so we want you to use the real-world to be able to solve this problem. Nothing is off limits.
