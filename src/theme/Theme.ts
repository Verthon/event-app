export interface ITheme {
  colors: {
    primary: string,
    primaryText: string,
    secondary: string,
    active: string,
    text: string,
  },
  fontSizes: {
    title: string,
    regular: string,
    small: string
  },
  fontFamily: {
    main: string
  },
  fontWeights: {
    black: number,
    bold: number,
    regular: number,
  },
  shadow: {
    default: string,
    category: string
  },
  breakpoints: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number
  },
  spacing: {
    xxs: string,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
    title: string
  },
  logo: {
    width: string
  },
  border: {
    defaultRadius: string
  }
}

export type Theme = {
  theme: ITheme
}

const border = {
  defaultRadius: '10px'
}


const shadow = {
  default: '0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);',
  category: '0 1px 3px hsla(0, 50%, 20%, 0.2)'
}

const colors = {
  primary: 'hsl(225.4,29.1%,24.9%)',
  primaryText: 'hsl(0,0%,100%)',
  secondary: 'hsl(180,20%,97.1%)',
  active: 'hsl(154.4,47.1%,65.9%)',
  text: 'hsl(203,13%,44%)',
}

const fontSizes = {
  title: '1.35rem',
  regular: '1rem',
  small: '0.875rem'
}

const fontWeights = {
  black: 800,
  bold: 600,
  regular: 400,
}

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const spacing = {
  xxs: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '3rem',
  title: '1rem 0 1.5rem 0'
}

const fontFamily = {
  main: "-apple-system, BlinkMacSystemFont, 'Signika', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
}

const logo = {
  width: '120px'
}

export const theme: ITheme = {
  colors: colors,
  fontSizes: fontSizes,
  fontFamily: fontFamily,
  fontWeights: fontWeights,
  shadow: shadow,
  breakpoints: breakpoints,
  spacing: spacing,
  logo: logo,
  border: border
}