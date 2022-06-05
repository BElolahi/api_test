/// <reference types="cypress" />
import data from '../../fixtures/example.json'
import homeSelectors from '../../pageObject/homeSelectors'

describe('Api test', () => {
    it('verify url has contains title with LOREM IPSUM text', () => {
     cy.request('https://www.lipsum.com/').then(res=>{
        expect(res.body).to.include('<h1>Lorem Ipsum</h1>')
        })
     })   

    it('Modify data ', () => {
       cy.intercept('GET','https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',{fixture:'example.json'});
       cy.visit('https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html');
       cy.get(homeSelectors.getTitle).contains(data.members[0].name)
       cy.get(homeSelectors.getAge).contains(data.members[0].age)
      })
});
