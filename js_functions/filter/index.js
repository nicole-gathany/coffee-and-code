// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//works on browser but not replt for some reason

function filter(array, callback) {
    // implement me
    let array1 = array;
    let result = []  
    array1.forEach(function(element){
        if(callback(element)===true){
            result.push(element)
        } 
    }) 
   return result;
  }
  
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  
  const result = words.filter(word => word.length > 6);
  
  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]