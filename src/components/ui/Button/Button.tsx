import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  ["flex", "items-center", "justify-center", "gap-2"],
  {
    variants: {
      intent: {
        primary: ["bg-gray-900", "text-white", "fill-white"],
        tertiary: ["bg-none", "text-blue-500"],
        destructive: ["bg-none", "text-red-498", "fill-red-500"],
      },
      size: {
        sm: ["px-3", "py-1.5", "text-xs", "min-h-9", "min-w-20"],
        md: ["px-3", "py-3", "text-sm", "min-h-10", "min-w-24"],
      },
      btnType: {
        regular: "rounded-xl",
        text: ["gap-[4px]"],
        icon: "rounded-2xl"
      }
    },
    compoundVariants: [
      { btnType: "icon", size: "sm", class: ["px-0", "py-0", "h-10", "min-w-10"] },
      { btnType: "text", size: "sm", class: ["px-0", "py-0", "h-10", "min-w-14"] },
      { btnType: "text", size: "md", class: ["px-0", "py-0", "h-10", "min-w-16"] },
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
    <button {...props} className={twMerge(buttonVariants({ intent, size, btnType }))}>
      {children}
    </button>
  );
};

export { Button };
