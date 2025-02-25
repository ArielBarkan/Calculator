const commonColors = {
    rank: {
        goldMedal: {
            bgColor: "#FFD700"
        },
        silverMedal: {
            bgColor: "#C0C0C0"
        },
        bronzeMedal: {
            bgColor: "#CD7F32"
        }
    }

};

const lightTheme = {
    ...commonColors,
    generic: {
        foreground: "#000000",
        background: "#FFFFFF"
    },
    body: {
        bgColor: "#EAEAEA",
        fontColor: "#000000"
    },
    buttons: {
        primary: {
            backgroundColor: "#384cae",
            color: "#e3b863"
        }
    },
    icons: {
        iconDefaultColor: "#000000"
    },
    SelectableElement: {
        selectedBorder: "#000000",
        selectedBackground: "#E0E0E0",
        activeBackground: "#D0D0D0"
    },
    BoxElement: {
        shadowColor: "#B0B0B0"
    }
} as const;


const darkTheme = {
    ...commonColors,
    generic: {
        foreground: "#FFFFFF",
        background: "#000000"
    },
    body: {
        bgColor: "#5a5555",
        fontColor: "#ffffff"
    },
    buttons: {
        primary: {
            backgroundColor: "#384cae",
            color: "#e3b863"
        }
    },
    icons: {
        iconDefaultColor: "#ffffff"
    },
    SelectableElement: {
        selectedBorder: "#FFFFFF",
        selectedBackground: "#797676",
        activeBackground: "#888888"
    },
    BoxElement: {
        shadowColor: "#464242"
    }
} as const;

export { lightTheme, darkTheme };