import React from "react";
import { cn } from "../../lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-36 w-full rounded-md border border-zinc-200 bg-white/70 px-4 py-3 text-sm text-zinc-950 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
