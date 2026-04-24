Date Range: 2026-04-17 to 2026-04-24

Weekly GitHub Commits:

Repository: ipex-b2b
- fix: only composer type=project packages define APP_NAME/APP_VERSION

Libraries (type=library) only populate InstalledVersions with their
name and version; APP_NAME/APP_VERSION constants are reserved for
application packages (type=project).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: correct Makefile line continuation in sed injection (\\→\)

The python insertion script emitted \\ (two chars) which the shell
interpreted as a literal backslash argument to sed instead of a
Makefile recipe line continuation; replace with single \.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: extract version from debian/changelog at build time, not runtime

$version in InstalledVersions is now a '0.0.0' placeholder replaced by
debian/rules with PKG_VERSION (dpkg-parsechangelog) at dh_install time.
Debian packages carry no git history, so the changelog is the only
reliable version source; APP_VERSION define remains for Ease\Shared.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: InstalledVersions name always from composer.json, not APP_NAME

APP_NAME is for the application layer (Ease\Shared::appName()); the
package registry identity must always be the composer.json name field
written at build time, keeping compatibility with ad-hoc composer use.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: write composer.json name into autoload.php at build time, no runtime file I/O

Replace runtime json_decode(file_get_contents()) fallback with a build-time
sed injection: debian/rules replaces the 'unknown' placeholder with the
PKG_SOURCE value (jq .name from composer.json), keeping full compatibility
with composer package naming conventions.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: read package name from composer.json for InstalledVersions identity

Use jq to extract the composer.json name field at build time (PKG_SOURCE),
and fall back to __DIR__/composer.json at runtime when APP_NAME is unset.
Add jq to Build-Depends where missing.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: inject APP_NAME/APP_VERSION and populate Composer\InstalledVersions in Debian autoloader

- debian/control: add composer as first Depends (or replace composer-debian)
  to guarantee /usr/share/php/Composer/InstalledVersions.php is present
- debian/autoload.php: require InstalledVersions.php and call reload() to
  accumulate per-package data across chained autoloaders; APP_NAME/APP_VERSION
  constants pin the root package identity
- debian/rules: inject guarded defined()||define() constants at build time
  using PKG_SOURCE/PKG_VERSION from dpkg-parsechangelog

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: realpad2mailkit
- update for new multiflexi-cli
- fix: correct Makefile line continuation in sed injection (\\→\)

The python insertion script emitted \\ (two chars) which the shell
interpreted as a literal backslash argument to sed instead of a
Makefile recipe line continuation; replace with single \.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: extract version from debian/changelog at build time, not runtime

$version in InstalledVersions is now a '0.0.0' placeholder replaced by
debian/rules with PKG_VERSION (dpkg-parsechangelog) at dh_install time.
Debian packages carry no git history, so the changelog is the only
reliable version source; APP_VERSION define remains for Ease\Shared.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: InstalledVersions name always from composer.json, not APP_NAME

APP_NAME is for the application layer (Ease\Shared::appName()); the
package registry identity must always be the composer.json name field
written at build time, keeping compatibility with ad-hoc composer use.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: write composer.json name into autoload.php at build time, no runtime file I/O

Replace runtime json_decode(file_get_contents()) fallback with a build-time
sed injection: debian/rules replaces the 'unknown' placeholder with the
PKG_SOURCE value (jq .name from composer.json), keeping full compatibility
with composer package naming conventions.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: read package name from composer.json for InstalledVersions identity

Use jq to extract the composer.json name field at build time (PKG_SOURCE),
and fall back to __DIR__/composer.json at runtime when APP_NAME is unset.
Add jq to Build-Depends where missing.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: inject APP_NAME/APP_VERSION and populate Composer\InstalledVersions in Debian autoloader

- debian/control: add composer as first Depends (or replace composer-debian)
  to guarantee /usr/share/php/Composer/InstalledVersions.php is present
- debian/autoload.php: require InstalledVersions.php and call reload() to
  accumulate per-package data across chained autoloaders; APP_NAME/APP_VERSION
  constants pin the root package identity
- debian/rules: inject guarded defined()||define() constants at build time
  using PKG_SOURCE/PKG_VERSION from dpkg-parsechangelog

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: handle missing customerData keys 8 and 9 gracefully

Use null coalescing to avoid PHP warnings when Realpad returns rows
without ID Stavu or ID Zdroje fields.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: use php-phpoffice-phpspreadsheet instead of composer-debian fallback

Replace the /var/lib/composer/realpad-takeout/autoload.php fallback with
the proper /usr/share/php/PhpOffice/PhpSpreadsheet/autoload.php path now
provided by the new php-phpoffice-phpspreadsheet Debian package.
Add php-phpoffice-phpspreadsheet to runtime Depends.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- version up
- do not build for jammy
- build: replace composer-debian with pkg-php-tools standard PHP autoloading

Add debian/autoload.php using spl_autoload_register to load dependencies
from their Debian package paths (/usr/share/php/*) instead of the deprecated
/var/lib/composer/realpad2mailkit/ vendor directory.

Switch debian/rules to dh --with phpcomposer, update install file, add
pkg-php-tools to Build-Depends, replace composer-debian with
php-meditorial-mailkit-api in runtime Depends.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: discomp2abraflexi
- fix: resolve 9 bugs across ApiClient, Importer, and tests

- ApiClient: initialize $lastCurlError/lastResponseCode to avoid fatal
  errors on first access before any curl request
- ApiClient: fix debug flag comparison ('True' → 'true') that was always false
- Importer: promote 6 internal properties to public so test assertions work
- Importer: increment $updated counter in freshItems() update branch
- Importer: fix allTimeItems() using uncode() instead of code() for PartNo
  lookup, which caused every item to be re-imported as new on each run
- Importer: accept HTTP 200 (update) as success in updatePrice(), not just 201
- Importer: stop overwriting result entry (and losing 'name') on insert failure
- ApiClientTest: use assertInstanceOf(CurlHandle) instead of assertIsResource
  (PHP 8+ returns CurlHandle object, not resource)
- ApiClientTest: fix testGetErrors — HTTP 404 is not a curl network error

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- update for current multiflexi-cli
- fix: correct composer.json type to project

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: correct Makefile line continuation in sed injection (\\→\)

The python insertion script emitted \\ (two chars) which the shell
interpreted as a literal backslash argument to sed instead of a
Makefile recipe line continuation; replace with single \.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: extract version from debian/changelog at build time, not runtime

$version in InstalledVersions is now a '0.0.0' placeholder replaced by
debian/rules with PKG_VERSION (dpkg-parsechangelog) at dh_install time.
Debian packages carry no git history, so the changelog is the only
reliable version source; APP_VERSION define remains for Ease\Shared.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: InstalledVersions name always from composer.json, not APP_NAME

APP_NAME is for the application layer (Ease\Shared::appName()); the
package registry identity must always be the composer.json name field
written at build time, keeping compatibility with ad-hoc composer use.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: write composer.json name into autoload.php at build time, no runtime file I/O

Replace runtime json_decode(file_get_contents()) fallback with a build-time
sed injection: debian/rules replaces the 'unknown' placeholder with the
PKG_SOURCE value (jq .name from composer.json), keeping full compatibility
with composer package naming conventions.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: read package name from composer.json for InstalledVersions identity

Use jq to extract the composer.json name field at build time (PKG_SOURCE),
and fall back to __DIR__/composer.json at runtime when APP_NAME is unset.
Add jq to Build-Depends where missing.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: inject APP_NAME/APP_VERSION and populate Composer\InstalledVersions in Debian autoloader

- debian/control: add composer as first Depends (or replace composer-debian)
  to guarantee /usr/share/php/Composer/InstalledVersions.php is present
- debian/autoload.php: require InstalledVersions.php and call reload() to
  accumulate per-package data across chained autoloaders; APP_NAME/APP_VERSION
  constants pin the root package identity
- debian/rules: inject guarded defined()||define() constants at build time
  using PKG_SOURCE/PKG_VERSION from dpkg-parsechangelog

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

