import register from './src/Api/Register';
declare const _default: {
    Configuration: any;
    PubSub: {
        publish: typeof import("./src/Api/PubSub/Publish").default;
        subscribe: typeof import("./src/Api/PubSub/Subscribe").default;
    };
    Streams: {
        addStream(data: {
            template: string;
            variables: any;
            onMessage: Function;
        }): Promise<unknown>;
    };
    RegisterShareButton: {
        register: ({ label, icon, imageSource, onClick }: {
            label: string;
            icon?: string;
            imageSource?: string;
            onClick: () => unknown;
        }) => void;
    };
    RegisterStageButton: {
        register: ({ iframe, dropdownActions, dropdownActionsTextClasses, imageSource, label, icon, tooltip, onClick }: {
            label?: string;
            tooltip?: string;
            icon?: string;
            imageSource?: string;
            dropdownActions?: {
                name?: string;
                label: any;
                imageSource?: string;
            }[];
            dropdownActionsTextClasses?: string;
            iframe?: string;
            onClick?: (payload?: any) => unknown;
        }) => void;
    };
    NotificationCenter: {
        showIframe(template: string, variables: any): void;
    };
    Modal: {
        showIframe(data: {
            template: string;
            variables?: any;
            onMessage?: Function;
        }): void;
    };
    Chat: {
        listen: typeof import("./src/Api/Chat/Listen").default;
        intercept: typeof import("./src/Api/Chat/Intercept").default;
    };
    register: typeof register;
};
export default _default;
