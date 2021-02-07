import 'destyle.css';
import '../scss/style.scss'

import ScrollCtrl from './_ScrollCtrl'


const init = () => {
  const ctrl = new ScrollCtrl(document.querySelectorAll('.js-scroll'));
}
window.addEventListener('load', init);
