const GA_EVENTS = {
    CATEGORIES: {
        USER_ACTIONS: "User Actions",
        NAVIGATION: "Navigation",
        SETTINGS: "Settings"
    } as const,

    ACTIONS: {
        CLICK_BUTTON: "Custom - Clicked Button",
        TOGGLE_THEME: "Custom - Toggled Theme",
        CHANGE_LANGUAGE: "Custom - Changed Language",
        CHANGE_CURRENCY: "Custom - Change Currency",
        SHARE_APPLICATION: "Custom - Shared Application"
    } as const,

    LABELS: {
        SUCCESS: "Success"
    } as const
};

export { GA_EVENTS };