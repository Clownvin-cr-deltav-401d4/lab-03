const fs = require('fs');

module.exports = exports = {
  //editFile.open();

  filename: null,

  open: (callback) => {
    //console.log("ARGS", process.argv);
    this.filename = `${__dirname}${process.argv[process.argv.length - 1]}`;//
    callback(null, true);
  },

  //editFile.readFile();

  read: (callback) => {
    fs.readFile(this.filename, 'utf-8', callback);
  },

  //editFile.getCurrentFilename()

  getFilename: (callback) => {
    callback(null, this.filename);
  },

  //editFile.save(JSON.stringify(fileObj));

  save: (contents, callback) => {
    fs.writeFile(this.filename, contents, callback);
  },
  
};
