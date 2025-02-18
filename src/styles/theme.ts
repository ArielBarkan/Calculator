const lightTheme = {
    generic: {
        foreground: "#000000",
        background: "#FFFFFF"
    },
    body: {
        bgColor: "#FFFFFF",
        fontColor: "#000000"
    },
    buttons: {
        primary: {
            backgroundColor: "#ffffff",
            color: "#000000"
        }
    },
    icons: {
        iconDefaultColor: "#000000"
    },
    SelectableElement: {
        selectedBorder: "#FFFFFF",
        selectedBackground: "#797676",
        activeBackground: "#888888"
    },
    BoxElement: {
        shadowColor: "#bebebe"
    }
} as const;

const darkTheme = {
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