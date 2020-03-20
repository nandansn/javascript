var Employee ={

      

    

    tax: function calTax(salary) {
        return salary * .10;
    }
    
}

//emp = new Employee();
//emp.displayName("nanda")

console.info("Tax "+Employee.tax(10000))
