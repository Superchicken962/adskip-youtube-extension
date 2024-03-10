const UPDATES = {
    "1.0.0": {
        Version: "1.0.0",
        Description: `<br>v1.1.0 Coming Soon!!<br>Thank you for your patience!<br><br>`,
        UpdateType: "release",
        Notes: [
            { type: "publish", note: "Extension Released!" }
        ],
        Issues: [
            { severity: "0", note: "Hovering over videos will play the preview with sound and cannot be muted" },
            { severity: "1", note: "Ad skipping may not work sometimes, though should be resolved by reloading the page" },
            { severity: "2", note: "Video may stay muted or sped up after an ad finishes (resolve it by changing speed/mute to something else and back to normal)" },
        ],
        PlannedFeatures: [],
        NextUpdate: {
            version: "1.1.0",
            progress: 85,
            note: "Finalising and polishing changes"
        }
    }
};

const UPDATE_ISSUE_SEVERITY = {
    "0": { name: "Small", desc: "Should be fixed, but ultimately is not extension-breaking" },
    "1": { name: "Medium", desc: "Should be fixed, but other things should be fixed first" },
    "2": { name: "Large", desc: "Potentially extension-breaking, should be fixed when possible" },
    "3": { name: "Priority", desc: "Extension-breaking, requires priority to fix and possibly it's own update" }
};