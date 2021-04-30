let calculator = ()=>{
  
  let input = document.querySelector('#input-txt');
  
    // get all number button
  let numpad = document.querySelectorAll('span[id=num]');
  let result = 0;
  
  numpad.forEach(num => {
   
    num.addEventListener('click',()=>{
      
      //check if has empty or error ouput
      if (input.value === '0' ||
          input.value ===  'Error: wrong input')
        input.value = '';
      
      //append number string
      input.value += num.children[0].innerHTML;
     
    });
    
  });
  
  // get all arithmetic button
  let arithmetic = document.querySelectorAll('.arithmetic span');
  
  arithmetic.forEach(arith => {
    
    arith.addEventListener('click',()=>{

      // store temp the input value
      const result = input.value;

      //do the input of result when this arithmetic button click 
      if(arith.children[0].id === 'equal')
      {
        try{
          // test if it can do arithmetic
          input.value = eval(result);
        }catch{
          // if not prompt error
        input.value = 'Error: wrong input';
        } 
      }
      // do the clearing of input when this arithmetic button click
      else if(arith.children[0].id === 'clear')
      {
        input.value = 0;
      }
      else{
        //append arithmetic operation
        if(!(String(input.value).includes(arith.children[0].innerHTML))){

         input.value += arith.children[0].innerHTML;
       } 
      }

    });
    
  });
  
  
  
};

calculator();
