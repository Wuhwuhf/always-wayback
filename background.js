chrome.webNavigation.onCompleted.addListener(async (details) => {
    try {
        const tab = await chrome.tabs.get(details.tabId);
        const url = tab.url;
        const archiveUrl = "https://web.archive.org/save/" + encodeURIComponent(url);
        console.log("Archiving:", archiveUrl);

        fetch(archiveUrl)
            .then(response => console.log("Error Wayback Responding:", response.status))
            .catch(error => console.error("Error Archiving:", error));
    } catch (error) {
        console.error("Error Getting URL:", error);
    }
}, { url: [{ schemes: ["http", "https"] }] });
