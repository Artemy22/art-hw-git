
///<reference types="cypress"/>

const inputs = {
  inline_form: {
    name: '[placeholder="Jane Doe"]',
    email: 'nb-card.inline-form-card [placeholder="Email"]'
  },
  grid: {
    email: '[id="inputEmail1"]',
    password: '[id="inputPassword2"]'
  },
  basic_form: {
    email: '[id="exampleInputEmail1"]',
    password: '[id="exampleInputPassword1"]'
  },
  form_without_labels: {
    recipients: '[placeholder="Recipients"]',
    subject: '[placeholder="Subject"]',
    message: '[placeholder="Message"]'
  },
  block_form: {
    first_name: '[id="inputFirstName"]',
    last_name: '[id="inputLastName"]',
    email: '[id="inputEmail"]',
    website: '[id="inputWebsite"]'
  },
  horizontal_form: {
    email: '[id="inputEmail3"]',
    password: '[id="inputPassword3"]'
  }
}

const buttons = {
  inline_form_submit: 'nb-card.inline-form-card button',
  form_without_labels_submit: '[ng-reflect-status="success"]',
  basic_form_submit: '[status="danger"]',
  grid_sign_in: 'button[status="primary"]:contains("Sign in")',
  horizontal_form_sign_in: '[status="warning"]',
  block_form_submit: 'button[type="submit"].status-basic',
}

const checkBoxes = {
  inline_form: 'nb-card.inline-form-card span.custom-checkbox',
  basic_form: 'nb-card-header:contains("Basic form") + nb-card-body .custom-checkbox',
  horizontal_form: 'nb-card-header:contains("Horizontal form") + nb-card-body .custom-checkbox'
}

const gridRadioButtons = {
  the_first: 'span.text:contains("Option 1")',
  the_second: 'span.text:contains("Option 2")'
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

describe('Parametrized tests for block form', () => {

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
