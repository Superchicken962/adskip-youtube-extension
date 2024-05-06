if (typeof UPDATES === "undefined") {
    throw new Error("Missing updates import!");
}

function updateUpdates(e, specific_version) {
    const updatesList = document.querySelector(".main .updates .list");

    updatesList.innerHTML = "";

    // If a version is specified, find that version. Otherwise, find the latest version.
    let versionToFind = specific_version ? specific_version : VERSION;

    const currentVersion = Object.values(UPDATES).find(v => v.Version === versionToFind);

    if (!currentVersion) {
        throw new Error(`Invalid Version '${VERSION}'! Valid versions: [${Object.keys(UPDATES).join(", ")}]`);
    }

    const versionReleaseDate = document.querySelector(".main .add_button .release_date");
    versionReleaseDate.textContent = currentVersion.Date ? `Released ${currentVersion.Date}` : "";

    // Add each version into the select menu.
    const versionSelectMenu = document.querySelector(".main .add_button .version");

    versionSelectMenu.innerHTML = ""; // Reset select menu to be filled again.

    for (const version of Object.values(UPDATES)) {
        let option = document.createElement("option");
        option.value = version.Version;
        option.textContent = "v" + version.Version;
        versionSelectMenu.appendChild(option);
    }

    versionSelectMenu.value = versionToFind; // Set selected value as current version being viewed

    // Do 'oninput' instead of adding event listener, as I want to set the listener and not keep adding it each time.
    versionSelectMenu.oninput = function() {
        updateUpdates(null, this.value);
    }
    
    const versionDescriptionDiv = document.querySelector(".main .description");
    versionDescriptionDiv.innerHTML = currentVersion.Description;

    if (currentVersion.Description || currentVersion.NextUpdate) {
        document.querySelector(".main .description_seperator").style.display = "block";
    }

    if (currentVersion.NextUpdate) {
        document.querySelector(".main .next_version_seperator").style.display = "block";
        document.querySelector(".main .next_version_info").innerHTML = `
            <h3>Next Version ${currentVersion.NextUpdate.version ? `(v${currentVersion.NextUpdate.version}) ` : ""}:</h3>
            
            <div class="update_progress">
                <div class="completion_progress">
                    <div class="bar" style="width:${currentVersion.NextUpdate.progress}%"></div>
                </div>

                <span class="completion">${currentVersion.NextUpdate.progress}%</span>
            </div>

            <br>
            
            <span class="note">${currentVersion.NextUpdate.note}</span>
            <br><br>
        `;
    } else {
        // If a version does not have a NextUpdate, be sure to hide it.
        document.querySelector(".main .next_version_seperator").style.display = "none";
        document.querySelector(".main .next_version_info").innerHTML = "";
    }

    const knownIssuesDiv = document.querySelector(".main .known_issues");
    const knownIssuesList = knownIssuesDiv.querySelector(".list");
    knownIssuesList.innerHTML = ""; // Reset known issues list.

    if (currentVersion.Issues && currentVersion.Issues.length > 0) {
        document.querySelector(".main .known_issues_seperator").style.display = "block";
        knownIssuesDiv.style.display = "block";

        for (const issue of currentVersion.Issues) {
            let issueElement = document.createElement("div");
            issueElement.className = "issue";

            let issueSeverity = UPDATE_ISSUE_SEVERITY[issue.severity];

            issueElement.innerHTML = `
                <p>
                    <span class="update_severity ${issueSeverity.name.toLowerCase()}">${issueSeverity.name}</span> ${issue.note}
                </p>
            `;

            knownIssuesList.appendChild(issueElement);
        }

    }

    for (const note of currentVersion.Notes) {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";

        let noteType = note.type?.toLowerCase();

        noteDiv.innerHTML = `
        <p>
            <span class="note_type ${noteType}">${capitalise(noteType)}</span> ${note.note}
        </p>
        `;

        updatesList.appendChild(noteDiv);
    }
}

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

window.addEventListener("load", updateUpdates);