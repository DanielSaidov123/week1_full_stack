import data_list from "../db/data.js"

const data=data_list.list_data

function create_report(id,name='Muhammad' ,weapons,report_text){
    if(id==''){
        return 'erorr'
     }
    const report={
        id:id,
        name:name,
        weapons:weapons,
        report_text:report_text
    }
    return report
 } 

function add_report_to_data(report){
    for (let i = 0; i <data_list.list_data.length ; i++) {
        if(data_list.list_data[i].id===report.id){
            return `id: ${report.id} is not good`
         }
     }
     data.push(report)
    return `Report updated in the system`
 } 


function  return_all_report( ){
  const s=  data_list.list_data.sort((a,b)=>{
  let x = a.id.toLowerCase();
  let y = b.id.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
    return s
}

    
function reports_sorted_by_field(key){
  if(typeof DBprogram[0][key] != 'object'){
  return DBprogram.sort((a, b) => a[key].charCodeAt(0) - b[key].charCodeAt(0));
  }
  else {
    return DBprogram.sort((a, b) => a[key][0].charCodeAt(0) - b[key][0].charCodeAt(0));
  }
}


 function searching_report_by_ID(id){
    for (let i = 0; i <data_list.list_data.length ; i++) {
        if(data_list.list_data[i].id===id){
            return data_list.list_data[i]
         };
     }
     return `id is not defind`
  } 


   function default_report_by_ID(id){
    for (let i = 0; i <data_list.list_data.length ; i++) {
        if(data_list.list_data[i].id===id){
            data_list.list_data.splice(i,1)
            return `Deleted successfully`
         };
     }
     return `id is not defind`
  } 

function existing_report(id,obj_report){
 let x=0
    const temp=searching_report_by_ID(id)
    if(typeof temp==='object'){
        for (let i = 0; i <data_list.list_data.length ; i++) {
        if(data_list.list_data[i].id===id){
             x=i
            break
         }
     }
        const arr1 = Object.keys(obj_report)
        const arr2 = Object.keys(temp)
        const bol =arr1.every(a=>arr2.includes(a))        
        if(bol===true){
            for (let i = 0; i <arr1.length ; i++) {
                data_list.list_data[x][arr1[i]]=obj_report[arr1[i]]
             }
             return data
         }
         else{
            return `There are no such keys ${arr1}`
         }

    
    }
    else{
        return `ID not found`
    }

 } 
export default {existing_report,default_report_by_ID,searching_report_by_ID,add_report_to_data,create_report,return_all_report,reports_sorted_by_field }


