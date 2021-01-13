declare const _default: {
    PubSub: {
        publish: typeof import("./src/Api/PubSub/Publish").default;
        subscribe: typeof import("./src/Api/PubSub/Subscribe").default;
    };
    RegisterShareButton: {
        register: ({ label, icon, onClick }: {
            label: string;
            icon: string;
            onClick: () => unknown;
        }) => void;
    };
};
export default _default;
