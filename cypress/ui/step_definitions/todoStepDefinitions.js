import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import Todos from "./todos.js"

const sut = new Todos()

Given('the application is ready to use', () => {
    cy.visit('/')
    sut.verifyTheAppIsReady()
})

Given('an existing todo {int} being {string}', (todoNumber, todoDescription) => {
    sut.submitTodo(todoDescription)
    sut.verifyTodoIsCreated(todoNumber, todoDescription)
})

When('I submit a {string} todo {string}', (todoCategory, todoDescription) => {
    sut.selectTodoCategory(todoCategory)
    sut.submitTodo(todoDescription)
})

When('I submit a todo {string}', todoDescription => sut.submitTodo(todoDescription))

Then('a new todo {int} should be created being {string}', (todoNumber, todoDescription) => sut.verifyTodoIsCreated(todoNumber, todoDescription))

When('I complete the todo {int}', todoNumber => sut.completeTodo(todoNumber))

Then('the todo {int} should be completed', todoNumber => sut.verifyTodoIsCompleted(todoNumber))

Then('the todo {int} should be uncompleted', todoNumber => sut.verifyTodoIsNotCompleted(todoNumber))

When('I remove a todo {int}', todoNumber => sut.deleteTodo(todoNumber))

Then('the todo {int} should be deleted', todoNumber => sut.verifyTodoIsDeleted(todoNumber))

Then('the todo {int} should not be categorized', todoNumber => sut.verifyTodoIsNotCatigorized(todoNumber))

Then('the todo {int} should be {string}', (todoNumber, todoCategory) => sut.verifyTodoHasCategory(todoNumber, todoCategory))