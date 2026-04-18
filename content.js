// ---------------- 1. THE RULE ENGINE ----------------
const classificationRules = [
    {
        id: "irctc",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        senders: ["ticketadmin@irctc.co.in", "care@irctc.co.in"], 
        subjects: ["pnr", "ticket confirmation"],
        contents: []
    },
    {
        id: "internship",
        backgroundColor: "#68eb8688",
        textColor: "inherit",
        senders: ["careers@", "jobs@", "hr@"],
        subjects: ["internship", "application status", "offer"],
        contents: ["stipend", "months duration", "role"]
    },
    {
        id: "nptel",
        backgroundColor: "#f8d7da8a",
        textColor: "inherit",
        senders: ["@nptel.iitm.ac.in", "swayam", "onlinecourses@nptel.iitm.ac.in", "support@nptel.iitm.ac.in"],
        subjects: ["certificate", "exam registration", "assignment"],
        contents: []
    },
    {
        id: "chotadhobi",
        backgroundColor: "#bd46f58a",
        textColor: "inherit",
        senders: ["boss@mycompany.com"],
        subjects: ["Chotadhobi", "Laundry", "Delivery Confirmation"],
        contents: []
    },
    {
        id: "moovit",
        backgroundColor: "#7061f07f",
        textColor: "inherit",
        senders: ["noreply.moovit@vit.ac.in"],
        subjects: ["Moovit", "assignment", "quiz"],
        contents: ["assignment", "quiz"]
    },
    {
        id: "academic",
        backgroundColor: "#d680f076",
        textColor: "inherit",
        senders: [],
        subjects: ["Lab", "Fat", "Cat", "calendar", "project", "report"],
        contents: ["assignment", "quiz", "calendar", "project", "report"]
    },
    {
        id: "work",
        backgroundColor: "#cce5ff8a",
        textColor: "inherit",
        senders: ["boss@mycompany.com"],
        subjects: ["meeting", "project update", "urgent"],
        contents: ["zoom link", "google meet"]
    },
    {
        id: "congrats/greatings",
        backgroundColor: "#4b4b4376",
        textColor: "inherit",
        senders: [],
        subjects: ["congratulations", "season greetings"],
        contents: ["congratulations", "season greetings"]
    }
];

// ---------------- 2. DATA EXTRACTION ----------------
function extractEmailData(row) {
    let senderEl = row.querySelector('[email]');
    let senderEmail = senderEl ? senderEl.getAttribute('email').toLowerCase() : "";

    let snippetEl = row.querySelector('.y2');
    let snippet = snippetEl ? snippetEl.innerText.toLowerCase() : "";

    let subjectEl = row.querySelector('.bog');
    let subject = subjectEl ? subjectEl.innerText.toLowerCase() : "";

    /* --- FROM CODE 2 (Expansion) --- */
    // let mailHeaderEl = row.querySelector('.y6');
    // let mailHeader = mailHeaderEl ? mailHeaderEl.innerText.toLowerCase() : "";

    return { senderEmail, snippet, subject /*, mailHeader */ };
}

// ---------------- 3. CLASSIFICATION LOGIC ----------------
function getEmailCategory(data) {
    const matchesAny = (keywords, targetText) => {
        if (!keywords || keywords.length === 0 || !targetText) return false;
        return keywords.some(keyword => targetText.includes(keyword.toLowerCase()));
    };

    for (let rule of classificationRules) {
        // Priority 1: Senders
        if (matchesAny(rule.senders, data.senderEmail)) return rule;
        
        /* --- FROM CODE 2 (Expansion: Priority 2 Header) --- */
        // if (rule.mailHeader && matchesAny(rule.mailHeader, data.mailHeader)) return rule;

        // Priority 3: Content Snippet
        if (matchesAny(rule.contents, data.snippet)) return rule;

        // Priority 4: Subject Line
        if (matchesAny(rule.subjects, data.subject)) return rule;
    }
    return null;
}

// ---------------- 4. HIGHLIGHT FUNCTION ----------------
function highlightEmails() {
    let emails = document.querySelectorAll('tr[jscontroller]:not([data-processed="true"])');

    emails.forEach(row => {
        let emailData = extractEmailData(row);
        let matchedRule = getEmailCategory(emailData);

        if (matchedRule) {
            row.style.backgroundColor = matchedRule.backgroundColor;
            row.style.color = matchedRule.textColor;
            row.style.transition = "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
            row.style.position = "relative";

            let accentColor = matchedRule.backgroundColor.substring(0, 7);
            row.style.borderLeft = `6px solid ${accentColor}`;

            let subjectEl = row.querySelector('.bog');
            if (subjectEl) {
                if (!subjectEl.querySelector('.custom-badge')) {
                    const badge = document.createElement('span');
                    badge.className = 'custom-badge';
                    badge.innerText = matchedRule.id.toUpperCase();

                    Object.assign(badge.style, {
                        backgroundColor: accentColor,
                        color: matchedRule.textColor === "inherit" || matchedRule.textColor === "" ? "white" : matchedRule.textColor,
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
                }
            }

            row.addEventListener("mouseover", () => {
                row.style.boxShadow = "inset 8px 0 0 0 " + accentColor + ", 0 4px 12px rgba(0,0,0,0.1)";
                row.style.filter = "brightness(0.95)";
                row.style.cursor = "pointer";
            });

            row.addEventListener("mouseout", () => {
                row.style.boxShadow = "none";
                row.style.filter = "none";
            });

            /* --- FROM CODE 2 (Expansion: Category-Specific Actions) --- */
            /*
            if (matchedRule.id === "irctc") {
                row.addEventListener("click", (e) => {
                    if (!e.target.closest('.apU, .oZ-jc')) {
                        window.open("https://www.irctc.co.in/nget/train-search", "_blank");
                    }
                });
            }
            */
        }

        row.dataset.processed = "true";
    });
}

// ---------------- 5. OPENED EMAIL HIGHLIGHTER ----------------
function highlightOpenedEmail() {
    let header = document.querySelector('.ha');
    if (!header || header.dataset.processed) return;

    let subject = document.querySelector('h2')?.innerText || "";
    let text = subject.toLowerCase();

    // Simplified logic for open view
    if (text.includes("internship")) header.style.backgroundColor = "#d4edda";
    else if (text.includes("holiday") || text.includes("announcement")) header.style.backgroundColor = "#fff3cd";
    else if (text.includes("assignment") || text.includes("meeting")) header.style.backgroundColor = "#cce5ff";

    header.dataset.processed = "true";
}

// ---------------- 6. OBSERVERS & DETECTORS ----------------
let lastUrl = location.href; // Fixed: Global variable declaration from Code 1

function observeUrlChange() {
    const observer = new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            setTimeout(() => highlightEmails(), 2000);
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function observeEmailChanges() {
    const observer = new MutationObserver(() => highlightEmails());
    observer.observe(document.body, { childList: true, subtree: true });
}

const _headerObserver = new MutationObserver(() => highlightOpenedEmail());
_headerObserver.observe(document.body, { childList: true, subtree: true });

// ---------------- INIT ----------------
function init() {
    highlightEmails();
    observeUrlChange();
    observeEmailChanges();
}

init();