import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const inputVariants = cva("border rounded-lg px-2 py-1.5", {
  variants: {
    variant: {
      default: "bg-gray-50 text-gray-800",
      error: "bg-red-200 text-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type InputProps = React.ComponentPropsWithRef<"input"> &
  VariantProps<typeof inputVariants> & {};

function Input({ ref, variant, ...props }: InputProps) {
  return (
    <input ref={ref} className={cn(inputVariants({ variant }))} {...props} />
  );
}

export { Input, type InputProps };
