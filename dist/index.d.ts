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
        register: ({ iframe, dropdownActions, dropdownActionsTextClasses, label, icon, tooltip, onClick }: {
            label: string;
            tooltip?: string;
            icon?: string;
            dropdownActions?: {
                label: any;
                onClick: () => unknown;
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
    register: typeof register;
};
export default _default;
