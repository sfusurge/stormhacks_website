import { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren, PropsWithRef, ReactElement, Ref } from "react";

import { ButtonStyle, applyClassName } from "./styles";

type ButtonProps = PropsWithRef<
	PropsWithChildren<
		{
			/**
			 * The {@link ButtonStyle button style} to use.
			 */
			style?: ButtonStyle;

			/**
			 * Additional class names to apply to the element.
			 */
			className?: string;

			/**
			 * OnClick handler.
			 */
			onClick: MouseEventHandler;

			ref?: Ref<HTMLButtonElement>;
		} & ButtonHTMLAttributes<HTMLButtonElement>
	>
>;

export default function Button({ style, className, children, ref, ...props }: ButtonProps): ReactElement {
	return (
		<button {...props} ref={ref} className={applyClassName(className, style)}>
			{children}
		</button>
	);
}
