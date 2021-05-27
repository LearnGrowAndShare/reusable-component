/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LoadingPlaceholder {
    }
    interface PageComingSoon {
    }
    interface PageMaintenance {
    }
    interface PageNotFound {
    }
}
declare global {
    interface HTMLLoadingPlaceholderElement extends Components.LoadingPlaceholder, HTMLStencilElement {
    }
    var HTMLLoadingPlaceholderElement: {
        prototype: HTMLLoadingPlaceholderElement;
        new (): HTMLLoadingPlaceholderElement;
    };
    interface HTMLPageComingSoonElement extends Components.PageComingSoon, HTMLStencilElement {
    }
    var HTMLPageComingSoonElement: {
        prototype: HTMLPageComingSoonElement;
        new (): HTMLPageComingSoonElement;
    };
    interface HTMLPageMaintenanceElement extends Components.PageMaintenance, HTMLStencilElement {
    }
    var HTMLPageMaintenanceElement: {
        prototype: HTMLPageMaintenanceElement;
        new (): HTMLPageMaintenanceElement;
    };
    interface HTMLPageNotFoundElement extends Components.PageNotFound, HTMLStencilElement {
    }
    var HTMLPageNotFoundElement: {
        prototype: HTMLPageNotFoundElement;
        new (): HTMLPageNotFoundElement;
    };
    interface HTMLElementTagNameMap {
        "loading-placeholder": HTMLLoadingPlaceholderElement;
        "page-coming-soon": HTMLPageComingSoonElement;
        "page-maintenance": HTMLPageMaintenanceElement;
        "page-not-found": HTMLPageNotFoundElement;
    }
}
declare namespace LocalJSX {
    interface LoadingPlaceholder {
    }
    interface PageComingSoon {
    }
    interface PageMaintenance {
    }
    interface PageNotFound {
    }
    interface IntrinsicElements {
        "loading-placeholder": LoadingPlaceholder;
        "page-coming-soon": PageComingSoon;
        "page-maintenance": PageMaintenance;
        "page-not-found": PageNotFound;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "loading-placeholder": LocalJSX.LoadingPlaceholder & JSXBase.HTMLAttributes<HTMLLoadingPlaceholderElement>;
            "page-coming-soon": LocalJSX.PageComingSoon & JSXBase.HTMLAttributes<HTMLPageComingSoonElement>;
            "page-maintenance": LocalJSX.PageMaintenance & JSXBase.HTMLAttributes<HTMLPageMaintenanceElement>;
            "page-not-found": LocalJSX.PageNotFound & JSXBase.HTMLAttributes<HTMLPageNotFoundElement>;
        }
    }
}
