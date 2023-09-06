/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { NavItems } from "./components/nav-app/models/navItem.model";
export { NavItems } from "./components/nav-app/models/navItem.model";
export namespace Components {
    interface BtnLanguaje {
        "lg": string;
        "text": string;
    }
    interface LiNav {
        "icon": string;
        "link": string;
        "text": string;
    }
    interface LightDarkMode {
    }
    interface MyBtn {
        "text": string;
    }
    interface MyLink {
        "link": string;
        "text": string;
    }
    interface NavApp {
        "itemList": NavItems[];
        "tittle": string;
    }
    interface TextBox {
        "text": string;
    }
}
declare global {
    interface HTMLBtnLanguajeElement extends Components.BtnLanguaje, HTMLStencilElement {
    }
    var HTMLBtnLanguajeElement: {
        prototype: HTMLBtnLanguajeElement;
        new (): HTMLBtnLanguajeElement;
    };
    interface HTMLLiNavElement extends Components.LiNav, HTMLStencilElement {
    }
    var HTMLLiNavElement: {
        prototype: HTMLLiNavElement;
        new (): HTMLLiNavElement;
    };
    interface HTMLLightDarkModeElement extends Components.LightDarkMode, HTMLStencilElement {
    }
    var HTMLLightDarkModeElement: {
        prototype: HTMLLightDarkModeElement;
        new (): HTMLLightDarkModeElement;
    };
    interface HTMLMyBtnElement extends Components.MyBtn, HTMLStencilElement {
    }
    var HTMLMyBtnElement: {
        prototype: HTMLMyBtnElement;
        new (): HTMLMyBtnElement;
    };
    interface HTMLMyLinkElement extends Components.MyLink, HTMLStencilElement {
    }
    var HTMLMyLinkElement: {
        prototype: HTMLMyLinkElement;
        new (): HTMLMyLinkElement;
    };
    interface HTMLNavAppElement extends Components.NavApp, HTMLStencilElement {
    }
    var HTMLNavAppElement: {
        prototype: HTMLNavAppElement;
        new (): HTMLNavAppElement;
    };
    interface HTMLTextBoxElement extends Components.TextBox, HTMLStencilElement {
    }
    var HTMLTextBoxElement: {
        prototype: HTMLTextBoxElement;
        new (): HTMLTextBoxElement;
    };
    interface HTMLElementTagNameMap {
        "btn-languaje": HTMLBtnLanguajeElement;
        "li-nav": HTMLLiNavElement;
        "light-dark-mode": HTMLLightDarkModeElement;
        "my-btn": HTMLMyBtnElement;
        "my-link": HTMLMyLinkElement;
        "nav-app": HTMLNavAppElement;
        "text-box": HTMLTextBoxElement;
    }
}
declare namespace LocalJSX {
    interface BtnLanguaje {
        "lg"?: string;
        "text"?: string;
    }
    interface LiNav {
        "icon"?: string;
        "link"?: string;
        "text"?: string;
    }
    interface LightDarkMode {
    }
    interface MyBtn {
        "text"?: string;
    }
    interface MyLink {
        "link"?: string;
        "text"?: string;
    }
    interface NavApp {
        "itemList"?: NavItems[];
        "tittle"?: string;
    }
    interface TextBox {
        "text"?: string;
    }
    interface IntrinsicElements {
        "btn-languaje": BtnLanguaje;
        "li-nav": LiNav;
        "light-dark-mode": LightDarkMode;
        "my-btn": MyBtn;
        "my-link": MyLink;
        "nav-app": NavApp;
        "text-box": TextBox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "btn-languaje": LocalJSX.BtnLanguaje & JSXBase.HTMLAttributes<HTMLBtnLanguajeElement>;
            "li-nav": LocalJSX.LiNav & JSXBase.HTMLAttributes<HTMLLiNavElement>;
            "light-dark-mode": LocalJSX.LightDarkMode & JSXBase.HTMLAttributes<HTMLLightDarkModeElement>;
            "my-btn": LocalJSX.MyBtn & JSXBase.HTMLAttributes<HTMLMyBtnElement>;
            "my-link": LocalJSX.MyLink & JSXBase.HTMLAttributes<HTMLMyLinkElement>;
            "nav-app": LocalJSX.NavApp & JSXBase.HTMLAttributes<HTMLNavAppElement>;
            "text-box": LocalJSX.TextBox & JSXBase.HTMLAttributes<HTMLTextBoxElement>;
        }
    }
}
