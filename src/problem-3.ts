{
    const countWordOccurrences = (s : string, t : string) => {

        // generelized to lower case
        const caseSolvedString = s.toLowerCase();
        const caseSolvedTarget = t.toLowerCase();

        const ar = caseSolvedString.split(' ');
        
        let r : number = 0;

        ar.forEach(word =>{
            (word === caseSolvedTarget ? r++ : null);
        })

        return r;

    }

    const r = countWordOccurrences("TypeScript is great", "typescript");

    console.log(r)
}