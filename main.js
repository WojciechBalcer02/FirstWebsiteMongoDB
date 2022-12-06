const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
//midlewear, żeby dodawało całe body do telefonu

let telefony=[
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
        },
        {
            id:3,
            marka:"samsung",
            model:"21",
            cena:2500
        }
]

app.get("/", (req, res) => res.send("Hello world from www"))
//rooting

app.get("/telefony", (req, res)=>{
    res.json(telefony)
})

app.get("/telefony/:id", (req, res)=>{
    res.json(telefony.find(t => t.id === +req.params.id))
    //szukanie po id telefonu
})

app.post("/telefony", express.json(), (req, res)=>{
    const t = { ...req.body, id: telefony.length+1}
    //dekonstrukcja "...req.body"
    telefony = [...telefony, t]
    res.json(t)
    //dodawanie do listy telefonów
})

app.put("/telefony/:id", (req, res)=>{
    const t ={ ...req.body, id: +req.params.id}
    telefony = telefony.filter(t => t.id !== +req.params.id)
    telefony = [...telefony, t] //append()
    res.json(t)
})//update po id

app.delete("/telefony/:id", (req, res)=>{
    telefony = telefony.filter(t => t.id !== +req.params.id)
    res.json({
        id:+req.params.id,
        "info":"usunięto"
    })
})//delete po id


app.listen(port, ()=> console.log(`praca na porcie ${port}`))



console.log("hello world")