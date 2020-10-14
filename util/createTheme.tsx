export const createTheme = (color) => {
    const range = [100, 200, 300, 400, 500, 600, 700, 800, 900]
    let theme = {
        primary: {
            shadowOutline: `shadow-outline-${color}`,
            text: {},
            background: {},
            border: {}
        }
    }

    range.forEach(i => theme.primary.text[i] = `text-${color}-${i}`)
    range.forEach(i => theme.primary.background[i] = `bg-${color}-${i}`)
    range.forEach(i => theme.primary.border[i] = `border-${color}-${i}`)
    return theme
}

