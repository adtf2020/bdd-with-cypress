export default class Todos {

    submitTodo(todoDescription){
        cy.get('input[data-id="input.text.description"]').type(todoDescription).should('have.value', todoDescription)
        cy.get('form').submit()
    }

    verifyTodoIsCreated(todoNumber, todoDescription){
        cy.get('li[data-id="todo-' + todoNumber + '"]').invoke('text').should('include', todoDescription)
    }

    completeTodo(todoNumber){
        cy.get('input[data-id="input.checkbox.done-' + todoNumber + '"]').check()
    }

    verifyTodoIsCompleted(todoNumber){
        cy.get('input[data-id="input.checkbox.done-' + todoNumber + '"]').should('be.checked')
    }

    verifyTodoIsNotCompleted(todoNumber){
        cy.get('input[data-id="input.checkbox.done-' + todoNumber + '"]').should('not.be.checked')
    }

    deleteTodo(todoNumber){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('button[data-id="button.remove_todo-' + todoNumber + '"]').click()
    }

    verifyTodoIsNotCatigorized(todoNumber){
        cy.contains('span[data-id="category-' + todoNumber + '"]').should('not.exist')
    }

    selectTodoCategory(category){
        var categoryToSelect = category == 'professional' ? 'Professionnel' : 'Personnel'
        cy.get('select[data-id="select.category"]').select(categoryToSelect)
    }

    verifyTodoHasCategory(todoNumber, todoCategory){
        var category = todoCategory == 'professional' ? 'Professionnel' : 'Personnel'
        cy.get('span[data-id="category-' + todoNumber + '"]').invoke('text').should('eq', category)
    }

}