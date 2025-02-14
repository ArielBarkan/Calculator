import React from "react";

const ShareButton: React.FC = () => {
    const shareApp = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Check out this awesome app!",
                    text: "I found this cool app, check it out:",
                    url: window.location.href // Uses the current page URL
                });
                console.log("Successfully shared!");
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            alert("Sharing not supported on this device.");
        }
    };

    return (
        <button onClick={shareApp}>
            Share App
        </button>
    );
};
export { ShareButton };

