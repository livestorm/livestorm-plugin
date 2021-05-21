"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("@/IO/sendEvent");
const processTemplate_1 = require("@/IO/processTemplate");
const subscribeToEvent_1 = require("@/IO/subscribeToEvent");
exports.default = {
    /**
      * Register an entry in the stage actions (for contributors and participants)
      * Can be used to trigger any action (sharing custom content, files, videos, etc)
      *
      * @example RegisterStageButton.register({
      *   label: 'React with an emoji',
      *   icon: 'smile',
      *   dropdownActions: [{ name: '😱', label: '😱' }],
      *   onClick: (payload) => {}
      * })
      *
      * @param label - The label of the action
      * @param tooltip - A tooltip to show over
      * @param icon - An icon from the https://feathericons.com library (not recommended)
      * @param imageSource - URL of an icon (png, svg) that will be displayed next to your button
      * @param onClick - Function called whenever someone clicks on your button
      *
    */
    register: ({ iframe, dropdownActions, dropdownActionsTextClasses, imageSource, label, icon, tooltip, onClick }) => {
        const uuid = uuid_1.v4();
        sendEvent_1.default({
            action: 'register-stage-button',
            data: {
                label,
                icon,
                imageSource,
                tooltip,
                id: uuid,
                iframe: iframe ? {
                    width: iframe.width,
                    height: iframe.height,
                    template: processTemplate_1.default(iframe.template, iframe.variables)
                } : undefined,
                dropdownActions,
                dropdownActionsTextClasses
            }
        });
        subscribeToEvent_1.default(`iframe-message-for-${uuid}`, (response) => iframe.onMessage(response));
        subscribeToEvent_1.default(`register-stage-button-${uuid}`, (data) => onClick(data));
        return {
            remove() {
                sendEvent_1.default({
                    action: 'register-stage-button-remove',
                    data: { id: uuid }
                });
            }
        };
    }
};
//# sourceMappingURL=RegisterStageButton.js.map