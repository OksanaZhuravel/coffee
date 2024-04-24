import { InputHTMLAttributes, Ref, forwardRef } from 'react'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
}
const Input = forwardRef(function Input(
	{ className, ...rest }: InputProps,
	ref: Ref<HTMLInputElement>
) {
	return <input {...rest} ref={ref} className={className} />
})

export default Input
