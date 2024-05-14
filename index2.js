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



      const nameElement1=document.querySelector('.project')
      const greeting1=" "
      const mainGreeting1="My Projects"
      let letterIndex1=0
      
      async function Greeting1(){
            if(letterIndex1<mainGreeting1.length){
                  nameElement1.textContent+=mainGreeting1.charAt(letterIndex1);
                  letterIndex1++;
                  await setTimeout(Greeting1,75)
            }
      }
      setTimeout(Greeting1,100) 

      const nameElement3=document.querySelector('.txt')
      const para=nameElement3.textContent
      nameElement3.textContent=""
      let letterIndex2=0 

      function typeTxt(){
            if(letterIndex2<para.length){
                  nameElement3.textContent+=para.charAt(letterIndex2);
                  letterIndex2++;
                  setTimeout(typeTxt,4)
            }
      }
      setTimeout(typeTxt,1100)
})    