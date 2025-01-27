import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const labelVariants = cva("text-xs mb-1 font-mono w-full", {
  variants: {
    state: {
      default: "text-gray-500",
      error: "text-red-500",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

const Label = ({ state, ...props }: LabelProps) => {
  return <label className={cn(labelVariants({ state }))} {...props} />;
};

export { Label };
