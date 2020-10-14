import useTheme from "../../../util/useTheme";

interface Props {
    className?: string;
    sizes: "sm" | "md" | "lg" | "xl" | "2xl";
    variant: "light" | "filled"
    color?: "primary"

}

const Button: React.FC<Props> = ({className, sizes, variant, color = "primary", ...props}) => {

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
            primary: `text-white ${useTheme(color, "background", 600)} hover:${useTheme(color, "background", 500)} focus:outline-none focus:${useTheme(color, "background", 700)} ` +
                `focus:${useTheme(color, "shadowOutline")} active:${useTheme(color, "background", 700)}`

        },
        light: {
            primary: `${useTheme(color, "text", 700)} ${useTheme(color, "background", 100)} hover:${useTheme(color, "background", 50)} focus:outline-none focus:${useTheme(color, "border", 300)} ` +
                `focus:${useTheme(color, "shadowOutline")} active:${useTheme(color, "background", 200)}`
        }
    }
    return <button type="button"
                   className={`${styles.base} ${styles.sizes[sizes]} ${styles[variant].primary} ${className}`}>
        {props.children}
    </button>
}

export default Button