
const data = [ 
{ 
name: "John", 
birthday: "1-1-1995", 
favoriteFoods: { 
meats: ["hamburgers", "sausages"], 
fish: ["salmon", "pike"], 
}, 
}, 
{ 
name: "Mark", 
birthday: "10-5-1980", 
favoriteFoods: { 
meats: ["hamburgers", "steak", "lamb"], 
fish: ["tuna", "salmon", "barracuda"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["cow", "chicken"], 
fish: ["pike"], 
},
}, 
{ 
name: "Thomas", 
birthday: "1-10-1990", 
favoriteFoods: { 
meats: ["bird", "rooster"], 
fish: ["salmon"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["hamburgers", "lamb"], 
fish: ["bass", "tuna"], 
}, 
}, 
]; 


function return_name(dataa){
    for (let i = 0; i <dataa.length ; i++) {
        console.log(data[i].name);
        
     }
 } 


function return_year(dataa){
for (let i = 0; i <dataa.length ; i++) {
    let year= dataa[i].birthday.split("-")[2]

    console.log(year);
 }
 }
 
function return_all_meats(dataa){
    const meats={}
    for (let i = 0; i <dataa.length ; i++) {
        for (let j = 0; j <dataa[i].favoriteFoods.meats.length ; j++) { 
            if(dataa[i].favoriteFoods.meats[j] in meats){
                meats[dataa[i].favoriteFoods.meats[j]]+=1
             }
             else{
                meats[dataa[i].favoriteFoods.meats[j]]=1
            }
        }
        for (let j = 0; j <dataa[i].favoriteFoods.fish.length ; j++) { 
            if(dataa[i].favoriteFoods.fish[j] in meats){
                meats[dataa[i].favoriteFoods.fish[j]]+=1
             }
             else{
                meats[dataa[i].favoriteFoods.fish[j]]=1
            }
        }
     }
     return meats
 } 

console.log(return_all_meats(data));
