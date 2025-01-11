import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva("text-sm px-4 py-2 rounded-lg", {
  variants: {
    variant: {
      default: "bg-gray-900 text-white",
      disabled: "bg-gray-300 text-gray-500",
      text: "text-blue-500",
    },
    size: {
      default: "text-sm px-4 py-2 rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonVariants> & {};

function Button({ ref, className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }))}
      {...props}
    />
  );
}

export { Button, type ButtonProps };
