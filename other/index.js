
const getType = type => Object.prototype.toString.call(type).slice(8, -1)
const path = (obj) => {
    const pathArr = []
    const initVal = {}

    const pathArray = (arr, initVal) => {
        const len = pathArr.length - 1
        const key = pathArr[len]

        pathArr.pop()

        const result = arr.reduce((o, current, currentIndex) => {
            if (getType(current) === 'Object') {
                pathArr.push(`${key}[${currentIndex}]`)
                return pathObject(current, o)
            }

            if (getType(current) === 'Array') {
                pathArr.push(`${key}[${currentIndex}]`)
                return pathArray(current, o)
            }

            pathArr.push(`${key}[${currentIndex}]`)
            const str = pathArr.join('.')
            o[str] = current
            
            pathArr.pop()

            return o
        }, initVal)

        pathArr.pop()

        return result
    }

    const pathObject = (obj, initVal) => {
        const result = Object.keys(obj).reduce((o, current) => {
            if (getType(obj[current]) === 'Object') {
                pathArr.push(current)
                return pathObject(obj[current], o)
            } 
            if (getType(obj[current]) === 'Array') {
                pathArr.push(current)
                return pathArray(obj[current], o)
            }

            pathArr.push(current)

            const str = pathArr.join('.')
            o[str] = obj[current]
           
            pathArr.pop()

            return o
        }, initVal)

        pathArr.pop()

        return result
    }

    return pathObject(obj, initVal)
}

const data = path({
    a: {
        b: {
            c: {
                d: 1,
                e: 2
            }
        }
    },
    b: 2,
    c: [1, 2],
    d: [
        2,
        {
            a: 2,
            b: {
                d: 1
            }
        },
        [3]
    ]
})

console.log(data)


const pathToObject = (initVal, str, val) => {
    const pathList = str.split('.')

    const toObject = (obj, val) => {
        const first = pathList.shift().match(/\w+|([\d+])/g)
        const [ key, ...index ] = first

        if (first.length >= 2) {
            return toArray(obj, key, index, val)
        }

        if (pathList.length === 0) {
            obj[key] = val

            return obj
        }
       
        if (obj[key]) {
            obj[key] = toObject(obj[key], val)
        } else {
            obj[key] = toObject({}, val)
        }

        return obj
    }

    const toArray = (o, key, indexList, val) => {
        const run = (arr, indexList, val) => {
            const index = +indexList.shift()

            if (indexList.length === 0) {
                if (pathList.length !== 0) {
                    if (arr[index]) {
                        arr[index] = toObject(arr[index], val)

                        return arr
                    } else {
                        arr[index] = toObject({}, val)
                    }
                } else {
                    arr[index] = val

                    return arr
                }
            }

            if (arr[index]) {
                return arr
            } else {
                arr[index] = run([], indexList, val)
            }

            return arr
        }
        
        if (o[key]) {
            o[key] = run(o[key], indexList, val)
        } else {
            o[key] = run([], indexList, val)
        }
       
        return o
    }

    return toObject(initVal, val)
    
}


const initVal = {}
for (let item of Object.entries(data)) {
    const [ key, val ] = item

    pathToObject(initVal, key, val)
}
console.log(data)
console.log(initVal)
