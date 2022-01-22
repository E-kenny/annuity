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
                21 : [113.6, 72.95, 47.20, 30.95, 21.23], 22: [122.82, 78.58, 50.56, 32.86, 22.22], 23: [ 133.12, 84.85, 54.31, 34.98 , 23.32], 24:[ 144.59, 91.83, 58.47, 37.34, 24.55], 25:[ 157.41, 99.60, 63.11, 39.96, 25.91],26: [ 171.75, 108.28, 68.27, 42.90, 27.43], 27:[ 187.83, 117.98, 74.05, 46.19, 29.11 ], 28:[ 205.90, 128.85, 80.51, 49.86, 31.04], 29:[ 226.24, 141.04, 87.76, 53.98, 33.18 ], 30:[249.21, 154.72, 95.89, 58.60, 35.59], 31:[ 275.18, 170.11, 105.04, 63.79, 38.30], 32:[275.18, 170.11, 105.04, 63.79, 38.30], 33:[ 338.15, 206.95, 126.91, 76.22, 44.89], 34:[376.43, 228.96, 139.97, 83.64, 48.83], 35:[ 420.34, 253.82, 154.71, 92.02, 53.28], 36:[471.53, 281.92, 171.35, 101.48, 58.31], 37:[ 530.60, 313.73, 190.15, 112.18, 64.00],38:[599.99, 349.79, 211.41, 124.28, 70.44], 39:[ 682.52, 391.13, 235.46, 137.97, 77.74], 40:[782.28, 437.86, 262.94, 153.48, 86.00], 41:[905.36, 491.28, 293.84, 171.06, 95.38], 42:[905.36, 491.28, 293.84, 171.06, 95.38], 43:[1265.29, 623.67, 368.62, 213.82, 118.08], 44:[1546.06, 706.73, 413.77, 239.53, 131.92], 45:[1951.13, 805.29, 465.10, 268.74, 147.52], 46:[2585.15, 924.73, 523.54, 301.96, 165.27], 47:[3706.28, 1073.65, 590.21, 339.76, 185.47], 48:[5942.23, 1266.49, 666.50,382.82, 208.48], 49:[null,1530.32, 754.24, 431.89, 234.71], 50:[null, 1912.35, 856.02,487.89, 264.63], 51:[null, 2515.22, 975.88, 551.85, 298.82], 52:[null, 3591.30, 1120.58, 625.00, 337.91], 53:[null, 5759.03, 1302.37, 708.77, 382.66], 54:[null, null, 1544.43, 804.86, 433.96], 55:[null, null, 1895.68, 915.39, 492.85], 56:[null, null, 2454.48, 1043.17, 560.55], 57:[null, null, 3471.10, 1192.49, 638.52], 58:[null, null, 5564.39, 1371.30, 728.45], 59:[null, null, null, 1596.66, 832.39], 60:[null, null, null, 1907.92, 952.77], 61:[null, null, null, 2404.49, 1092.53], 62:[null, null, null,  3328.28, 1255.31], 63:[null, null, null, 5322.00, 1446.09], 64:[null, null, null, null, 1673.93], 65:[null, null, null, null, 1962.60], 66:[null, null, null, null, 2388.81], 67:[null, null, null, null, 2388.81], 68:[null, null, null, null, 5031.37]
            }
            rate=rateData[age.value][earningAge.value]
            
            
        }else if(guarantyPeriod.value === "10"){
            rateData={
                21:[114.79, 74.25, 48.37, 31.93, 22.09], 22:[124.12, 80.07, 51.83, 33.93, 23.16], 23:[134.53, 86.48, 55.70, 36.15, 24.37], 24:[146.14, 93.61, 59.99, 38.61, 25.71], 25:[159.10, 101.55, 64.76, 41.37, 27.18], 26:[173.60, 110.41, 70.09, 44.45, 28.82], 27:[189.86, 120.32, 76.04, 47.89, 30.68], 28:[208.14, 131.42, 82.71, 51.74, 32.76], 29:[228.72, 143.88, 90.18, 56.04, 35.08], 30:[251.95, 157.86, 98.56, 60.88, 37.68], 31:[278.22, 173.58,  107.99, 66.31, 40.65], 32:[308.01, 191.27, 118.59, 72.43, 44.00], 33:[341.91, 211.21, 130.54, 79.32, 47.78], 34:[380.62, 233.70, 144.00, 87.09, 52.04], 35:[425.04, 259.09, 159.19, 95.85, 56.85], 36:[476.81, 287.80, 176.34, 105.76, 62.29], 37:[536.56, 320.29, 195.72, 116.95, 68.44], 38:[606.74, 357.13, 217.64, 129.61, 75.40], 39:[690.21, 399.37, 242.43, 143.94, 83.28], 40:[791.10, 447.10, 270.76, 160.16, 92.22], 41:[915.59, 501.67, 302.61, 178.55, 102.35], 42:[1073.25, 564.36, 338.72, 199.59, 113.84], 43:[1279.62, 636.92, 379.69, 223.28, 126.88], 44:[1563.59, 721.76, 426.23, 250.18, 141.83], 45:[1973.27, 822.45, 479.14, 280.74, 158.69], 46:[2614.52, 944.45, 539.38, 315.49, 177.86], 47:[3748.43, 1096.58, 608.09, 355.03, 199.68], 48:[6009.86, 1293.57, 686.73, 400.07, 224.53], 49:[null, 1563.06, 777.16, 451.41, 252.86], 50:[null, 1953.30, 882.08, 509.98, 285.19], 51:[null, 2569.14, 1005.62, 576.89, 322.12],52:[null, 3668.35, 1154.76, 653.41, 364.34], 53:[null, 5882.69, 1342.13, 741.04, 412.69], 54:[null, null, 1591.62, 841.56, 468.10], 55:[null, null, 1953.66, 957.18, 531.71], 56:[null, null, 2529.62, 1090.84, 604.85], 57:[null, null, 3577.44, 1247.05, 689.06], 58:[null, null, 5735.01, 1434.09, 786.21], 59:[null, null, null, 1669.83, 898.49], 60:[null, null, null, 1995.42, 1028.54], 61:[null, null, null, 2514.85, 1179.51], 62:[null, null, null, 3481.16, 1355.35], 63:[null, null, null, 5566.67, 1561.45], 64:[null, null, null, null, 1807.58], 65:[null, null, null, null, 2119.43], 66:[null, null, null, null, 2579.83], 67:[null, null, null, null, 3440.26], 68:[null, null, null, null, 5434.35]
            }
            rate=rateData[age.value][earningAge.value]
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

    }else if(gender.value ==="male" && premiumFrequency.value === "annual5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=""
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="male" && premiumFrequency.value === "single5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=""
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "annual5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=""
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "single5"){
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


        
        output.innerHTML='<span class="text-blue-800 text-size-sm">Annual benefit:</span>  ' + benefit.toFixed(2) + ' <span class="text-blue-800 ">Naira</span>';
        semiAnnual.innerHTML = '<span class="text-blue-800 text-size-sm">Semi-annual benefit:</span>  ' + halfYear.toFixed(2) + ' <span class="text-blue-800 ">Naira</span>';
        monthly.innerHTML= '<span class="text-blue-800 text-size-sm">Monthly benefit:</span>  ' + oneMonth.toFixed(2) + ' <span class="text-blue-800 ">Naira</span>';
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

    }else if(gender.value ==="male" && premiumFrequency.value === "annual5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=""
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="male" && premiumFrequency.value === "single5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=""
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "annual5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=""
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=""
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "single5"){
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

        
        output.innerHTML='<span class="text-blue-800 text-size-sm">Annual premium:</span>  ' + premium.toFixed(2) + ' <span class="text-blue-800 ">Naira</span>';
        
        semiAnnual.innerHTML = '<span class="text-blue-800 ">Semi-annual benefit:</span>  ' +  toFixedhalfyear + ' <span class="text-blue-800 ">Naira</span>';;
        
        monthly.innerHTML= '<span class="text-blue-800 ">Monthly benefit:</span>  ' + 
        toFixedOneMonth + ' <span class="text-blue-800 ">Naira</span>';

        
      }

    
  }

  

