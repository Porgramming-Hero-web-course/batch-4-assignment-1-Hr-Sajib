{
 
    

    const validateKeys =<T>(obj: T, keys: (keyof T)[]) : boolean => {
        let r : number = 0;

        keys.forEach(key =>{

           (key in obj)? null : r++ ;
           
        })

        return (r>0) ? false : true;
    }





    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    console.log(validateKeys(person, ["name", "age"]));


}