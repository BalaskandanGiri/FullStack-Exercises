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
    let res = {}
    let average = 0, trainingDays = 0;
    res["periodLength"] = arr.length;
    res["target"] = 2
    arr.forEach(val => {
        val > 0 ? trainingDays += 1 : null
        average += val
    })
    average /= res["periodLength"]
    res["success"] = res["average"] >= res["target"]
    res["ratingDescription"] = "good"
    res["rating"] = 2
    const result: result = {average: average, periodLength: res["periodLength"], target: res["target"], rating: res["rating"], ratingDescription: res["ratingDescription"], success: res["success"], trainingDays: trainingDays}
    return result
}

console.log(calculateExercise([1,2,3,0,1,2]))