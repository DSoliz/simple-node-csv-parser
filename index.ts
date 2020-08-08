// We import this module to help us read files from our system
import * as fs from 'fs'

// We call a function from the module to read the file 'data.csv' and convert it to a string
// We then split the string into pieces at each new line character
const csvFile = fs.readFileSync('data.csv').toString().split("\n");

// We call this function to print the file in our console screen
console.log(csvFile)

// We separate the first row of the file from the other rows
// Our first row contains the names of each of our fields
// In this case fieldRow will contain id, name, price, etc
// While valueRows will contain a list with the remaining rows
const [fieldRow, ...valueRows] = csvFile

// Since it is still one long string 'id, name, price, currency, stock, sold, canPerish'
// We now split the string, this time at every ocurrence of the substring ', '
const fields = fieldRow.split(', ')
// Fields will now be a list of strings ['id', 'name', 'price', 'currency', 'stock', 'sold', 'canPerish']

// We initialize a new empty array/list that will hold our results
let results = []

// We now iterate over each of the remaining rows
for (const valueRow of valueRows) {
    // We split each row so that we can have a list of values
    const values = valueRow.split(', ')

    // We initialize an empty object that will hold this rows information
    // we assign the type any to our variable which will let us assign
    // whatever value we want to it.
    let result: any = {}

    // We now make a for loop that will loop fields.length times
    // 7 times for our example 
    for (let i = 0; i < fields.length; i++) {
        // In the first iteration i will equal to 0
        // On the seventh iteration i will equal to 6
        // On the Nth iteration i will equal to n-1
        // Programers count starting by 0

        // In our first iteration we access the value at the 0th index
        // In this example that will be 'asd11' which is the id of the first entry
        const value = values[i]
        
        // Say for example we wanted to add a name field to our empty result object
        // let result: any = {}
        // We can do this in a number of different ways
        // 1. result.name = 'leche'
        // 2. result['name'] = 'leche'
        // The above would be the same as doing:
        // let result: any = {
        //   name: 'leche'
        // }

        // We can also assign numbers
        // 1. result.price = 40.20
        // 2. result['price'] = 40.20
        // The above would be the same doing:
        // let result: any = {
        //   price: 40.20
        // }

        // To add a field a to an object in our case we will use the result['myString'] approach
        // This because we can use our field array to assign the corresponding fields to our object 

        // When we excute the code the first iteration of the loop will result in this
        // code bellow being called as result['id'] = 'asd11'
        result[fields[i]] = value

        // Afterwards our result object will look like this
        // {id: 'asd11'}
        // after the second
        // {id: 'asd11', name: 'leche'}

        // Bonus
        // The example below allow us to assign an actual numerical value to our fields
        // so rather than being of type string they become of type number
 
        // Uncomment the code below, paint the lines then while holding ctrl press k then u (for uncomment)
        // Comment the code below, paint the lines then while holding ctrl press k then c (for comment)
        // if(!isNaN(Number.parseFloat(value))){
        //     result[fields[i]] = Number.parseFloat(value)
        // } else {
        //     result[fields[i]] = value
        // }
    }
    results.push(result)
}

// We now print the result into our console
console.log(results)
