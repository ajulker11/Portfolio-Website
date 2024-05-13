document.addEventListener('DOMContentLoaded',function(){
      const nameElement=document.querySelector('.typed-name')
      const greeting=" "
      const mainGreeting="My Professional Experience"
      let letterIndex=0
      
      async function Greeting(){
            if(letterIndex<mainGreeting.length){
                  nameElement.textContent+=mainGreeting.charAt(letterIndex);
                  letterIndex++;
                  await setTimeout(Greeting,75)
            }
      }
      setTimeout(Greeting,100)
})    