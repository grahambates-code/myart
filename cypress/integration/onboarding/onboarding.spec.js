/* eslint-disable no-undef */
import cleardown from '../../cleardown'
import onboardingAccount from '../../common/onboarding-account'
import {createUserAndLogin, login} from '../../common'

describe('onboarding', () => {

    before(() => {
        cy.clearCookies();

        const quick = true;

        if (!quick) {
            cleardown();
            createUserAndLogin();
        } else {
            login();
        }

    });

    after(() => {
        //return cleardown();
    });

    it('should complete onboarding', () => {

        cy.get('#testAgreeOnboarding').click();

        onboardingAccount.fillInValidAddress();

        //Account
        cy.get('#businessType').type('Man{enter}');
        cy.get('#buildingType').type('Sing{enter}');
        cy.get('#buildingSiteAttributes').type('Nea{enter}');
        cy.get('#testOnboardingFormsNext').click();

        //tenancy
        cy.get('#numberOfTenants').type('1');
        cy.get('#testOnboardingFormsNext').click();

        //occupants
        cy.get('#occupants').type('1');
        cy.get('#testOnboardingFormsNext').click();

        //meter
        cy.get('#supplier').type('Day{enter}') //pick one with only one match
        cy.get('#ownerType').type('Indiv{enter}');
        cy.get('#testOnboardingFormsNext').click();

        //tenancy


    })

});
