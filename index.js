
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

const employee = {
    name: 'Alice',
    position: 'Developer'
};

console.log(updateEmployeeWithKeyAndValue(employee, 'age', 30)); 
console.log(employee); 

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30)); 
console.log(employee); 

console.log(deleteFromEmployeeByKey(employee, 'age'));
console.log(employee); 

console.log(destructivelyDeleteFromEmployeeByKey(employee, 'age')); 
console.log(employee); 
