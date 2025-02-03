import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex items-center justify-center gap-1 text-sm p-2 hover:brightness-75",
  {
    variants: {
      variant: {
        primary: "text-blue-500 fill-blue-500",
        destructive: "text-red-500 fill-red-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {};

const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button className={cx(buttonVariants({ variant }))} {...props}>
      {children}
    </button>
  );
};

const ButtonIcon = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export { Button, ButtonIcon };
