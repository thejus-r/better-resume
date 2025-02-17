import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-full flex h-12 items-center justify-center p-5 text-sm gap-2 hover:brightness-125",
  {
    variants: {
      size: {
        sm: "h-10 p-4",
        base: "h-12 p-5",
      },
      state: {
        default: "bg-gray-800 text-gray-50 border-none",
        destructive: "bg-red-50 border-red-500 text-red-500",
      },
    },
    defaultVariants: {
      size: "base",
      state: "default",
    },
  },
);

// Button Component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

const Button = ({ children, state, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cx(buttonVariants({ state }))}>
      {children}
    </button>
  );
};

type ButtonIconProps = {
  children: React.ReactNode;
};
// Icon SVG Container
const Icon = ({ children, ...props }: ButtonIconProps) => {
  return (
    <span className="block" {...props}>
      {children}
    </span>
  );
};

const Root = Button;
Button.Root = Root;
Button.Icon = Icon;
export { Root, Button, Icon };
