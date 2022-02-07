before(() => {
  cy.roomEnter()
})

after(() => {
  cy.logout()
})

describe('The Sidebar', () => {

  describe('when register a panel', () => {

    beforeEach(function () {
      cy.fixture('sidebar').then((sidebar) => {
        this.sidebarPanelOptions = sidebar.panelOptions
      })
    })

    it('should display a sidebar button', function () {
      cy.openMoreAppsMenu()
      const sidebarButton = cy.getSidebarButton(this.sidebarPanelOptions.label)
      sidebarButton.should('exist')
      sidebarButton.contains(this.sidebarPanelOptions.label)
    })

    it('should display an iframe when the button is clicked', function () {
      cy.getSidebarButton(this.sidebarPanelOptions.label).click()
      cy.get('[data-testid="sidebar-header"]').contains(this.sidebarPanelOptions.label)

      cy.getIframeContent('sidebar-panel', 'element').should('exist')
      
      cy.wait(1000)
      cy.getIframeContent('sidebar-panel', 'body').contains(this.sidebarPanelOptions.template)

      cy.url().should('contain', this.sidebarPanelOptions.slug)
    })

    it('should be able to pass data to its parent plugin', function () {
      const messageToSend = 'foo'
      cy.getIframeContent('sidebar-panel', 'window').invoke('postMessage', messageToSend)
      cy.getIframeContent('plugin', 'window').its('__messageReceived__').should('eq', messageToSend)
    })

    describe('on close', () => {

      it('should not be displayed', function () {
        cy.getIframeContent('plugin', 'window').invoke('__closePanel__')
        cy.getIframeContent('sidebar-panel', 'element').should('not.exist')
        cy.url().should('not.contain', this.sidebarPanelOptions.slug)
      })

      it('should still display the sidebar button', function () {
        cy.openMoreAppsMenu()
        cy.getSidebarButton(this.sidebarPanelOptions.label).should('exist')
      })
    })

    describe('on focus', () => {

      it('should be displayed', function () {
        cy.getIframeContent('plugin', 'window').invoke('__focusPanel__')
        cy.getIframeContent('sidebar-panel', 'element').should('exist')
        cy.url().should('contain', this.sidebarPanelOptions.slug)
      })
    })

    describe('on remove', () => {

      it('should not be displayed anymore', function () {
        cy.getIframeContent('plugin', 'window').invoke('__removePanel__')
        cy.getIframeContent('sidebar-panel', 'element').should('not.exist')
        cy.url().should('not.contain', this.sidebarPanelOptions.slug)
      })

      it('should not display the sidebar button anymore', function () {
        cy.getSidebarButton(this.sidebarPanelOptions.label).should('not.exist')
      })
    })
  })
})