/// <reference types="cypress" />

describe('Game tests', () => {
    beforeEach(() => {
        cy.visit('localhost:4200/login');
        let username: string = "train"
        let password: string = "train"
        cy.get("input[placeholder='Username']").type(username);
        cy.get("input[placeholder='Password']").type(password);
        cy.get("button").contains("Log in").click();
    })

    it('Train Troops', () => {
        cy.get("button").contains("Log in").click();
        cy.get("a[matTooltip='Train Troops']").click();
        cy.get("input[matSliderThumb]").focus().type("{rightarrow}");
        cy.get("a").contains("Train").click();
        cy.get("a[matTooltip='Train Troops']").click();
        cy.get("mat-progress-bar");
    })

    it('Change City Name', () => {
        cy.get("a[matTooltip='Edit City Name']").click();
        cy.get("input[placeholder='City Name']").type("Cypress City");
        cy.get("button").contains("Change Name").click();
        cy.get("a").contains("Cypress City");
    })

    it("Build Building", () => {
        cy.get("td[id='2 2']").click();
        cy.get("mat-panel-title").contains("Apartment").click();
        cy.get("button").contains("Build it!").click();
        cy.get("mat-progress-bar");
    })

    it("Upgrade Building", () => {
        cy.get("td[id='1 1']").click();
        cy.get("button").contains("Upgrade").click();
        cy.get("mat-progress-bar");
    })
  })
  