import { makeObservable, observable, action, computed, runInAction } from 'mobx'

class AppleStore {
  constructor() {
    // 指定变量和方法的类型 
    makeObservable(this, {
      apples: observable,
      newAppleId: observable,
      isPicking: observable,
      buttonText: observable,
      status: computed,
      pickApple: action,
      eatApple: action
    })
  }
  // 普通属性
  apples = [
    {
      id: 0,
      weight: 233,
      isEaten: false
    },
    {
      id: 1,
      weight: 235,
      isEaten: true
    },
    {
      id: 2,
      weight: 256,
      isEaten: false
    }
  ]
  newAppleId = 3
  isPicking = false
  buttonText = '摘苹果'
  // 计算属性
  get status() {
    let status = {
      appleNow: {
        quantity: 0,
        weight: 0
      },
      appleEaten: {
        quantity: 0,
        weight: 0
      }
    };
    this.apples.forEach(apple => {
      let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
      status[selector].quantity++;
      status[selector].weight += apple.weight;
    });
    return status;
  }
  // 采摘苹果
  pickApple = () => {
    if (this.isPicking) {
      return;
    }
    this.isPicking = true;
    this.buttonText = '正在采摘...'
    runInAction(() => {
      let weight = Math.floor(200 + Math.random() * 50);
      this.isPicking = false;
      this.buttonText = '摘苹果'
      this.apples.push({
        id: this.newAppleId++,
        weight: weight,
        isEaten: false
      })
    })
  }
  // 吃苹果
  eatApple = appleId => {
    let targetIndex = ''
    this.apples.forEach((apple, index) => {
      if (apple.id === appleId) {
        targetIndex = index
      }
    })
    this.apples[targetIndex].isEaten = true
  }
}
export default AppleStore