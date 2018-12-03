const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

const duration = {
    shortest: 0.15,
    shorter: .20,
    short: 0.25,
    // most basic recommended timing
    standard: 0.30,
    // this is to be used in complex animations
    complex: 0.375,
    // recommended when something is entering screen
    enteringScreen: 0.225,
    // recommended when something is leaving screen
    leavingScreen: 0.195,
};

export default {
    colors: {
        // transparent
        transparent: 'rgba(0, 0, 0, 0)',
        hovertrans: 'rgba(0, 0, 0, 0.2)',
        // background current registration
        currentRegistration: '#edeaea',
        // light shades
        white: '#FFFFFF',
        snow: '#F9FAFC',
        darkSnow: '#EFF2F7',
        extraDarkSnow: '#E5E9F2',
        // dark tones
        silver: '#8492A6',
        slate: '#3C4858',
        steel: '#273444',
        black: '#1F2D3D',
        // dark shades
        smoke: '#E0E6ED',
        darkSmoke: '#D3DCE6',
        extraDarkSmoke: '#C0CCDA',
        // red shades
        lightRed: '#db5555',
        red: '#db2b2b',
        // blue shades
        lightBlue: '#85D7FF',
        blue: '#1FB6FF',
        darkBlue: '#009EEB',
        // purple shades
        lightPurple: '#A389F4',
        purple: '#7E5BEF',
        darkPurple: '#592DEA',
        // pink shades
        lightPink: '#FF7CE5',
        pink: '#FF49DB',
        darkPink: '#FF16D1',
        // orange shades
        lightOrange: '#FF9E7C',
        orange: '#F17423',
        darkOrange: '#FF5216',
        // green shades
        lightGreen: '#15e0f2',
        green: '#13A5B2',
        darkGreen: '#067a84',
        // yellow shades
        lightYellow: '#FFD55F',
        yellow: '#FFC82C',
        darkYellow: '#F8B700',
        // text color
        textNormal: '#6E6E6E',
        textTitle: '#4A4A4A',
        // ui colors
        info: '#1FB6FF',
        success: '#13CE66',
        danger: '#FF4949',
        warning: '#FFC82C',
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        title: {
            fontSize: "1.3125rem",
            fontWeight: 500,
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            lineHeight: "1.16667em",
            color: "rgba(0, 0, 0, 0.87)",
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: "1.71429em",
            color: "rgba(0, 0, 0, 0.87)",
        },
        subheading: {
            fontSize: "1rem",
            fontWeight: 500,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: "1.5em",
            color: "rgba(0, 0, 0, 0.87)",
        },
        headline: {
            fontSize: "1.5rem",
            fontWeight: 500,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: "1.35417em",
            color: "rgba(0, 0, 0, 0.87)",
        },
        button: {
            fontSize: "0.875rem",
            textTransform: "uppercase",
            fontWeight: 500,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            color: "rgba(0, 0, 0, 0.87)",
        },
    },
    palette: {
        action: {
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
        },
        text: {
            // The most important text.
            primary: 'rgba(0, 0, 0, 0.87)',
            // Secondary text.
            secondary: 'rgba(0, 0, 0, 0.54)',
            // Disabled text have even lower visual prominence.
            disabled: 'rgba(0, 0, 0, 0.38)',
            // Text hints.
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        background: {
            paper: '#fff',
        },
    },
    shape: {
        borderRadius: 4,
    },
    transitions: {
        easing,
        duration,
        create: (properties = ['all'], options = {}) => {
            // Set the default options
            const {
                duration: durationOption = duration.standard,
                easing: easingOption = easing.easeInOut,
                delay: delayOption = 0,
            } = options;
            return properties.map(property =>
                `${property} ${durationOption}s ${easingOption} ${delayOption}s`,
            ).join(', ');
        },
    },
};
