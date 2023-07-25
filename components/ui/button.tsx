import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          "w-auto bg-brand border border-transparent flex justify-center px-5 py-4 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold uppercase font-header hover:opacity-90 transition",
          {
            "opacity-75 cursor-not-allowed": disabled,
          },
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
