chrome.webNavigation.onCompleted.addListener(async (details) => {
    try {
        const tab = await chrome.tabs.get(details.tabId);
        const url = tab.url;

        const archiveUrl = "https://web.archive.org/save/" + encodeURIComponent(url);
        console.log("Archiving:", archiveUrl);

        fetch(archiveUrl)
            .then(response => console.log("Wayback response:", response.status))
            .catch(error => console.error("Archive error:", error));
    } catch (error) {
        console.error("Error getting tab URL:", error);
    }
}, { url: [{ schemes: ["http", "https"] }] });
