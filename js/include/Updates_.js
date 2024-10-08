const UPDATES = {
    "1.1.2": {
        Date: "10/09/2024",
        Version: "1.1.2",
        Description: "<p>The extension properly clicks the skip button again, and the fix adskipper button finally works.</p>",
        UpdateType: "hotfix",
        Notes: [
            { type: "fix", note: "Fixed the extension not clicking the skip button" },
            { type: "fix", note: "Fixed the 'fix adskipper' button - now it should fix the detected issue when clicked" }
        ],
        Issues: [
            { severity: "0", note: "Ad skipped visual may sometimes show up in weird places or not at all" },
            { severity: "0", note: "Extension may sometimes not \"hook\" to the video, although this can be fixed by clicking the fix adskipper button" }
        ],
        // NextUpdate: {
        //     version: "1.2.0",
        //     progress: 0,
        //     note: "Planning"
        // }
    },
    "1.1.1": {
        Date: "07/05/2024",
        Version: "1.1.1",
        Description: "<p>Skippable ads should now properly be skipped.</p><p>Saving stats to server has been disabled temporarily until a fix is found.</p>",
        UpdateType: "hotfix",
        Notes: [
            { type: "fix", note: "Fixed ads not being skipped when the skip button is clearly shown" }
        ],
        Issues: [
			{ severity: "2", note: "Ads are sped up, but the skip button may not work anymore."},
            { severity: "0", note: "Ad skipped visual may sometimes show up in weird places or not at all" },
            { severity: "0", note: "Ad skipping still may not work sometimes, however should be resolved by clicking the new fix button" },
            { severity: "2", note: "Fix button does not seem to actually fix anything, currently reloading the page is the best fix" },
        ]
    },
    "1.1.0": {
        Date: "13/03/2024",
        Version: "1.1.0",
        Description: "<p>The long awaited update!<br><br>Unfortunately, I cannot guarantee that all bugs have been 100% fixed, but I can say that I have applied some fixes which will hopefully fix, or reduce the likelihood of them occuring.</p><p>Please be sure to report any bugs and issues and I will try to fix them! Any bugs I know of will be listed down below!</p>",
        UpdateType: "major",
        Notes: [
            { type: "fix", note: "Fixed playback rate not changing back to normal after speeding up an ad" },
            { type: "fix", note: "Fixed video previews from playing unmuted" },
            { type: "fix", note: "Applied fix that will hopefully make ad skipping more reliable" },
            { type: "addition", note: "Sped up ads should now count as 'skipped ads' and contribute points to your rank" },
            { type: "addition", note: "Added new visuals below video to indicate ads skipped (toggleable)" },
            { type: "addition", note: "Added new button next to title to try and fix ads not skipping properly when clicked!" },
            { type: "addition", note: "Save your stats to the server, and eventually compare to other ad skippers!" },
            { type: "fix", note: "Properly aligned checkboxes to labels in extension window" },
            { type: "adjustment", note: "Adjusted amount of skips needed to reach some ranks to account for ads sped up" }
        ],
        Issues: [
            { severity: "1", note: "Ads may be sped up instead of skipped when a skip button is clearly shown" },
            { severity: "0", note: "Ad skipped visual may sometimes show up in weird places or not at all" },
            { severity: "0", note: "Ad skipping still may not work sometimes, however should be resolved by clicking the new fix button" },
            { severity: "2", note: "Fix button does not seem to actually fix anything, currently reloading the page is the best fix" },
            { severity: "2", note: "Data storing server side may not be working properly" }
        ],
        PlannedFeatures: [
            { type: "improvement", note: "UI Improvements", reliability: 50 },
        ]
    },
    "1.0.0": {
        Date: "18/01/2024",
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
            progress: 100,
            note: "Released!"
        }
    }
};

const UPDATE_ISSUE_SEVERITY = {
    "0": { name: "Small", desc: "Should be fixed, but ultimately is not extension-breaking" },
    "1": { name: "Medium", desc: "Should be fixed, but other things should be fixed first" },
    "2": { name: "Large", desc: "Potentially extension-breaking, should be fixed when possible" },
    "3": { name: "Priority", desc: "Extension-breaking, requires priority to fix and possibly it's own update" }
};