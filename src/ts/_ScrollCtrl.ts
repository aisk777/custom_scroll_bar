import { EventEmitter } from 'events';

class ScrollCtrl extends EventEmitter {
  constructor(el) {
    super();
    this.DOM = {
      el: el,
      inner: el.children[0]
    };
    this._enabled();
  }

  get getPercent() {
    const p = this.DOM.el.clientWidth / this.DOM.inner.clientWidth;
    return p;
  }

  _enabled() {
    this.DOM.el.addEventListener('scroll', () => this._scroll(), false);
  }

  _scroll() {
    const x = this.DOM.el.scrollLeft / this.DOM.inner.clientWidth;
    this.emit('scroll', x);
  }

  scrollEvent(x) {
    const w = this.DOM.inner.clientWidth * x;
    this.DOM.el.scrollTo(w, 0);
  }
}

class KnobCtrl extends EventEmitter {
  constructor(el, per) {
    super();
    this.DOM = {
      el: el.children[0],
      parent: el
    };
    this.isMove = false;
    this.parentWidth = this.DOM.parent.clientWidth;
    this.knobWidth = per;
    this.point = { x: 0, _x: 0 };
    this.x = 0;

    this.DOM.el.style.width = `${this.knobWidth * 100}%`;
    this.DOM.el.style.left = `${this.x}%`;
    this._enabled();
  }

  _enabled() {
    this.DOM.el.addEventListener('touchstart', (e) => {
      this.isMove = true;
      // ポイントを記憶
      this.point = {
        x: this.x
        _x: e.changedTouches[0].pageX,
      }
    }, false);
    document.addEventListener('touchmove', (e) => {
      if(this.isMove === true) this._scroll(e);
    }, false);
    document.addEventListener('touchend', () => this.isMove = false, false);
  }

  _scroll(e) {
    let x = e.changedTouches[0].pageX - this.point._x;
    x = (this.point.x + x / this.parentWidth);
    x = Math.max(0, Math.min(x, 1 - this.knobWidth));
    this.scrollEvent(x);
    this.emit('scroll', this.x);
  }

  scrollEvent(x) {
    this.x = x;
    this.DOM.el.style.left = `${this.x * 100}%`;
  }
}

export default class {
  constructor(nodeList) {
    this.List = [...nodeList].map(this._init.bind(this));
  }

  _init(el) {
    // つまみを追加
    el.insertAdjacentHTML(
      'afterend',
      '<div class="knob"><span></span></div>'
    );

    const scrollCtrl = new ScrollCtrl(el);
    const knobCtrl = new KnobCtrl(el.nextElementSibling, scrollCtrl.getPercent);

    // 相互に作用させる
    scrollCtrl.on('scroll', (x) => knobCtrl.scrollEvent(x));
    knobCtrl.on('scroll', (x) => scrollCtrl.scrollEvent(x));

    return {
      scrollCtrl,
      knobCtrl
    }
  }
}
