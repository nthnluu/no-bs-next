interface Props {
    className?: string;
    sizes: "sm" | "md" | "lg" | "xl" | "2xl";
    variant: "light" | "filled"
    color?: "primary"
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
}

const Button: React.FC<Props> = ({className, sizes, variant, color = "primary", type = "button", loading, disabled, ...props}) => {

    const styles = {
        base: "inline-flex items-center border border-transparent font-medium rounded-md " +
            "transition ease-in-out duration-150",
        sizes: {
            sm: "px-2.5 py-1.5 text-sm leading-4",
            md: "px-3 py-2 text-sm leading-4",
            lg: "px-4 py-2 text-sm leading-5",
            xl: "px-4 py-2 text-base leading-6",
            "2xl": "px-6 py-3 text-base leading-6"
        },
        filled: {
            primary: `text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:bg-primary-700 ` +
                `focus:shadow-outline-primary active:bg-primary-700 ${disabled ? "opacity-75" : "opacity-100"}`

        },
        light: {
            primary: `text-primary-700 bg-primary-100 hover:bg-primary-50 focus:outline-none focus:border-primary-300 ` +
                `focus:shadow-outline-primary active:bg-primary-200`
        }
    }
    return <button type={type}
                   {...props}
                   className={`${styles.base} ${styles.sizes[sizes]} ${styles[variant].primary} ${className}`}>
        {loading && <i className="fas fa-circle-notch fa-spin mr-1.5"/>}
        {props.children}
    </button>
}

export default Button