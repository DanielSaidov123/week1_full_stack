import func from "../utils/util.js"
import readlineSync from 'readline-sync';
import input from 'analiza-sync';
 


while(true){
    console.log(`
1. Add a new intelligence report
2. Show all reports
3. Search report by ID
4. Delete report by ID
5. Edit report by ID
0. Exit
`)
var number = input('enter a namber: ');
if(number=='1'){
    let id = input('enter a id: ');
    let name = input('enter a name: ');
    let weapons = input('enter a weapons: ');
    let text = input('enter a text: ');
    const obj=func.create_report(id,name,weapons,text)
    console.log(func.add_report_to_data(obj));
 }; 
 if(number=='2'){
    console.log(func.return_all_report());
  };

if(number=='3'){
    let id = input('enter a id: ');
    console.log(func.searching_report_by_ID(id));
    
    
 };
 if(number=='4'){
    let id = input('enter a id: ');
    console.log(func.default_report_by_ID(id));
  };
  if(number=='5'){
    let id = input('enter a id: ');
    let name = input('enter a name: ');
    let weapons = input('enter a weapons: ');
    let report_text = input('enter a text: ');
    const ob={name:name,weapons:weapons,report_text:report_text}
    console.log(func.existing_report(id,ob));
    
   };
   if(number=='0'){
    break
    };
 }