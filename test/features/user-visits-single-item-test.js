const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits the single item page', () => {
    describe('posts a new item and views it on single item page', () => {
      it('and is rendered', () => {
        const itemToCreate = buildItemObject();
        browser.url('/items/create');
        browser.setValue('#title-input', itemToCreate.title);
        browser.setValue('#description-input', itemToCreate.description);
        browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
        browser.click('#submit-button');
        browser.click('.item-card a');
        assert.include(browser.getText('body'), itemToCreate.title);
        // assert.include(browser.getText('body'), itemToCreate.description);
        // assert.include(browser.getText('body'), itemToCreate.imageUrl);
        // assert.include(browser.getAttribute('body img', 'src'), itemToCreate.imageUrl);
      });
    });
});
