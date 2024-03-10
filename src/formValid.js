// Check for valid format
function validateWords(value) {
    const words = value.replace(/\s/g, "").split(',');
    
    console.log(words.length);
    
    // Check each word
    const isValid = words.every(word => {
      console.log(word);
      return /^[a-zA-Z]+$/.test(word); 
    });
    
    console.log("Valid?:", isValid);
    
    return isValid ? words : [];
  }

const validateForm = ({name, words}) => {    
    return { name, words: validateWords(words) };    
};
export default validateForm;