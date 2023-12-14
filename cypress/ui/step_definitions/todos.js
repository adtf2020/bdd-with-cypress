export default class Todos {

    verifyTheAppIsReady(){
        cy.get('[id="heading"]').invoke('text').should('eq', 'Tâches')
    }

    submitTodo(todoDescription){
        cy.get('[data-id="input.text.description"]').type(todoDescription).should('have.value', todoDescription)
        cy.get('button[type="submit"]').click()
    }

    verifyTodoIsCreated(todoNumber, todoDescription){
        cy.get('[data-id="todo-' + todoNumber + '"]').invoke('text').should('include', todoDescription)
    }

    completeTodo(todoNumber){
        cy.get('[data-id="input.checkbox.done-' + todoNumber + '"]').check()
    }

    verifyTodoIsCompleted(todoNumber){
        cy.get('[data-id="input.checkbox.done-' + todoNumber + '"]').should('be.checked')
    }

    verifyTodoIsNotCompleted(todoNumber){
        cy.get('[data-id="input.checkbox.done-' + todoNumber + '"]').should('not.be.checked')
    }

    deleteTodo(todoNumber){
        cy.get('[data-id="button.remove_todo-' + todoNumber + '"]').click()
    }

    verifyTodoIsDeleted(todoNumber){
        cy.get('[data-id="todo-' + todoNumber + '"]').should('not.exist')
    }

    verifyTodoIsNotCatigorized(todoNumber){
        cy.contains('[data-id="category-' + todoNumber + '"]').should('not.exist')
    }

    selectTodoCategory(category){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        var categoryToSelect = this.getTodoCategoryLabel(category)
        cy.get('[data-id="select.category"]').select(categoryToSelect)
    }

    verifyTodoHasCategory(todoNumber, todoCategory){
        var category = this.getTodoCategoryLabel(todoCategory)
        cy.get('[data-id="text.todo_category-' + todoNumber + '"]').invoke('text').should('eq', category)
    }

    getTodoCategoryLabel(todoCategory){
        return todoCategory == 'professional' ? 'Professionnel' : 'Personnel'
    }

    verifyFourTodos(todoNumber){
    let result = 0
    for (let pas = 1; pas < todoNumber+1; pas++) {
     cy.get('[data-id="todo-' + pas + '"]')
     result++
    }
    cy.wrap(todoNumber).should('eq', result)
    }

    verifyOneTodos(todoNumber, todoCategory){
    var category = this.getTodoCategoryLabel(todoCategory)
    const elements = cy.get('[type="checkbox"]')
    elements.should('have.length', todoNumber);
    if (todoNumber == 1){
    cy.get('[data-id^="text.todo_category-').invoke('text').should('eq', category)
    } else if (todoNumber == 2){
    cy.get('[data-id^="text.todo_category-').each((element, index) => {
    cy.wrap(element).invoke('text').then(textContent => {
    cy.log(`Element ${index + 1}: ${textContent}`);
    });
    cy.wrap(element).click();
    });
    }
    }

    selectPrivate(){
    cy.get('[data-id="input.radio.category_Personnel"]').check()
    }

    selectProfessional(){
    cy.get('[data-id="input.radio.category_Professionnel"]').check()
    }

    selectTout(){
    cy.get('[data-id="input.radio.category_Tout"]').check()
    }



}
