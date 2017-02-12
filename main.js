function pdfObject ('filepath') {
    var scissors = require('./scissors.js');
    var fs = require('fs');
    var pdftk = require('pdftk-bin');

    var pdfData = pdftk.run('dump_data');
    var pageCount = pdfData.findStr()
    var sourcePDF = scissors('test.pdf');

    var newPDF =  sourcePDF.pages(2,3);

    newPDF.pdfStream().pipe(fs.createWriteStream('out.pdf'));
}