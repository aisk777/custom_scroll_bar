export default function (
  callback: EventListener,
  duration: number
): EventListener {
  let timer: any;
  return function (e: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(e);
    }, duration);
  };
}
