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

interface exerciseInput {
    target: number;
    dailyExerciseHours: Array<number>;
}

export const getExerciseArgs = (
    target: number,
    dailyExercises: Array<number>
    ): exerciseInput => {
        if (!isNaN(target) && !dailyExercises.some(isNaN)) {
            return {
                target: target,
                dailyExerciseHours: dailyExercises
            };
        } else {
            throw new Error('Provided values were not numbers!');
        }
    };
    
interface returnVals {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export const exerciseCalculator = (
    target: number,
    dailyExerciseHours: Array<number>
    ): returnVals => {
    const periodLength = dailyExerciseHours.length;
    const trainingDays = dailyExerciseHours.filter((day) => day > 0).length;
    const average = dailyExerciseHours.reduce((a, b) => a + b, 0) / periodLength;

    const success = average >= target ? true : false;

    let rating;
    let ratingDescription;

    if (average < target) {
        rating = 1;
        ratingDescription = 'not too bad but could be better';
    } else if (average === target) {
        rating = 2;
        ratingDescription = 'good';
    } else {
        rating = 3;
        ratingDescription = 'very good';
    }

    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    };
};

app.post('/exercises', (req: any, res: any) => {
const dailyExercises = req.body.daily_exercises;
const dailyTarget = req.body.target;
    if (!dailyExercises || !dailyTarget) {
        res.status(400);
        res.send({ error: 'missing parameter daily_exercises or target' });
    } else {
        try {
            const { target, dailyExerciseHours } = getExerciseArgs(dailyTarget, dailyExercises);
                res.send(exerciseCalculator(target, dailyExerciseHours));
            } catch (e) {
                res.status(400);
                res.send({ error: e.message });
            }
        }
});


const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})