const companies = [
    {name: 'Company One', category: "Finance", start: 1981, end: 2005},
    {name: 'Company Two', category: "Retail", start: 1991, end: 2001},
    {name: 'Company Three', category: "Auto", start: 1999, end: 2003},
    {name: 'Company Four', category: "Agri", start: 2000, end: 2003},
    {name: 'Company Five', category: "Retail", start: 1989, end: 2005},
    {name: 'Company Six', category: "Finance", start: 2011, end: 2015},
    {name: 'Company Seven', category: "Techonology", start: 2001, end: 2018},
    {name: 'Company Eight', category: "Agri", start: 1981, end: 2001},
    {name: 'Company Nine', category: "Food", start: 1987, end: 1989},
    {name: 'Company Ten', category: "Agri", start: 1961, end: 1980},
];

const ages = [33, 12, 17, 19, 20, 66, 45, 67, 89, 98, 25, 36, 49, 64, 10, 9, 5]

for (let i =0; i< companies.length; i++){
    console.log(companies[i]);
}

console.log("demo: for each")
companies.forEach(function(company){
    console.log(company);
});

let canDrink= [];
console.log("demo: for loop")
for(i = 0; i< ages.length; i++){
    if (ages[i] > 21){
        canDrink.push(ages[i]);
    }
}

console.log(canDrink);

//filter function.
const f_canDrink = ages.filter(function(age){
    if(age>21){
        return true;
    }
});
console.log("Demo: filter function");
console.log(f_canDrink);

//arrow function
const arrow_canDrink = ages.filter(age=>age>=21);
console.log("Demo: arrow operator");
console.log(arrow_canDrink);

//map, sort and reduce
const retail_co = companies.filter(function(company){
    if (company.category==='Retail'){
        return true;
    }
});
console.log(retail_co);

const arrow_retail = companies.filter(company => company.category==='Retail');
console.log(arrow_retail); 

//multiple filter conditions

const mult_comp = companies.filter(company => (company.start<2000 && company.start >=1990));
console.log("multiple filter conditions"); 
console.log(mult_comp); 

//companies that lasted 10 years

const comp_10 = companies.filter(company => (company.end - company.start >10 ));
console.log("companies that lasted 10 years"); 
console.log(comp_10); 


// MAP
console.log("map start")
//create array of company names
const compNames = companies.map(function(company){
    return(company.name);
});

console.log(compNames);

const ageMap = ages.map(age=>age**2);
console.log(`agemap: ${ageMap}`);

const ageMapsqrt = ages.map(age=>age**2).map(age=>Math.sqrt(age));
console.log(`agemapsqrt: ${ageMapsqrt}`);

console.log("sort start")
//sort companies by start date
const sortedCo = companies.sort((a,b) => (a.start > b.start ? 1 :-1));
console.log(`sorted Companies by start date: ${sortedCo}`);
console.log(sortedCo);
console.log("Behavious of variables inside backtick is different from the ones without backtick")

//sort ages
const sortAges = ages.sort();   
console.log(sortAges);

const sortAges1 = ages.sort((a,b) => a-b);   
console.log(sortAges1);

console.log ("sorting behavior");

console.log("Reduce");

const ageSum = ages.reduce(function(total, age){
    return total+age;
}, 0);

console.log(ageSum);

const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start);
}, 0);

console.log(totalYears);

const totalYears1 = companies.reduce((total, company) => total + 
    (company.end - company.start), 0);

console.log(totalYears1);
