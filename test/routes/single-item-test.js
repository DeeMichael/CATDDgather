const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id', () => {
  beforeEach(connectDatabaseAndDropData);
  afterEach(diconnectDatabase);

  // Write your test blocks below:
  describe('GET', ()=> {
    it('renders a single item title and description', async ()=> {
      const item = await seedItemToDatabase({
                title: "foo",
                description: "foo bar",
                imageUrl: "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
            });
      const response = await request(app).get(`/items/${item._id}`);
      assert.include(parseTextFromHTML(response.text, "#item-title"), item.title);
      assert.include(parseTextFromHTML(response.text, "#item-description"), item.description);

      console.log('parseTextFromHTML is |||' + parseTextFromHTML(response.text, "#item-title") +'|||')
      console.log('item.title is |||' + item.title +'|||')
      // assert.equal(parseTextFromHTML(response.text, "#item-title"), item.title);
      // assert.equal(parseTextFromHTML(response.text, "#item-description"), item.description);
    });
  });

});
