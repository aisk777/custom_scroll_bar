// windowサイズ
const getResolution = () => {
  return {
    x: window.innerWidth,
    y: window.innerHeight,
  }
}

// スリープ関数
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

export default {
  sleep,
  getResolution,
}
