function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; i < arr.length - i ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }    
    }
    return arr;

}
// let b = bubbleSort(a = []);

module.exports = bubbleSort;