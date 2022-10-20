const prompt = require('prompt-sync')({sigint: true});


// Initialize stats variable
let stats = {
    time: 6,
    caughtFish: [],
    totalLbs: 0,
    totalValue: 0
}

// NAME: arrays for random fish name
let fishTypeSm = ["Guppy", "Betta", "Anchovie", "Sardine"];       // lbs < 2
let fishTypeMed = ["Trout", "Herring", "Mackerel", "Barracuda"];  // lbs 3-4
let fishTypeLg = ["Salmon", "Bass", "Catfish", "Carp"];           // lbs > 4

// DESCRIPTORS: arrays for random fish adjectives
let adjective = ["Adamant", "Effulgent", "Forlorn", "Perspicacious", "Effervescent", "Strident", "Budgetorial", "Adamant", "Stoic", "Ruminant"];
let color = ["Vermillion", "Ivory", "Sepia", "Mustard", "Cyan", "Apricot", "Mahogany", "Fuschia", "Sangria", "Amethyst"];



// PROGRAM START
console.log("\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (untill 12:00pm) and can catch at most 10 lbs of fish.")

while (stats.time < 12) {
    
    displayStats();
    generateNewFish();

    if ((stats.totalLbs + newFish.lbs) <= 10) {
    
        promptUserChoice();

        if (userAction === "c") {

            console.log("\nYou have chosen to keep this fish!");
            stats.caughtFish.push(newFish);
            stats.totalLbs += newFish.lbs;
            stats.totalValue += newFish.totalValue;
            console.log("\n======================================================================");

        } else if (userAction === "r") {
            console.log("\nYou have chosen to release this fish.");
        }

    } else {
        console.log("\nThis fish will put you above the allowed weight limit!\nYou've released this fish!")

    }
    stats.time++;
}

// FINAL DISPLAY one-line: time, number of fish, total lbs, total value
console.log(`\nThe time is ${stats.time}:00am. You've finished the day with: \n${stats.caughtFish.length} fish, ${Number(stats.totalLbs.toPrecision(3))} lbs, $${Number(stats.totalValue.toPrecision(3))}\n`);

// FINAL FISH NAMES DISPLAY
for (let i = 0; i < stats.caughtFish.length; i++) {

    console.log(`${stats.caughtFish[i].name}, ${Number(stats.caughtFish[i].lbs.toPrecision(3))}lbs, $${Number(stats.caughtFish[i].value.toPrecision(3))}\n`);
}

// PROGRAM END






// FUNCTIONS:

//----------function start: displayStats() --------------------
// CURRENT STATS: Display

function displayStats() {
    return console.log(`\nThe time is ${stats.time}:00am. So far you've caught: \n${stats.caughtFish.length} fish, ${Number(stats.totalLbs.toPrecision(3))} lbs, $${stats.totalValue}`);
}
//---------- function end: displayStats() --------------------




// ---------- function start: generateNewFish() --------------------
// GENERATE NEW FISH: Will generate a new fish with random name/weight/value/total value. Total value = lbs * value
function generateNewFish() {
    
// NAME / WEIGHT / VALUE:
    newFish = {}

    // LBS GEN
    newFish.lbs = Number((Math.random() * 10).toPrecision(3));
    
    // VALUE GEN per lbs
    newFish.value = Number((Math.random() * (8 - 2) + 2).toPrecision(3));
    
    // TOTAL FISH VALUE - lbs * value
    newFish.totalValue = newFish.lbs * newFish.value;
    newFish.totalValue = Number(newFish.totalValue.toPrecision(3));
    
    // NAME GEN, based o generated lbs
    if (newFish.lbs < 2) {
        newFish.name = `${adjective[Math.floor(Math.random() * 10)]} ${color[Math.floor(Math.random() * 10)]} ${fishTypeSm[Math.floor(Math.random() * 4)]}`;

    } else if (newFish.lbs >= 3 && newFish.lbs <= 4) {
        newFish.name = `${adjective[Math.floor(Math.random() * 10)]} ${color[Math.floor(Math.random() * 10)]} ${fishTypeMed[Math.floor(Math.random() * 4)]}`;

    } else {
        newFish.name = `${adjective[Math.floor(Math.random() * 10)]} ${color[Math.floor(Math.random() * 10)]} ${fishTypeLg[Math.floor(Math.random() * 4)]}`;
    }    

    // Current caught fish, awaiting catch/release decision
    console.log(`\nYou caught a(n) ${newFish.name} weighing ${newFish.lbs} lbs and valued at $${newFish.totalValue}.\n`);

    return newFish;
}
// ---------- function end: generateNewFish() --------------------   





// ---------- function start: userChoice() --------------------

function promptUserChoice() {

    // User prompt catch/release
    userAction = prompt("Your action: [c]atch or [r]elease?: ");
    return userAction;
}

// ---------- function end: userChoice() --------------------   

