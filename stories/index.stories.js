import "../src/index";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => {
  // Return the HTML structure
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <my-counter></my-counter>
    <div id="other-element">Initial text</div>
  `;

  // Set up the custom event listener after rendering
  setTimeout(() => {
    const myCounter = wrapper.querySelector('my-counter');
    
    if (myCounter) {
      myCounter.addEventListener('count-change', (event) => {
        const countValue = event.detail.count;
        const otherElement = wrapper.querySelector('#other-element');
        if (otherElement) {
          otherElement.textContent = 'Counter value: ' + countValue;
        }
      });
    }
  }, 0);

  return wrapper;
};
