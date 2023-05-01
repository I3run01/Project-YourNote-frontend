export const utilsFunctions = {
  generateFourRandomNumbers(): string {
    let numbers = '';
    while (numbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!numbers.includes(randomNumber.toString())) {
        numbers += randomNumber.toString();
      }
    }
    return numbers;
  }
    
}