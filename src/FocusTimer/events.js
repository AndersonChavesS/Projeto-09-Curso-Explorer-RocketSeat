import { controls } from './elements.js';
import * as actions from './actions.js';
import * as elements from './elements.js';

export function registerControls() {
  controls.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    if (typeof actions[action] != 'function') return;
    actions[action]();
  });
}

export function setMinutes() {
  elements.minutes.addEventListener('focus', () => {
    elements.minutes.textContent = '';
  });

  elements.minutes.onkeypress = (event) => /\d/.test(event.key)
}
