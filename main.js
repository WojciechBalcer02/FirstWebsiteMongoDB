const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Hello world from www"))
//rooting

app.get("/telefony", (req, res)=>{
    const telefony=[
        {
            id:1,
            marka:"xiaomi",
            model:"redmi note 10s",
            cena:1000
            },
            {
                id:2,
                marka:"iphone",
                model:"11",
                cena:3000
            }
    ]
    res.json(telefony)
})

app.listen(port, ()=> console.log(`praca na porcie ${port}`))



console.log("hello world")