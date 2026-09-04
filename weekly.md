Date Range: 2026-08-28 to 2026-09-04

Weekly GitHub Commits:

Repository: pohoda-raiffeisenbank
- docs(pohoda): add SVG logo references and descriptions

Add a logo image to each ### app section in README.md (statements
sharepoint, link fixer, year archiver, transaction report), matching
the pattern already used for pohoda-sharepoint-year-archiver. Adds
pohoda-raiffeisenbank-link-fixer.svg and
pohoda-raiffeisenbank-transaction-report.svg (copied from the app
icons under multiflexi/), and includes a redesigned
pohoda-raiffeisenbank-year-archiver.svg + its multiflexi/ counterpart,
which the README referenced but never actually existed on disk.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- feat(multiflexi): add pohoda-sharepoint-year-archiver app, TARGET_YEAR option

Registers the new MultiFlexi app (uuid b58d5bbe-...) that sorts bank
statement PDF/XML files out of the working SharePoint folder into
per-year subfolders, keeping only the current year in the working
folder while older years stay available for audits (dry-run by
default via ARCHIVE_APPLY).

Adds an optional TARGET_YEAR setting to restrict a run to a single
year instead of archiving every out-of-CURRENT_YEAR file at once
(exit code 2 on an invalid value). Also reworks file tracking to
carry each file's own SharePoint reference (server-relative URL or
Graph item id) instead of re-deriving it from the filename, and
deduplicates per-year folder creation.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- refactor(Pohoda/RaiffeisenBank/Statementor): mark duplicates and log appropriately

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: v.s.cz
- version(vitexsoftware-website): bump to version 0.202.8 for release
- chore: update .gitignore to exclude NetBeans IDE config and PHP error log
- feat(ui): add MultiFlexi and MCPRack promo banners and product page

- Created `PromoBanner` class for wide promotional banners.
- Updated CSS for promo banner styling.
- Added two new promo banners on the homepage for MultiFlexi and MCPRack.
- Created a dedicated product page for MCPRack with detailed content.

Repository: Redmine2AbraFlexi
- feat(multiflexi): add support for foreign currency invoices

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01KW2Udp7vyHe5ariwAXNFNx
- Merge branch 'main' of github.com:VitexSoftware/Redmine2AbraFlexi

