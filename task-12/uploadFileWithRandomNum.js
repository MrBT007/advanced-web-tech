var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

function getRandomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
  }

  function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
  }
  
console.log("Bhut Tushar : 20BCP023")
http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            const random = getRandomNumber().toString();
            const time = getTimestampInSeconds().toString();
            var fname = files.filetoupload.originalFilename.split(".",2);
            var newpath = 'C:\\Users\\TUSHAR BHUT\\OneDrive\\Desktop\\test\\' +fname[0]+"_"+random+"_"+time+"."+fname[1];
            console.log("New Path : "+newpath)
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);