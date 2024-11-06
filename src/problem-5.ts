{
 
    const getProperty = <T,Q extends keyof T>(object:T, property:Q) => {
        return object[property];
    }




    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "age"));


    
}

