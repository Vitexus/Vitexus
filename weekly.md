Date Range: 2026-10-23 to 2026-10-30

Weekly GitHub Commits:

Repository: AbraFlexi-ClientZone
- ci: add MultiFlexi release Jenkinsfile

Production builds for repo.multiflexi.eu with Multiflexi Docker images
and MultiFlexi-publish trigger.

Co-authored-by: Cursor <cursoragent@cursor.com>
- fix(php): allow /etc/locale.alias in open_basedir

Ease\Locale scans /usr/share/locale; Debian's locale.alias symlink
resolves to /etc/locale.alias and triggered open_basedir warnings.

Co-authored-by: Cursor <cursoragent@cursor.com>
- i18n(clientzone): update registration wizard translations

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- refactor(auth): rework registration into wizard, skip known contacts/companies

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- chore: add .env to .gitignore

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(ClientZone/ui/Pricelist.php): load entire price list category

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- chore(debian): ignore build artefacts and PHPUnit cache

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- security: Harden registration flow and fix account takeover vulnerability

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- i18n(clientzone): Update translations for new registration flow

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(ClientZone): implement two-step registration and email verification

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- i18n(multiflexi-web5): update language selection and welcome text handling

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(contract): validate contract id and escape title

Accept only a positive integer id and escape the contract code in the page
title. Access is still enforced by GateKeeper on the loaded contract.

Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>
- feat(ClientZone): add ContractLister for contract details

- Introduced ContractLister class extending \AbraFlexi\Smlouva
- Added contract detail page with customer-visible fields
- Updated myservices.php to use DocumentDataTable with ContractLister
- Removed getContracts() method from Customer
- Enhanced InvoiceLister to display cancelled invoices with a badge
- Updated translations for "Cancelled" to "Stornováno" in Czech and English
- Bumped version to 2.5.0

Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>
- feat(clientzone): add "My services" page listing customer contracts

Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>

