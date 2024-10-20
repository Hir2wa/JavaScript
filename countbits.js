class VowelRemover {
    constructor(sentence) {
      this._sentence = sentence;  // Store the original sentence
    }
  
    // Getter for the sentence with vowels removed
    get sentenceWithoutVowels() {
      let result = '';
      for (let char of this._sentence) {
        if (!this.isVowel(char)) {
          result += char;  // Add only non-vowel characters
        }
      }
      return result;
    }
  
    // Setter to update the sentence
    set sentence(newSentence) {
      this._sentence = newSentence;
    }
  
    // Helper method to check if a character is a vowel
    isVowel(char) {
      const vowels = 'aeiouAEIOU';
      for (let vowel of vowels) {
        if (char === vowel) {
          return true;
        }
      }
      return false;
    }
  }
  
  // Example usage
  const remover = new VowelRemover('Hello World');
  console.log(remover.sentenceWithoutVowels);  // Hll Wrld
  
  // Updating the sentence
  remover.sentence = 'Programming is fun';
  console.log(remover.sentenceWithoutVowels);  // Prgrmmng s fn
  