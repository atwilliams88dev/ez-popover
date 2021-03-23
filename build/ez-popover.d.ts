import { LitElement } from 'lit-element';
/**
 * @Author Alex Williams - 03/16/2021
 * A Popover element - hopefully one day this is just in the DOM
 * @slot {popover__target} add name="popover__target" to the element that should have a popover element.
 * @slot {popover__body} add name="popover__body" this element will be inserted in the the tooltip.
 */
export declare class Popover extends LitElement {
    static styles: import("lit-element").CSSResult;
    protected popoverWrapper: string;
    protected popoverTarget: string;
    protected popoverBody: string;
    id: string;
    showArrow: string;
    /**
     * If you want to pass your own custom animation you can pass in a keyframes array and the keyframeOptions
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
     */
    keyframes: Array<any>;
    keyframeOptions: Object;
    disableHover: Boolean;
    /**
     * Toggle Popover Element by adding and removing the h-hide class
     */
    togglePopover(): void;
    /**
     * Show Popover Element - removes the h-hide class
     */
    showPopover(): void;
    /**
     * Hide Popover Element - adds the h-hide class
     */
    hidePopover(): void;
    /**
     * Get Location of Target Element
     */
    getTargetLocation(): any;
    /**
     * Set initial location of Popover element
     */
    setPopoverLocation(left: number, right: number, y: number, width: number): void;
    /**
     * This is basically OnMount
     *
     */
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ez-popover': Popover;
    }
}
//# sourceMappingURL=ez-popover.d.ts.map