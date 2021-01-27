Feature: Todos

   Background: 
      Given the application is ready to use

   Scenario: I can add a todo
      When I submit a todo "Adopter de bonnes pratiques de test"
      Then a new todo 1 should be created being "Adopter de bonnes pratiques de test"
   
   Scenario: I can complete one of several todos
      Given an existing todo 1 being "Adopter de bonnes pratiques de test"
      And an existing todo 2 being "Comprendre le Keyword-Driven Testing"
      And an existing todo 3 being "Automatiser des cas de test avec Robot Framework"
      When I complete the todo 2
      Then the todo 2 should be completed
      And the todo 1 should be uncompleted
      And the todo 3 should be uncompleted