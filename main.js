const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

let listOfDisorders = originalDisorderFormat.split("|$|")
// console.log(listOfDisorders)

// so, Jacob helped me figure out that the values between the div in the second .join() needed a line break BEFORE printing to console. I didn't konw that therer was syntax for teh line break. and placing it in a few places helped me come up wit teh correct solution. Thank you jacob! 
let disordersListWithDivs = listOfDisorders.join('</div>\n<div>') 
console.log(`<div>${disordersListWithDivs}</div>`)

