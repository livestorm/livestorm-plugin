declare global {
    interface Window {
        mockActions: {
            registerShareButtonOnClick: () => void;
        };
        registerShareButtonClicked: boolean;
    }
}
export {};
