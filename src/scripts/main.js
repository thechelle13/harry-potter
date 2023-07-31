// Imports go first
import { makePottery } from "./PotteryWheel.js"


import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"

import { firePottery } from "./Kiln.js"
const howHot = firePottery()

import { PotteryList } from "./PotteryList.js"
const htmlString = document.querySelector(".potteryList")
htmlString.innerHTML = PotteryList()



// Make 5 pieces of pottery at the wheel

let mug = makePottery("Mug", .35, 10)
// const firedPottery1400 = finalFiring(1400)

// Fire each piece of pottery in the kiln
let hotMug = firePottery(mug, 2300)

// Determine which ones should be sold, and their price

toSellOrNotToSell(hotMug)

let PotteryCatalog = usePottery()
// Invoke the component function that renders the HTML list using potteryList

PotteryList(PotteryCatalog)

