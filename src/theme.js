import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}





const components = {
    Heading: {
        sizes: {
            h1: {
                fontSize: ['3xl', '5xl', '6xl', '7xl', '9xl'],
                lineHeight: 1.3
            },
            h2: {
                fontSize: ['2xl', '4xl', '5xl', '6xl', '8xl'],
                lineHeight: 1.3
            }
        },
        variants: {
            cardTitle: (props) => ({
                color: mode('gray.800', 'gruvbox.fg1dark')(props),
                p: 4
            })
        }
    },
    Card: {
        variants: {
            default: (props) => ({
                boxShadow: mode('var(--chakra-shadows-xl)', 'var(--chakra-shadows-2xl)')(props),
                p: '6',
                rounded: 'md',
                bg: mode('gruvbox.bg1light', 'gruvbox.bg1dark')(props),
                mt: '20vh',
                w: ['100%', '100%', '100', '80%']
            }),
            innerText: (props) => ({
                boxShadow: mode('var(--chakra-shadows-lg)', 'var(--chakra-shadows-lg)')(props),
                p: '2',
                rounded: 'md',
                bg: mode('gruvbox.bglight', 'gruvbox.bgdark')(props),
            })
        }
    },
    Text: {
        variants: {
            cardText: (props) => ({
                color: mode('gruvbox.fg0light', 'gruvbox.fg2dark')(props),
            }),
            TechnologyText: (props) => ({
                color: mode('gray.800', 'gruvbox.fg2dark')(props),
            })
        }
    }
}

const theme = extendTheme({
    config,
    colors: {
        gruvbox: {
            bgdark: '#282828',
            bglight: '#fbf1c7',
            bg1dark: '#3c3836',
            bg1light: '#ebdbb2',
            blue: '#458588',
            orange: '#d65d0e',
            grey: '#928374',
            greydark: '#a89984',
            greylight: '#7c6f74',
            yellowdark: '#fabd2f',
            fg0dark: '#fbf1c37',
            fg0light: '#282828',
            fg1dark: '#ebdbb2',
            fg1light: '#3c3836',
            fg2dark: '#d5c4a1',
            fg2light: '#504945',
        }
    },
    components,
    styles: {
        global: {
            body: {
                fontSize: ['sm', 'lg', 'xl', '2xl', '3xl'],
                lineHeight: 1.3
            }
        }
    }
})

export default theme;