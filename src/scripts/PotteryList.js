// Define and export a PotteryList function.
// The PotteryList function must get the items to be sold from the PotteryCatalog.js module.
// The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
// <section class="pottery" id="pottery--1">
//   <h2 class="pottery__shape">Mug</h2>
//   <div class="pottery__properties">
//     Item weighs 3 grams and is 6 cm in height
//   </div>
//   <div class="pottery__price">Price is $20</div>
// </section>
// The PotteryList function must then return a single string that contains ALL of the pottery HTML representation.

export const PotteryList = () => {
    let htmlString = ``
    for (const pot of pottery) {
        htmlString += `<section class="pottery"         id="pottery--1">`

        htmlString += `<h2 class="pottery__shape">Mug</h2>`

        htmlString += `<div class="pottery__properties">Item weighs 3 grams and is 6 cm in height</div>`

        htmlString += `<div class="pottery__price">Price is $20</div>`

        htmlString += `</section>`
    }
    return htmlString
}