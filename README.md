# The Significance of Union and Intersection Types in TypeScript

TypeScript is a strongly typed superset of JavaScript that introduces static typing. Two powerful features of TypeScript are **union types** and **intersection types**, which enhance type safety, flexibility, and code clarity.

## What Are Union and Intersection Types?

- **Union Types (`|`)**  
  A union type allows a value to be one of several types. It represents a logical "OR."  
  Example: `type Result = string | number;`  

- **Intersection Types (`&`)**  
  An intersection type combines multiple types into one, representing a logical "AND."  
  Example: `type Combined = { id: number } & { name: string };`  


# Examples

## Union Type Examples

1. **Union of `string` and `number`**
   ```typescript
   function processValue(value: string | number): string {
       return value.toString();
   }

   console.log(processValue(42)); // Output: "42"
   console.log(processValue("Hello")); // Output: "Hello"


1. **Intersection of `string` and `string`**
   ```typescript
    type Person = {
        name: string;
    };

    type Address = {
        city: string;
    };

    type PersonWithAddress = Person & Address;

    const person: PersonWithAddress = {
        name: "John",
        city: "New York"
    };

    console.log(person); // Output: { name: "John", city: "New York" }




## Benefits of Union and Intersection Types

1. **Flexibility**:  
   Union types allow variables to accept multiple types, and intersection types combine multiple types into one, offering versatility in type definitions.

2. **Improved Type Safety**:  
   TypeScript ensures correctness through type narrowing for unions and structural guarantees for intersections, reducing runtime errors.

3. **Code Modularity**:  
   Intersection types enable the composition of reusable and modular type definitions, streamlining code organization.

4. **Enhanced Readability**:  
   Union and intersection types make type intentions explicit, improving the clarity and maintainability of the codebase.
