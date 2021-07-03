const BMI = (height: number, weight: number): string => {
    const bmi = weight/(height*height)
    if (bmi > 25){
        return "Overweight " + bmi
    } else if (bmi < 18) {
        return "underweight " + bmi
    } else {
        return "Normal weight " + bmi
    }
}

console.log(BMI(Number(process.argv[2]), Number(process.argv[3])))