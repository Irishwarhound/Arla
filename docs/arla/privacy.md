# Arla Privacy Policy

**Version 1.0 · Effective October 1, 2026**

Irishwarhound LLC ("we", "us") makes Arla for Windows and Android. Arla has no account with us, advertising, analytics, or server that receives your conversations. We do not receive automatic usage or crash reports. If you contact us, we receive what you choose to send.

## What stays on your devices

The Windows app keeps its records in `%APPDATA%\Arla`. It stores settings, projects, goals, tasks, plans, routines, notes and sticky notes, chats, memories, personas, skills, Home layouts, paired-device records, and model-use metadata. Model-use records contain the provider, model, route, timing and token counts, not prompts or replies; there is no automatic size limit yet. Skill-use records keep IDs, times, project and token counts, with the newest 5,000 entries retained. Ordinary error logs rotate at 512 KB with one previous file.

The latest 600 Arla messages form the desktop's live conversation. Older messages are archived in the local memory database before they leave that window; archive entries older than 180 days are removed when memory maintenance runs. Long-term memories can be edited or deleted in Memory. Superseded memories unused for 30 days and low-importance, unpinned, never-used memories after 60 days are removed during maintenance; the default limit is 20,000 memories.

Arla indexes readable passages and search vectors from Library folders you add **and from each project's configured folder**. It skips hidden, ignored, build and unsupported files, backup, signing and secret files, and files over 8 MB. Project folders are reread about every 30 minutes while Arla is idle. Removing a Library folder, or clearing or changing a project's folder, removes its passages on the next read. Arla also reads a project's folder when you ask it to work there and local coding-tool transcripts to show sessions and usage.

Research items you save stay on this computer and are included in its backups. Research uses cloud search only. Every Research assistant question and selected Research and Library excerpts go to a connected cloud model that searches the web itself (Google Gemini with Google Search, or the web search of OpenAI, Anthropic, OpenRouter or Groq), and that service runs the search. If none of them can answer, Research sends the question to Tavily Search, then sends its results and the selected excerpts to the chosen cloud model. When you use Check this source, the page is fetched through Arla's web lookup path and its excerpt may be included in that request. Research does not use a local model.

Image Studio sends a generation prompt or image search words to the service you select. Search result previews and pictures you explicitly save may be fetched from the image host named by that service. Generated results stay temporary until you press Save; saved pictures, prompts, source URLs, authors and licence labels stay in this computer's `data/image-studio/` gallery and its profile backups. Image service keys use Windows protected storage. The separate Google Images window is ordinary browsing at Google; Arla does not read or automate the page. A right-click Save to Image Studio explicitly downloads one picture to the local gallery.

On Android, Arla stores chats, settings, goals, Inbox items and captured photos, notes and sticky notes, offline edits waiting to sync, and downloaded models in the app's storage. It can retain up to 5,000 Arla turns. API keys and the phone-link key are kept in Android protected storage. Windows stores API and phone-link secrets with Windows protected storage; a desktop backup containing those encrypted values cannot make them readable on another PC. Records generally remain until you delete them or the app's data. Removing an app alone may leave its desktop data folder behind.

## When information leaves a device

- **AI providers you connect:** A request routed to a cloud model sends that provider the current message and bounded context, which can include project instructions, relevant memories, summaries, recent turns, attachments and tool results. When you ask Arla to update records from project files, their extracted text or a summary is sent to your connected cloud Brain. If that model searches the Library, the returned passages and file paths may be sent. Arla does not send the whole chat archive or Library index. A connected cloud provider may be selected automatically for a request; if it fails, Arla may try another connected provider or a local model. A phone request the computer cannot answer may use a phone model or a cloud provider whose key is saved on the phone. Each provider's own policy applies. Optional keyless public models also send the request to their operator.
- **Local models:** Ollama on your computer and downloaded phone models process requests locally. Library indexing and memory maintenance use a local model, unless you configured Ollama at another address. Provider health checks request a model list and send no conversation content.
- **Your paired devices:** Projects, plans, tasks, sticky notes, settings and Arla conversation data can move directly between your phone and computer over the local network or Tailscale. The current Android app seals phone-link requests, replies and updates with a device key. Older paired phones and the browser phone hub may still use a plain HTTP link with a reusable token on local Wi-Fi; Tailscale encrypts its network traffic. The Devices setting “Refuse phones on the old link” disables that older link.
- **Other connections you choose:** Fetching a public web page contacts that site; downloading a model contacts its host; OpenRouter phone sign-in contacts OpenRouter; connected MCP clients receive the results of tools they call. The desktop checks GitHub Releases for updates unless `autoUpdate` is off. A backup exported to a cloud folder is then handled by that service. We do not receive these connections.
- **Voice on Android:** Voice input uses the phone's speech recognizer. “Keep speech on this phone” is on by default. If you turn it off, the recognizer may use an online speech service under that service's policy. Arla does not keep an audio recording.

## Backups and crash reports

The computer keeps the newest 7 automatic profile backups and 10 manual ones. A profile backup includes records, sticky notes, the memory database, and encrypted keys. It excludes the rebuildable Library index, provider-limit notices, short-lived technical records, and error and crash logs. Restoring replaces only included records. Phone backups sent to the computer are stored separately, up to 10 per phone, and cannot be restored as desktop profiles. Backups you export remain wherever you put them.

Desktop crash reports are **off by default**. If you enable “Save crash reports on this computer” in Settings → Crash reports, Arla writes local files under `logs\crash-<date>.jsonl`. It removes detected keys and tokens, home-folder paths, email and IP addresses before writing. Each day is capped at 1 MB; files older than 14 days are pruned on the next write. Nothing uploads automatically. You choose whether to share a report.

## Your choices

You can edit or delete app records, remove a paired phone, turn off memory recall, and export a backup. On Windows, Settings can open the data folder. Removing the desktop app does not itself promise to erase `%APPDATA%\Arla`; delete that folder separately if you want to erase its remaining records and backups. On Android, uninstalling or clearing app data removes local app storage. A cloud provider may retain requests under its own policy; contact that provider for access or deletion.

Arla asks for device permissions when a feature needs them: camera for an Inbox photo, microphone for voice, files for chosen documents and backups, network for selected services and paired devices, and notifications for reminders. Refusing a permission disables the related feature.

Arla is not directed at children under 13. Device security protects local records, and operating-system protected storage protects keys. No system is perfectly secure. We will date material policy changes and describe changes to data sharing in release notes.

**Contact:** Irishwarhound LLC (Cody Dean) · Idaho, USA · irishwarhound@gmail.com
