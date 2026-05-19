import React from "react";
import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary:
        "bg-zinc-950 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_40px_rgba(0,0,0,0.18)] hover:bg-zinc-800",
      secondary:
        "border border-zinc-300/80 bg-white/70 text-zinc-900 shadow-sm hover:bg-zinc-100",
      ghost: "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
