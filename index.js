const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path')

let body = ''

function buildBody(){
    fs.readSync(__dirname + '/public').forEach(function)
}
fs.readdir(__dirname+'/public', (err, files) =>{
    files.forEach(file => {
        if(path.extname(file) === '.html'){
            body += '<li><a href="/'+file+'">' + file + '</a></li>'
        }
    })
})

function buildHTML(req) {
    return '<!doctype html><html lang="en">' + '<body><h1>EnergyGigs File Server</h1>' + body + '</body></html>'
}

app.get('/', (req,res) => {
    let html = buildHTML(req)
    res.end(html);
})
app.use(express.static('public'))


app.listen(port, () => console.log(`listening on port ${port}!`))
