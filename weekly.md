Date Range: 2026-06-05 to 2026-06-12

Weekly GitHub Commits:

Repository: php-abraflexi
- build pipeline update

Repository: realpad2mailkit
- feat: declare MultiFlexi events (schema 3.4.0) in app definitions

Add events.emits/consumes blocks and bump schemaVersion to 3.4.0 so
Node-RED can connect producing and consuming MultiFlexi processes.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

Repository: pohoda-client-checker
- feat: declare MultiFlexi events (schema 3.4.0) in app definitions

Add events.emits/consumes blocks and bump schemaVersion to 3.4.0 so
Node-RED can connect producing and consuming MultiFlexi processes.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

Repository: pohoda-raiffeisenbank
- docs: add pohoda-sharepoint-link-fixer manpage, bump all to 1.7.2

Create missing manpage for pohoda-sharepoint-link-fixer documenting
IMPORT_SCOPE, POHODA_BANK_IDS, DATE_FROM/DATE_TO and multi-bank
behaviour. Register it in pohoda-raiffeisenbank.manpages.
Update version string to 1.7.2 in all manpages.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- chore: bump to 1.7.2, update docs/tests/multiflexi for link fixer changes

- Bump version to 1.7.2 in debian/changelog
- Add pohoda-sharepoint-link-fixer to README command list and add full
  documentation section covering IMPORT_SCOPE, POHODA_BANK_IDS and
  multi-bank behaviour
- Update multiflexi/pohoda_sharepoint_link_fixer.multiflexi.app.json:
  add IMPORT_SCOPE and POHODA_BANK_IDS entries, make DATE_FROM/DATE_TO
  optional (overrides rather than primary)
- Implement testsetScope() in StatementorTest to verify last_month and
  this_month scope resolution via DatePeriod

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: add IMPORT_SCOPE support to sharepoint link fixer

Resolves date range via IMPORT_SCOPE (same semantics as peer scripts)
using Statementor::setScope(). DATE_FROM/DATE_TO still override when
explicitly set, preserving backward compatibility.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: scope sharepoint link fixer to configured bank account

Filter SharePoint PDFs by ACCOUNT_NUMBER in filename and BV records
by POHODA_BANK_IDS (via sUcet.IDS JOIN) so that multi-bank Pohoda
setups don't cross-attach links between different bank accounts.
When POHODA_BANK_IDS is unset, all banks are processed as before.

Closes #20478

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: declare MultiFlexi events (schema 3.4.0) in app definitions

Add events.emits/consumes blocks and bump schemaVersion to 3.4.0 so
Node-RED can connect producing and consuming MultiFlexi processes.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

Repository: discomp2abraflexi
- feat: declare MultiFlexi events (schema 3.4.0) in app definitions

Add events.emits/consumes blocks and bump schemaVersion to 3.4.0 so
Node-RED can connect producing and consuming MultiFlexi processes.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

Repository: Flexplorer
- appstream icon update
- Merge pull request #50 from VitexSoftware/dependabot/composer/vitexsoftware/ease-bootstrap5-widgets-1.5.0

Bump vitexsoftware/ease-bootstrap5-widgets from 1.4.1 to 1.5.0
- Bump vitexsoftware/ease-bootstrap5-widgets from 1.4.1 to 1.5.0

Bumps [vitexsoftware/ease-bootstrap5-widgets](https://github.com/VitexSoftware/php-ease-twbootstrap5-widgets) from 1.4.1 to 1.5.0.
- [Release notes](https://github.com/VitexSoftware/php-ease-twbootstrap5-widgets/releases)
- [Commits](https://github.com/VitexSoftware/php-ease-twbootstrap5-widgets/compare/1.4.1...1.5.0)

---
updated-dependencies:
- dependency-name: vitexsoftware/ease-bootstrap5-widgets
  dependency-version: 1.5.0
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>

Repository: Redmine2AbraFlexi
- Merge pull request #44 from VitexSoftware/dependabot/github_actions/sigstore/cosign-installer-4.1.0

Bump sigstore/cosign-installer from 3.10.0 to 4.1.0
- feat: declare MultiFlexi events (schema 3.4.0) in app definitions

Add events.emits/consumes blocks and bump schemaVersion to 3.4.0 so
Node-RED can connect producing and consuming MultiFlexi processes.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

Repository: abraflexi-config
- feat: declare MultiFlexi events (schema 3.4.0) in app definitions

Add events.emits/consumes blocks and bump schemaVersion to 3.4.0 so
Node-RED can connect producing and consuming MultiFlexi processes.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

