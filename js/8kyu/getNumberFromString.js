// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// My solution
function getNumberFromString(s) {
    const digitsOnly = s.replace(/\D/g, '')
    const number = parseInt(digitsOnly, 10)
    return number;
}