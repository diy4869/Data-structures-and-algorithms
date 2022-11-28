const keyArr = ['key1', 'key2', 'key3', 'key4']; 
const valArr1 = ['val11', 'val12', 'val13', 'val14'];
const valArr2 = ['val21', 'val22', 'val23', 'val24'];
const valArr3 = ['val31', 'val32', 'val33', 'val34'];

const data = [
  valArr1,
  valArr2,
  valArr3
]

const arr = [
  {
    name1: '金额'
  },
  {
    name1: '扣率'
  },
  {
    name1: '方式'
  }
]

const result = arr.reduce((total, current, currentIndex) => {

  return total.concat(
    keyArr.reduce((obj, children, childrenIndex) => {
      obj[children] = data[currentIndex][childrenIndex]

      return obj
    }, current)
  )

}, arr)

console.log(result)