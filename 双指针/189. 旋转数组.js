var rotate = function (nums, k) {
  let arr = new Array(k)
  let j = nums.length - 1

  for (let i = k - 1; i >= 0; i--) {
    arr[i] = nums[j]
    j--
  }

  if (k > nums.length) {
    arr = k % 2 === 0 ?  nums : nums.reverse()
  } else {
    arr = [...arr, ...nums.slice(0, nums.length - k)]

  }

  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i]
  }

  console.log(nums)
  return nums

}

rotate([1, 2, 3, 4, 5, 6, 7], 3)
rotate([1, 2, 3, 4, 5, 6], 3)
rotate([1, 7], 3)
rotate([1, 2, 3], 4)


/**
 * vue 在初始化的过程中，会通过 defineProperty 对data 内的属性重写get、set 方法，去进行一个依赖收集，而依赖收集是通过 dep 和 watcher 去实现的，在vue中，会存在一个dep和watcher的类
 * 
 * watcher 表示 当前对象的观察者，而dep 则会收集这些watcher，从而在数据变化的时候，遍历内部收集好的watcher，进行更新
 * 在dep的过程中，会有一个 dep.target 属性，表示当前的watcher，vue内部会有3种watcher，分别为 data 内的watcher computed和watch的watcher，其中，对于computed 和watch内的每个属性都会单独创建一个 watcher，而 data 内只会存在一个watcher，每次更新的时候，dep.target 都会执行当前的watcher，从而渲染
 */