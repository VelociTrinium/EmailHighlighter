// ---------------- 1. THE RULE ENGINE ----------------

// Setting: when true, highlights are cleared after the user reads an email.
// Persisted in chrome.storage.local, toggled via the popup.
let _clearAfterRead = false;
chrome.storage.local.get('clearAfterRead', (result) => {
    _clearAfterRead = result.clearAfterRead || false;
});
chrome.storage.onChanged.addListener((changes) => {
    if (changes.clearAfterRead) {
        _clearAfterRead = changes.clearAfterRead.newValue;
    }
});

const classificationRules = [
    {
        id: "Me",
        backgroundColor: "#9a81e2cc",
        textColor: "#000000ff",
        senders: ["jay.mvbom@gmail.com", "jay.mvbom.plays@gmail.com", "paranjay.vsingh@gmail.com", "paranjay.virendra2024@vitstudent.ac.in"],
        subjects: [],
        contents: []
    },
    {
        id: "Interns",
        backgroundColor: "#4fb966cc",
        textColor: "#ffffff",
        senders: ["himanshuupadhyay029@gmail.com", "harshitsingh3182005@gmail.com", "aloksingh.dev.engineer@gmail.com", "jainmokshit1@gmail.com", "mohdkaif77700@gmail.com", "kshitijt004@gmail.com"],
        subjects: [],
        contents: []
    },
    {
        id: "Office",
        backgroundColor: "#0e902acc",
        textColor: "#ffffff",
        senders: ["rravisolns@gmail.com", "viren@benchmarksolution.com", "@benchmarksolution.com", "diyasanil4@gmail.com"],
        subjects: [],
        contents: []
    },
    {
        id: "Family",
        backgroundColor: "#6200ffcc",
        textColor: "#ffffff",
        senders: ["viren.mvbom@gmail.com", "sarita1982singh@gmail.com", "durgavati.lsingh@gmail.com"],
        subjects: [],
        contents: []
    },
    {
        id: "irctc",
        backgroundColor: "#003366cc",
        textColor: "#ffffff",
        senders: ["@irctc.co.in", "@royalsundaram.in"],
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
        id: "mural",
        backgroundColor: "#ff0865cc",
        textColor: "#000000",
        senders: ["@mural.co"],
        subjects: [],
        contents: []
    },
    {
        id: "linkedin",
        backgroundColor: "#0077B5cc",
        textColor: "#ffffff",
        senders: ["@linkedin.com", "@linkedin.com", "linkedin@em.linkedin.com"],
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
        id: "noreply@lovable.dev",
        backgroundColors: ["#ff7e0bcc", "#fd5b22cc", "#c469e4cc", "#5d67d9cc"],
        textColor: "#ffffff",
        senders: ["noreply@lovable.dev"],
        subjects: [],
        contents: []
    },
    {
        id: "notifications@vercel.com",
        backgroundColor: "#ffa176cc",
        textColor: "#000000",
        senders: ["notifications@vercel.com"],
        subjects: [],
        contents: []
    },
    {
        id: "openai",
        backgroundColor: "#cecececc",
        textColor: "#ffffff",
        senders: ["noreply@email.openai.com"],
        subjects: [],
        contents: []
    },
    {
        id: "cursor",
        backgroundColor: "#666666cc",
        textColor: "#ffffff",
        senders: ["team@mail.cursor.com", "hi@mail.cursor.com", "no-reply@cursor.sh", "cursor.com"],
        subjects: [],
        contents: []
    },
    {
        id: "ollama",
        backgroundColor: "#d8d9ddcc",
        textColor: "#000000",
        senders: ["hello@ollama.com"],
        subjects: [],
        contents: []
    },
    {
        id: "openai",
        backgroundColor: "#cecececc",
        textColor: "#ffffff",
        senders: ["noreply@email.openai.com"],
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
        id: "youtube",
        backgroundColors: ["#ff0909cc", "#ffffffcc"],
        textColor: "#000000",
        senders: ["no-reply@youtube.com"],
        subjects: [],
        contents: []
    },
    {
        id: "microsoft",
        backgroundColors: ["#F25022cc", "#7FBA00cc", "#00A4EFcc", "#FFB900cc"],
        textColor: "#000000",
        senders: ["microsoft.com"],
        subjects: [],
        contents: []
    },
    {
        id: "amazon",
        backgroundColors: ["#f79400cc", "#151c25cc"],
        textColor: "#ffffff",
        senders: ["@amazon.com", "@amazon.in", "@amazon.co.in"],
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
        id: "pinterest",
        backgroundColor: "#df0022cc",
        textColor: "#ffffff",
        senders: ["recommendations@discover.pinterest.com"],
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
        senders: ["hack2skill.com"],
        subjects: [],
        contents: []
    },
    {
        id: "resume.io",
        backgroundColors: ["#a4d8fbcc", "#3591eccc"],
        textColor: "#ffffff",
        senders: ["support@resume.io"],
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
        senders: ["goindigo.in"],
        subjects: [],
        contents: []
    },
    {
        id: "airindia",
        backgroundColors: ["#f39503cc", "#d30e28cc"],
        textColor: "#ffffff",
        senders: ["@airindia.com", "@maharajaclub.airindia.com"],
        subjects: [],
        contents: []
    },
    {
        id: "passport",
        backgroundColor: "#e2cfbacc",
        textColor: "#000000",
        senders: ["@passportindia.gov.in"],
        subjects: [],
        contents: []
    },
    {
        id: "goodreads",
        backgroundColor: "#ebe2d8cc",
        textColor: "#000000",
        senders: ["@mail.goodreads.com"],
        subjects: [],
        contents: []
    },
    {
        id: "medium",
        backgroundColor: "#ebe2d8cc",
        textColor: "#000000",
        senders: ["medium.com"],
        subjects: [],
        contents: []
    },
    {
        id: "read.ai",
        backgroundColor: "#7860f7cc",
        textColor: "#000000",
        senders: ["support@e.read.ai", "@read.ai"],
        subjects: [],
        contents: []
    },
    {
        id: "moneycontrol",
        backgroundColors: ["#59ab37cc", "#086aa4cc"],
        textColor: "#ffffff",
        senders: ["moneycontrol.com"],
        subjects: [],
        contents: []
    },
    {
        id: "bookmyshow",
        backgroundColors: ["#555658cc", "#e1364bcc"],
        textColor: "#ffffff",
        senders: ["bookmyshow.com"],
        subjects: [],
        contents: []
    },
    {
        id: "jira",
        backgroundColors: ["#1190e6cc", "#041d28cc"],
        textColor: "#ffffff",
        senders: ["atlassian.net", "atlassian.com"],
        subjects: [],
        contents: []
    },
    {
        id: "docker",
        backgroundColors: ["#cedeeacc", "#2291e7cc"],
        textColor: "#000000ff",
        senders: ["docker.com"],
        subjects: [],
        contents: []
    },
    {
        id: "anthropic",
        backgroundColor: "#d27354cc",
        textColor: "#000000ff",
        senders: ["anthropic.com"],
        subjects: [],
        contents: []
    },
    {
        id: "steam",
        backgroundColors: ["#237ca9cc", "#1e4581cc", "#1a3462cc", "#0d1f42cc"],
        textColor: "#ffffff",
        senders: ["@steampowered.com", "steam.com"],
        subjects: [],
        contents: []
    },
    {
        id: "nse",
        backgroundColors: ["#f0b624cc", "#e7742ccc", "#e3272fcc"],
        textColor: "#ffffff",
        senders: ["@nse.co.in"],
        subjects: [],
        contents: []
    },
    {
        id: "bse",
        backgroundColors: ["#ffd508cc", "#f15f29cc", "#d32a31cc"],
        textColor: "#ffffff",
        senders: ["@bseindia.in"],
        subjects: [],
        contents: []
    },
    {
        id: "groww",
        backgroundColors: ["#586cfdcc", "#10f1bbcc"],
        textColor: "#dedede",
        senders: ["@groww.in", "@kfintech.com"],
        subjects: [],
        contents: []
    },
    {
        id: "hdfcbank",
        backgroundColors: ["#0961aecc", "#ffffffcc", "#e2272ecc"],
        textColor: "#ffffff",
        senders: ["@mailers.hdfcbank.bank.in", "@mailers.hdfcbank.net", "@hdfcbank.bank.in"],
        subjects: [],
        contents: []
    },
    {
        id: "digilocker",
        backgroundColors: ["#ffffffcc", "#5d36e7cc"],
        textColor: "#555454ff",
        senders: ["@digilocker.gov.in"],
        subjects: [],
        contents: []
    },
    {
        id: "incometax",
        backgroundColors: ["#f5b675cc", "#37b62ccc"],
        textColor: "#3d3a3aff",
        senders: ["@cpc.incometax.gov.in"],
        subjects: [],
        contents: []
    },
    {
        id: "sbi",
        backgroundColors: ["#09b8f0cc", "#302779cc"],
        textColor: "#ffffff",
        senders: ["@communications.sbi.co.in", "@communications.sbicapsec.com"],
        subjects: [],
        contents: []
    },
    {
        id: "gamma",
        backgroundColors: ["#4772bdcc", "#112346cc"],
        textColor: "#ffffff",
        senders: ["@gamma.app"],
        subjects: [],
        contents: []
    },
    {
        id: "motilaloswal",
        backgroundColor: "#fbb532cc",
        textColor: "#ffffff",
        senders: ["@motilaloswal.com", "@motilaloswalamc.in", "mfservice@kfintech.com"],
        subjects: [],
        contents: []
    },
    {
        id: "franklintempleton",
        backgroundColors: ["#ffffffcc", "#085d9dcc"],
        textColor: "#424242",
        senders: ["@emkt.franklintempleton.com"],
        subjects: [],
        contents: []
    },
    {
        id: "goldmanSachs",
        backgroundColor: "#5b95c3cc",
        textColor: "#303030ff",
        senders: ["GSRecruiting@oracle.com"],
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
        id: "garbage",
        backgroundColor: "#080808cc",
        textColor: "#ffffff",
        senders: [],
        subjects: ["viteee", "newsletter", "raman research award", "dr. apj abdul kalam award", "graVITas", "Cultural Week", "Quanta", "Today's events", "UTSAV", "UMANG", "Newbie Fiesta"],
        contents: ["viteee", "newsletter", "raman research award", "dr. apj abdul kalam award", "graVITas", "Cultural Week", "Quanta", "Today's events", "UTSAV", "UMANG", "Newbie Fiesta"]
    },
    {
        id: "Otp_vtop",
        backgroundColor: "#000000cc",
        textColor: "#F8D7DAcc",
        senders: ["no-reply@vit.ac.in"],
        subjects: ["File modifictaion"],
        contents: ["File modifictaion"]
    },
    {
        id: "mensHostel",
        backgroundColor: "#E02020cc",
        textColor: "#ffffff",
        senders: ["allstudents.mh@vitstudent.ac.in", "cw.mh@vit.ac.in"],
        subjects: [],
        contents: []
    },
    {
        id: "nptel",
        backgroundColor: "#F8D7DAcc",
        textColor: "#000000",
        senders: ["@nptel.iitm.ac.in", "swayam", "onlinecourses@nptel.iitm.ac.in", "support@nptel.iitm.ac.in"],
        subjects: ["certificate", "exam registration", "assignment", "nptel"],
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
        subjects: ["Moovit"],
        contents: ["Moovit"]
    },
    {
        id: "guestLecture",
        backgroundColor: "#237ca9cc",
        textColor: "#ffffff",
        senders: [],
        subjects: ["Industry expert lecture", "Guest Lecture", "Webinar"],
        contents: ["Industry expert lecture", "Guest Lecture", "Webinar"]
    },
    {
        id: "internship",
        backgroundColor: "#68EB86cc",
        textColor: "#000000",
        senders: [],
        subjects: ["internship", "intern", "Training"],
        contents: ["stipend", "months duration", "role", "intern "]
    },
    {
        id: "academic",
        backgroundColor: "#D680F0cc",
        textColor: "#000000",
        senders: ["@vit.ac.in"],
        subjects: ["lab", "fat", "cat", "quiz", "calendar", "project", "report", "rank", "library", "hackathon", "international transfer program"],
        contents: ["assignment", "quiz", "calendar", "project", "report", "rank", "library", "hackathon", "international transfer program"]
    },
    // {
    //     id: "work",
    //     backgroundColor: "#CCE5FFcc",
    //     textColor: "#000000",
    //     senders: ["boss@mycompany.com"],
    //     subjects: ["meeting", "project update", "urgent"],
    //     contents: ["zoom link", "google meet"]
    // },
    {
        id: "garbage",
        backgroundColor: "#080808cc",
        textColor: "#ffffff",
        senders: [],
        subjects: ["congratulations", "season greetings", "sports achievements"],
        contents: ["congratulations", "season greetings", "sports achievements"]
    },

];

// ---------------- 1b. PRE-PROCESS RULES (one-time at load) ----------------
// Pre-lowercase all pattern strings once at startup.
// This eliminates repeated .toLowerCase() calls inside the hot classification loop.
(function preprocessRules() {
    for (const rule of classificationRules) {
        rule._senders = (rule.senders || []).map(s => s.toLowerCase());
        rule._subjects = (rule.subjects || []).map(s => s.toLowerCase());
        rule._contents = (rule.contents || []).map(s => s.toLowerCase());
        rule._hasSenders = rule._senders.length > 0;
        rule._hasSubjects = rule._subjects.length > 0;
        rule._hasContents = rule._contents.length > 0;
    }
})();

// ---------------- 2. DATA EXTRACTION ----------------
function extractEmailData(row) {
    let senderEl = row.querySelector('[email]');
    let senderEmail = senderEl ? senderEl.getAttribute('email').toLowerCase() : "";

    let snippetEl = row.querySelector('.y2');
    let snippet = snippetEl ? snippetEl.innerText.toLowerCase() : "";

    let subjectEl = row.querySelector('.bog');
    let subject = "";
    if (subjectEl) {
        // Exclude badge text if a badge was inserted inside or around subjectEl
        const badge = row.querySelector('.custom-badge');
        if (badge && subjectEl.contains(badge)) {
            subject = subjectEl.innerText.replace(badge.innerText, '').trim().toLowerCase();
        } else {
            subject = subjectEl.innerText.trim().toLowerCase();
        }
    }

    return { senderEmail, subject, snippet /*, mailHeader */ };
}

// ---------------- 3. CLASSIFICATION LOGIC ----------------
// Inlined matching using pre-processed _senders/_subjects/_contents arrays.
// Eliminates: matchesAny closure creation, null-guard overhead, per-keyword toLowerCase().
function getEmailCategory(data) {
    for (let rule of classificationRules) {
        // Priority 1: Senders (pre-lowercased _senders)
        if (rule._hasSenders && rule._senders.some(s => data.senderEmail.includes(s))) return rule;

        /* --- FROM CODE 2 (Expansion: Priority 2 Header) --- */
        // if (rule.mailHeader && matchesAny(rule.mailHeader, data.mailHeader)) return rule;

        // Priority 3: Subject Line
        if (rule._hasSubjects && rule._subjects.some(s => data.subject.includes(s))) return rule;

        // Priority 4: Content Snippet
        if (rule._hasContents && rule._contents.some(s => data.snippet.includes(s))) return rule;
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
// Optimized: skips already-processed rows via fingerprinting,
// uses CSS custom properties + data-eh-highlighted / .eh-row instead of inline style writes,
// applies .eh-animate cascade exclusively to brand-new rows (never on restore),
// and hover effects are handled in style.css via :hover.
const _knownRowFingerprints = new Set();

function highlightEmails() {
    const emails = document.querySelectorAll('tr[jscontroller]');
    let newRowCount = 0;

    for (let i = 0; i < emails.length; i++) {
        const row = emails[i];
        const emailData = extractEmailData(row);

        // Fingerprint = sender + subject.
        const fingerprint = emailData.senderEmail + '\t' + emailData.subject;
        const isAlreadyKnown = _knownRowFingerprints.has(fingerprint);
        const hasHighlightedAttr = row.dataset.ehHighlighted === 'true';
        const hasRowClass = row.classList.contains('eh-row');
        const isRead = row.classList.contains('yO') || (!row.classList.contains('zE') && !row.classList.contains('zF'));

        // Handle clearAfterRead toggle: if user opened/read this email and setting is ON
        if (_clearAfterRead && isRead && (hasHighlightedAttr || isAlreadyKnown)) {
            delete row.dataset.ehHighlighted;
            delete row.dataset.ehFp;
            delete row.dataset.ehNoMatch;
            _knownRowFingerprints.delete(fingerprint);
            row.classList.remove('eh-row', 'eh-animate');
            row.style.removeProperty('--eh-bg');
            row.style.removeProperty('--eh-bg-image');
            row.style.removeProperty('--eh-text');
            row.style.removeProperty('--eh-accent');
            row.style.removeProperty('--eh-stagger');
            const oldBadge = row.querySelector('.custom-badge-group');
            if (oldBadge) oldBadge.remove();
            continue;
        }

        // Fast-path: if fingerprint matches, check if fully styled and badge is present
        if (row.dataset.ehFp === fingerprint) {
            const wasNoMatch = row.dataset.ehNoMatch === '1';
            if (wasNoMatch) continue;

            const hasBadge = Boolean(row.querySelector('.custom-badge-group'));
            // If class, data attribute, and badge are all intact, skip this row
            if (hasRowClass && hasHighlightedAttr && hasBadge) continue;
        }

        const matchedRule = getEmailCategory(emailData);

        if (!matchedRule) {
            // Clean up if this row was previously highlighted but no longer matches
            if (hasRowClass || hasHighlightedAttr) {
                row.classList.remove('eh-row', 'eh-animate');
                delete row.dataset.ehHighlighted;
                row.style.removeProperty('--eh-bg');
                row.style.removeProperty('--eh-bg-image');
                row.style.removeProperty('--eh-text');
                row.style.removeProperty('--eh-accent');
                row.style.removeProperty('--eh-stagger');
                const oldBadge = row.querySelector('.custom-badge-group');
                if (oldBadge) oldBadge.remove();
            }
            row.dataset.ehFp = fingerprint;
            row.dataset.ehNoMatch = '1';
            continue;
        }

        // Clear the no-match flag if previously set
        delete row.dataset.ehNoMatch;

        const colors = getRuleBackgroundColors(matchedRule);
        const primaryColor = colors[0];
        const accentColor = getSolidColor(primaryColor);

        // Set CSS custom properties — read by .eh-row and tr[data-eh-highlighted="true"]
        row.style.setProperty('--eh-bg', primaryColor);
        row.style.setProperty('--eh-bg-image', colors.length > 1 ? `linear-gradient(90deg, ${colors.join(", ")})` : 'none');
        row.style.setProperty('--eh-text', matchedRule.textColor);
        row.style.setProperty('--eh-accent', accentColor);

        // Mark as highlighted via persistent data attribute (survives Gmail className rewrites)
        row.dataset.ehHighlighted = 'true';
        row.classList.add('eh-row');

        // Apply cascade animation ONLY for brand-new rows on first appearance.
        // Restored rows (e.g. returning from reading an email) never get .eh-animate or stagger.
        if (!isAlreadyKnown) {
            row.style.setProperty('--eh-stagger', `${newRowCount * 12}ms`);
            row.classList.add('eh-animate');
            newRowCount++;
            _knownRowFingerprints.add(fingerprint);
        } else {
            row.style.removeProperty('--eh-stagger');
            row.classList.remove('eh-animate');
        }

        // Add classification badge (skip if already present)
        const subjectEl = row.querySelector('.bog');
        if (subjectEl && !row.querySelector('.custom-badge-group')) {
            const badgeGroup = document.createElement('span');
            badgeGroup.className = 'custom-badge-group';

            const badge = document.createElement('span');
            badge.className = 'custom-badge';
            badge.innerText = matchedRule.id.charAt(0).toUpperCase() + matchedRule.id.slice(1).toLowerCase();
            badge.style.background = colors.length > 1
                ? `linear-gradient(90deg, ${colors.join(', ')})`
                : accentColor;
            badge.style.color = matchedRule.textColor === "inherit" || matchedRule.textColor === "" ? "white" : matchedRule.textColor;

            badgeGroup.appendChild(badge);
            // Insert before subjectEl as a sibling if parent exists, else inside subjectEl
            if (subjectEl.parentNode) {
                subjectEl.parentNode.insertBefore(badgeGroup, subjectEl);
            } else {
                subjectEl.insertBefore(badgeGroup, subjectEl.firstChild);
            }
        }

        row.dataset.ehFp = fingerprint;
    }
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

// Debounce via requestAnimationFrame:
// Gmail fires 100s of DOM mutations/sec during load. Without this,
// highlightEmails() was called on EVERY mutation — the #1 perf killer.
// Now, all mutations within a single frame are coalesced into one call.
let _rafPending = false;
function scheduleHighlight() {
    if (_rafPending) return;
    _rafPending = true;
    requestAnimationFrame(() => {
        _rafPending = false;
        highlightEmails();
    });
}

function observeUrlChange() {
    const observer = new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            // Immediate pass on URL change
            scheduleHighlight();
            // Follow-up pass in case Gmail renders rows asynchronously
            setTimeout(scheduleHighlight, 500);
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function observeEmailChanges() {
    const observer = new MutationObserver(scheduleHighlight);
    observer.observe(document.body, { childList: true, subtree: true });
}

const _headerObserver = new MutationObserver(() => highlightOpenedEmail());
_headerObserver.observe(document.body, { childList: true, subtree: true });

// ---------------- INIT ----------------
function init() {
    highlightEmails();
    // observeUrlChange();
    observeEmailChanges();
}

init();