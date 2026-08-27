import { LitElement, html, css } from "lit";
import { customElement, query } from "lit/decorators.js";
import { animate, onScroll } from "animejs";

@customElement("scroll-indicator")
export class ScrollIndicator extends LitElement {
  static styles = css`
    div {
      position: fixed;
      inset-inline: 0;
      top: 0;

      height: 6px;
      background-color: hsl(var(--red));
      transform-origin: left;

      z-index: 9999;
    }
  `;

  @query("div")
  _div!: HTMLDivElement;

  render() {
    return html` <div style="transform: scaleX(0)"></div> `;
  }

  firstUpdated() {
    animate(this._div, {
      scaleX: { from: "0", to: "1" },
      ease: "linear",
      autoplay: onScroll({
        debug: false,
        sync: 0.5,
        target: document.body,
        enter: "top max",
        leave: "bottom min",
      }),
    });
  }
}
