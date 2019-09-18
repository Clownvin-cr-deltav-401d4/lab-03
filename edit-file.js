'use-strict';
const fs = require('fs');

function promisify(func, ...args) {
  return new Promise((resolve, reject) => {
    func(...args, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  });
}

module.exports = exports = {
  //editFile.open();

  filename: null,

  open: () => {
    //console.log("ARGS", process.argv);
    this.filename = `${__dirname}${process.argv[process.argv.length - 1]}`;//
  },

  //editFile.readFile();

  read: async () => {
    return await promisify(fs.readFile, this.filename, 'utf-8');
  },

  //editFile.getCurrentFilename()

  getFilename: () => {
    return this.filename;
  },

  //editFile.save(JSON.stringify(fileObj));

  save: async(contents) => {
    return await promisify(fs.writeFile, this.filename, contents);
  },

};
