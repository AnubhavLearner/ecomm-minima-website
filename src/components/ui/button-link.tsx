
import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonLinkProps = LinkProps & 
  ButtonProps & {
    to: string;
    disabled?: boolean;
    className?: string;
  };

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, to, disabled, children, ...props }, ref) => {
    return (
      <Link
        to={to}
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          disabled && "pointer-events-none opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
