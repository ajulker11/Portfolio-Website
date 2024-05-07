

document.addEventListener('DOMContentLoaded',function(){
      const nameElement=document.querySelector('.typed-name')
      const greeting=" "
      const mainGreeting="Hi, I'm Ahmed Julkernain"
      let letterIndex=0
      
      async function typeGreeting(){
            if(letterIndex<mainGreeting.length){
                  nameElement.textContent+=mainGreeting.charAt(letterIndex);
                  letterIndex++;
                  await setTimeout(typeGreeting,75)
            }
      }
      setTimeout(typeGreeting,100)

      const nameElement2=document.querySelector('.title')
      const title=""
      const titleText="Software Developer"
      let letterIndex1=0 

      function typeTitle(){
            if(letterIndex1<titleText.length){
                  nameElement2.textContent+=titleText.charAt(letterIndex1);
                  letterIndex1++;
                  setTimeout(typeTitle,75)
            }
      }
      setTimeout(typeTitle,2200)

      const nameElement3=document.querySelector('.txt')
      const para=nameElement3.textContent
      nameElement3.textContent=""
      let letterIndex2=0 

      function typeTxt(){
            if(letterIndex2<para.length){
                  nameElement3.textContent+=para.charAt(letterIndex2);
                  letterIndex2++;
                  setTimeout(typeTxt,1)
            }
      }
      setTimeout(typeTxt,3400)

      

      

      



})
