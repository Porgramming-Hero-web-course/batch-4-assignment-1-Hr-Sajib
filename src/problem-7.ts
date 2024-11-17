{
    class Car {
        makecurrentYear: string;
        model: string;
        currentYear: number;
    
        constructor(makecurrentYear: string, model: string, currentYear: number) {
            this.makecurrentYear = makecurrentYear;
            this.model = model;
            this.currentYear = currentYear;
        }
    
        getCarAge(): number {
            const currentcurrentYear = new Date().getFullYear();
            return currentcurrentYear - this.currentYear;
        }
    }
    
   
    const car = new Car("Toyota", "Civic", 2018);
    console.log(car.getCarAge()); 
    
}