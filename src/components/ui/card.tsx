import React from "react";
import { cn } from "../../lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-200/80 bg-white/72 shadow-[0_24px_70px_rgba(24,24,27,0.08)] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
