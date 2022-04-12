const express = require('express')
const app = express()
const engine = require('express-handlebars').engine
app.set('view engine', 'hbs')
app.engine('hbs', engine({ extename: 'hbs'}))



app.get('/:lang?', (req, res)=>{
    const lang = req.params.lang?req.params.lang:"fr"
    const translation = require('./translation.json')
    var  trad = Object.entries(translation)
    for(i=0; i<trad.length; i++){
        if(trad[i][0] == lang){
            trad=trad[i]
        }
    }
    res.render('home', {
        pageTitle:trad[0], 
        pageText:trad[1].pageTitle,
        title:trad[1].title, 
    })
})

app.listen(3000)