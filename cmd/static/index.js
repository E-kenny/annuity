//BENEFIT CALCULATION
function benefithandler() {
    const premium = document.querySelector('#premium');
    const age = document.querySelector('#age');
    const gender = document.querySelector('#gender');
    const guarantyPeriod = document.querySelector('#guaranty-period');
    const earningAge = document.querySelector('#earning-age');
    const premiumFrequency = document.querySelector('#premium-frequency');
    const output = document.querySelector('#output');
    const semiAnnual = document.querySelector('#semi-annual');
    const monthly = document.querySelector('#monthly');
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


    if (isNaN(premium.value) || !premium.value){
        output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid premium</span>';
        semiAnnual.innerHTML = ''
        monthly.innerHTML= ''

    }else{

        benefit =(premium.value -1000)*1000/rate;

        let halfYear = benefit/2
        let oneMonth = benefit/12


        
        output.innerHTML='<span class="text-blue-800 text-size-sm">Annual benefit will be:</span>  ' + benefit.toFixed(2) + ' <span class="text-blue-800 ">Naira</span>';
        semiAnnual.innerHTML = '<span class="text-blue-800 text-size-sm">Semi-annual benefit will be:</span>  ' + halfYear.toFixed(2) + ' <span class="text-blue-800 ">Naira</span>';
        monthly.innerHTML= '<span class="text-blue-800 text-size-sm">Monthly benefit will be:</span>  ' + oneMonth.toFixed(2) + ' <span class="text-blue-800 ">Naira</span>';
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
    const semiAnnual = document.querySelector('#semi-annual');
    const monthly = document.querySelector('#monthly');
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
    
    if (isNaN(benefit.value)|| !benefit.value){
        output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid benefit</span>';
        semiAnnual.innerHTML = ''
        
        monthly.innerHTML= ''
        

     }else {
       
        premium = benefit.value * rate/1000 + 1000;

        let halfYear = premium/2
        let toFixedhalfyear = halfYear.toFixed(2)

        let oneMonth = premium/12
        let toFixedOneMonth = oneMonth.toFixed(2)

        
        output.innerHTML='<span class="text-blue-800 text-size-sm">Annual premium will be:</span>  ' + premium.toFixed(2) + ' <span class="text-blue-800 ">Naira</span>';
        
        semiAnnual.innerHTML = '<span class="text-blue-800 ">Semi-annual benefit will be:</span>  ' +  toFixedhalfyear + ' <span class="text-blue-800 ">Naira</span>';;
        
        monthly.innerHTML= '<span class="text-blue-800 ">Monthly benefit will be:</span>  ' + 
        toFixedOneMonth + ' <span class="text-blue-800 ">Naira</span>';

        
      }

    
  }

  

