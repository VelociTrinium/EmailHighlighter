// ---------------- 1. THE RULE ENGINE ----------------

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
        senders: ["rravisolns@gmail.com", "viren@benchmarksolution.com", "@benchmarksolution.com", "diyasanil4@gmail.com", "sudharsanv23@gmail.com", "tapan.j@benchmarksolution.com"],
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
        senders: ["@linkedin.com", "@em.linkedin.com"],
        subjects: [],
        contents: []
    },
    {
        id: "indeed",
        backgroundColor: "#2557A7cc",
        textColor: "#ffffff",
        senders: ["@indeed.com", "@match.indeed.com"],
        subjects: [],
        contents: []
    },
    {
        id: "grammarly",
        backgroundColor: "#15C39Acc",
        textColor: "#ffffff",
        senders: ["@mail.grammarly.com"],
        subjects: [],
        contents: []
    },
    {
        id: "github",
        backgroundColor: "#23b75ccc",
        textColor: "#ffffff",
        senders: ["@github.com", "@getgitguardian.com"],
        subjects: [],
        contents: []
    },
    {
        id: "patreon",
        backgroundColor: "#FF424Dcc",
        textColor: "#ffffff",
        senders: ["y@patreon.com"],
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
        id: "lovable",
        backgroundColors: ["#ff7e0bcc", "#fd5b22cc", "#c469e4cc", "#5d67d9cc"],
        textColor: "#ffffff",
        senders: ["@lovable.dev"],
        subjects: [],
        contents: []
    },
    {
        id: "vercel",
        backgroundColor: "#ffa176cc",
        textColor: "#000000",
        senders: ["@vercel.com"],
        subjects: [],
        contents: []
    },
    {
        id: "openai",
        backgroundColor: "#cecececc",
        textColor: "#ffffff",
        senders: ["@email.openai.com"],
        subjects: [],
        contents: []
    },
    {
        id: "cursor",
        backgroundColor: "#666666cc",
        textColor: "#ffffff",
        senders: ["@mail.cursor.com", "@cursor.sh", "@cursor.com"],
        subjects: [],
        contents: []
    },
    {
        id: "ollama",
        backgroundColor: "#d8d9ddcc",
        textColor: "#000000",
        senders: ["@ollama.com"],
        subjects: [],
        contents: []
    },
    {
        id: "google",
        backgroundColors: ["#4285F4cc", "#DB4437cc", "#F4B400cc", "#0F9D58cc"],
        textColor: "#ffffff",
        senders: ["@accounts.google.com", "@google.com"],
        subjects: [],
        contents: []
    },
    {
        id: "youtube",
        backgroundColors: ["#ff0909cc", "#ffffffcc"],
        textColor: "#000000",
        senders: ["@youtube.com"],
        subjects: [],
        contents: []
    },
    {
        id: "microsoft",
        backgroundColors: ["#F25022cc", "#7FBA00cc", "#00A4EFcc", "#FFB900cc"],
        textColor: "#000000",
        senders: ["@microsoft.com", "@email.careers.microsoft.com", "@accountprotection.microsoft.com"],
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
        id: "meta",
        backgroundColors: ["#007df3cc", "#0061d7cc"],
        textColor: "#ffffff",
        senders: ["@email.meta.com"],
        subjects: [],
        contents: []
    },
    {
        id: "quilbot",
        backgroundColor: "#088B4Ccc",
        textColor: "#ffffff",
        senders: ["@mail.quillbot.com"],
        subjects: [],
        contents: []
    },
    {
        id: "mistral",
        backgroundColors: ["#f7d100cc", "#f7aa00cc", "#f77e05cc", "#f24d0fcc", "#da0500cc"],
        textColor: "#000000",
        senders: ["@emails.mistral.ai"],
        subjects: [],
        contents: []
    },
    {
        id: "openrouter",
        backgroundColor: "#c2f700cc",
        textColor: "#000000",
        senders: ["@openrouter.ai"],
        subjects: [],
        contents: []
    },
    {
        id: "cloudflare",
        backgroundColors: ["#f2a93ecc", "#eb7c1fcc"],
        textColor: "#000000",
        senders: ["@em1.cloudflare.com"],
        subjects: [],
        contents: []
    },
    {
        id: "pinterest",
        backgroundColor: "#df0022cc",
        textColor: "#ffffff",
        senders: ["@discover.pinterest.com"],
        subjects: [],
        contents: []
    },
    {
        id: "unstop",
        backgroundColor: "#234E84cc",
        textColor: "#ffffff",
        senders: ["@unstop.news", "@dare2compete.news", "@unstop.email"],
        subjects: [],
        contents: []
    },
    {
        id: "udemy",
        backgroundColor: "#A435F0cc",
        textColor: "#ffffff",
        senders: ["@students.udemy.com"],
        subjects: [],
        contents: []
    },
    {
        id: "leetcode",
        backgroundColor: "#FFA116cc",
        textColor: "#000000",
        senders: ["@leetcode.com"],
        subjects: [],
        contents: []
    },
    {
        id: "hack2skill",
        backgroundColor: "#462170cc",
        textColor: "#ffffff",
        senders: ["@hack2skill.com", "@no-reply.hack2skill.com"],
        subjects: [],
        contents: []
    },
    {
        id: "resume.io",
        backgroundColors: ["#a4d8fbcc", "#3591eccc"],
        textColor: "#ffffff",
        senders: ["@resume.io"],
        subjects: [],
        contents: []
    },
    {
        id: "spotify",
        backgroundColor: "#25d865cc",
        textColor: "#ffffff",
        senders: ["@spotify.com"],
        subjects: [],
        contents: []
    },
    {
        id: "samsung",
        backgroundColor: "#0a53a4cc",
        textColor: "#ffffff",
        senders: ["@in.email.samsung.com"],
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
        senders: ["@medium.com"],
        subjects: [],
        contents: []
    },
    {
        id: "read.ai",
        backgroundColor: "#7860f7cc",
        textColor: "#000000",
        senders: ["@e.read.ai", "@read.ai"],
        subjects: [],
        contents: []
    },
    {
        id: "moneycontrol",
        backgroundColors: ["#59ab37cc", "#086aa4cc"],
        textColor: "#ffffff",
        senders: ["@moneycontrol.com"],
        subjects: [],
        contents: []
    },
    {
        id: "bookmyshow",
        backgroundColors: ["#555658cc", "#e1364bcc"],
        textColor: "#ffffff",
        senders: ["@bookmyshow.com"],
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
        id: "ubisoft",
        backgroundColor: "#cedeeacc",
        textColor: "#000000ff",
        senders: ["@account.ubisoft.com"],
        subjects: [],
        contents: []
    },
    {
        id: "docker",
        backgroundColors: ["#cedeeacc", "#2291e7cc"],
        textColor: "#000000ff",
        senders: ["@docker.com", "@notify.docker.com"],
        subjects: [],
        contents: []
    },
    {
        id: "anthropic",
        backgroundColor: "#d27354cc",
        textColor: "#000000ff",
        senders: ["@anthropic.com", "@email.anthropic.com"],
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
        senders: ["@oracle.com"],
        subjects: [],
        contents: []
    },
    {
        id: "PodAI",
        backgroundColors: ["#5222c9cc", "#4618afcc"],
        textColor: "#e6e0f2ff",
        senders: ["@pod.ai"],
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
        subjects: ["viteee", "newsletter", "raman research award", "dr apj abdul kalam award", "graVITas", "Cultural Week", "Quanta", "Today's events", "UTSAV", "UMANG", "Newbie Fiesta", "Mental Health", "Riviera"],
        contents: ["viteee", "newsletter", "raman research award", "dr apj abdul kalam award", "graVITas", "Cultural Week", "Quanta", "Today's events", "UTSAV", "UMANG", "Newbie Fiesta", "Mental Health", "Riviera"]
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
        subjects: ["nptel", "mooc"],
        contents: ["nptel", "mooc"]
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
        id: "garbage",
        backgroundColor: "#080808cc",
        textColor: "#ffffff",
        senders: [],
        subjects: ["congratulations", "season greetings", "sports achievements", "Greetings", "Poster Competition", "Blood Donation"],
        contents: ["congratulations", "season greetings", "sports achievements", "Greetings", "Poster Competition", "Blood Donation"]
    },
    {
        id: "academic",
        backgroundColor: "#D680F0cc",
        textColor: "#000000",
        senders: ["@vit.ac.in"],
        subjects: ["lab", "fat", "cat", "assignment", "quiz", "calendar", "project", "report", "rank", "library", "hackathon", "ideathon", "workshop", "international transfer program"],
        contents: ["lab", "fat", "cat", "assignment", "quiz", "calendar", "project", "report", "rank", "library", "hackathon", "ideathon", "workshop", "international transfer program"]
    },
    // {
    //     id: "work",
    //     backgroundColor: "#CCE5FFcc",
    //     textColor: "#000000",
    //     senders: ["boss@mycompany.com"],
    //     subjects: ["meeting", "project update", "urgent"],
    //     contents: ["zoom link", "google meet"]
    // },
];

// ---------------- 1b. PRE-PROCESS RULES & BUILD LOOKUP MAPS (one-time at load) ----------------
// Pre-indexes sender rules into O(1) Maps:
// - _exactSenderMap for full email addresses (e.g. "jay.mvbom@gmail.com")
// - _domainSenderMap for domain prefixes (e.g. "@google.com")
// - _generalRules for rules with subjects, contents, or non-domain substring patterns
const _exactSenderMap = new Map();
const _domainSenderMap = new Map();
const _generalRules = [];

(function preprocessRules() {
    for (const rule of classificationRules) {
        rule._senders = (rule.senders || []).map(s => s.toLowerCase());
        rule._subjects = (rule.subjects || []).map(s => s.toLowerCase());
        rule._contents = (rule.contents || []).map(s => s.toLowerCase());
        rule._hasSenders = rule._senders.length > 0;
        rule._hasSubjects = rule._subjects.length > 0;
        rule._hasContents = rule._contents.length > 0;

        let hasIndexedSender = false;
        if (rule._hasSenders) {
            for (const sender of rule._senders) {
                if (sender.startsWith('@')) {
                    if (!_domainSenderMap.has(sender)) {
                        _domainSenderMap.set(sender, rule);
                        hasIndexedSender = true;
                    }
                } else if (sender.includes('@')) {
                    if (!_exactSenderMap.has(sender)) {
                        _exactSenderMap.set(sender, rule);
                        hasIndexedSender = true;
                    }
                }
            }
        }

        // If rule has subjects, contents, or non-email sender strings, keep in general list
        if (rule._hasSubjects || rule._hasContents || !hasIndexedSender) {
            _generalRules.push(rule);
        }
    }
})();

// ---------------- 2. DATA EXTRACTION ----------------
function extractEmailData(row) {
    let senderEl = row.querySelector('[email]');
    let senderEmail = senderEl ? senderEl.getAttribute('email').toLowerCase() : "";

    let snippetEl = row.querySelector('.y2');
    let snippet = snippetEl ? snippetEl.textContent.toLowerCase() : "";

    let subjectEl = row.querySelector('.bog');
    let subject = "";
    if (subjectEl) {
        const badge = row.querySelector('.custom-badge');
        if (badge && subjectEl.contains(badge)) {
            subject = subjectEl.textContent.replace(badge.textContent, '').trim().toLowerCase();
        } else {
            subject = subjectEl.textContent.trim().toLowerCase();
        }
    }

    return { senderEmail, subject, snippet };
}

// ---------------- 3. CLASSIFICATION LOGIC ----------------
// O(1) hash lookups first, then fallback to general rules
function getEmailCategory(data) {
    const email = data.senderEmail;
    if (email) {
        // Priority 1a: Exact email match O(1)
        const exactMatch = _exactSenderMap.get(email);
        if (exactMatch) return exactMatch;

        // Priority 1b: Domain match O(1)
        const atIdx = email.indexOf('@');
        if (atIdx !== -1) {
            const domain = email.slice(atIdx);
            const domainMatch = _domainSenderMap.get(domain);
            if (domainMatch) return domainMatch;
        }
    }

    // Priority 2: Fallback general rules (senders, subjects, contents)
    for (let i = 0; i < _generalRules.length; i++) {
        const rule = _generalRules[i];
        if (rule._hasSenders && rule._senders.some(s => email.includes(s))) return rule;
        if (rule._hasSubjects && rule._subjects.some(s => data.subject.includes(s))) return rule;
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
// Template node for badge cloning
const _badgeTemplate = document.createElement('span');
_badgeTemplate.className = 'custom-badge-group';
const _badgeInnerTemplate = document.createElement('span');
_badgeInnerTemplate.className = 'custom-badge';
_badgeTemplate.appendChild(_badgeInnerTemplate);

// Bounded Set to prevent long-term memory growth (max 1000 items)
const _knownRowFingerprints = new Set();
function rememberFingerprint(fp) {
    if (_knownRowFingerprints.size >= 1000) {
        let count = 0;
        for (const item of _knownRowFingerprints) {
            _knownRowFingerprints.delete(item);
            if (++count >= 200) break;
        }
    }
    _knownRowFingerprints.add(fp);
}

function highlightEmails() {
    const emails = document.querySelectorAll('tr[jscontroller]');
    let newRowCount = 0;

    for (let i = 0; i < emails.length; i++) {
        const row = emails[i];

        // 1. FAST-PATH: If already evaluated and valid, skip immediately (<0.01ms per row)
        if (row.dataset.ehProcessed === 'true') {
            if (row.dataset.ehHighlighted === 'true') {
                if (row.classList.contains('eh-row')) continue;
            } else {
                continue;
            }
        }

        const emailData = extractEmailData(row);
        const fingerprint = emailData.senderEmail + '	' + emailData.subject;
        const isAlreadyKnown = _knownRowFingerprints.has(fingerprint);
        const hasHighlightedAttr = row.dataset.ehHighlighted === 'true';
        const hasRowClass = row.classList.contains('eh-row');

        const matchedRule = getEmailCategory(emailData);

        if (!matchedRule) {
            if (hasRowClass || hasHighlightedAttr) {
                row.classList.remove('eh-row', 'eh-animate');
                delete row.dataset.ehHighlighted;
                delete row.dataset.ehFp;
                row.style.removeProperty('--eh-bg');
                row.style.removeProperty('--eh-bg-image');
                row.style.removeProperty('--eh-text');
                row.style.removeProperty('--eh-accent');
                row.style.removeProperty('--eh-stagger');
                const oldBadge = row.querySelector('.custom-badge-group');
                if (oldBadge) oldBadge.remove();
            }
            row.dataset.ehProcessed = 'true';
            continue;
        }

        const colors = getRuleBackgroundColors(matchedRule);
        const primaryColor = colors[0];
        const accentColor = getSolidColor(primaryColor);

        row.style.setProperty('--eh-bg', primaryColor);
        row.style.setProperty('--eh-bg-image', colors.length > 1 ? `linear-gradient(90deg, ${colors.join(", ")})` : 'none');
        row.style.setProperty('--eh-text', matchedRule.textColor);
        row.style.setProperty('--eh-accent', accentColor);

        row.dataset.ehHighlighted = 'true';
        row.classList.add('eh-row');

        if (!isAlreadyKnown) {
            row.style.setProperty('--eh-stagger', `${Math.min(newRowCount * 4, 60)}ms`);
            row.classList.add('eh-animate');
            newRowCount++;
            rememberFingerprint(fingerprint);
        } else {
            row.style.removeProperty('--eh-stagger');
            row.classList.remove('eh-animate');
        }

        // Add classification badge using template cloning
        const subjectEl = row.querySelector('.bog');
        if (subjectEl && !row.querySelector('.custom-badge-group')) {
            const badgeGroup = _badgeTemplate.cloneNode(true);
            const badge = badgeGroup.firstChild;
            badge.textContent = matchedRule.id.charAt(0).toUpperCase() + matchedRule.id.slice(1).toLowerCase();
            badge.style.background = colors.length > 1
                ? `linear-gradient(90deg, ${colors.join(', ')})`
                : accentColor;
            badge.style.color = matchedRule.textColor === "inherit" || matchedRule.textColor === "" ? "white" : matchedRule.textColor;

            if (subjectEl.parentNode) {
                subjectEl.parentNode.insertBefore(badgeGroup, subjectEl);
            } else {
                subjectEl.insertBefore(badgeGroup, subjectEl.firstChild);
            }
        }

        row.dataset.ehFp = fingerprint;
        row.dataset.ehProcessed = 'true';
    }
}

// ---------------- 5. OPENED EMAIL HIGHLIGHTER ----------------
function highlightOpenedEmail() {
    let header = document.querySelector('.ha');
    if (!header || header.dataset.processed) return;

    let subject = document.querySelector('h2')?.textContent || "";
    let text = subject.toLowerCase();

    if (text.includes("internship")) header.style.backgroundColor = "#d4edda";
    else if (text.includes("holiday") || text.includes("announcement")) header.style.backgroundColor = "#fff3cd";
    else if (text.includes("assignment") || text.includes("meeting")) header.style.backgroundColor = "#cce5ff";

    header.dataset.processed = "true";
}

// ---------------- 6. OBSERVERS & DETECTORS ----------------
let _rafPending = false;
let _emailObserver = null;
let _currentObserverTarget = null;

function scheduleHighlight() {
    if (_rafPending) return;
    _rafPending = true;
    requestAnimationFrame(() => {
        _rafPending = false;
        highlightEmails();
        highlightOpenedEmail();
        updateObserverTarget();
    });
}

function updateObserverTarget() {
    if (!_emailObserver) return;
    // Prefer scoping directly to Gmail's main email pane if mounted
    const target = document.querySelector('div[role="main"]') || document.body;
    if (target !== _currentObserverTarget) {
        _currentObserverTarget = target;
        _emailObserver.disconnect();
        _emailObserver.observe(_currentObserverTarget, { childList: true, subtree: true });
    }
}

function observeEmailChanges() {
    _emailObserver = new MutationObserver((mutations) => {
        // Prevent feedback loops: ignore mutations triggered exclusively by internal badges
        let hasExternalChange = false;
        for (let i = 0; i < mutations.length; i++) {
            const added = mutations[i].addedNodes;
            for (let j = 0; j < added.length; j++) {
                const node = added[j];
                if (node.nodeType === 1) {
                    if (!node.classList.contains('custom-badge-group') && !node.classList.contains('custom-badge')) {
                        hasExternalChange = true;
                        break;
                    }
                } else {
                    hasExternalChange = true;
                    break;
                }
            }
            if (hasExternalChange) break;
        }

        if (hasExternalChange || mutations.some(m => m.removedNodes.length > 0)) {
            scheduleHighlight();
        }
    });

    _currentObserverTarget = document.querySelector('div[role="main"]') || document.body;
    _emailObserver.observe(_currentObserverTarget, { childList: true, subtree: true });
}

// ---------------- INIT ----------------
function init() {
    scheduleHighlight();
    observeEmailChanges();
}

init();
