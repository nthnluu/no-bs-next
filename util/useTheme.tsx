import theme from "../styles/theme";

const useTheme = (color, element, shade = undefined) => {
    return shade ? theme[color][element][shade] : theme[color][element]
}

export default useTheme