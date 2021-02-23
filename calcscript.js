function performStatistics(){

//    var inputArray = document.getElementById("input").value.split(" ");
      var inputArray = document.getElementById("input").value.replace(/\s+/g, ' ').trim().split(" ");
//    alert(inputArray[1]);

    var RangeLimit = inputArray.length > 4 && inputArray.length < 21;
    	var i=0;

    	// Iterate through the list
    	while (i< inputArray.length) {

    		// Check to see if the numbers are numbers
    		var NotANum = !isNaN(inputArray[i]);

    		// Check to see if the lists are numbers and fits within the range
    		if ((NotANum) && (RangeLimit)) {
    			inputArray[i] = Number(inputArray[i]);
    			// Check to see if the list of numbers have values between 1 - 100.
    			if (inputArray[i] < 0 || inputArray[i] > 100){
    				alert('Invalid input! Values must fall between 0 and 100.')
    			    return false
    			}
    		}
    		// Else to see if the list of numbers are numbers and don't enter special characters.
    		else {
    			alert("Error: User must enter 5-20 numbers separated by single spaces with numeric values between 1-100!");
    			return false;
    		}
    		 i++;
    	}
    	 inputArray = inputArray.sort(function(a, b){return a - b});



//    	var calculateMean = calcMean(inputArray);
//        alert(calcSum(inputArray));
//        calcMode(inputArray);

//        alert(calcMean(inputArray));
//        alert(calcMedian(inputArray));

document.getElementById("sum").value = calcSum(inputArray).toFixed(2);
document.getElementById("max").value = findMax(inputArray).toFixed(2);
document.getElementById("min").value = findMin(inputArray).toFixed(2);
document.getElementById("mode").value = calcMode(inputArray);
document.getElementById("mean").value = calcMean(inputArray).toFixed(2);
document.getElementById("median").value = calcMedian(inputArray).toFixed(2);
document.getElementById("variance").value = calcVariance(inputArray).toFixed(2);
document.getElementById("stdev").value = calcStdDev(inputArray).toFixed(2);

return false;
}

function calcSum(array){
    var sum = 0;
    for(i=0; i <array.length; i++){
        sum = sum + array[i];

    }
    return sum;
}


function findMax(array){
    var max = array[array.length - 1];
    return max;
}

function findMin(array){
    var min = array[0];

    return min;
}

function calcMean(array){

    var meanArray = array;

    var mean = calcSum(meanArray) / meanArray.length;

    return mean;


}

function calcMedian(array){
    var ascending = array;

//    return ascending;
     var half = Math.floor(ascending.length / 2);


    if(ascending.length % 2){
        return ascending[half];
    }
    else{
        return ((ascending[half - 1] + ascending[half])/2.0);

    }


}


function calcMode(array){
     var modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < array.length; i += 1) {
            number = array[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }

        if(modes.length == array.length){
            return ('');
        }
        else{

        return modes.join("  ");
        }
 }

function calcVariance(array){

    var varianceArray = array;

    var mean = calcMean(varianceArray);
//    alert(mean);

    for(i=0;i< varianceArray.length; i++){
        varianceArray[i] = Math.pow(varianceArray[i] - mean,2);
    }
//    alert(varianceArray);
    var sum = calcSum(varianceArray);
    var variance = sum / varianceArray.length;

    return variance;
//    return calcMean(varianceArray);



}

function calcStdDev(array){
    var dev = Math.sqrt(calcMean(array));
    return dev;
}



