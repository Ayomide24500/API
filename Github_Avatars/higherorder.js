// // /**
// //  * filter
// //  * map
// //  * reduce
// //  * foreach
// //  * sort
// //  * some
// //  * every
// //  * find
// //  * findindex
// //  * flatmap
// //  * copywriting
// //  * entries
// //  * keys
// //  * values
// //  */

// // // //filter//
// // let testArray = [100,200,300,400,500,600]
// // let answer = testArray.filter((el)=>{
// //     return el > 200
// // })
// // console.log(answer);

// // // //oneliner
// // let answer2 = testArray.filter((el) => el > 200)
// // console.log(answer2);

// let num = [3, 6, 7, 12, 18, 23, 44, 62, 81]
// let even_num = num.filter(function(item){
//     return item % 2 == 0;
// })
//     console.log(even_num);

// //an array of people object and filter out the object with an age greater than 18
// let people = [
//     {name: "Rachel", Age: '12'},
//     {name: "samuel", Age: '22'},
//     {name: "wisdom", Age: '13'},
//     {name: "wasiu", Age: '34'}
// ];
// let person = people.filter((el) => {
//     return el.Age >= 18
// })
// console.log(person);

// //return only beans
// let testArray2 = ["Rice","Beans","Indomie"]
// let fillbeans = testArray2.filter((el) => {
//     return el === "Beans"
// })
// console.log(fillbeans);

// //return only rice and indomie
// let testArray3 = ["Rice","Beans","Indomie"]
// let fillBeans = testArray2.filter((el) => {
//     return el !== "Beans"
// })
// console.log(fillBeans);
// //given an array of objects with city name and population . create an array with object from the first array if the population is >= 2000*/
 
// let arrayOfCities = [
//     {
//         cityName: "Lagos",
//         population: 3000
//     },
//     {
//         cityName: "Abia",
//         population: 1500
//     },
//     {
//         cityName: "Benin",
//         population: 2000
//     },
//     {
//         cityName: "Onitsha",
//         population: 5000
//     },
//     {
//         cityName: "California",
//         population: 6000
//     },
//     {
//         cityName: "Ore",
//         population: 12000
//     },
// ]
// console.log(arrayOfCities);

// //return the array that is equal to ore
// let answer3 = arrayOfCities.filter((el) =>{
//     return el.cityName === "Ore"
// })
// console.log(answer3);


// //return the city name that is greater than or equal to 2000
// let answer4 = arrayOfCities.filter((el) =>{
//     return el.population >= 2000
// })
// console.log(answer4);

// //return the city name that is greater than or equal to 2000
// let answer5 = arrayOfCities.filter((el) =>{
//     return el.population <= 2000
// })
// console.log(answer5);

// // //classwork
// let Teachers = [
//     {
//         Name: "Esther",
//         subject: "Javascript"
//     },
    
//     {
//         Name: "Sylvia",
//         subject: "Html"
//     },

//     {
//         Name: "Sanni",
//         subject: "Css"
//     },

//     {
//         Name: "Godwin",
//         subject: "ui/ux"
//     },

//     {
//         Name: "favour",
//         subject: "Design Thinking"
//     },
// ]
// console.log(Teachers);

// //get the subject
// let answer6 = Teachers.filter((el) =>{
//     return el.subject
// })
// console.log(answer6);

// let answer7 = Teachers.filter((el) =>{
//     return el.subject === "Design Thinking"
// })
// console.log(answer7);

// let answer8 = Teachers.filter((el) =>{
//     return el.Name
// })
// console.log(answer8);


// //map
// let arrOfNum = [1, 2, 3, 4, 5];
// let result = arrOfNum.map((el) => {
//     return el * 2
// })
// console.log(result);

// //comparing
// let arr = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

// let filtered = arr.filter((el) => {
//     return el >= 250;
// })
// console.log(filtered);

//  let mapped = arr.map((el) => {
//     return el >= 250 && el >= 500;
//  })
//  console.log(mapped);
// let sort = arr.sort((el) => {
//     return el
// })
// console.log(sort)

// let reduce = arr.reduce((arr, acc) => {
//     return arr + acc
// })
// console.log(reduce)

// let foreach = arr.forEach((el) => console.log(el))
// let forevery = arr.every((el) => {
//     return el <= 250
// })
// console.log(forevery);


//  //given an array of object return true if the gender is equal to "female"

//  let set08 = [
//     {
//         name: "joan",
//         gender:"female",
//     },
//     {
//         name: "stanley",
//         gender:"female",
//     },
//     {
//         name: "frankiln",
//         gender:"male",
//     },
//     {
//         name: "regina",
//         gender:"female",
//     },
//     {
//         name: "Habeeb",
//         gender:"male",
//     },
//  ]
// let genderSearch = set08.map((el) => {
//     return el.gender !== "male";
// })
// console.log(genderSearch);


// //Reduce
// let reduced = [1, 2, 3, 4, 5, 6]
// let reducemethod = reduced.reduce((acc , cur) => {
//     return acc * cur
// })
// console.log(reducemethod);

// let sorting = [2, 3, 7, 1, 0, 9, 8, 4, 6, 5];
// let sortmethod = sorting.sort((a, b) => {
//     return a - b;
// })
// console.log(sortmethod);

// /*classwork
// given an arrray of number 1-9 find the sum of every element in the array */
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = number.reduce((a, b) => {
//     return a + b 
// })
// console.log(sum);

// /*given an array of numbers , find the average the average of them*/
// let average = number.reduce((a, b) => {
//     return a + b / number.length
// })
// console.log(average);

// //forEach
// let testArr = [1, 2, 3, 4, 5, 6]
// let mappedArr = testArr.map((el) => {
//     return el
// })
// console.log(mappedArr);

// let eachArr = testArr.forEach((el) => console.log(el))

// //some
// let someArr = testArr.some((el) => {
//     return el >= 8
// })
// console.log(someArr);

// //every
// let foreveryArr = testArr.every((el) => {
//     return el >= 2
// })
// console.log(foreveryArr);

// /*given an array of singular nouns create a new array that stores the plural noun of each of the element in the first array and login to the
// console assuming the sigular noun can be made plural by just adding a plural s*/
// /*given an array of cost of different product create a new array that stores the value if the cost is less than 250*/

// let singular = ["dog","fish"]
// let plural = singular.map((el) => {
//     // return el + "s"
//     return el.concat("s")
// })
// console.log(plural);

// let product = ["100","250","300","350"]
// let less = product.filter((el) => {
//     return el < 250
// })
// console.log(less);

 //  * filter
// //  * map
// //  * reduce
// //  * foreach
// //  * sort
// //  * some
// //  * every
// //  * find
// //  * findindex
// //  * flatmap
// //  * copywriting
// //  * entries
// //  * keys
// //  * values

let names = ["chioma","Emma", "Victor", "Habeeb", 3]
let filter = names.filter((el) => {
    return el === "Habeeb"
})
console.log(filter);

let map = names.map((el) => {
    // return el === "Victor"
    return el
})
let some = names.
console.log(map);
console.log(look);


