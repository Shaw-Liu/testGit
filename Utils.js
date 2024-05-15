// 防抖函数
export function debounce(func, delay) {
    let timerId;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
  }

// 节流函数 
export function throttle(func, delay) {
    let lastTime = 0;
    return function() {
      const currentTime = new Date().getTime();
      if (currentTime - lastTime >= delay) {
        func.apply(this, arguments);
        lastTime = currentTime;
      }
    };
  }

// 随机生成UUID
export function generateUUID() {
    const chars = '0123456789abcdef';
    const uuid = [];
    for (let i = 0; i < 36; i++) {
      const rnd = Math.floor(Math.random() * 16);
      switch (i) {
        case 8:
        case 13:
        case 18:
        case 23:
          uuid.push('-');
          uuid.push(chars.substring(rnd, rnd + 1));
          break;
        case 14:
          uuid.push('4');
          break;
        case 19:
          uuid.push(chars.substring((rnd & 0x3) | 0x8, (rnd & 0x3) | 0x9));
          break;
        default:
          uuid.push(chars.substring(rnd, rnd + 1));
      }
    }
    return uuid.join('');
  }
  