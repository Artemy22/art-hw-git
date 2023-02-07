
///<reference types="cypress"/>

const elements = {
  modalOverlaysDropDown: '[title="Modal & Overlays"]',
  optionToastr: '[title="Toastr"]',
  toasterConfigurationPosition: '[ng-reflect-selected="top-right"]',
  toasterConfigurationTypeDropdown:
  {
    main: ':nth-child(2) > .form-group > .mat-ripple > .select-button',
    primary: '[ng-reflect-value="primary"]',
    success: '[ng-reflect-value="success"]',
    warning: '[ng-reflect-value="warning"]',
    danger: '[ng-reflect-value="danger"]'
  },
  positionPopup: {
    bottomStart: '[id="cdk-overlay-1"]',  //primary   #6200ee   rgb(98, 0, 238)    cdk-overlay-container.eq1
    topStart: '[id="cdk-overlay-2"]',     //success   #60af20   rgb(96, 175, 32)
    bottomRight: '[id="cdk-overlay-4"]',  //warning   #ff9f05   rgb(255, 159, 5)
    topRight: '[id="cdk-overlay-5"]'      //danger    #b00020   rgb(176, 0, 32)
  },
  positionInDropdown: {
    bottomStart: '[id="nb-option-31"]',  //primary   #6200ee   rgb(98, 0, 238)    cdk-overlay-container.eq1
    topStart: '[id="nb-option-29"]',     //success   #60af20   rgb(96, 175, 32)
    bottomRight: '[id="nb-option-27"]',  //warning   #ff9f05   rgb(255, 159, 5)
    topRight: '[id="nb-option-24"]'      //danger    #b00020   rgb(176, 0, 32)
  },
  colors: {
    bottomStart: 'rgb(233, 29, 99)',
    topStart: 'rgb(96, 175, 32)',
    bottomRight: 'rgb(255, 159, 5)',
    topRight: 'rgb(176, 0, 32)',
  },
  toasterConfigurationTitle: '[name="title"]',
  toasterConfigurationContent: '[ng-reflect-name="content"]',
  toasterConfigurationtimeout: '[ng-reflect-name="timeout"]',
  mainDivToCheck: 'cdk-overlay-container',
  burgerButton: '[data-name="menu"]',
  showToastButton: 'nb-card-footer .status-basic'
}

const toasts = {
  bottomStart: '.ng-tns-c209-54.status-primary',
  topStart: '.ng-tns-c209-54.status-success',
  bottomRight: '.ng-tns-c209-54.status-warning',
  topRight: '.ng-tns-c209-54.status-danger'
}

const testDataArr = [
  { testData: elements.positionInDropdown.bottomStart, expectedResult: elements.colors.bottomStart },
  { testData: elements.positionInDropdown.topStart, expectedResult: elements.colors.topStart },
  { testData: elements.positionInDropdown.bottomRight, expectedResult: elements.colors.bottomRight },
  { testData: elements.positionInDropdown.topRight, expectedResult: elements.colors.topRight },
]

beforeEach('', () => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
  cy.contains('Material Dark').click()
  cy.get(elements.modalOverlaysDropDown).click()
  cy.get(elements.optionToastr).click()
  cy.get(elements.burgerButton).click()
})

testDataArr.forEach(({ testData, expectedResult }, i) => {
  it(`Param horror and pain of tost#${i}`, () => {
    cy.get(elements.toasterConfigurationPosition).click()
    cy.get(testData).click()
    cy.get(elements.toasterConfigurationTitle).type(`${testData}`).should('contain.value', `${testData}`)
    cy.get(elements.toasterConfigurationContent).type(`${testData}`).should('contain.value', `${testData}`)
    cy.get(elements.toasterConfigurationtimeout).type(20000).should('contain.value', 2000)

    switch (testData) {
      case elements.positionInDropdown.bottomStart:
        cy.get(elements.toasterConfigurationTypeDropdown.main).click()
        cy.get(elements.toasterConfigurationTypeDropdown.primary).click()
        cy.get(elements.showToastButton).click()
        cy.get(toasts.bottomStart)
          .should('have.css', 'background-color')
          .and('eq', expectedResult)
        cy.get(toasts.bottomStart).click('bottomLeft', { force: true })
        cy.get(toasts.bottomStart).should('not.exist')
        break;

      case elements.positionInDropdown.topStart:
        cy.get(elements.toasterConfigurationTypeDropdown.main).click()
        cy.get(elements.toasterConfigurationTypeDropdown.success).click()
        cy.get(elements.showToastButton).click()
        cy.get(toasts.topStart)
          .should('have.css', 'background-color')
          .and('eq', expectedResult)
        cy.get(toasts.topStart).click('topLeft', { force: true })
        cy.get(toasts.topStart).should('not.exist')
        break;

      case elements.positionInDropdown.bottomRight:
        cy.get(elements.toasterConfigurationTypeDropdown.main).click()
        cy.get(elements.toasterConfigurationTypeDropdown.warning).click()
        cy.get(elements.showToastButton).click()
        cy.get(toasts.bottomRight)
          .should('have.css', 'background-color')
          .and('eq', expectedResult)
        cy.get(toasts.bottomRight).click('bottomRight', { force: true })
        cy.get(toasts.bottomRight).should('not.exist')
        break;

      case elements.positionInDropdown.topRight:
        cy.get(elements.toasterConfigurationTypeDropdown.main).click()
        cy.get(elements.toasterConfigurationTypeDropdown.danger).click()
        cy.get(elements.showToastButton).click()
        cy.get(toasts.topRight)
          .should('have.css', 'background-color')
          .and('eq', expectedResult)
        cy.get(toasts.topRight).click('topRight', { force: true })
        cy.get(toasts.topRight).should('not.exist')
        break;
      default:
        break;
    }
  })
})