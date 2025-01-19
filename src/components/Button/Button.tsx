import {cva, type VariantProps} from "class-variance-authority"

import styles from "./Button.module.scss";


const buttonVariants = cva(["button"], {
    variants: {
        intent: {
            primary: styles.primary
        },
       disabled: {
        false: styles.enabled,
        true: styles.disabled
       },
       size: {
        small: styles.small,
        medium: styles.medium,
       }
    },
    defaultVariants: {
        intent: "primary",
        size: "medium",
        disabled: false,
      },
})

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
    className,
    intent,
    disabled,
    size,
    ...props
}) => (
    <button className={buttonVariants({ intent, size,  disabled, className })}
        disabled={disabled || undefined}
        {...props}
    />
)

export { Button, type ButtonProps }