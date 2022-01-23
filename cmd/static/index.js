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
                21 : [117.51, 76.64, 50.41, 33.66, 23.28], 22:[126.67, 82.33, 53.92, 35.73, 24.46], 23:[136.89, 88.64, 57.79, 38.02, 25.75], 24:[148.21, 95.61, 62.06, 40.55, 27.16], 25:[160.81, 103.32, 66.77, 43.35, 28.70], 26:[174.86, 111.88, 72.00, 46.45, 30.41], 27:[190.57, 121.39, 77.80, 49.88, 32.32], 28:[208.21, 131.99, 84.25, 53.70, 34.45], 29:[228.06, 143.82, 91.43, 57.94, 36.80], 30:[250.48, 157.05, 99.46, 62.68, 39.42], 31:[275.87, 171.87, 108.43, 67.98, 42.36], 32:[304.74, 188.50, 118.47, 73.90, 45.67], 33:[337.70, 207.19, 129.73, 80.54, 49.39], 34:[375.52, 228.23, 142.37, 87.99, 53.56], 35:[419.17, 251.96, 156.56, 96.36, 58.25], 36:[470.39, 278.78, 172.52, 105.77, 63.52], 37:[529.96, 309.16,  190.48, 116.36, 69.45], 38:[600.52, 343.68, 210.72, 128.29, 76.14], 39:[685.15, 383.04, 233.53, 141.74, 83.69], 40:[788.27, 428.54, 259.29, 156.92, 92.20], 41:[916.40, 480.55, 288.38, 174.04, 101.82], 42:[1079.52, 540.90, 321.29, 193.39, 112.69], 43:[1293.64, 611.63, 358.92, 215.26, 124.98], 44:[1588.57, 695.54, 401.28, 239.99, 138.89], 45:[2012.92, 796.73, 449.46, 268.25, 154.63], 46:[2674.70, 921.33, 504.45, 300.00, 172.63], 47:[3840.77, 1078.88, 567.49, 335.99, 192.88], 48:[6156.88, 1284.93, 640.28, 376.81, 215.84], 49:[null, 1568.37, 725.15, 423.15, 241.91], 50:[null, 1977.49, 825.55, 475.81, 271.52], 51:[null, 2618.41, 946.83, 535.72, 305.18], 52:[null, 3752.71, 1097.60, 604.02, 343.48], 53:[null, 6016.91, 1292.42, 682.09, 387.08], 54:[null, null, 1558.65, 771.73, 436.78], 55:[null, null, 1944.40, 875.47, 493.49], 56:[null, null, 2554.05, 997.24, 558.25], 57:[null, null, 3644.11, 1143.65, 632.32], 58:[null, null, 5843.82, 1326.78, 717.12], 59:[null, null, null, 1569.80, 814.40], 60:[null, null, null, 1921.87, 926.25], 61:[null, null, null, 2482.81, 1055.45], 62:[null, null, null, 3502.30, 1206.13], 63:[null, null, null, 5619.89, 1385.88], 64:[null, null, null, null, 1611.17], 65:[null, null, null, null, 1920.68], 66:[null, null, null, null, 2413.31], 67:[null, null, null, null, 3332.48], 68:[null, null, null, null, 5325.79]
                }

            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData={
                21:[118.09, 77.24, 50.92, 34.11, 23.81], 22:[127.34, 82.96, 54.47, 36.22, 25.04], 23:[137.62, 89.32, 58.38, 38.55, 26.38], 24:[149.01, 96.35, 62.70, 41.13, 27.84], 25:[161.68, 104.13, 67.47, 43.98, 29.45], 26:[175.81, 112.76, 72.76, 47.14, 31.24], 27:[191.62, 122.35, 78.63, 50.64, 33.24], 28:[209.35, 133.04, 85.16, 54.53, 35.45], 29:[229.32, 144.98, 92.44, 58.85, 37.90], 30:[251.86, 158.32, 100.56, 63.68, 40.63], 31:[277.40, 173.27, 109.64, 69.08, 43.70], 32:[306.44, 190.04, 119.81, 75.11, 47.15], 33:[339.59, 208.89, 131.20, 81.88, 51.02], 34:[377.63, 230.11, 143.99, 89.47, 55.36], 35:[421.52, 254.04, 158.36, 98.00, 60.24], 36:[473.04, 281.09, 174.52, 107.58, 65.73], 37:[532.96, 311.73, 192.70, 118.38, 71.91], 38:[603.92, 346.55, 213.18, 130.53, 78.87], 39:[689.03, 386.25, 236.28, 144.23, 86.73], 40:[792.75, 432.14, 262.35, 159.69, 95.59], 41:[921.61, 484.59, 291.80, 177.14, 105.60], 42:[1085.67, 545.47, 325.12, 196.85, 116.92], 43:[1301.02, 616.80, 363.20, 219.13, 129.71], 44:[1597.64, 701.43, 406.08, 244.33, 144.18], 45:[2024.44, 803.49, 454.85, 273.12, 160.57], 46:[2690.01, 929.15, 510.51, 305.47, 179.30], 47:[3862.78, 1088.06, 574.33, 342.13, 200.37], 48:[6192.18, 1295.87, 648.00, 383.71, 224.27], 49:[null, 1581.73, 733.91, 430.92, 251.40], 50:[null, 1994.36, 835.54, 484.57, 282.21], 51:[null, 2640.77, 958.30, 545.61, 317.24], 52:[null, 3784.79, 1110.91, 615.19, 357.09], 53:[null, 6068.38, 1308.11, 694.72, 402.47], 54:[null, null, 1577.59, 786.04, 454.19], 55:[null, null, 1968.05, 891.73, 513.20], 56:[null, null, 2585.14, 1015.77, 580.60], 57:[null, null, 3688.51, 1164.93, 657.67], 58:[null, null, 5915.09, 1351.49, 745.92], 59:[null, null, null, 1599.05, 847.15], 60:[null, null, null, 1957.72, 963.55], 61:[null, null, null, 2529.16, 1097.99], 62:[null, null, null, 3567.74, 1254.79], 63:[null, null, null, 5724.98, 1441.85], 64:[null, null, null, null, 1676.30], 65:[null, null, null, null, 1998.37], 66:[null, null, null, null,  2511.00], 67:[null, null, null, null, 3467.49], 68:[null, null, null, null, 5541.74]
            }
            rate=rateData[age.value][earningAge.value]

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


    if (isNaN(premium.value) || !premium.value || !rate){

        if (!rate) {
            output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid age </span>';
        semiAnnual.innerHTML = ''
        monthly.innerHTML= ''
        } else {
            output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid premium</span>';
        semiAnnual.innerHTML = ''
        monthly.innerHTML= ''
        }
        

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
            21 : [113.6, 72.95, 47.20, 30.95, 21.23], 22: [122.82, 78.58, 50.56, 32.86, 22.22], 23: [ 133.12, 84.85, 54.31, 34.98 , 23.32], 24:[ 144.59, 91.83, 58.47, 37.34, 24.55], 25:[ 157.41, 99.60, 63.11, 39.96, 25.91],26: [ 171.75, 108.28, 68.27, 42.90, 27.43], 27:[ 187.83, 117.98, 74.05, 46.19, 29.11 ], 28:[ 205.90, 128.85, 80.51, 49.86, 31.04], 29:[ 226.24, 141.04, 87.76, 53.98, 33.18 ], 30:[249.21, 154.72, 95.89, 58.60, 35.59], 31:[ 275.18, 170.11, 105.04, 63.79, 38.30], 32:[275.18, 170.11, 105.04, 63.79, 38.30], 33:[ 338.15, 206.95, 126.91, 76.22, 44.89], 34:[376.43, 228.96, 139.97, 83.64, 48.83], 35:[ 420.34, 253.82, 154.71, 92.02, 53.28], 36:[471.53, 281.92, 171.35, 101.48, 58.31], 37:[ 530.60, 313.73, 190.15, 112.18, 64.00],38:[599.99, 349.79, 211.41, 124.28, 70.44], 39:[ 682.52, 391.13, 235.46, 137.97, 77.74], 40:[782.28, 437.86, 262.94, 153.48, 86.00], 41:[905.36, 491.28, 293.84, 171.06, 95.38], 42:[905.36, 491.28, 293.84, 171.06, 95.38], 43:[1265.29, 623.67, 368.62, 213.82, 118.08], 44:[1546.06, 706.73, 413.77, 239.53, 131.92], 45:[1951.13, 805.29, 465.10, 268.74, 147.52], 46:[2585.15, 924.73, 523.54, 301.96, 165.27], 47:[3706.28, 1073.65, 590.21, 339.76, 185.47], 48:[5942.23, 1266.49, 666.50,382.82, 208.48], 49:[null,1530.32, 754.24, 431.89, 234.71], 50:[null, 1912.35, 856.02,487.89, 264.63], 51:[null, 2515.22, 975.88, 551.85, 298.82], 52:[null, 3591.30, 1120.58, 625.00, 337.91], 53:[null, 5759.03, 1302.37, 708.77, 382.66], 54:[null, null, 1544.43, 804.86, 433.96], 55:[null, null, 1895.68, 915.39, 492.85], 56:[null, null, 2454.48, 1043.17, 560.55], 57:[null, null, 3471.10, 1192.49, 638.52], 58:[null, null, 5564.39, 1371.30, 728.45], 59:[null, null, null, 1596.66, 832.39], 60:[null, null, null, 1907.92, 952.77], 61:[null, null, null, 2404.49, 1092.53], 62:[null, null, null,  3328.28, 1255.31], 63:[null, null, null, 5322.00, 1446.09], 64:[null, null, null, null, 1673.93], 65:[null, null, null, null, 1962.60], 66:[null, null, null, null, 2388.81], 67:[null, null, null, null, 2388.81], 68:[null, null, null, null, 5031.37]
        }
        rate=rateData[age.value][earningAge.value]
            
            
        }else if(guarantyPeriod.value ==="10"){
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
                21 : [117.51, 76.64, 50.41, 33.66, 23.28], 22:[126.67, 82.33, 53.92, 35.73, 24.46], 23:[136.89, 88.64, 57.79, 38.02, 25.75], 24:[148.21, 95.61, 62.06, 40.55, 27.16], 25:[160.81, 103.32, 66.77, 43.35, 28.70], 26:[174.86, 111.88, 72.00, 46.45, 30.41], 27:[190.57, 121.39, 77.80, 49.88, 32.32], 28:[208.21, 131.99, 84.25, 53.70, 34.45], 29:[228.06, 143.82, 91.43, 57.94, 36.80], 30:[250.48, 157.05, 99.46, 62.68, 39.42], 31:[275.87, 171.87, 108.43, 67.98, 42.36], 32:[304.74, 188.50, 118.47, 73.90, 45.67], 33:[337.70, 207.19, 129.73, 80.54, 49.39], 34:[375.52, 228.23, 142.37, 87.99, 53.56], 35:[419.17, 251.96, 156.56, 96.36, 58.25], 36:[470.39, 278.78, 172.52, 105.77, 63.52], 37:[529.96, 309.16,  190.48, 116.36, 69.45], 38:[600.52, 343.68, 210.72, 128.29, 76.14], 39:[685.15, 383.04, 233.53, 141.74, 83.69], 40:[788.27, 428.54, 259.29, 156.92, 92.20], 41:[916.40, 480.55, 288.38, 174.04, 101.82], 42:[1079.52, 540.90, 321.29, 193.39, 112.69], 43:[1293.64, 611.63, 358.92, 215.26, 124.98], 44:[1588.57, 695.54, 401.28, 239.99, 138.89], 45:[2012.92, 796.73, 449.46, 268.25, 154.63], 46:[2674.70, 921.33, 504.45, 300.00, 172.63], 47:[3840.77, 1078.88, 567.49, 335.99, 192.88], 48:[6156.88, 1284.93, 640.28, 376.81, 215.84], 49:[null, 1568.37, 725.15, 423.15, 241.91], 50:[null, 1977.49, 825.55, 475.81, 271.52], 51:[null, 2618.41, 946.83, 535.72, 305.18], 52:[null, 3752.71, 1097.60, 604.02, 343.48], 53:[null, 6016.91, 1292.42, 682.09, 387.08], 54:[null, null, 1558.65, 771.73, 436.78], 55:[null, null, 1944.40, 875.47, 493.49], 56:[null, null, 2554.05, 997.24, 558.25], 57:[null, null, 3644.11, 1143.65, 632.32], 58:[null, null, 5843.82, 1326.78, 717.12], 59:[null, null, null, 1569.80, 814.40], 60:[null, null, null, 1921.87, 926.25], 61:[null, null, null, 2482.81, 1055.45], 62:[null, null, null, 3502.30, 1206.13], 63:[null, null, null, 5619.89, 1385.88], 64:[null, null, null, null, 1611.17], 65:[null, null, null, null, 1920.68], 66:[null, null, null, null, 2413.31], 67:[null, null, null, null, 3332.48], 68:[null, null, null, null, 5325.79]
                }

            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData={
                21:[118.09, 77.24, 50.92, 34.11, 23.81], 22:[127.34, 82.96, 54.47, 36.22, 25.04], 23:[137.62, 89.32, 58.38, 38.55, 26.38], 24:[149.01, 96.35, 62.70, 41.13, 27.84], 25:[161.68, 104.13, 67.47, 43.98, 29.45], 26:[175.81, 112.76, 72.76, 47.14, 31.24], 27:[191.62, 122.35, 78.63, 50.64, 33.24], 28:[209.35, 133.04, 85.16, 54.53, 35.45], 29:[229.32, 144.98, 92.44, 58.85, 37.90], 30:[251.86, 158.32, 100.56, 63.68, 40.63], 31:[277.40, 173.27, 109.64, 69.08, 43.70], 32:[306.44, 190.04, 119.81, 75.11, 47.15], 33:[339.59, 208.89, 131.20, 81.88, 51.02], 34:[377.63, 230.11, 143.99, 89.47, 55.36], 35:[421.52, 254.04, 158.36, 98.00, 60.24], 36:[473.04, 281.09, 174.52, 107.58, 65.73], 37:[532.96, 311.73, 192.70, 118.38, 71.91], 38:[603.92, 346.55, 213.18, 130.53, 78.87], 39:[689.03, 386.25, 236.28, 144.23, 86.73], 40:[792.75, 432.14, 262.35, 159.69, 95.59], 41:[921.61, 484.59, 291.80, 177.14, 105.60], 42:[1085.67, 545.47, 325.12, 196.85, 116.92], 43:[1301.02, 616.80, 363.20, 219.13, 129.71], 44:[1597.64, 701.43, 406.08, 244.33, 144.18], 45:[2024.44, 803.49, 454.85, 273.12, 160.57], 46:[2690.01, 929.15, 510.51, 305.47, 179.30], 47:[3862.78, 1088.06, 574.33, 342.13, 200.37], 48:[6192.18, 1295.87, 648.00, 383.71, 224.27], 49:[null, 1581.73, 733.91, 430.92, 251.40], 50:[null, 1994.36, 835.54, 484.57, 282.21], 51:[null, 2640.77, 958.30, 545.61, 317.24], 52:[null, 3784.79, 1110.91, 615.19, 357.09], 53:[null, 6068.38, 1308.11, 694.72, 402.47], 54:[null, null, 1577.59, 786.04, 454.19], 55:[null, null, 1968.05, 891.73, 513.20], 56:[null, null, 2585.14, 1015.77, 580.60], 57:[null, null, 3688.51, 1164.93, 657.67], 58:[null, null, 5915.09, 1351.49, 745.92], 59:[null, null, null, 1599.05, 847.15], 60:[null, null, null, 1957.72, 963.55], 61:[null, null, null, 2529.16, 1097.99], 62:[null, null, null, 3567.74, 1254.79], 63:[null, null, null, 5724.98, 1441.85], 64:[null, null, null, null, 1676.30], 65:[null, null, null, null, 1998.37], 66:[null, null, null, null,  2511.00], 67:[null, null, null, null, 3467.49], 68:[null, null, null, null, 5541.74]
            }
            rate=rateData[age.value][earningAge.value]
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

    if (isNaN(benefit.value)|| !benefit.value || !rate){
        if (!rate) {
            output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid age </span>';
        semiAnnual.innerHTML = ''
        monthly.innerHTML= ''
        } else {
            output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid benefit</span>';
        semiAnnual.innerHTML = ''
        monthly.innerHTML= ''
        }
        

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

  

