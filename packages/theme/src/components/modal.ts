import type {VariantProps} from "tailwind-variants";

import {dataFocusVisibleClasses, tv} from "../utils";

const modal = tv({
  slots: {
    wrapper: [
      "flex",
      "w-screen",
      "h-[100dvh]",
      "fixed",
      "inset-0",
      "z-50",
      "overflow-x-auto",
      "justify-center",
      //  mobile animation vars
      "[--scale-enter:100%]",
      "[--scale-exit:100%]",
      "[--slide-enter:0px]",
      "[--slide-exit:80px]",
      // tablet/desktop animation vars
      "sm:[--scale-enter:100%]",
      "sm:[--scale-exit:103%]",
      "sm:[--slide-enter:0px]",
      "sm:[--slide-exit:0px]",
    ],
    base: [
      "flex",
      "flex-col",
      "relative",
      "z-50",
      "w-full",
      "box-border",
      "bg-surface-container-low",
      "text-on-surface",
      "shadow-1",
      "outline-none",
      "mx-1",
      "my-1",
      "sm:mx-6",
      "sm:my-16",
    ],
    backdrop: "z-50",
    header: "flex py-4 px-6 flex-initial text-large font-semibold",
    body: "flex flex-1 flex-col gap-3 px-6 py-2",
    footer: "flex flex-row gap-2 px-6 py-4 justify-end",
    closeButton: [
      "absolute",
      "appearance-none",
      "outline-none",
      "select-none",
      "top-1",
      "right-1",
      "p-2",
      "text-foreground-500",
      "rounded-full",
      "hover:bg-default-100",
      "active:bg-default-200",
      "tap-highlight-transparent",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
  },
  variants: {
    size: {
      xs: {
        base: "max-w-xs",
      },
      sm: {
        base: "max-w-sm",
      },
      md: {
        base: "max-w-md",
      },
      lg: {
        base: "max-w-lg",
      },
      xl: {
        base: "max-w-xl",
      },
      "2xl": {
        base: "max-w-2xl",
      },
      "3xl": {
        base: "max-w-3xl",
      },
      "4xl": {
        base: "max-w-4xl",
      },
      "5xl": {
        base: "max-w-5xl",
      },
      full: {
        base: "my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-dvh !rounded-none",
      },
    },
    radius: {
      none: {base: "rounded-none"},
      sm: {base: "rounded-small"},
      md: {base: "rounded-medium"},
      lg: {base: "rounded-large"},
    },
    placement: {
      auto: {
        wrapper: "items-end sm:items-center",
      },
      center: {
        wrapper: "items-center sm:items-center",
      },
      top: {
        wrapper: "items-start sm:items-start",
      },
      "top-center": {
        wrapper: "items-start sm:items-center",
      },
      bottom: {
        wrapper: "items-end sm:items-end",
      },
      "bottom-center": {
        wrapper: "items-end sm:items-center",
      },
    },
    shadow: {
      sm: {
        base: "shadow-1",
      },
      md: {
        base: "shadow-3",
      },
      lg: {
        base: "shadow-4",
      },
    },
    backdrop: {
      transparent: {
        backdrop: "hidden",
      },
      opaque: {
        backdrop: "bg-black/50 backdrop-opacity-disabled",
      },
      blur: {
        backdrop: "backdrop-blur-md backdrop-saturate-150 bg-black/30",
      },
    },
    scrollBehavior: {
      normal: {
        base: "overflow-y-hidden",
      },
      inside: {
        base: "max-h-[calc(100%_-_7.5rem)]",
        body: "overflow-y-auto",
      },
      outside: {
        wrapper: "items-start sm:items-start overflow-y-auto",
        base: "my-16",
      },
    },
  },
  defaultVariants: {
    size: "md",
    radius: "lg",
    shadow: "sm",
    placement: "auto",
    backdrop: "opaque",
    scrollBehavior: "normal",
  },
  compoundVariants: [
    // backdrop (opaque/blur)
    {
      backdrop: ["opaque", "blur"],
      class: {
        backdrop: "w-screen h-screen fixed inset-0",
      },
    },
  ],
});

export type ModalVariantProps = VariantProps<typeof modal>;
export type ModalSlots = keyof ReturnType<typeof modal>;

export {modal};
