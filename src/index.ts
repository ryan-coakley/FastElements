
import { html, css, FASTElement } from "@microsoft/fast-element";

class MyCounter extends FASTElement {
  static definition = {
    name: "my-counter",
    template: html<MyCounter>`
      <button @click="${(x) => x.decrease()}">-</button>
      <span>${(x) => x.count}</span>
      <button @click="${(x) => x.increase()}">+</button>
    `,
    styles: css`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `,
    attributes: ["count"],
  };

  count: number = 0;

  increase() {
    this.count++;
    this.dispatchCountChange();
  }

  decrease() {
    this.count--;
    this.dispatchCountChange();
  }

  // Dispatch the custom event
  dispatchCountChange() {
    const countChangeEvent = new CustomEvent("count-change", {
      detail: { count: this.count },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(countChangeEvent);
  }
}

FASTElement.define(MyCounter);