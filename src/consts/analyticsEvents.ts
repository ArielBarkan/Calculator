const GA_EVENTS = {
    CATEGORIES: {
        USER_ACTIONS: "User Actions",
        NAVIGATION: "Navigation",
        SETTINGS: "Settings"
    } as const,

    ACTIONS: {
        CLICK_BUTTON: "Clicked Button",
        TOGGLE_THEME: "Toggled Theme",
        CHANGE_LANGUAGE: "Changed Language",
        CHANGE_CURRENCY: "Change Currency",
        SHARE_APPLICATION: "Shared Application"
    } as const,

    LABELS: {
        SUCCESS: "Success"
    } as const
};

export { GA_EVENTS };