import { EventEmitter } from 'events';
import { UAParser } from 'ua-parser-js';

type ScrollDOM = {
  el: HTMLElement;
  inner: HTMLElement
}

type KnobDOM = {
  el: HTMLElement;
  parent: HTMLElement;
}

type Point = {
  _x: number;
  x: number
}

const UA = new UAParser().getDevice();

class ScrollCtrl extends EventEmitter {
  DOM: ScrollDOM;
  emit: any;
  on: any;

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
  DOM: KnobDOM;
  isMove: boolean;
  parentWidth: number;
  knobWidth: number;
  point: Point;
  x: number;
  emit: any;
  on: any;

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
    const hookEvent: string[] = UA.type !== undefined
      ? ['touchstart', 'touchmove', 'touchend']
      : ['mousedown', 'mousemove', 'mouseup'];

    this.DOM.el.addEventListener(hookEvent[0], (e: any) => this._enter(e), false);
    document.addEventListener(hookEvent[1], (e: any) => this._scroll(e), false);
    document.addEventListener(hookEvent[2], () => this._leave(), false);
  }

  // 開始
  _enter(e) {
    e = UA.type !== undefined ? e.changedTouches[0] : e;
    this.isMove = true;
    // ポイントを記憶
    this.point = { x: this.x, _x: e.pageX }
    // クラスを付与
    document.body.classList.add('is-move');
  }

  // 終了
  _leave() {
    this.isMove = false;
    // クラスを削除
    document.body.classList.remove('is-move');
  }

  // 移動中
  _scroll(e) {
    if(this.isMove === false) return;
    e = UA.type !== undefined ? e.changedTouches[0] : e;

    let x = e.pageX - this.point._x;
    x = (this.point.x + x / this.parentWidth);
    x = Math.max(0, Math.min(x, 1 - this.knobWidth));

    this.scrollEvent(x);
    this.emit('scroll', this.x);
  }

  scrollEvent(x) {
    this.x = x;
    this.DOM.el.style.left = `${this.x * 100}%`;
  }

  _resize(per) {
    this.parentWidth = this.DOM.parent.clientWidth;
    this.knobWidth = per;
    this.DOM.el.style.width = `${this.knobWidth * 100}%`;
  }
}

export default class {
  List: any[];

  constructor(nodeList) {
    this.List = [...nodeList].map(this._init.bind(this));
    this._enabled();
  }

  _init(el) {
    // つまみを追加
    el.insertAdjacentHTML(
      'afterend',
      '<div class="knob"><span></span></div>'
    );

    const scrollCtrl:ScrollCtrl = new ScrollCtrl(el);
    const knobCtrl:KnobCtrl = new KnobCtrl(el.nextElementSibling, scrollCtrl.getPercent);

    // 相互に作用させる
    scrollCtrl.on('scroll', (x) => knobCtrl.scrollEvent(x));
    knobCtrl.on('scroll', (x) => scrollCtrl.scrollEvent(x));

    return {
      scrollCtrl,
      knobCtrl
    }
  }

  _enabled() {
    const hookEventForResize: string =
      UA.type !== undefined ? 'orientationchange' : 'resize';
    window.addEventListener(hookEventForResize, () => this._resize());
  }

  _resize() {
    this.List.forEach(x => {
      x.knobCtrl._resize(x.scrollCtrl.getPercent);
    });
  }
}
