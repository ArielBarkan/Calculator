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
    }
};

const darkTheme = {
    body: {
        bgColor: "#000000",
        fontColor: "#ffffff"
    },
    buttons: {
        primary: {
            backgroundColor: "#384cae",
            color: "#e3b863"
        }
    }

};

const currencies = [
    {
        name: "Israeli new shekel",
        Symbol: "₪",
        ISO: "ILS"
    },
    {
        name: "Euro",
        Symbol: "€",
        ISO: "EUR"
    },
    {
        name: "Argentine peso",
        Symbol: "$",
        ISO: "ARS"
    },
    {
        name: "United States dollar",
        Symbol: "$",
        ISO: "USD"
    }
];


export { lightTheme, darkTheme };