async function populateDiv(){
    const principal =document.getElementById("number1").value;
    const rate =document.getElementById("number2").value;
    const time =document.getElementById("number3").value;
    const url = `https://sum-server.100xdevs.com/interest?principal=${principal}&rate=${rate}&time=${time}`;


   const response = await fetch(url)
   const ans  = await response.json();
   
   const result =document.getElementById("finalSum");
      result.innerHTML =`
     <p>Total: ${ans.total}<p>
     <p>Interest: ${ans.interest}<p>
      `


  }
