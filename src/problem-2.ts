{
    const removeDuplicates = (a : number[]) => {

        const a2 : number[] = [];

        a.forEach(tarNum =>{
            (!a2.includes(tarNum) ? a2.push(tarNum) : null);
        })

        return a2;
    }


    const r = removeDuplicates([1, 2, 2, 3, 4, 4, 5,3,3,3,44])
    console.log(r)
}