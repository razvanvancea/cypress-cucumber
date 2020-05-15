const { Given, Then, When } = require("cypress-cucumber-preprocessor/steps");
import GooglePage from "../pages/GooglePage";

When("I visit {string}", (url) => {
  GooglePage.visit(url);
});

When("I search for {string}", (value) => {
  GooglePage.search(value);
});

When("I click I feen lucky", () => {
  GooglePage.clickFeelLucky();
});

When("I type {string}", (value) => {
  GooglePage.search(value);
});

export default GooglePage;
