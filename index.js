// Write your solution in this file!
//Initialize employee (obj) keys (name) + (address) w corresponding values:
const employee = {
    name: "Michael", address: "11 Broadway"
}
//functions
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = Object.assign({}, employee, {[key]:value});
    return newEmployee;
}
