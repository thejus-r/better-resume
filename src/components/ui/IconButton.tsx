import { cn } from "@lib/utils"

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
const IconButton = ({ className, ...props }: IconButtonProps) => {
  return <button className={cn("flex flex-row items-center justify-center gap-1 p-2", className)} {...props} />
}

interface IconProps extends React.HTMLAttributes<HTMLDivElement> { }

const Icon = ({ ...props }: IconProps) => {
  return <div className="flex items-center justify-center" {...props} />
}

interface ContentProps extends React.HTMLAttributes<HTMLParagraphElement> { }
const Content = ({ ...props }: ContentProps) => {
  return <p className="text-sm"{...props} />
}

IconButton.Icon = Icon
IconButton.Content = Content
const Root = IconButton

export { Root, IconButton, Icon, Content };
