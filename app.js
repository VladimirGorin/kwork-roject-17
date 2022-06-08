const express = require('express');
const config = require('config');
const path = require('path');
const app = express();

app.use(express.json({extended: true }));



if(process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res)=> {
    res.sendfile(path.resolve(__dirname , 'client', 'build' +'index.html'))
  })
}


const PORT = process.env.PORT || config.get('port') || 8080

app.listen(PORT, ()=> {
  console.log(`START on ${PORT} `)
})