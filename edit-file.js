'use-strict';
const fs = require('fs');

module.exports = exports = {
  //editFile.open();

  filename: null,

  open: () => {
    //console.log("ARGS", process.argv);
    this.filename = `${__dirname}${process.argv[process.argv.length - 1]}`;//
  },

  //editFile.readFile();

  read: () => {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filename, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  //editFile.getCurrentFilename()

  getFilename: () => {
    return this.filename;
  },

  //editFile.save(JSON.stringify(fileObj));

  save: (contents) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filename, contents, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  },
  
};
