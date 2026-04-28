# Gmail Sorter

A small Chrome extension that highlights Gmail messages based on sender, subject, and preview content.

## Setup

1. Open `chrome://extensions/` or `brave://extensions/`
2. Enable `Developer mode`
3. Click `Load unpacked`
4. Select the `gmail-sorter` folder
5. Open Gmail (`https://mail.google.com/`)
6. Click the extension icon to open the popup. The extension will automatically run and highlight emails.

> Note: The extension works on Gmail web pages only and uses Gmail's view selectors, so changes in Gmail's UI may require updates.

## What it highlights

The extension applies color highlights and a badge to Gmail message rows when it finds matches in:

- `senders`: the sender email address shown by Gmail
- `subjects`: the subject text of the email
- `contents`: the preview snippet text shown in the message list

It also adds a small left border accent and hover effect for each matched row.

## Rules used by the extension

The rules are defined in `content.js` inside the `classificationRules` array.
Each rule includes:

- `id`: category label shown on the badge
- `backgroundColor`: row background color
- `textColor`: text color for the row
- `senders`: sender email patterns
- `subjects`: words or phrases matched in email subject
- `contents`: words or phrases matched in the preview snippet

Current categories include:

- `irctc`
- `internship`
- `nptel`
- `chotadhobi`
- `moovit`
- `academic`
- `work`
- `congrats/greatings`
- `reddit`

## How it works

### `manifest.json`

- Requests `activeTab` and `scripting` permissions
- Grants access to `https://mail.google.com/*`
- Loads `content.js` into Gmail pages and shows `popup.html` as the extension popup

### `popup.js`

When the popup opens, `popup.js` runs immediately and injects `content.js` into the active Gmail tab. This means you do not need to click a separate button.

### `content.js`

The main script does the following:

1. Extracts email row data from Gmail using selectors:
   - sender: row element with `[email]`
   - subject: `.bog`
   - preview snippet: `.y2`
2. Matches the row against the rule set in this order:
   - sender patterns
   - snippet contents
   - subject words
3. Highlights matched rows with background color, left border, and badge
4. Observes Gmail page changes so new emails are highlighted automatically when navigating within Gmail

## Selector expectations

The code expects Gmail rows to contain:

- a sender element with an `email` attribute
- a subject container with class `.bog`
- a preview/snippet container with class `.y2`

If Gmail changes how it renders message rows, these selectors may need to be updated.

## Example of rule values

For a sample rule like:

```js
{
  id: "internship",
  senders: ["careers@", "jobs@", "hr@"],
  subjects: ["internship", "application status", "offer"],
  contents: ["stipend", "months duration", "role"]
}
```

This means:

- `senders`: any sender address containing `careers@`, `jobs@`, or `hr@` will match, e.g. `hr@example.com`
- `subjects`: any subject line containing `internship`, `application status`, or `offer` will match
- `contents`: any preview snippet containing `stipend`, `months duration`, or `role` will match

## Notes

- The badge is inserted before the subject text, so the category label appears first in the row.
- The extension uses Gmail's visible list row structure and runs automatically from the popup.
