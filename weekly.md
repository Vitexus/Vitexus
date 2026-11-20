Date Range: 2026-11-13 to 2026-11-20

Weekly GitHub Commits:

Repository: spojeitisac
- feat(wazuh): vault the password of the Wazuh API user moora

moora (role readonly) was created on wazuh.spojenet.local; its
credentials are moora's personal override of mcp-server-wazuh in
mcprack on 10.11.25.174.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- fix(requirements): require community.zabbix >= 4.3.0 for Debian 13

4.1.0 has no Debian 13 row in its agent version table, so
`make wazuh-prod-monitoring` died on "Check that version is supported".

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- feat(spoje_linux): set the time zone (Europe/Prague by default)

wazuh.spojenet.local and SE-MCP-RACK01 came up in America/New_York
from the image, so local logs read 6 hours off. New
spoje_linux_timezone variable, default Europe/Prague.

Also clear the role's lint debt the pre-commit hook now sees: FQCNs,
local_action -> delegate_to localhost (without become), ignore_errors
-> failed_when: false, explicit modes on the rsyslog files, no nested
template in the authorized_keys lookup. Skip var-naming[no-role-prefix]
for path-named roles.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- fix(wazuh): mint the self-agent token for wazuh_manager_address

The host role minted the manager's own enrollment token for
wazuh_dashboard_host, which is now the 0.0.0.0 bind address. Use a
dedicated wazuh_manager_address (wazuh.spojenet.local) instead.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- fix(wazuh): address wazuh.spojenet.local by name after move to .178

- Dashboard binds 0.0.0.0 (was the old LAN IP, so it failed to start)
- Manager certs: agent_san/api_san carry wazuh.spojenet.local instead
  of a fixed wazuh_manager_ips entry (reissued on the host as well)
- Agents and the enrollment token use the hostname
- Define wazuh_indexer_admin_password for services/wazuh_server
- Inventory keeps the IP (ProxyJump resolves on haproxy, which cannot
  resolve *.spojenet.local)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- chore(lint): allow path role references, restart wazuh-agent via handler

- .ansible-lint: skip role-name[path]; roles are referenced as
  services/..., hosts/..., common/... by design (AGENTS.md), and
  exclude the vendored wazuh-ansible checkout
- services/wazuh_agent: the Docker listener restart becomes a handler
  (no-handler)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>

Repository: realpad2mailkit
- chore(multiflexi): update REALPAD_PASSWORD type to password

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>

Repository: AbraFlexi-ClientZone
- feat(debian): add IPEX and Subreg plugin packages

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(ClientZone): add "Document type" column to invoice and order listings

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- refactor(ClientZone): set default DataTables page length to 50 rows

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- refactor(Customer): restrict login-based contact lookup in getUserID()

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- Refactor(Customer): add method to recover userID and update loginSuccess

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(navbar): wrap search input and button in input-group, adjust CSS for typeahead behavior

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(hermes.spoje.net/clientzone): add mbstring dependency

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(searcher): show real prices in the catalog search results

The pricelist search asked AbraFlexi for a list of columns, but cenaZaklBezDph is
counted only in the full record, so every result showed 0,00. It loads the full
record now and formats the price as the catalog does.

Refs Redmine #172

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(multiflexi): update order plugin and cart functionality

- MultiFlexi order: one service per order, item labelled with the existing
  label API (labels MultiFlexi and SaaS do not exist in AbraFlexi and the
  proforma was refused, so ordernow.php failed)
- cart: the product name links to the product detail
- price list: product image popup works, name links to the detail

Refs Redmine #172

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- Refactor(document.php): handle proforma and credit notes appropriately

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(clientzone): display reminders sent on invoice page

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(customer): handle empty dates in dateToIso for AbraFlexi

- Ignore empty dates from AbraFlexi in dateToIso
- Update tests for date helpers
- Fix #177: Dashboard no longer shows reminders with today's date on invoices without reminders

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(debian): add MultiFlexi plugin for order processing

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(abraflexi): escape product name to prevent stored XSS

Escaping the product name in all relevant places to fix security review finding.

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(product): add product detail page with billing kind details

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- refactor(search): fix search functionality and improve security

- Replace broken `getColumnsFromFlexibee()` method with custom search logic
- Sanitize search terms to prevent SQL injection
- Restrict search results to customer's company and relevant documents
- Update tests and translations
- Bump version to 2.8.2

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- Refactor(verifyemail.php): Ensure confirmation link is not used twice for existing accounts

- Opening the confirmation link multiple times for an existing account now leads to sign in instead of "Registration failed".
- Opening the link (mail scanners do) only shows a confirmation button; the customer's POST finishes the registration.
- Updated Czech translations.
- Added tests for confirmation link behavior.
- Updated changelog for version 2.8.1.

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(ease/mailer): correct method name for adding text in emails

- Replaced `addItem()` with `addText()` in Registration.php, newcustomer.php, passwordrecovery.php, and changepassword.php.
- Resolves Redmine #177.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(ClientZone): remember customer language in AbraFlexi

- Adds `ClientZone\CustomerLanguage` to store the language chosen during registration.
- Updates `newcustomer.php` to include language in the verification token.
- Modifies `Registration::complete` to store the language for new and existing companies.
- Adds tests for language functionality.
- Updates README and changelog for version 2.8.0.

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(debian/Jenkinsfile.release): make chown non-fatal for NFS files

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- chore(abraflexi-clientzone): update dependency for production build

Replaces php-vitexsoftware-ease-bootstrap5 with php-vitexsoftware-ease-twbootstrap5 to fix production build issue (Redmine #177).

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(ClientZone): add supplier configuration fallback for client zone

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(clientzone): add contract withdrawal functionality

- Add ClientZone\ContractWithdrawal to set platiDoData of withdrawn items
- Implement CSRF token validation in ClientZone\CsrfToken
- Update PHPUnit tests for Contract (40 tests total)
- Regenerate Czech translations via make i18n
- Update README and changelog for version 2.6.0

Refs Redmine #177

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>

Repository: Redmine2AbraFlexi
- feat(multiflexi/redmine2abraflexi): add missing "tags" array for better application discoverability

- Added "tags" array with relevant keywords for easier filtering in MultiFlexi.

Refs #182

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- fix(debian/Jenkinsfile): clear workspace before unstash to avoid AccessDeniedException

The first parallel branch reuses the SCM Checkout workspace, whose read-only .git packs cannot be overwritten by unstash. Empty the directory in place after chown.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- chore(debian): consolidate SCM checkout and fix node scope for Publish to Aptly

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- composer: update ergebnis/php-cs-fixer-config requirement (#75)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.58.0...6.65.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.65.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

