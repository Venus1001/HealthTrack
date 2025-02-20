export function generateFakeUser(userId, userName) {
    return {
        userId,
        userName,
        height:  randomInt(40,50 ),
        weight: randomInt(100, 200),
        age: randomInt(15, 25),
        fitnessGoal: [
            "WeightLoss", 
            "WeightGain", 
            "BuildMuscle", 
            "ToneBody"
        ][Math.floor(Math.random() * 4)]
    }
}

export function generateFakeUserFitness(userId) {
    const nutrition = [];
    for (let i = 1; i< 30; i++) {
        nutrition.push(
            {
                userId,
                date: `2025-01-${i}`,
                steps: randomInt(100, 1000),
                calories: randomInt(100, 1000),
                activity: [
                    "Running", 
                    "Jogging", 
                    "Weight Lifting", 
                    "Pilates",
                    "Biking",
                    "Basketball",
                    "Dancing",
                    "Cardio"
                ][Math.floor(Math.random() * 8)]
            }
        )
    }
    return nutrition;
}

export function generateFakeUserNutrition(userId) {
    const nutrition = [];
    for (let i = 1; i< 30; i++) {
        nutrition.push(
            {
                userId,
                date: `2025-01-${i}`,
                calories: randomInt(100, 1000),
                category: [
                    "Protien",
                    "Carbs",
                    "Fiber", 
                    "Fats"
                ][Math.floor(Math.random() * 4)],
                grams: randomInt(5, 30)
            }
        )
    }
    return nutrition;
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;