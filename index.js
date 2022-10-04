 /* Question 1 */
class Book {
    constructor(cost, profit) {
        this.name = name
        this.cost = cost
        this.profit = profit
    }
    get getPrice(){
        /* give the logic to calculate price 
        based on cost and profit (profit is counted on price)
        for example: cost 14, profit 30% => expected price is  20 */ 
    }
}

class TaxableBook{
    /* inherit Book, but have 1 more parameter in the constructor: taxRate */
    /* overrride the getPrice method to add taxRate to the calculation. For example: 
    cost 14, profit 30% , tax 24% => expected price is 30.43  */
}

/* Question 2: Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.*/

function generateNewFolderName(existingFolders) {
  // Write your code here
  
}

let folder = []
generateNewFolderName(folder)
generateNewFolderName(folder)
generateNewFolderName(folder)
generateNewFolderName(folder)
console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']
