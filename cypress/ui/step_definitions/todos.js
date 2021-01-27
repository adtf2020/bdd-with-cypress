import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import Util from "../utils/util.js"

const util = new Util()

Given('the application is ready to use', () => {
    cy.visit('/')
    cy.get('h1[id="heading"]').invoke('text').should('eq', 'Tâches')
})

When('I submit a todo {string}', (todoDescription) => {
    util.submitTodo(todoDescription)
})

Then('a new todo {int} should be created being {string}', (todoNumber, todoDescription) => {
    util.verifyTodoIsCreated(todoNumber, todoDescription)
})

Given('an existing todo {int} being {string}', (todoNumber, todoDescription) => {
    util.submitTodo(todoDescription)
    util.verifyTodoIsCreated(todoNumber, todoDescription)
})

When('I complete the todo {int}', (todoNumber) => {
    util.completeTodo(todoNumber)
})

Then('the todo {int} should be completed', (todoNumber) => {
    util.verifyTodoIsCompleted(todoNumber)
})

Then('the todo {int} should be uncompleted', (todoNumber) => {
    util.verifyTodoIsNotCompleted(todoNumber)
})