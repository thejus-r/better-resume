import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const labelVariants = cva("", {
  variants: {
    variant: {
      default: "text-sm",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

type LabelProps = React.ComponentPropsWithRef<"label"> &
  VariantProps<typeof labelVariants> & {};

function Label({ variant, ...props }: LabelProps) {
  return <label className={cn(labelVariants({ variant }))} {...props} />;
}

export { Label, type LabelProps };
