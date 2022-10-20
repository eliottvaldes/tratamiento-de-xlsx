const fileController = require('./lib/controller/fileController');
const excelController = require('./lib/controller/excelController');

// this variable contains the name of the file that will be treated and created
const fileNameToTreat = '19-10-22-david';

// define the full path of the file to treat
const file = `./public/${fileNameToTreat}.xlsx`;


fileController.createFile();
fileController.addInfo(file);
const fileName = excelController.getFileName(file);
fileController.moveFile(fileName);
