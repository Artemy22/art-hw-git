
///<reference types="cypress"/>

const elements = {
  modalOverlaysDropDown: 'menu-item ng-tns-c141-19 ng-star-inserted',
  optionToastr: 'menu-item ng-tns-c141-23',
  toasterConfigurationPosition: 'mat-ripple position-select',
  toasterConfigurationTitle: '[ng-reflect-name="title"]',
  toasterConfigurationPosition: '[ng-reflect-name="content"]',
  toasterConfigurationPosition: '[ng-reflect-name="timeout"]',


}

const dashboardElements = {
  forms_dropdown: 'a[title="Forms"]',
  forms_dropdown_layouts: 'a[title="Form Layouts"]'
}


const testData = [
  { testData: inputs.block_form.first_name, expectedREsult: inputs.block_form.first_name },
  { testData: inputs.block_form.email, expectedREsult: inputs.block_form.email },
  { testData: inputs.block_form.last_name, expectedREsult: inputs.block_form.last_name },
  { testData: inputs.block_form.website, expectedREsult: inputs.block_form.website }
]

function clicker(element) {
  cy.get(element).click({ force: true })
  return this
}
/*
function formWorker(description, locatorsArrayToFill, locatorsArrayToClick) {
  describe(description, () => {
    it('passes', () => {
      cy.visit(urlToGo)

      goToNeededPageFlow()

      for (let i = 0; i < locatorsArrayToFill.length; i++) {
        cy.get(locatorsArrayToFill[i]).type(description)
      }

      for (let j = 0; j < locatorsArrayToClick.length; j++) {
        clicker(locatorsArrayToClick[j])
      }
    })
  })
}
*/
const myBlockForm = [
  inputs.block_form.first_name,
  inputs.block_form.email, 
  inputs.block_form.last_name,
  inputs.block_form.website
]

describe('Parametrized tests for toastr', () => {

    testData.forEach(({ testData, expectedREsult }, i) => {
      it(`The case for filling out the Block form by value: ${myBlockForm[i]}`, () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.contains('Material Dark').click()
        clicker(dashboardElements.forms_dropdown)
        clicker(dashboardElements.forms_dropdown_layouts)

        cy.get(myBlockForm[i])
          .type(testData)
          .should("contain.value", expectedREsult)
      })
    })  
})
