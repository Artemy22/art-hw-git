///<reference types="cypress"/>


// case 1
const paramTest = ({ testData, expectedResult }) =>
  function () {
    cy.visit('https://google.com')
    cy.get('input.gLFyf')
      .type(testData)
      .should("contain.value", expectedResult)
  }

it(`Search data`, paramTest({ testData: 1, expectedResult: 1 }))
it(`Search data`, paramTest({ testData: 2, expectedResult: 2 }))
it(`Search data`, paramTest({ testData: 'Cypress', expectedResult: 'Cypress' }))



//case 2

describe('Case 2 of how to use parametrized tests', () => {
  const testData = [
    { testData: 1, expectedREsult: 1 },
    { testData: 2, expectedREsult: 2 },
    { testData: 'Cypress', expectedREsult: 'Cypress' }
  ]

  testData.forEach(({ testData, expectedREsult }) => {
    it(`Search Data ${testData}`, () => {
      cy.visit('https://google.com')
      cy.get('input.gLFyf')
        .type(testData)
        .should("contain.value", expectedREsult)
    })
  })
})


