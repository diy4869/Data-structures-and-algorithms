/**
 *
 * @description 以新节点为标准，在旧节点中找到新增 删除的，如果位置发生了变化，则返回之前和之后的索引 以及对应的新旧节点
 * @param {*} newNode 新节点
 * @param {*} oldNode 旧节点
 * @param {*} key 如果是数组对象的话，应该传 key，用于判断是否相等
 * @returns
 *  add 表示新增 如果没有新增 为 空数组
 *  remove 表示删除 如果没有删除 为空数组
 *  replace 表示 如果只是位置变化，则说明之前的位置 和之后的位置，以及索引
 */

interface A {
  [key: string]: unknown
}

type ArrayNode = number[] | string[] | A[] | [] | ArrayNode[]

interface replace {
  newIndex: number | undefined
  oldIndex: number | undefined
  val: number | string | A | undefined
}

type Result = {
  add: ArrayNode
  remove: ArrayNode
  child: Result | undefined // 子数组返回的结果
  replace: replace[] | []
}

const findRange = (
  arr: unknown[],
  start: number,
  end: number,
  callback: (current: unknown, index: number) => boolean
) => {
  let result = undefined

  for (let i = start; i < end; i++) {
    const find = callback(arr[i], i)

    if (find) {
      result = {
        data: arr[i],
        index: i
      }
      break
    }
  }

  return result
}

const diff = (newNode: ArrayNode, oldNode: ArrayNode, key?: string): Result => {
  // show me your code
  const newLen = newNode.length
  const oldLen = oldNode.length
  const add = []
  const remove = []
  const replace = []

  let n1 = 0
  let n2 = 0

  if (key) {
    while (n1 < newLen || n2 < oldLen) {
      // 新旧节点都存在
      if (newNode[n1] && oldNode[n2]) {
        // 如果 新 旧 节点相等，则不做处理
        if (newNode[n1][key] === oldNode[n2][key] && n1 === n2) {
          n1++
          n2++
          continue
        } else {
          // 在旧节点 查找 新节点是否存在，没有则说明不存在
          const result = findRange(
            oldNode,
            n2,
            oldLen,
            current => newNode[n1][key] === current[key]
          )

          if (result) {
            replace.push({
              newIndex: n1,
              oldIndex: result.index,
              val: result.data
            } as never)
            n1++
            if (oldNode[n2][key] === oldNode[result.index][key]) {
              n2++
            }

            continue
          } else {
            add.push(newNode[n1] as never)
            n1++
            continue
          }
        }
      }
      // 只有新节点存在
      if (newNode[n1]) {
        add.push(newNode[n1] as never)
        n1++
        continue
      }
      // 只有旧节点存在
      if (oldNode[n2]) {
        const some = replace.some(
          (item: replace) => item.val[key] === oldNode[n2][key]
        )
        if (!some) {
          remove.push(oldNode[n2] as never)
        }
        n2++
        continue
      }
    }
  } else {
    while (n1 < newLen || n2 < oldLen) {
      // 新旧节点都存在
      if (newNode[n1] && oldNode[n2]) {
        // 如果 新 旧 节点相等，则不做处理
        if (newNode[n1] === oldNode[n2] && n1 === n2) {
          n1++
          n2++
          continue
        } else {
          // 在旧节点 查找 新节点是否存在，没有则说明不存在
          const result = findRange(
            oldNode,
            n2,
            oldLen,
            current => newNode[n1] === current
          )

          if (result) {
            replace.push({
              newIndex: n1,
              oldIndex: result.index,
              val: result.data
            } as never)
            n1++
            if (oldNode[n2] === oldNode[result.index]) {
              n2++
            }
            continue
          } else {
            add.push(newNode[n1] as never)
            n1++
            continue
          }
        }
      }
      // 只有新节点存在
      if (newNode[n1]) {
        add.push(newNode[n1] as never)
        n1++
        continue
      }
      // 只有旧节点存在
      if (oldNode[n2]) {
        const some = replace.some((item: replace) => item.val === oldNode[n2])
        if (!some) {
          remove.push(oldNode[n2] as never)
        }
        n2++
        continue
      }
    }
  }

  console.log({
    add,
    remove,
    replace
  })
  return {
    // 新增的
    add,
    // 删除的
    remove,
    child: undefined,
    // 如果 2个数组一样，只是位置发生了改变，那应该返回之前的和之后的结果
    replace
  }
}

/**
 * 对于新节点来说，第一个 没有发生变化，第二个 从2 变成 3，并且第一个也存在 3 这时候可能只是换了一个位置，所以replace 要新增一个，而最后一个新节点为3 旧节点 为 4，4 既不在新的节点 说明要删除4
    {
        add: [], 
        remove: [4, 2], 
        replace: [{  newIndex: 2, oldIndex: 1, newValue: 1, oldValue: 1}]
    }
*/

diff([1, 2, 3], [1, 3, 4, 7])
// // //  // { add: [], remove: [], replace: []} 新旧并没发生变化，所以我们应该返回空
diff([2, 4], [2, 4])
diff([1, 2, 3], [3, 2, 1])
diff([2, 4], [1, 2, 6])
diff(
  [
    {
      id: 1,
      name: '第一个'
    },
    {
      id: 3,
      name: '第三个'
    }
  ],
  [
    {
      id: 5,
      name: '第五个'
    }
  ],
  'id'
)
/**
 * {
 *  add: [1,2,3],
 *  remove: [5],
 * replace: []
 * }
 */
