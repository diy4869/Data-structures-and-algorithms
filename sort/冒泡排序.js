/**
 * 
 * @param {*} arr 
 * @description 冒泡排序
 */
 function bubbleSort(arr) {
  let koukan = false

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        koukan = true
      }
     
      if (!koukan) {
        break
      }

      koukan = false
    } 
   }
   
   console.log(arr)
}

bubbleSort([1, 2, 3, 5])
bubbleSort([2, 5, 67, 8, 9, 0, 34, 1, 6])