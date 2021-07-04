interface result { 
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}
const calculateExercise = (arr: number[]): result => {
    let average = 0, trainingDays = 0;
    arr.forEach(val => {
        val > 0 ? trainingDays += 1 : null
        average += val
    })
    average /= arr.length
    const result: result = {average: average, periodLength: arr.length, target: 2, rating: 2, ratingDescription: "good", success: average >= 2, trainingDays: trainingDays}
    return result
}

console.log(calculateExercise([1,2,3,0,1,2]))