{
    const countWordOccurrences = (s : string, t : string) => {

        // generelized to lower case and removed any symbols using regular expression
        // for detecting words from a clean string, ex: typescript! -> typescript

        const caseSolvedString = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
        const caseSolvedTarget = t.toLowerCase();

        const ar = caseSolvedString.split(' ');
        
        let r : number = 0;

        ar.forEach(word =>{
            (word === caseSolvedTarget ? r++ : null);
        })

        return r;

    }

    const r = countWordOccurrences("TypeScript is great. I love TypeScript!. So I use typescript everyday. Joy baba typescript.", "typescript");

    console.log(r)
}