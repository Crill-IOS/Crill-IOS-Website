import rawCommandDetails from './Command_Details.json';
export const commandDetails = rawCommandDetails;
export const commandTokenDefaults = Object.entries(commandDetails).reduce((defaults, [key, detail]) => {
    defaults[key] = detail.insert;
    return defaults;
}, {});
//# sourceMappingURL=commandDetails.js.map