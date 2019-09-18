'use-strict';

/*
Use the node fs module
Accepts a file name as a command line parameter
Reads in the contents of the file specified
Convert the contents to a javascript object
Alters some values in the object
Maybe use faker
Save the new object back to the file
What 2 steps are required to do this?
Re-Open and read the file contents
Prove that the new file contents match your changed object
*/

const editFile = require('../edit-file');

//process.argv.push('/data/person.json'); //Add in the argument manually

describe('edit-file', () => {
  editFile.open();
  it('should open the file with the path of the last argument in process.argv (./data/person.json)', () => {
    expect(editFile.getFilename()).toMatch(/.*\/data\/person.json/);
  });

  const expectedContent = '{"firstName":"Edward","lastName":"Scissorhands","hair":{"type":"wavy","color":"brown"},"favoriteFoods":["pizza","cupcakes","children"],"married":false,"kids":0}';

  it('should read the contents of the file', async() => {
    const contents = await editFile.read();
    console.log(contents);
    expect(contents).toEqual(expectedContent);
  });
  let person = JSON.parse(expectedContent);
  let originalPerson = JSON.parse(expectedContent);

  person.firstName = 'Joe';
  person.hair.type = 'straight';
  person.favoriteFoods[2] = 'chili';
  person.married = true;
  person.kids = 4000;

  it('should save new content to the file', async() => {
    await editFile.save(JSON.stringify(person));
    const contents = await editFile.read();
    console.log(contents);
    expect(contents).toEqual('{"firstName":"Joe","lastName":"Scissorhands","hair":{"type":"straight","color":"brown"},"favoriteFoods":["pizza","cupcakes","chili"],"married":true,"kids":4000}');
    await editFile.save(JSON.stringify(originalPerson)); // Re-save for future tests;
  });
});