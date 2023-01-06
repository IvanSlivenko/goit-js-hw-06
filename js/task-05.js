const refs = {
    input: document.querySelector('#name-input'),
    currentSpan: document.querySelector('#name-output'),
}


refs.input.addEventListener('input',textForCurrentSpan);

function textForCurrentSpan() {

    if (refs.input.value.length === 0) {
      
        return refs.currentSpan.textContent ="Anonymous";
        
    }
    
   return refs.currentSpan.textContent = refs.input.value.trim(); 
  
    
    
 }