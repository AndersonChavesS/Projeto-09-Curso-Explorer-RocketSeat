import { controls } from './elements.js';

export function registerControls() {
  controls.addEventListener('click', (e) => {
    console.log(event.target);
  });
}
