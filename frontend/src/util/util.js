const getCurrentDate = () => new Date().toISOString().split('T')[0];

const sumAttribute = (arr, attr) => arr.reduce((sum, item) => sum + (item[attr] || 0), 0);

const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 12 ? "Good Morning" 
         : hour < 18 ? "Good Afternoon" 
         : "Good Night";
};


module.exports = { getCurrentDate, sumAttribute, getGreeting};