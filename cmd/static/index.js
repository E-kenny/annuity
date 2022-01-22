//BENEFIT CALCULATION
function benefithandler() {
    const premium = document.querySelector('#premium');
    const age = document.querySelector('#age');
    const gender = document.querySelector('#gender');
    const guarantyPeriod = document.querySelector('#guaranty-period');
    const earningAge = document.querySelector('#earning-age');
    const premiumFrequency = document.querySelector('#premium-frequency');
    const output = document.querySelector('#output');
    let benefit;
    let rateData;
    let rate;
   
    if (gender.value ==="male" && premiumFrequency.value === "annual" ) {
          
       if (guarantyPeriod.value==="5") {

        
            rateData={
                21 : [113.6,72.95,47.20,30.95,21.23]
            }
            rate=rateData[age.value][earningAge.value]
            
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }
        
        
    }else if(gender.value ==="male" && premiumFrequency.value === "single"){
        if (guarantyPeriod.value==="5") {
            rateData={
                21 : [113.6,72.95,47.20,30.95,21.23]
            }
            rate=rateData[age][earningAge]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "annual"){
        if (guarantyPeriod.value==="5") {
            rateData={
                21 : [113.6,72.95,47.20,30.95,21.23]
            }
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "single"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=""
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }


    if (isNaN(premium.value)){
        output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid premium</span>';
    }else{
        //benefit = (premium.value - 1000)/rate;
        benefit =(premium.value -1000)*1000/rate;
        output.innerHTML='<span class="text-blue-800 text-size-sm">Your annual benefit will be:</span>  ' + benefit + ' naira';
     }
    
    
  }




  //PREMIUM CALCULATION
  function premiumhandler() {
    
    const benefit = document.querySelector('#benefit');
    const age = document.querySelector('#age');
    const gender = document.querySelector('#gender');
    const guarantyPeriod = document.querySelector('#guaranty-period');
    const earningAge = document.querySelector('#earning-age');
    const premiumFrequency = document.querySelector('#premium-frequency');
    const output = document.querySelector('#output');
    let premium;
    let rateData;
    let rate;
    
    if (gender.value ==="male" && premiumFrequency.value === "annual" ) {
        
       if (guarantyPeriod.value==="5") {
        
        
            rateData={
                21 : [113.6,72.95,47.20,30.95,21.23]
            }
            rate=rateData[age.value][earningAge.value]
            
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }
        
        
    }else if(gender.value ==="male" && premiumFrequency.value === "single"){
        if (guarantyPeriod.value==="5") {
            rateData={
                21 : [113.6,72.95,47.20,30.95,21.23]
            }
            rate=rateData[age][earningAge]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "annual"){
        if (guarantyPeriod.value==="5") {
            rateData={
                21 : [113.6,72.95,47.20,30.95,21.23]
            }
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "single"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=""
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }

    if (isNaN(premium.value)){
        output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid benefit</span>';
    }else{

        premium = benefit.value * rate/1000 + 1000;
        output.innerHTML='<span class="text-blue-800 text-size-sm">Your annual premium will be:</span>  ' + premium + ' naira'
     }





    
  }

  

