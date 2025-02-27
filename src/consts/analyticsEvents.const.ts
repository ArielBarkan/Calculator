const Custom_Prefix = "Custom - ";

const GA_EVENTS = {
    CATEGORIES: {
        USER_ACTIONS: "User Actions",
        NAVIGATION: "Navigation",
        SETTINGS: "Settings"
    } as const,

    ACTIONS: {
        CLICK_BUTTON: `${Custom_Prefix}Clicked Button`,
        CALCULATOR_USAGE: `${Custom_Prefix}Calculator Usage`,
        TOGGLE_THEME: `${Custom_Prefix}Toggled Theme`,
        CHANGE_LANGUAGE: `${Custom_Prefix}Changed Language`,
        CHANGE_CURRENCY: `${Custom_Prefix}Change Currency`,
        SHARE_APPLICATION: `${Custom_Prefix}Shared Application`
    } as const,

    LABELS: {
        SUCCESS: "Success"
    } as const
};

export { GA_EVENTS };