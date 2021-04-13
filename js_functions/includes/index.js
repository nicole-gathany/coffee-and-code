// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function includes(array, item) {
    // loop through the array
    for(let i=0; i<array.length; i++){
      if(array[i]===item){
        return true
      }
      return false
    }
    // check for then item
    // if found, return true
    // if not, return false
  
  }
  
  const pets = ['cat', 'dog', 'bat'];
  
  console.log('blah blah');
  
  includes(pets, 'cat');
  // expected output: true
  
  includes(pets, 'at');
  // expected output: false