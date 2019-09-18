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

  it('Should pass all these expects... ifs were not working properly after the 2nd nesting level (not nested ifs, nested callbacks)', () => {
    editFile.open((err, result) => {
      expect(err).toBeFalsy();
      expect(result).toEqual(true);
      editFile.getFilename((err, name) => {
        expect(err).toBeFalsy();
        expect(name).toBeTruthy();
        editFile.read((err, contents) => {
          expect(err).toBeFalsy();
          expect(contents).toEqual(`{"firstName":"Edward","lastName":"Scissorhands","hair":{"type":"wavy","color":"brown"},"favoriteFoods":["pizza","cupcakes","children"],"married":false,"kids":0}`);
        
          const fileObj = JSON.parse(contents);
  
          const oldFile = JSON.parse(contents);
  
          fileObj.firstName = 'Joe';
          fileObj.hair.type = 'Straight';
          fileObj.favoriteFoods[2] = 'Chilli';
          fileObj.married = true;
          fileObj.kids = 4000;
  
          editFile.save(JSON.stringify(fileObj), (err) => {
            expect(err).toBeFalsy();
            editFile.read((err, contents) => {
              editFile.save(JSON.stringify(oldFile), () => { }); //To resave the old JSON
              expect(err).toBeFalsy();
              expect(contents).toEqual(`{"firstName":"Joe","lastName":"Scissorhands","hair":{"type":"Straight","color":"brown"},"favoriteFoods":["pizza","cupcakes","Chilli"],"married":true,"kids":4000}`);
            });
          });
        });
      });
    });
  });
});