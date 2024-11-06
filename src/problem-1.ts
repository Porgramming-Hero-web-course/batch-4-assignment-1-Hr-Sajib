{

    const sumArray = (a : number[]) : number => {
        let s : number = 0;

        a.forEach(num => {
            s = s + num;
        })

        return s;
    }


    const a : number = sumArray([1, 2, 3, 4, 5]);
    console.log(a);

}