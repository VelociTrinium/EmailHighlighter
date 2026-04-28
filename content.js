// ---------------- 1. THE RULE ENGINE ----------------
const classificationRules = [
    {
        id: "irctc",
        backgroundColor: "#003366cc",
        textColor: "#ffffff",
        senders: ["@irctc.co.in", "noreply.irctc@royalsundaram.in"], 
        subjects: [],
        contents: []
    },
    {
        id: "reddit",
        backgroundColor: "#FF4500cc",
        textColor: "#ffffff",
        senders: ["@redditmail.com", "@reddit.com"],
        subjects: [],
        contents: []
    },
    {
        id: "linkedin",
        backgroundColor: "#0077B5cc",
        textColor: "#ffffff",
        senders: ["@linkedin.com", "messages-noreply@linkedin.com", "linkedin@em.linkedin.com"],
        subjects: [],
        contents: []
    },
    {
        id: "indeed",
        backgroundColor: "#2557A7cc",
        textColor: "#ffffff",
        senders: ["no-reply@indeed.com", "donotreply@match.indeed.com"],
        subjects: [],
        contents: []
    },
    {
        id: "grammarly",
        backgroundColor: "#15C39Acc",
        textColor: "#ffffff",
        senders: ["hello@mail.grammarly.com"],
        subjects: [],
        contents: []
    },
    {
        id: "github",
        backgroundColor: "#23b75ccc",
        textColor: "#ffffff",
        senders: ["@github.com"],
        subjects: [],
        contents: []
    },
    {
        id: "patreon",
        backgroundColor: "#FF424Dcc",
        textColor: "#ffffff",
        senders: ["no-reply@patreon.com"],
        subjects: [],
        contents: []
    },
    {
        id: "replit",
        backgroundColor: "#F26207cc",
        textColor: "#ffffff",
        senders: ["@replit.com", "@mail.replit.com"],
        subjects: [],
        contents: []
    },
    {
        id: "cursor",
        backgroundColor: "#666666cc",
        textColor: "#ffffff",
        senders: ["team@mail.cursor.com", "hi@mail.cursor.com"],
        subjects: [],
        contents: []
    },
    {
        id: "google",
        backgroundColors: ["#4285F4cc", "#DB4437cc", "#F4B400cc", "#0F9D58cc"],
        textColor: "#ffffff",
        senders: ["no-reply@accounts.google.com", "@google.com"],
        subjects: [],
        contents: []
    },
    {
        id: "microsoft",
        backgroundColors: ["#F25022cc", "#7FBA00cc", "#00A4EFcc", "#FFB900cc"],
        textColor: "#000000",
        senders: ["Microsoft365@engagement.microsoft.com", "account-security-noreply@accountprotection.microsoft.com"],
        subjects: [],
        contents: []
    },
    {
        id: "quilbot",
        backgroundColor: "#088B4Ccc",
        textColor: "#ffffff",
        senders: ["updates@mail.quillbot.com"],
        subjects: [],
        contents: []
    },
    {
        id: "unstop",
        backgroundColor: "#234E84cc",
        textColor: "#ffffff",
        senders: ["noreply@unstop.news", "noreply@dare2compete.news"],
        subjects: [],
        contents: []
    },
    {
        id: "udemy",
        backgroundColor: "#A435F0cc",
        textColor: "#ffffff",
        senders: ["hello@students.udemy.com"],
        subjects: [],
        contents: []
    },
    {
        id: "leetcode",
        backgroundColor: "#FFA116cc",
        textColor: "#000000",
        senders: ["no-reply@leetcode.com"],
        subjects: [],
        contents: []
    },
    {
        id: "hack2skill",
        backgroundColor: "#462170cc",
        textColor: "#ffffff",
        senders: ["hello@noreply.hack2skill.com", "admin@no-reply.hack2skill.com"],
        subjects: [],
        contents: []
    },
    {
        id: "spotify",
        backgroundColor: "#25d865cc",
        textColor: "#ffffff",
        senders: ["no-reply@spotify.com"],
        subjects: [],
        contents: []
    },
    {
        id: "samsung",
        backgroundColor: "#0a53a4cc",
        textColor: "#ffffff",
        senders: ["samsung@in.email.samsung.com"],
        subjects: [],
        contents: []
    },
    {
        id: "indigo",
        backgroundColor: "#082297cc",
        textColor: "#ffffff",
        senders: ["IndiGoCustomerFeedback@goindigo.in"],
        subjects: [],
        contents: []
    },
    {
        id: "goodreads",
        backgroundColor: "#ebe2d8cc",
        textColor: "#000000",
        senders: ["no-reply@mail.goodreads.com"],
        subjects: [],
        contents: []
    },
    {
        id: "steam",
        backgroundColors: ["#237ca9cc","#1e4581cc","#1a3462cc", "#0d1f42cc"],
        textColor: "#ffffff",
        senders: ["noreply@steampowered.com"],
        subjects: [],
        contents: []
    },
    // {
    //     id: "24bbs",
    //     backgroundColor: "#3261e1a5",
    //     textColor: "#ffffff",
    //     senders: ["24bbs@vitstudent.ac.in"],
    //     subjects: [],
    //     contents: []
    // },
    {
        id: "mensHostel",
        backgroundColor: "#E02020cc",
        textColor: "#ffffff",
        senders: ["allstudents.mh@vitstudent.ac.in"],
        subjects: [],
        contents: []
    },
    {
        id: "internship",
        backgroundColor: "#68EB86cc",
        textColor: "#000000",
        senders: ["careers@", "jobs@", "hr@"],
        subjects: ["internship", "application status", "offer"],
        contents: ["stipend", "months duration", "role"]
    },
    {
        id: "nptel",
        backgroundColor: "#F8D7DAcc",
        textColor: "#000000",
        senders: ["@nptel.iitm.ac.in", "swayam", "onlinecourses@nptel.iitm.ac.in", "support@nptel.iitm.ac.in"],
        subjects: ["certificate", "exam registration", "assignment"],
        contents: []
    },
    {
        id: "chotadhobi",
        backgroundColor: "#BD46F5cc",
        textColor: "#ffffff",
        senders: ["boss@mycompany.com"],
        subjects: ["Chotadhobi", "Laundry", "Delivery Confirmation"],
        contents: []
    },
    {
        id: "moovit",
        backgroundColor: "#EC822Ccc",
        textColor: "#ffffff",
        senders: ["noreply.moovit@vit.ac.in"],
        subjects: ["Moovit", "assignment", "quiz"],
        contents: ["assignment", "quiz"]
    },
    {
        id: "academic",
        backgroundColor: "#D680F0cc",
        textColor: "#000000",
        senders: [],
        subjects: ["Lab", "Fat", "Cat", "calendar", "project", "report"],
        contents: ["assignment", "quiz", "calendar", "project", "report"]
    },
    {
        id: "work",
        backgroundColor: "#CCE5FFcc",
        textColor: "#000000",
        senders: ["boss@mycompany.com"],
        subjects: ["meeting", "project update", "urgent"],
        contents: ["zoom link", "google meet"]
    },
    {
        id: "congrats/greatings",
        backgroundColor: "#4B4B43cc",
        textColor: "#ffffff",
        senders: [],
        subjects: ["congratulations", "season greetings"],
        contents: ["congratulations", "season greetings"]
    },
    
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

function getRuleBackgroundColors(rule) {
    if (Array.isArray(rule.backgroundColors) && rule.backgroundColors.length) {
        return rule.backgroundColors;
    }
    if (rule.backgroundColor) {
        return [rule.backgroundColor];
    }
    return ["transparent"];
}

function getSolidColor(color) {
    return color && color.length >= 7 ? color.substring(0, 7) : color;
}

// ---------------- 4. HIGHLIGHT FUNCTION ----------------
function highlightEmails() {
    let emails = document.querySelectorAll('tr[jscontroller]');

    emails.forEach(row => {
        let emailData = extractEmailData(row);
        let matchedRule = getEmailCategory(emailData);

        if (!matchedRule) {
            return;
        }

        const colors = getRuleBackgroundColors(matchedRule);
        const primaryColor = colors[0];
        const accentColor = getSolidColor(primaryColor);

        row.style.backgroundColor = primaryColor;
        row.style.backgroundImage = colors.length > 1 ? `linear-gradient(90deg, ${colors.join(", ")})` : "none";
        row.style.backgroundRepeat = "no-repeat";
        row.style.backgroundSize = "100% 100%";
        row.style.color = matchedRule.textColor;
        row.style.transition = "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
        row.style.position = "relative";

        row.style.borderLeft = `6px solid ${accentColor}`;

        let subjectEl = row.querySelector('.bog');
        if (subjectEl) {
            if (!subjectEl.querySelector('.custom-badge-group')) {
                const badgeGroup = document.createElement('span');
                badgeGroup.className = 'custom-badge-group';
                Object.assign(badgeGroup.style, {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                });

                const badge = document.createElement('span');
                badge.className = 'custom-badge';
                badge.innerText = matchedRule.id.toUpperCase();

                const badgeBackground = colors.length > 1
                    ? `linear-gradient(90deg, ${colors.join(', ')})`
                    : accentColor;

                Object.assign(badge.style, {
                    background: badgeBackground,
                    color: matchedRule.textColor === "inherit" || matchedRule.textColor === "" ? "white" : matchedRule.textColor,
                    fontSize: "10px",
                    fontWeight: "bold",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    verticalAlign: "middle",
                    display: "inline-block",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                });

                badgeGroup.appendChild(badge);

                subjectEl.insertBefore(badgeGroup, subjectEl.firstChild);
            }
        }

        if (!row.dataset.highlightListeners) {
            row.addEventListener("mouseover", () => {
                row.style.boxShadow = "inset 8px 0 0 0 " + accentColor + ", 0 4px 12px rgba(0,0,0,0.1)";
                row.style.filter = "brightness(0.95)";
                row.style.cursor = "pointer";
            });

            row.addEventListener("mouseout", () => {
                row.style.boxShadow = "none";
                row.style.filter = "none";
            });

            row.dataset.highlightListeners = "true";
        }

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