import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size    = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?:    Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };
type Props = ButtonProps | AnchorProps;

const variants: Record<Variant, string> = {
  primary:   "bg-green-600 text-white hover:bg-green-700 shadow-green hover:shadow-card-hover",
  secondary: "bg-beige-200 text-green-900 hover:bg-beige-300",
  outline:   "border-2 border-green-600 text-green-700 hover:bg-green-50",
  ghost:     "text-green-700 hover:bg-green-50",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2";

export function Button({ variant = "primary", size = "md", className, children, ...props }: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if ((props as AnchorProps).as === "a") {
    const { as: _as, ...rest } = props as AnchorProps;
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, ...rest } = props as ButtonProps;
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
