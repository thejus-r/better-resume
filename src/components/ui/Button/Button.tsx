import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex items-center justify-center gap-2",
  {
    variants: {
      intent: {
        primary: "bg-gray-900 text-white fill-white",
        tertiary: "bg-none text-blue-500 fill-blue-500",
        destructive: "bg-none text-red-500 fill-red-500",
      },
      size: {
        sm: "px-3 py-1.5 text-xs min-w-20 min-h-9",
        md: "px-4 py-3 text-sm min-w-24 min-h-10"
      },
      btnType: {
        regular: "rounded-xl",
        text: "min-w-0 gap-[4px]",
        icon: "rounded-2xl"
      }
    },
    compoundVariants: [
      { btnType: "icon", size: "sm", className: "px-0 py-0 h-9 w-9 min-w-9" },
      { btnType: "icon", size: "md", className: "px-0 py-0 h-10 w-10 min-w-10" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      btnType: "regular"
    },
  },
);

// Button Component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

const Button = ({ children, intent, size, btnType, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cx(buttonVariants({ intent, size, btnType }))}>
      {children}
    </button>
  );
};

export { Button };
