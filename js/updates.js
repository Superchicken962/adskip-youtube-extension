if (typeof UPDATES === "undefined") {
    throw new Error("Missing updates import!");
}

function updateUpdates() {
    const updatesList = document.querySelector(".main .updates .list");

    updatesList.innerHTML = "";

    const currentVersion = Object.values(UPDATES).find(v => v.Version === VERSION);

    if (!currentVersion) {
        throw new Error(`Invalid Version '${VERSION}'! Valid versions: [${Object.keys(UPDATES).join(", ")}]`);
    }

    const versionOnAddButton = document.querySelector(".main .add_button .version");
    versionOnAddButton.textContent = "v" + VERSION;
    
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