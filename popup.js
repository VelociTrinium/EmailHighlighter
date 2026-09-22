document.addEventListener("DOMContentLoaded", async () => {
    const toggle = document.getElementById("clearAfterRead");

    // Load saved state (default: OFF)
    const { clearAfterRead = false } = await chrome.storage.local.get("clearAfterRead");
    toggle.checked = clearAfterRead;

    // Save on change + notify content scripts in all Gmail tabs
    toggle.addEventListener("change", async () => {
        await chrome.storage.local.set({ clearAfterRead: toggle.checked });
    });
});