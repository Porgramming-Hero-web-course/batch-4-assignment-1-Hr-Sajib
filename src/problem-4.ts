{
    type Rectangle = {
      shape: "rectangle";
      width: number;
      height: number;
    };
    type Circle = {
      shape: "circle";
      radius: number;
    };
  
    function calculateShapeArea(p: Circle | Rectangle): number {
      let area: number = 0;
  

      (p.shape === "circle") ?  area = 3.14159 * p.radius * p.radius : (p.shape === "rectangle")? area = p.height * p.width : null;
      
      let fArea = parseFloat(area.toFixed(2));
      return fArea;
    }
  
    const r1 = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(r1);
  
    const r2 = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    });
    console.log(r2);
  }