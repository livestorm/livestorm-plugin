import register from './src/Api/Register';
declare const _default: {
    Configuration: any;
    PubSub: {
        publish: typeof import("./src/Api/PubSub/Publish").default;
        subscribe: typeof import("./src/Api/PubSub/Subscribe").default;
    };
    RegisterShareButton: {
        register: ({ label, icon, onClick }: {
            label: string;
            icon?: string;
            onClick: () => unknown;
        }) => void;
    };
    RegisterStageButton: {
        register: ({ label, icon, tooltip, onClick }: {
            label: string;
            tooltip?: string;
            icon?: string;
            onClick: () => unknown;
        }) => void;
    };
    register: typeof register;
};
export default _default;
