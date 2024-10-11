// Function to find drivers that match a given name (case-insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to perform a fuzzy match that checks if the beginning of the name matches
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to match the name in the data structure (for driver objects)
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

