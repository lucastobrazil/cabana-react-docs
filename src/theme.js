const defaultTheme = {
    space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
    fonts: {
        default: '"SF Pro Text", Poppins, "Avenir Next", Helvetica, sans-serif',
        alt: 'monospace',
    },
    fontSizes: {
        uber: '111px',
        hero: '77px',
        h1: '45px',
        h2: '37px',
        h3: '31px',
        h4: '26px',
        h5: '21px',
        lead: '24px',
        body: '18px',
        small: '16px',
        caption: '14px',
        tiny: '10px',
    },
    letterSpacings: {
        tiny: '1.17px',
    },
    fontWeights: {
        bold: 700,
        normal: 400,
    },
    colors: {
        primary: '#5450F7',
        secondary: '#25a9ce',
        tertiary: '#EF476F',
        black: '#303133',
        grey: '#8D8D8F',
        lightGrey: '#DADADA',
        darkGrey: '#303133',
        success: '#44A45F',
        warning: '#FCEB3B',
        error: '#E6173E',
        white: '#ffffff',
        inputFocus: '#4688F1',
        inputDisabledBg: 'rgba(196, 196, 196, .3)',
    },
    lineHeights: {
        uber: 1.08,
        hero: 1.11,
        h1: 1.2,
        h2: 1.23,
        h3: 1.26,
        h4: 1.26,
        h5: 1.26,
        lead: 1.29,
        body: 1.4,
        small: 1.33,
        caption: 1.22,
        tiny: 1.38,
    },
    shadows: {
        20: '0 1px 3px rgba(48, 49, 51, .1)',
        40: '0 2px 4px rgba(48, 49, 51, .1)',
        60: '0 4px 8px rgba(48, 49, 51, .1)',
        80: '0 8px 16px rgba(48, 49, 51, .1)',
        100: '0 16px 24px rgba(48, 49, 51, .1)',
    },
    radii: {
        none: '0',
        small: '4px',
        medium: '10px',
        large: '100px',
    },
    maxWidths: {
        mobile: 320,
        tablet: 640,
        desktop: 1024,
    },
    arrowSizes: [4, 8, 16, 24, 32],
    avatarSizes: { smaller: '24px', small: '32px', medium: '48px', large: '64px', jumbo: '80px' },
};

const bainTheme = {
    fonts: {
        default: '"Graphik", sans-serif',
    },
    colors: {
        primary: '#CC0000',
    },
};
const telcoTheme = {
    fonts: {
        default: '"Hind", sans-serif',
    },
    colors: {
        primary: '#FFC726',
    },
};
export default defaultTheme;
export { bainTheme, telcoTheme };
