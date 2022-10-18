const fileController = require('./lib/controller/fileController');
const excelController = require('./lib/controller/excelController');

fileController.createFile();
fileController.addInfo('./public/file.xlsx');
const fileName = excelController.getFileName('./public/file.xlsx');
fileController.moveFile(fileName);
