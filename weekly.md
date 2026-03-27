Date Range: 2026-03-20 to 2026-03-27

Weekly GitHub Commits:

Repository: php-abraflexi
- Readme Update
- Merge pull request #97 from petaak/master

Remove the disconnect method of the RO class
- Merge pull request #95 from Spoje-NET/dependabot/composer/friendsofphp/php-cs-fixer-tw-3.94

composer: update friendsofphp/php-cs-fixer requirement from ^3.89 to ^3.94
- Merge pull request #94 from Spoje-NET/dependabot/composer/ergebnis/php-cs-fixer-config-tw-6.60

composer: update ergebnis/php-cs-fixer-config requirement from ^6.59 to ^6.60
- fix: update package name in README and add version 3.7 changes
- v3.7.2 release
copyrigt year update
- Fix #96 - Error in external id parsing
- fix: correct package name in replace section of composer.json
- fix: add replace section for spojenet/abraflexi in composer.json
- fix: update package name to spojenet/abraflexi and PHP version constraint in composer.json
- Check the external ID key parameter before searching it in the external keys array

In PHP 8.5 passing null as the key parameter for array_key_exists() is deprecated.
- Drop the disconnect method of the RO class

Function curl_close() is deprecated since PHP 8.5, and it has no effect since
PHP 8.0.
- Update the @param annotation of the getColumnsFromAbraFlexi method

Filter conditions don't have a string key. For example here: https://github.com/Spoje-NET/php-abraflexi/blob/main/src/AbraFlexi/RO.php#L2122

Repository: pohoda-raiffeisenbank
- Merge pull request #35 from Spoje-NET/dependabot/composer/vitexsoftware/pohoda-connector-tw-0.11.0

composer: update vitexsoftware/pohoda-connector requirement from ^0.10.0 to ^0.11.0
- composer: update vitexsoftware/pohoda-connector requirement

Updates the requirements on [vitexsoftware/pohoda-connector](https://github.com/VitexSoftware/PHP-Pohoda-Connector) to permit the latest version.
- [Release notes](https://github.com/VitexSoftware/PHP-Pohoda-Connector/releases)
- [Commits](https://github.com/VitexSoftware/PHP-Pohoda-Connector/compare/0.10.0...0.11.0)

---
updated-dependencies:
- dependency-name: vitexsoftware/pohoda-connector
  dependency-version: 0.11.0
  dependency-type: direct:production
...

Signed-off-by: dependabot[bot] <support@github.com>

Repository: discomp2abraflexi
- Merge branch 'main' of github.com:Spoje-NET/discomp2abraflexi
- chore: update development dependencies and fix syntax in discomp2abraflexi.php
- fix: file descriptor leak on PHP 8+ due to is_resource() CurlHandle mismatch

PHP 8.0 changed curl_init() to return a CurlHandle object instead of a
resource. Any code using is_resource() to guard curl_close() silently
skips the close, leaking one file descriptor per request/object
lifetime. Over time this exhausts the process fd limit.

Changes:
- ApiClient::disconnect(): replace is_resource() with instanceof CurlHandle
- ApiClient::curlInit(): close existing handle before reinitializing to
  prevent leak on repeated curlInit() calls
- Importer::abraFlexiDisconnect(): explicitly call disconnect() on each
  AbraFlexi object before nulling it, so their cURL handles are released
  immediately rather than relying on GC + broken is_resource() check
- Importer::freshItems(): remove redundant manual null-out at end of loop
  (abraFlexiDisconnect() at start of next iteration already handles this)
  and remove gc_collect_cycles() which was a workaround for the above
- Merge pull request #29 from Spoje-NET/dependabot/composer/friendsofphp/php-cs-fixer-tw-3.94

composer: update friendsofphp/php-cs-fixer requirement from ^3.92 to ^3.94
- fix: correct variable usage in postinst script for multiflexi
- feat: update autoloading and improve script execution for discomp2abraflexi
- feat: add autoloader and update installation files for discomp2abraflexi package

Repository: v.s.cz
- RSS fix
- main menu modernization
- autoloader update
- autoloader fix
- Refactor project structure and update installation scripts for improved organization
- source codes moved to src folder
- Remove unnecessary composer-debian call from postinst script
- build simplified
- Refactor composer.json and control files to remove unnecessary dependencies
- build pipeline add
- autloader update

Repository: abraflexi-config
- composer: bump phpstan/phpstan from 2.1.40 to 2.1.42 (#58)

---
updated-dependencies:
- dependency-name: phpstan/phpstan
  dependency-version: 2.1.42
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

