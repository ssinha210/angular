export class InputValidator {
    static isValidInput(input: string): boolean {
      
      const unsafePatterns = [
        /<script.*?>.*?<\/script>/gi, 
        /['";]|--|\b(OR|AND|DROP|SELECT|INSERT|DELETE|UPDATE|UNION)\b/gi 
      ];
  
      
      return unsafePatterns.every(pattern => !pattern.test(input));
    }
  }
  