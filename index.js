// Write your solution in this file!
const employee = {
  name: "Lilian Njeri",
  streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, ObjKey, ObjValue) {
  for (const key in employee) {
    delete employee[key];
    }

    employee.name = "Sam";


    let newEmployee = {
      ...employee , 
      streetAddress:"11 Broadway"
    };
    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue() {
    for (const key in employee) {
        delete employee[key];
    }

    employee.name = "Sam";
employee.streetAddress = "12 Broadway";
return employee;
 }  
    
function deleteFromEmployeeByKey(){
    for(const key in employee){
       delete employee[key];
      }

      employee.name = "Sam"
      let newEmployee = {
        ...employee
      } 
     delete newEmployee.name
      return newEmployee


}

function destructivelyDeleteFromEmployeeByKey(){
    for (const key in employee) {
         delete employee[key];
        }

        employee.name = "Sam";
        let newEmployee = delete employee.name;
        return employee
    }