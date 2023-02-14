
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
  burgerButton: '[data-name="menu"]',
  showToastButton: 'nb-card-footer .status-basic'
}
const paramArray = [{
  position: elements.positionInDropdown.bottomStart,
  title: 'bottomStart toast',
  content: 'bottomStart content',
  timeout: 1000,
  type: elements.toasterConfigurationTypeDropdown.primary,
  status: 'primary',
  color: elements.colors.bottomStart
}, {
  position: elements.positionInDropdown.topStart,
  title: 'topStart toast',
  content: 'topStart content',
  timeout: 1000,
  type: elements.toasterConfigurationTypeDropdown.success,
  status: 'success',
  color: elements.colors.topStart
}, {
  position: elements.positionInDropdown.bottomRight,
  title: 'bottomRight toast',
  content: 'bottomRight content',
  timeout: 1000,
  type: elements.toasterConfigurationTypeDropdown.warning,
  status: 'warning',
  color: elements.colors.bottomRight
}, {
  position: elements.positionInDropdown.topRight,
  title: 'topRight toast',
  content: 'topRight content',
  timeout: 1000,
  type: elements.toasterConfigurationTypeDropdown.danger,
  status: 'danger',
  color: elements.colors.topRight
}]

const mySleeplessNights = (paramArray) => {
  cy.navigateToDashboard()
  cy.get(elements.modalOverlaysDropDown).click()
  cy.get(elements.optionToastr).click()
  cy.get(elements.burgerButton).click()
  cy.get(elements.toasterConfigurationPosition).click()
  cy.get(Object.values(paramArray)[0]).click() // position of the toast
  cy.inputFiller(elements.toasterConfigurationTitle, `title ${Object.values(paramArray)[1]}`)
  cy.inputFiller(elements.toasterConfigurationContent, `content ${Object.values(paramArray)[2]}`)
  cy.inputFiller(elements.toasterConfigurationtimeout, `${Object.values(paramArray)[3]}`)
  cy.get(elements.toasterConfigurationTypeDropdown.main).click()
  cy.get(Object.values(paramArray)[4]).click() //  type e.x. primary
  cy.get(elements.showToastButton).click()
  cy.get(`.toastr-overlay-container .status-${Object.values(paramArray)[5]}`)
    .should('exist')
    .and('have.css', 'background-color')
    .and('eq', Object.values(paramArray)[6]) // color rgb
}
paramArray.forEach(paramObject => {
  it(`Ass in fire of ${Object.values(paramObject)[1]}`, () => {
    mySleeplessNights(paramObject)
  })
})
