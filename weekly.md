Date Range: 2026-05-08 to 2026-05-15

Weekly GitHub Commits:

Repository: php-abraflexi
- Update for AbraFlexi 2026.3.14
- Fix Packagist self-replace error and update generated evidence data to v2026.3.11

Remove invalid replace.spojenet/flexibee self-reference from composer.json that
was causing Packagist to skip the main branch entirely; also apply CS-fixer
reformatting and regenerated Actions/EvidenceList/Formats/Relations/RO from
AbraFlexi server v2026.3.11.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Fix metainfo component type: addon→generic so appstream-generator exports icon

addon type requires an <extends> tag; without it validateMetainfo rejects
the component and skips icon export. generic is the correct type for a
PHP library, and allows appstream-generator to publish the stock icon to
the DEP-11 media dir so Mastodon announcements can attach it.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: PohodaSQL
- composer: update ergebnis/php-cs-fixer-config requirement (#29)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.59.0...6.62.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.62.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: Flexplorer
- Release 1.7: SVG logo, PHP8 packaging, AppStream fix

- Replace flexplorer-logo.png with flexplorer.svg throughout source
- Fix debian/flexplorer.install: prefix metainfo.xml with debian/ so
  dh_install can find it (was bare filename, not found in . or debian/tmp)
- Remove duplicate metainfo.xml entry from debian/install
- debian/conf/autoload.php: add InstalledVersions block with placeholders
- debian/rules: add PKG_VERSION/PKG_SOURCE/PKG_TYPE Make vars and
  APP_NAME/APP_VERSION sed injections for project-type autoloader
- debian/conf/flexplorer.conf: mod_php5.c → mod_php.c so open_basedir
  actually applies under PHP 8; add /usr/lib/flexplorer/ to open_basedir;
  drop PHP 5 directives removed in PHP 8

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: igdebi
- Release v0.3.0: modernize for Python 3.10+ and current dependencies

- Drop EOL Python 3.7–3.9; require Python 3.10+
- Remove legacy setup.py and setup.cfg; pyproject.toml is the sole build config
- Add type hints, pathlib.Path, and 60s request timeout to igdebi.py
- Fix shebang, drop utf-8 encoding header, remove unused shlex import
- Convert test suite to pytest under tests/ with mocked unit tests
- Switch lint/format tooling to ruff
- Bump validators>=0.28.0, requests>=2.32.0

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

