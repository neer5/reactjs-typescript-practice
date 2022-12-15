type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  console.log(">>>", JSON.stringify(rest,null,2))
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}
