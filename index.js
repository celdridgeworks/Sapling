const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

const getDirectories = dir => 
    fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name) 
                                            
console.log(getDirectories(__dirname + "/public"))


const buildBody = (fileArray) =>{
    let body = ''
    fileArray.forEach(file => {
        body += '<li><a href="/'+file+'">' + file + '</a></li>'
    })
    return body;
}

function buildHTML(req) {
    return '<!doctype html><html lang="en">' 
    + '<body><h1>EnergyGigs File Server</h1>' 
    + buildBody(getDirectories(__dirname + "/public")) 
    + '</body></html>'
}

app.get('/', (req,res) => {
    let html = buildHTML(req)
    res.end(html);
})
app.use(express.static('public'))


app.listen(port, () => console.log(`listening on port ${port}!`))
