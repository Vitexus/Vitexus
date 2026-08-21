Date Range: 2026-08-14 to 2026-08-21

Weekly GitHub Commits:

Repository: ansible
- docs: Rename WARP.md to AGENTS.md for consistency

Repository: php-hspdev-huaweiapi
- build pipeline update
- fix(debian): remove unused distribution from release pipeline

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- chore(debian): re-enable debian:forky in CI matrices

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- fix(debian): correct metainfo.xml installation path

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- chore(debian): add ubuntu:resolute to CI and release build matrices

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: system
- docs: Rename WARP.md to AGENTS.md for consistency
- docs(README): add Debian packaging badge

Repository: PHP-Realpad-Takeout
- docs: Rename WARP.md to AGENTS.md for consistency

Repository: pohoda-raiffeisenbank
- feat(sharepoint): allow disabling or redirecting XML statement uploads

Add SHAREPOINT_UPLOAD_XML (default true) to skip uploading XML
statements to SharePoint entirely, and OFFICE365_PATH_XML to route
XML uploads to a different folder than PDFs. Both work identically
across the legacy SharePoint REST and Graph app-only upload paths.
PDF upload and Pohoda mServer import are unaffected either way.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- refactor(pohoda-sharepoint-link-fixer.php): add permanent link upgrades and URL format checks

- Stage 1 now resolves permanent Graph createLink share links.
- Stage 3 compares the stored URL to ensure old-format links are upgraded to current permanent links on --apply.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: discomp2abraflexi
- i18n(metainfo): add Czech summary and description

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: v.s.cz
- refactor(projects): extend $projectLogo to search img/deb for icons

- Add support for searching `img/deb` directory for project logos.
- Update coverage from 22/160 to 70/160 projects with real logos.
- Added 42 new SVG/PNG/GIF icons under `src/img/deb`.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- feat(apps): add Thermoservice to homepage and projects grid

- Updated `MainPageMenu` to include a new parameter for demo URLs.
- Added Thermoservice to the homepage applications carousel and projects grid.
- Fixed project cards in `projects.php` to display real per-project logos when available.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- chore(composer): update dependency lock file

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- fix(i18n): complete Czech localization of project pages

AppStream-sourced project names/summaries/descriptions were hardcoded
to the neutral "C" locale, ignoring the site's selected language.
Add AppStream::localized() to prefer the current locale with fallback
to en-US/en/C, and use it in deb.php, debs.php and MainPageMenu's
excerpt rendering. Also regenerate and complete the gettext catalogs
(xgettext + msgmerge), filling in translations that had gone stale
since 2022.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: netbeans-php-tools
- docs: Rename WARP.md to AGENTS.md for consistency

Repository: Flexplorer
- Bump phpunit/phpunit from 13.2.5 to 13.3.1 (#66)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 13.2.5 to 13.3.1.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/13.3.1/ChangeLog-13.3.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/13.2.5...13.3.1)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 13.3.1
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- i18n(metainfo): add Czech summary and description

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: php-ease-twbootstrap-widgets
- docs: Rename WARP.md to AGENTS.md for consistency

Repository: Redmine2AbraFlexi
- i18n(metainfo): add Czech summary and description

