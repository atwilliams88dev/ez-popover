var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, internalProperty, customElement, property, css, } from 'lit-element';
import { v4 as uuidv4 } from 'uuid';
/**
 * @Author Alex Williams - 03/16/2021
 * A Popover element - hopefully one day this is just in the DOM
 * @slot {popover__target} add name="popover__target" to the element that should have a popover element.
 * @slot {popover__body} add name="popover__body" this element will be inserted in the the tooltip.
 */
let Popover = class Popover extends LitElement {
    constructor() {
        super(...arguments);
        // PROPERTIES
        this.popoverWrapper = `popWrapper-${uuidv4()}`;
        this.popoverTarget = `popTarget-${uuidv4()}`;
        this.popoverBody = `popBody-${uuidv4()}`;
        // This is the only required property
        this.id = uuidv4();
        /**
         * If you want to pass your own custom animation you can pass in a keyframes array and the keyframeOptions
         * @link https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
         */
        this.keyframes = [];
        this.keyframeOptions = {};
        this.disableHover = false;
    }
    /**
     * Toggle Popover Element by adding and removing the h-hide class
     */
    togglePopover() {
        var _a, _b;
        const location = this.getTargetLocation();
        const { left, right, y, width } = location;
        this.setPopoverLocation(left, right, y, width);
        let popBody = (_b = (_a = document
            .querySelector(`#${this.id}`)) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`#${this.popoverBody}`);
        popBody === null || popBody === void 0 ? void 0 : popBody.classList.toggle('h-hide');
    }
    /**
     * Show Popover Element - removes the h-hide class
     */
    showPopover() {
        var _a, _b;
        const location = this.getTargetLocation();
        const { left, right, y, width } = location;
        this.setPopoverLocation(left, right, y, width);
        let popBody = (_b = (_a = document
            .querySelector(`#${this.id}`)) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`#${this.popoverBody}`);
        popBody === null || popBody === void 0 ? void 0 : popBody.classList.remove('h-hide');
    }
    /**
     * Hide Popover Element - adds the h-hide class
     */
    hidePopover() {
        var _a, _b;
        let popBody = (_b = (_a = document
            .querySelector(`#${this.id}`)) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`#${this.popoverBody}`);
        popBody === null || popBody === void 0 ? void 0 : popBody.classList.add('h-hide');
    }
    /**
     * Get Location of Target Element
     */
    getTargetLocation() {
        var _a, _b;
        let popTarget = (_b = (_a = document
            .querySelector(`#${this.id}`)) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`#${this.popoverTarget}`);
        return popTarget === null || popTarget === void 0 ? void 0 : popTarget.getBoundingClientRect().toJSON();
    }
    /**
     * Set initial location of Popover element
     */
    setPopoverLocation(left, right, y, width) {
        var _a;
        let ezPopover = document.querySelector(`#${this.id}`);
        //prettier-ignore
        let popBody = (_a = ezPopover.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.popoverBody}`);
        if (popBody) {
            let popoverWidth = popBody.getBoundingClientRect().width / 2;
            let popoverHeight = popBody.getBoundingClientRect().height;
            // prettier-ignore
            let bodyPosition = document.querySelector('body').getBoundingClientRect();
            let position = 'top';
            if (y > popoverHeight + 100) {
                position = 'top';
            }
            else {
                position = 'bottom';
            }
            /**
             * Generate Horizontal Location for popover element based on the Body element and the Popover Target
             */
            function getHorizontalLocation() {
                if (left > popoverWidth && popoverWidth < bodyPosition.width - right) {
                    return -popoverWidth + width / 2;
                }
                if (left > popoverWidth && popoverWidth > bodyPosition.width - right) {
                    return (popoverWidth * 2 - width / 2) * -1;
                }
                if (left < popoverWidth && popoverWidth < bodyPosition.width - right) {
                    return width / 2;
                }
                console.log('else clause');
                return -popoverWidth + width / 2;
            }
            // Add Animation to place the popover
            if (this.keyframes.length > 0 && this.keyframeOptions) {
                popBody.animate(this.keyframes, this.keyframeOptions);
            }
            else {
                popBody.animate([
                    {
                        opacity: 0,
                        transform: `
              translateX(${getHorizontalLocation()}px) 
              translateY(${position === 'top' ? -popoverHeight - 60 : 30}px)`,
                    },
                    {
                        opacity: 1,
                        transform: `
              translateX(${getHorizontalLocation()}px) 
              translateY(${position === 'top' ? -popoverHeight - 40 : 10}px)`,
                    },
                ], {
                    duration: 200,
                    fill: 'forwards',
                    iterations: 1,
                    easing: 'ease-out',
                });
            }
        }
    }
    /**
     * This is basically OnMount
     *
     */
    connectedCallback() {
        // the super.connectedCallback is a requirement https://lit-element.polymer-project.org/guide/lifecycle
        super.connectedCallback();
        // the timeout is required to find dom elements within the connectedCallback.
        setTimeout(() => {
            const location = this.getTargetLocation();
            const { left, right, y, width } = location;
            this.setPopoverLocation(left, right, y, width);
        });
    }
    render() {
        return html `
      <div class="c-popover" id="${this.popoverWrapper}">
        <span id="${this.popoverTarget}" class="c-popover__target">
          <slot
            @click="${this.togglePopover}"
            @mouseenter="${this.disableHover === false && this.showPopover}"
            @mouseleave="${this.disableHover === false && this.hidePopover}"
            name="popover__target"
          ></slot>
        </span>
        <div class="c-popover__main h-hide" id="${this.popoverBody}">
          <slot name="popover__body"></slot>
        </div>
      </div>
    `;
    }
};
Popover.styles = css `
    :host {
      --font__family: Arial;
      --font__size: 17px;
      --color__background: #333;
      --color__text: white;
      --popover__padding: 4px 16px;
      --popover__border-radius: 8px;
      --popover__textAlign: center;
      --popover__maxWidth: 380px;
      --popover__minWidth: 175px;
      --popover__border: none;
      --popover__boxShadow: none;
    }

    .c-popover {
      font-family: var(--font__family);
      position: relative;
    }
    .c-popover__main ::slotted(*) {
      background-color: var(--color__background);
      color: var(--color__text);
      max-width: var(--popover__maxWidth);
      text-align: var(--popover__textAlign);
      min-width: var(--popover__minWidth);
      font-size: var(--font__size);
    }
    .c-popover__main {
      font-family: Arial;
      background: var(--color__background);
      color: var(--color__text);
      padding: var(--popover__padding);
      border-radius: var(--popover__border-radius);
      position: absolute;
      min-width: var(--popover__minWidth);
      max-width: var(--popover__maxWidth);
      border: var(--popover__border);
      box-shadow: var(--popover__boxShadow);
    }
    .h-hide {
      visibility: hidden !important;
    }
  `;
__decorate([
    internalProperty()
], Popover.prototype, "popoverWrapper", void 0);
__decorate([
    internalProperty()
], Popover.prototype, "popoverTarget", void 0);
__decorate([
    internalProperty()
], Popover.prototype, "popoverBody", void 0);
__decorate([
    property({ type: String })
], Popover.prototype, "id", void 0);
__decorate([
    property()
], Popover.prototype, "keyframes", void 0);
__decorate([
    property()
], Popover.prototype, "keyframeOptions", void 0);
__decorate([
    property({
        type: Boolean,
    })
], Popover.prototype, "disableHover", void 0);
Popover = __decorate([
    customElement('ez-popover')
], Popover);
export { Popover };
//# sourceMappingURL=ez-popover.js.map