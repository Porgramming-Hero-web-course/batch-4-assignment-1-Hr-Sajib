{



    const updateProfile =(object : Profile, update : Partial) => {
        return {...object, ...update};

    }



    interface Profile {
        name : string,
        age : number,
        email : string
    }

    type Partial = {
        name ?: string,
        age ?: number,
        email ?: string
    }




    
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

    console.log(updateProfile(myProfile, { name : 'Sajib' , age : 20}));



}

