import { cva, cx, type VariantProps } from "class-variance-authority";

const textButtonVariants = cva(
  "rounded-full flex h-12 items-center justify-center p-2 text-sm gap-hover:brightness-125",
  {
    variants: {
      state: {
        default: "text-blue-500",
        destructive: "text-red-500",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

// Button Component
type TextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof textButtonVariants> & {
    children: React.ReactNode;
  };

const TextButton = ({ children, state, ...props }: TextButtonProps) => {
  return (
    <button {...props} className={cx(textButtonVariants({ state }))}>
      {children}
    </button>
  );
};

type TextButtonIconProps = {
  children: React.ReactNode;
};
// Icon SVG Container
const Icon = ({ children, ...props }: TextButtonIconProps) => {
  return (
    <span className="block" {...props}>
      {children}
    </span>
  );
};

const Root = TextButton;
TextButton.Root = Root;
TextButton.Icon = Icon;
export { Root, TextButton, Icon };
