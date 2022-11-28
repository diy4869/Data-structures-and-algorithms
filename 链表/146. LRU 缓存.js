const { callClass } = require('../util/index')

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key) {
    /**
     * 判断是否存在，如果存在的话，就要删除之前的，并保存之前的值
     * 这样做的目的是让最老的永远在前面，新的永远是最后添加的
     * 之后如果存在就返回，不存在就 -1
     */
    if (this.map.has(key)) {
      const val = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, val)
    }

    return this.map.has(key) ? this.map.get(key) : -1
  }

  put(key, value) {
    /**
     * 如果之前已经存在，就删掉之前的
     * 如果 map.size 小于 最大值，说明依然可以添加放入缓存
     * 如果到了最大值，就直接删掉第一个
     */
    if (this.map.has(key)) {
      this.map.delete(key)
    }

    if (this.map.size < this.capacity) {
      this.map.set(key, value)
    } else {
      this.map.delete(
        this.map.keys().next().value
      )
      this.map.set(key, value)
    }
  }
}

callClass(
  LRUCache,  
  ["LRUCache","put","put","put","put","get","get"],
  [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
)