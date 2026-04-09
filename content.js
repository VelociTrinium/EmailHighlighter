// ---------------- 1. THE RULE ENGINE ----------------
// Define your categories and the keywords/emails that trigger them.
// Evaluation order matters: it checks from top to bottom and returns the first match.
const classificationRules = [
    {
        id: "irctc",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        // Exact or partial email addresses
        senders: ["ticketadmin@irctc.co.in", "care@irctc.co.in"], 
        subjects: ["pnr", "ticket confirmation"],
        contents: []
    },
    {
        id: "internship",
        backgroundColor: "#d4edda88",
        textColor: "inherit",
        senders: ["careers@", "jobs@", "hr@"], 
        subjects: ["internship", "application status", "offer"],
        contents: ["stipend", "months duration", "role"]
    },
    {
        id: "nptel",
        backgroundColor: "#f8d7da8a",
        textColor: "inherit",
        senders: ["@nptel.iitm.ac.in", "swayam"],
        subjects: ["assignment", "certificate", "exam registration"],
        contents: []
    },
    {
        id: "work",
        backgroundColor: "#cce5ff8a",
        textColor: "inherit",
        senders: ["boss@mycompany.com"],
        subjects: ["meeting", "project update", "urgent"],
        contents: ["zoom link", "google meet"]
    }
];

// ---------------- 2. DATA EXTRACTION ----------------
function extractEmailData(row) {
    // Safely attempt to find the elements, fallback to empty strings if not found

    // 1. Sender (Looking for the element that holds the 'email' attribute)
    let senderEl = row.querySelector('[email]');
    let senderEmail = senderEl ? senderEl.getAttribute('email').toLowerCase() : "";

    // 2. mailHeader (Usually inside .y6)
    let mailHeaderEl = row.querySelector('.y6');
    let mailHeader = mailHeaderEl ? mailHeaderEl.innerText.toLowerCase() : "";

    // 3. Snippet / Content (Usually inside .y2)
    let snippetEl = row.querySelector('.y2');
    let snippet = snippetEl ? snippetEl.innerText.toLowerCase() : "";

    // 4. Subject (Usually inside .bog)
    let subjectEl = row.querySelector('.bog');
    let subject = subjectEl ? subjectEl.innerText.toLowerCase() : "";

    return { senderEmail, mailHeader, snippet, subject };
}

// ---------------- 3. CLASSIFICATION LOGIC ----------------
function getEmailCategory(data) {
    // Helper function to check if any keyword in an array exists in a target string
    const matchesAny = (keywords, targetText) => {
        if (!keywords || keywords.length === 0) return false;
        return keywords.some(keyword => targetText.includes(keyword.toLowerCase()));
    };

    // Loop through our rules
    for (let rule of classificationRules) {
        // Priority 1: Check Sender (Highest accuracy)
        if (matchesAny(rule.senders, data.senderEmail)) return rule;

        // Priority 2: Check Mail Header
        if (matchesAny(rule.mailHeader, data.mailHeader)) return rule;

        // Priority 3: Check Content snippet
        if (matchesAny(rule.contents, data.snippet)) return rule;

        // Priority 4: Check Subject
        if (matchesAny(rule.subjects, data.subject)) return rule;

        
    }

    return null; // No match found
}

// ---------------- 4. UPDATED HIGHLIGHT FUNCTION ----------------
function highlightEmails() {
    let emails = document.querySelectorAll('tr[jscontroller]:not([data-processed="true"])');

    emails.forEach(row => {
        let emailData = extractEmailData(row);
        let matchedRule = getEmailCategory(emailData);

        if (matchedRule) {
            // --- 1. THE ROW BASE STYLE ---
            row.style.backgroundColor = matchedRule.backgroundColor;
            row.style.color = matchedRule.textColor;
            row.style.transition = "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
            row.style.position = "relative"; // Required for absolute positioning inside if needed

            // --- 2. LEFT-BORDER ACCENT ---
            // Use the rule's primary color (no transparency) for the border
            let accentColor = matchedRule.backgroundColor.substring(0, 7); 
            row.style.borderLeft = `6px solid ${accentColor}`;

            // --- 3. SUBJECT PREFIXING & BADGE INJECTION ---
            let subjectEl = row.querySelector('.bog');
            if (subjectEl) {
                // Prevent duplicate badges if script runs twice
                if (!subjectEl.querySelector('.custom-badge')) {
                    
                    // Create the Pill Badge
                    const badge = document.createElement('span');
                    badge.className = 'custom-badge';
                    badge.innerText = matchedRule.id.toUpperCase();
                    
                    // Apply Badge Styles
                    Object.assign(badge.style, {
                        backgroundColor: accentColor,
                        color: matchedRule.textColor === "inherit" ? "white" : matchedRule.textColor,
                        fontSize: "10px",
                        fontWeight: "bold",
                        padding: "2px 8px",
                        borderRadius: "10px",
                        marginLeft: "8px",
                        verticalAlign: "middle",
                        display: "inline-block",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    });

                    subjectEl.appendChild(badge);
                    
                    // Prefix the subject text slightly for clarity
                    // subjectEl.childNodes[0].textContent = `[${matchedRule.id.toUpperCase()}] ` + subjectEl.childNodes[0].textContent;
                }
            }

            // --- 4. ENHANCED HOVER EFFECTS ---
            row.addEventListener("mouseover", () => {
                row.style.boxShadow = "inset 8px 0 0 0 " + accentColor + ", 0 4px 12px rgba(0,0,0,0.1)";
                row.style.filter = "brightness(0.95)";
                row.style.cursor = "pointer";
            });

            row.addEventListener("mouseout", () => {
                row.style.boxShadow = "none";
                row.style.filter = "none";
            });

            // --- 5. CATEGORY-SPECIFIC ACTIONS (e.g. IRCTC) ---
            // if (matchedRule.id === "irctc") {
            //     row.addEventListener("click", (e) => {
            //         // Only open if they didn't click a checkbox or star
            //         if (!e.target.closest('.apU, .oZ-jc')) {
            //             window.open("https://www.irctc.co.in/nget/train-search", "_blank");
            //         }
            //     });
            // }
        }

        else {
            // Optional: Make non-categorized emails slightly faded to make your highlighted ones pop
            row.style.opacity = "1"; // Set to 0.8 or 0.9 if you want a faded effect
}

        row.dataset.processed = "true";
    });
}

// ---------------- OPENED EMAIL HIGHLIGHTER ----------------
function highlightOpenedEmail() {
    let header = document.querySelector('.ha');

    if (!header || header.dataset.processed) return;

    let subject = document.querySelector('h2')?.innerText || "";

    // Simple classification
    let text = subject.toLowerCase();

    if (text.includes("internship")) {
        header.style.backgroundColor = "#d4edda";
    } 
    else if (text.includes("holiday") || text.includes("announcement")) {
        header.style.backgroundColor = "#fff3cd";
    } 
    else if (text.includes("assignment") || text.includes("meeting")) {
        header.style.backgroundColor = "#cce5ff";
    }

    header.dataset.processed = "true";
}

// ---------------- URL CHANGE DETECTOR ----------------
function observeUrlChange() {
    const observer = new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            // console.log("📌 URL changed → re-running script");

            setTimeout(() => {
                highlightEmails();
            }, 2000); // wait for Gmail to load
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

const observer = new MutationObserver(() => {
    highlightOpenedEmail();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// ---------------- LIVE EMAIL DETECTOR ----------------
function observeEmailChanges() {
    const observer = new MutationObserver(() => {
        highlightEmails();
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// ---------------- INIT ----------------
function init() {
    // console.log("🚀 Gmail sorter running...");

    highlightEmails();         // initial run
    observeUrlChange();        // detect navigation
    observeEmailChanges();     // detect new emails loading
}

init();