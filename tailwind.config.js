const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            boxShadow: {
                'outline-primary': '0 0 0 3px rgba(164, 201, 254, 0.45)'
            },
            colors: {
                primary: {
                    '50': '#ebf5ff',
                    '100': '#e1effe',
                    '200': '#c3ddfd',
                    '300': '#a4cafe',
                    '400': '#76a9fa',
                    '500': '#3f83f8',
                    '600': '#1c64f2',
                    '700': '#1a56db',
                    '800': '#1e429f',
                    '900': '#233876',
                }
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    plugins: [
        require('@tailwindcss/ui'),
    ]
}