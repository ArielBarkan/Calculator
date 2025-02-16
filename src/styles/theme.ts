const lightTheme = {
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
    SelectableRow: {
        selectedBorder: "#FFFFFF",
        selectedBackground: "#797676",
        activeBackground: "#888888"
    }
} as const;

const darkTheme = {
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
    SelectableRow: {
        selectedBorder: "#FFFFFF",
        selectedBackground: "#797676",
        activeBackground: "#888888"
    }
} as const;

export { lightTheme, darkTheme };