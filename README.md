# Gmail Sorter

A Chrome extension that color-codes Gmail message rows based on sender, subject, and preview content — making your inbox easier to scan at a glance.

## Setup

1. Open `chrome://extensions/` or `brave://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `gmail-sorter` folder
5. Open Gmail (`https://mail.google.com/`)
6. Click the extension icon to run it. Emails are highlighted automatically.

> Note: The extension targets Gmail's current DOM structure. If Gmail updates its UI, the selectors in `content.js` may need to be revised.

## What it does

- Applies a **background color** (solid or gradient) to matched email rows
- Adds a **left border accent** using the rule's primary color
- Inserts a **category badge** before the subject text
- Adds a **hover effect** (inset shadow + slight dimming) on matched rows
- **Highlights the open email view** header area for a few specific categories (internship, holiday/announcement, assignment/meeting)
- **Watches for Gmail navigation** via a MutationObserver so new rows are highlighted as you move between folders without a page reload

## How matching works

For each email row, the extension extracts three fields and tests them against the rules in this order:

1. **Sender** — the `email` attribute on the sender element
2. **Subject** — text in the `.bog` element
3. **Snippet** — preview text in the `.y2` element

The first rule whose sender, subject, or snippet pattern matches wins. Rules are checked top-to-bottom in `classificationRules`, so order matters.

## Categories

### Services & Platforms

| Category | Match method |
|---|---|
| `irctc` | Sender |
| `reddit` | Sender |
| `mural` | Sender |
| `linkedin` | Sender |
| `indeed` | Sender |
| `grammarly` | Sender |
| `github` | Sender |
| `patreon` | Sender |
| `replit` | Sender |
| `lovable` | Sender |
| `vercel` | Sender |
| `openai` | Sender |
| `cursor` | Sender |
| `ollama` | Sender |
| `google` | Sender |
| `youtube` | Sender |
| `microsoft` | Sender |
| `quillbot` | Sender |
| `unstop` | Sender |
| `udemy` | Sender |
| `leetcode` | Sender |
| `hack2skill` | Sender |
| `resume.io` | Sender |
| `spotify` | Sender |
| `samsung` | Sender |
| `indigo` | Sender |
| `goodreads` | Sender |
| `moneycontrol` | Sender |
| `steam` | Sender |

### Finance & Banking

| Category | Match method |
|---|---|
| `nse` | Sender |
| `bse` | Sender |
| `groww` | Sender |
| `hdfcbank` | Sender |
| `sbi` | Sender |
| `motilaloswal` | Sender |
| `franklintempleton` | Sender |

### College & Academic

| Category | Match method |
|---|---|
| `mensHostel` | Sender |
| `nptel` | Sender + subject |
| `moovit` | Sender + subject + snippet |
| `academic` | Subject + snippet |

### Personal & Other

| Category | Match method |
|---|---|
| `irctc` | Sender |
| `chotadhobi` | Sender + subject |
| `internship` | Subject + snippet |
| `garbage` | Subject + snippet |

> `work` is defined in the file but currently commented out.

## Styling: solid vs. gradient

Rules can define either a single `backgroundColor` or an array of `backgroundColors`. When multiple colors are provided, the row background and badge use a left-to-right linear gradient. Examples with gradients: `google`, `youtube`, `microsoft`, `steam`, `groww`, `moneycontrol`, `lovable`, `resume.io`.

## Adding or editing rules

All rules live in the `classificationRules` array at the top of `content.js`. Each rule has this shape:

```js
{
    id: "category-name",          // label shown in the badge
    backgroundColor: "#rrggbbcc", // solid color (use this OR backgroundColors)
    backgroundColors: ["#color1", "#color2"], // gradient (optional)
    textColor: "#ffffff",
    senders: ["@domain.com", "specific@address.com"],
    subjects: ["keyword", "phrase"],
    contents: ["snippet keyword"]
}
```

- **`senders`** — substring match against the sender's email address
- **`subjects`** — substring match against the subject line (case-insensitive)
- **`contents`** — substring match against the preview snippet (case-insensitive)

Any of the three arrays can be left empty (`[]`) if that field isn't needed for matching.

## File structure

| File | Purpose |
|---|---|
| `manifest.json` | Declares permissions, host access, popup, and content script |
| `content.js` | All rule definitions, extraction, classification, and DOM manipulation |
| `popup.html` | Minimal popup UI shown when the extension icon is clicked |
| `popup.js` | Re-injects `content.js` into the active tab when the popup opens |
| `style.css` | Reserved for future external styles (currently empty) |

## Selector reference

| Selector | What it targets |
|---|---|
| `tr[jscontroller]` | Gmail email list rows |
| `[email]` | Sender element with email address attribute |
| `.bog` | Subject text container |
| `.y2` | Preview snippet container |
| `.ha` | Email header area (used in open-email highlighting) |