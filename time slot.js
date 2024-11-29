const thresholdTime = 45; //if it takes 15 mins to prepare food, 
                          //threshold minutes will be 60-15=45
const now = new Date();
const currentHours = now.getHours();
const currentMinutes = now.getMinutes();

const slots = [
    "9-11",
    "10-12",
    "11-13",
    "12-14",
    "13-15",
    "14-16",
    "15-17",
    "16-18"
];


const availableSlots= slots.filter(slot => {
    const [startHour, endHour] = slot.split('-').map(time => parseInt(time));
    const shouldCheckMinute = startHour == currentHours + 1
    if (startHour > currentHours) {
        if (shouldCheckMinute && !(currentMinutes >= thresholdTime)) {
            return slot
        } else if (!shouldCheckMinute) {
            return slot
        } else {
            return null
        }
    } else {
        return null
    }
}).filter((slot) => slot !== null)
console.log("availableSlots:", availableSlots)