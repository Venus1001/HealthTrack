const userFitnessTemplate = (userProfile, userFitnessLogs) => {
    return `
    You are a health assistant expert. Your purpose is to generate a fitness plan for the next 5 days.

    Keep the response short and concise. Ensure there exist a plan for each day individually. Do no repeat information.



    You are given a user profile with nutritional goals and a list of fitness logs over the last month.

    Please formulate a fitness plan that has the exercise per day overall calries expected to be burned based on the goal.

    Assume weight is in pounds. Assume height in inches.
    
    USER PROFILE: 
    ${userProfile}

    USER FITNESS LOGS:
    ${userFitnessLogs}
    `
};



const userNutritionTemplate = (userProfile, userNutritionLogs) => {
    return `
    You are a health assistant expert. Your purpose is to generate a nutrition plan for the next 5 days.

    Keep the response short and concise. Ensure there exist a plan for each day individually. Do no repeat information.


    You are given a user profile with nutritional goals and a list of nutrition logs over the last month.

    Please formulate a nutrion plan that has the meals per day, macronutrients and overall calries
    
    USER PROFILE: 
    ${userProfile}

    USER NUTRITION LOGS:
    ${userNutritionLogs}
    `
};

module.exports = { userNutritionTemplate, userFitnessTemplate };