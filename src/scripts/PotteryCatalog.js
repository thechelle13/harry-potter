// Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
// Define and export a function named toSellOrNotToSell that is responsible for determining if a piece of pottery should be sold.
// The toSellOrNotToSell function must accept a pottery object as input.
// If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a price property with a value of 40.
// If the weight of the piece of pottery is less than 6 then the function must add a price property with a value of 20.
// If the piece of pottery is cracked, do not add a price property to it.
// If the pottery is not cracked, add the object to the module-level array of items to be sold.
// Return the augmented object.
// Define and export a function named usePottery returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.

const storedPottery = []

export const toSellOrNotToSell = (pot) => {
    //const readyToSell = []
    for (const pot of storedPottery) {
        return pot
        } if (pot.weight >= 6) {
            pot.price = 40
        } else {
            pot.price = 20
        }
    storedPottery.push(pot)
    return pot
}


export const usePottery = () => {
    return storedPottery
}