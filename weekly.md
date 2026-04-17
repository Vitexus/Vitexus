Date Range: 2026-04-10 to 2026-04-17

Weekly GitHub Commits:

Repository: ipex-b2b
- fix: fix nullable CurlHandle and PHP 8 is_resource() in disconnect()

- Declare $curl as ?CurlHandle = null to allow null assignment on disconnect
- Replace is_resource() guard with instanceof CurlHandle (PHP 8+)
- Apply php-cs-fixer formatting to affected files

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- docs: rewrite AGENTS.md with accurate project structure and conventions

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: correct README badges — HTTPS, MIT license, and Packagist package name

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: migrate to static debian/autoload.php, drop composer-debian and phpab

- Add static debian/autoload.php with PSR-4 spl_autoload_register for IPEXB2B\ namespace
- Remove phpab build-time autoloader generation from debian/rules
- Remove deprecated composer-global-update call from debian/postinst
- Drop phpab from Build-Depends in debian/control

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

