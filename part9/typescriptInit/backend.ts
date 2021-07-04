const express = require('express');
const app = express();

app.get('/ping', (_req: any, resp: { send: (arg0: string) => void; }) => {
    resp.send('Hello Full Stack!')
})

app.get('/bmi',(req: { query: { height: number; weight: number; }; }, resp: any) => {
    const height = req.query.height;
    const weight = req.query.weight;
    if(isNaN(weight) || isNaN(height)) {
        throw new Error('malformed input')
    }
    const bmi = weight/(height*height)
    let bmiDesc;
    if (bmi > 25){
        bmiDesc =  "Overweight " + bmi
    } else if (bmi < 18) {
        bmiDesc = "underweight " + bmi
    } else {
        bmiDesc = "Normal weight " + bmi
    }
    resp.json({
        weight: weight,
        height: height,
        bmi: bmiDesc
    })
})

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})