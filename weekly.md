Date Range: 2026-05-22 to 2026-05-29

Weekly GitHub Commits:

Repository: php-abraflexi
- Merge pull request #104 from Spoje-NET/dependabot/composer/ergebnis/php-cs-fixer-config-tw-6.62

composer: update ergebnis/php-cs-fixer-config requirement from ^6.60 to ^6.62

Repository: .github
- Add full project listing with categories

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: pohoda-client-checker
- feat: use mserver credential prototype for Pohoda fields

Add "mserver" to requirements and remove POHODA_ICO, POHODA_URL,
POHODA_USERNAME, POHODA_PASSWORD from environment — these are now
supplied via the multiflexi-mserver credential prototype.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: pohoda-raiffeisenbank
- fix: update multiflexi app configs with SQLServer requirement and full DB fields

- Replace PohodaSQL/DatabaseConnection requirements with SQLServer
- Fix DB_PORT type to integer and set sensible defaults (127.0.0.1, 1433)
- Add complete DB connection fields to pohodasql_raiffeisenbank_sharepoint config
- Reorder DB_SETTINGS after DB_PASSWORD in sharepoint_link_fixer config

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: normalize MServer requirement capitalization in multiflexi app configs

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: remove trailing comma in debian/control Depends field

Trailing comma followed by blank line caused dpkg-buildpackage to fail
parsing the multiflexi-pohoda-raiffeisenbank stanza.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: v1.7.1 — add AppStream stock icons for both packages

- Add <icon type="stock"> to pohoda-raiffeisenbank metainfo XML
- Enable metainfo installation for pohoda-raiffeisenbank package
- Add metainfo XML for multiflexi-pohoda-raiffeisenbank with stock icon
- Install multiflexi-pohoda-raiffeisenbank.svg to hicolor icon theme
- Validate both metainfo files in debian/rules

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- deb deps update
- code reformat
- feat: v1.7.0 — extend report protocol, upload XML to SharePoint, fix test bootstrap

Report: split sharepoint into pdf/xml sub-keys; pre-initialize
raiffeisenbank and messages fields; record per-file errors instead of
bare strings so consumers can distinguish URL from error.

Tests: add statementFilename test for both PDF and XML extensions;
fix bootstrap.php to use __DIR__-based paths so phpunit.xml can load
it from the project root; add phpunit.xml wiring the bootstrap.

Docs: update README with new operation order and full JSON report
schema; expand manpage with options, report fields and exit codes.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- refactor: reorder operations to download both PDF and XML before SharePoint upload

Download PDF and XML statements first, then upload both to SharePoint in a
single context session, then import XML to Pohoda via mServer, then attach
SharePoint PDF links to the imported bank records.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: use mserver credential prototype for Pohoda fields

Add "mserver" to requirements and remove POHODA_ICO, POHODA_URL,
POHODA_USERNAME, POHODA_PASSWORD from environment — these are now
supplied via the multiflexi-mserver credential prototype.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: use DatabaseConnection and mServer credential helpers for pohodasql sharepoint app

Add DatabaseConnection to requirements, remove DB_* env vars (now from
credential) and deduplicate POHODA_ICO/URL/USERNAME/PASSWORD (from mServer
credential). App-specific Pohoda config vars remain in environment.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: change Office365 category to API in MultiFlexi app JSON

Category "Office365" is not in the valid enum; "API" is the correct
category for Office 365 credentials (username, password, clientid, etc).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: update pohoda_sharepoint_link_fixer app JSON to schema 3.3.0

Replace invalid "Office365" category with "API" per updated schema enum.
Bump schemaVersion from 3.1.0 to 3.3.0.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- do not build for resolute
- chore: release 1.6.0, fix Transactor::setScope() signature

- Bump version to 1.6.0 in debian/changelog
- Fix Transactor::setScope() return type (void → DatePeriod) and
  parameter type hint (missing string) to match parent class signature;
  fixes PHP 8.4 fatal error that crashed test suite

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: revert POHODA_DB_* to DB_*, fix smart join and DB_SETTINGS for MSSQL

- Revert all POHODA_DB_* env vars back to DB_* in fixer tool,
  PohodaBankClient and sharepoint pipeline — SQLServer credential
  type provides DB_* directly; no MySQL conflict for these tools
- Add DB_SETTINGS pass-through to DOC constructor so TrustServerCertificate
  and encrypt=false can be set per environment
- Add disableSmartJoin() to BV query to prevent FluentPDO from
  auto-joining DOC table when it appears in the NOT EXISTS subquery
- Update multiflexi app JSON: DB_* field names, add DB_SETTINGS env var
- Update icon SVG with Inkscape-edited version

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: add SharePoint link fixer tool for Pohoda bank records

Adds pohoda-sharepoint-link-fixer, a standalone repair tool that
retroactively attaches missing SharePoint PDF URL links to Pohoda bank
records. During the period when MSSQL support was broken, statements were
uploaded to SharePoint but the DOC table entries were never written.

The tool lists SharePoint PDFs for a given date range (DATE_FROM/DATE_TO),
queries BV records without a RelDocType=3 DOC entry via FluentPDO, and
calls DOC::urlAttachment() for each match. Requires only OFFICE365_* and
POHODA_DB_* credentials — no mServer or Raiffeisen API access needed.

Also restores attachSharepointUrl() to use PohodaSQL direct insert with
POHODA_DB_* env vars (avoids MultiFlexi injecting MySQL DB_* credentials),
restores POHODA_DB_* vars in the sharepoint pipeline script, adds
PohodaSQL to debian/autoload.php and debian/control, includes MultiFlexi
app.json and flat SVG icon (UUID 4b2e7f91).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: abraflexi-server-deb
- dev pipeline update

