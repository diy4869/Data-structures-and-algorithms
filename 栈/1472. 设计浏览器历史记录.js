// TODO 未完成
class BrowserHistory {
  constructor(homepage) {
    this.forwardList = [homepage]
    this.backList = []
    this.current = homepage
  }

  visit(url) {
    this.forwardList.push(url)
    this.current = url

    console.log('visit', this.forwardList, this.backList, this.current)

  }

  back(steps) {
    // console.log(steps, this.forwardList, this.backList)
    if (this.forwardList.length - steps < 0) {
      this.current = this.forwardList[0]

      return
    } 
    
    for (let i = 0; i < steps; i++) {
      this.backList.push(this.forwardList[this.forwardList.length - 1])
      this.forwardList.pop()
    }

    this.current = this.forwardList[this.forwardList.length - 1]

    return this.current
  }

  forward(steps) {
    // console.log('forward', this.forwardList, this.backList, this.current)
    if (steps > this.backList.length) return
    for (let i = 0; i < steps; i++) {
      this.forwardList.push(this.backList[this.backList.length - 1])
      this.backList.shift()
    }

    this.current = this.backList[this.backList.length - 1]
    console.log('forward', this.forwardList, this.backList, this.current)

    return this.current
  }
}

const browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // 你原本在浏览 "leetcode.com" 。访问 "google.com"
browserHistory.visit("facebook.com");     // 你原本在浏览 "google.com" 。访问 "facebook.com"
browserHistory.visit("youtube.com");      // 你原本在浏览 "facebook.com" 。访问 "youtube.com"
browserHistory.back(1);                   // 你原本在浏览 "youtube.com" ，后退到 "facebook.com" 并返回 "facebook.com"
browserHistory.back(1);                   // 你原本在浏览 "facebook.com" ，后退到 "google.com" 并返回 "google.com"


browserHistory.forward(1);                // 你原本在浏览 "google.com" ，前进到 "facebook.com" 并返回 "facebook.com"
// return


browserHistory.visit("linkedin.com");     // 你原本在浏览 "facebook.com" 。 访问 "linkedin.com"


browserHistory.forward(2);                // 你原本在浏览 "linkedin.com" ，你无法前进任何步数。


browserHistory.back(2);                   // 你原本在浏览 "linkedin.com" ，后退两步依次先到 "facebook.com" ，然后到 "google.com" ，并返回 "google.com"
browserHistory.back(7);                   // 你原本在浏览 "google.com"， 你只能后退一步到 "leetcode.com" ，并返回 "leetcode.com"
