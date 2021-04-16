// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function filter(array, callback) {
    // implement me
    let resultArray = [];
    for(let i=0; i<array.length; i++){
      if(callback(array[i])===true){
        resultArray.push(array[i])
      }
    }
    
    return resultArray;
  }
  
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  
  const result = filter(words, word => word.length > 6);
  
  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]