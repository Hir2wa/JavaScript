function order(words) {
    // Split the string into an array of words
    const wordArray = words.split(' ');
  
    // Sort the words based on the number in each word
    const sortedArray = wordArray.sort((a, b) => {
      // Extract the number from each word
      const numA = a.match(/\d/)[0];
      const numB = b.match(/\d/)[0];
      
      // Compare the extracted numbers as integers
      return numA - numB;
    });
  
    // Join the sorted words back into a string and return
    return sortedArray.join(' ');
  }
  
  // Example 1
  console.log(order("is2 Thi1s T4est 3a")); // Output: "Thi1s is2 3a T4est"
  
  // Example 2
  console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Output: "Fo1r the2 g3ood 4of th5e pe6ople"
  