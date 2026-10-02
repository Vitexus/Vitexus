Date Range: 2026-09-25 to 2026-10-02

Weekly GitHub Commits:

Repository: php-subreg
- composer: update ergebnis/composer-normalize requirement (#46)

Updates the requirements on [ergebnis/composer-normalize](https://github.com/ergebnis/composer-normalize) to permit the latest version.
- [Release notes](https://github.com/ergebnis/composer-normalize/releases)
- [Changelog](https://github.com/ergebnis/composer-normalize/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/composer-normalize/compare/2.53.0...2.54.0)

---
updated-dependencies:
- dependency-name: ergebnis/composer-normalize
  dependency-version: 2.54.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: update ergebnis/php-cs-fixer-config requirement (#47)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.62.0...6.64.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.64.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: PohodaSQL
- composer: update ergebnis/composer-normalize requirement (#33)

Updates the requirements on [ergebnis/composer-normalize](https://github.com/ergebnis/composer-normalize) to permit the latest version.
- [Release notes](https://github.com/ergebnis/composer-normalize/releases)
- [Changelog](https://github.com/ergebnis/composer-normalize/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/composer-normalize/compare/2.53.0...2.54.0)

---
updated-dependencies:
- dependency-name: ergebnis/composer-normalize
  dependency-version: 2.54.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: update ergebnis/php-cs-fixer-config requirement (#34)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.62.0...6.64.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.64.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: realpad2mailkit
- composer: update ergebnis/php-cs-fixer-config requirement (#9)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.34.0...6.64.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.64.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: update ergebnis/composer-normalize requirement (#10)

Updates the requirements on [ergebnis/composer-normalize](https://github.com/ergebnis/composer-normalize) to permit the latest version.
- [Release notes](https://github.com/ergebnis/composer-normalize/releases)
- [Changelog](https://github.com/ergebnis/composer-normalize/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/composer-normalize/compare/2.53.0...2.54.0)

---
updated-dependencies:
- dependency-name: ergebnis/composer-normalize
  dependency-version: 2.54.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: pohoda-client-checker
- composer: update ergebnis/composer-normalize requirement (#34)

Updates the requirements on [ergebnis/composer-normalize](https://github.com/ergebnis/composer-normalize) to permit the latest version.
- [Release notes](https://github.com/ergebnis/composer-normalize/releases)
- [Changelog](https://github.com/ergebnis/composer-normalize/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/composer-normalize/compare/2.53.0...2.54.0)

---
updated-dependencies:
- dependency-name: ergebnis/composer-normalize
  dependency-version: 2.54.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: pohoda-raiffeisenbank
- fix(multiflexi): match JSON reports for account numbers with bank code

RESULT_FILE defaults to <prefix>_{ACCOUNT_NUMBER}.json. When
ACCOUNT_NUMBER is given as "5140016517/5500" the slash becomes an
underscore in the file name, which the "<prefix>_\d+\.json$" artifact
patterns did not match, so MultiFlexi silently dropped the report from
the job. Allow underscores after the prefix.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- Release v1.9.0
- Merge branch 'main' into production
- fix(cli): make getopt long options and -o/-e values work

Long options were passed to getopt() as a single string
('output::environment::'), so --output/--environment were never
recognised. Short options used optional values ('o::'), which only
match the "-ofile" form - "-o file" yielded false and crashed the
year archiver in file_put_contents(). Values are now required and
each long option is a separate array entry. Scripts that declared
-o/-e but only read the long form now honour the short form too.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- refactor(year-archiver): extract SharePointYearArchiver class and add tests

Move file selection and archive/move logic out of
pohoda-sharepoint-year-archiver.php into a testable class with injected
SharePoint access closures. Behaviour is unchanged; the script now only
loads config, builds the legacy/Graph closures, runs the archiver and
writes the JSON report.

Add SharePointYearArchiverTest covering file selection (year taken from
the statement date, CURRENT_YEAR/TARGET_YEAR filtering, non-statement
files ignored), dry-run touching nothing, one ensureFolder per year, and
exit codes 1/3 on listing, folder and move failures.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>

Repository: v.s.cz
- Replace old Tux logo with new Vitex Software nymph portrait (180x180)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- refactor(ui/WebPage): remove duplicate addPageColumns declaration

Fixes 'Cannot redeclare VSCZ\ui\WebPage::addPageColumns()' fatal causing HTTP 500 on vitexsoftware.com.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(debian/Jenkinsfile): ensure .git objects are writable before unstash

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- Merge branch 'main' of github.com:VitexSoftware/v.s.cz
- refactor: code-style cleanup and data regeneration

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- Merge pull request #6 from VitexSoftware/dependabot/composer/league/commonmark-2.10.2

build(deps): bump league/commonmark from 2.10.0 to 2.10.2
- Merge branch 'main' of github.com:VitexSoftware/v.s.cz

# Conflicts:
#	src/article.php
#	src/login.php
- build(deps): bump league/commonmark from 2.10.0 to 2.10.2

Bumps [league/commonmark](https://github.com/thephpleague/commonmark) from 2.10.0 to 2.10.2.
- [Release notes](https://github.com/thephpleague/commonmark/releases)
- [Changelog](https://github.com/thephpleague/commonmark/blob/2.10/CHANGELOG.md)
- [Commits](https://github.com/thephpleague/commonmark/compare/2.10.0...2.10.2)

---
updated-dependencies:
- dependency-name: league/commonmark
  dependency-version: 2.10.2
  dependency-type: direct:production
...

Signed-off-by: dependabot[bot] <support@github.com>
- Merge pull request #5 from SkeliIT/redesign

Redesign: nový vzhled, úvodní stránka s nabídkou a opravy stránek s HTTP 500
- Merge pull request #4 from VitexSoftware/dependabot/composer/league/commonmark-2.10.0

build(deps): bump league/commonmark from 2.9.1 to 2.10.0
- Fix pages broken by newer Ease libraries (HTTP 500 on production)

- deb.php, package.php: missing ?package= redirects instead of trim(null)
- hosting, imap2mx, monitoring: WebPage::addPageColumns() and
  _format_bytes() helpers from the old Ease page class
- login, moloch, loginbox: ImgTag/Form signatures, no GlyphIcon
- repos, repostats, monitoring, tbpackage: Tabs(array, array) + addTab()
  with content; Shared::db() and PackageInfo::getPackagesInfo() replaced
- rss, newdebs: STATS_* constants optional; valid RSS dates and escaping
- AccessLog: parameterized LIKE queries, main DB fallback, no crash
  without the stats database
- install.php: reflected XSS – package name validated and escaped
- newsedit: anonymous visitors are Ease\Anonym (Shared::user() looked
  for a missing class User)
- flexibee: Ease\TWB5\Carousel replaced by ui\Showcase card grid
- createaccount: the form used the removed EaseMail/TakeMyTable API;
  registration is not offered, the page says so and links to contact
- tbpackage, imap2mx: download directory checked before reading

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- Subpages: shared page header, contact redesign, readable articles

- ui\PageHero: eyebrow, title and lead on a soft nebula, full width
- Articles/article: inline light-theme styles moved to css/vitex.css
  (titles were dark on dark)
- Contact: person, billing details and links in three cards
- Automation: pricing columns fixed (col-md-12 + col-md-4 stacked them)
- Projects, packages: page header; content limited to 1240 px

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- Keep long prices on one line

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- Homepage activity: WakaTime week and languages, GitHub pushes

The WakaTime share charts exist only as SVG, so values are read from them;
results are cached for an hour in the temp dir (stale cache on failure).
Optional GITHUB_TOKEN raises the GitHub API rate limit.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- Sunset palette, Czech translations, catalog grid, themed outline buttons

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- Add the Magnetic Nymph mascot: footer badge and social preview

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
- WIP: cyber hippies redesign – header, footer, homepage, theme

New theme (css/vitex.css, js/vitex.js) replacing the Freelancer template,
homepage sections in ui/HomePage.php, fixed mobile menu toggle, doubled
navbar, and language persistence (session before locale, browser language
detection).

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>

Repository: Flexplorer
- Merge pull request #81 from anupamme/fix-repo-flexplorer-cwe-613-secure-session-cookie-lasturl

fix: add output encoding in lasturl.php (CWE-613)
- fix: multi_agent.cwe-613 security vulnerability

Automated security fix generated by OrbisAI Security
- Bump phpunit/phpunit from 13.3.4 to 13.3.5 (#80)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 13.3.4 to 13.3.5.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/13.3.5/ChangeLog-13.3.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/13.3.4...13.3.5)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 13.3.5
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: abraflexi-config
- composer: bump phpstan/phpstan from 2.2.14 to 2.2.16 (#113)

Bumps [phpstan/phpstan](https://github.com/phpstan/phpstan-phar-composer-source) from 2.2.14 to 2.2.16.
- [Commits](https://github.com/phpstan/phpstan-phar-composer-source/commits)

---
updated-dependencies:
- dependency-name: phpstan/phpstan
  dependency-version: 2.2.15
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump ergebnis/composer-normalize from 2.53.0 to 2.54.0 (#114)

Bumps [ergebnis/composer-normalize](https://github.com/ergebnis/composer-normalize) from 2.53.0 to 2.54.0.
- [Release notes](https://github.com/ergebnis/composer-normalize/releases)
- [Changelog](https://github.com/ergebnis/composer-normalize/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/composer-normalize/compare/2.53.0...2.54.0)

---
updated-dependencies:
- dependency-name: ergebnis/composer-normalize
  dependency-version: 2.54.0
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump ergebnis/php-cs-fixer-config from 6.63.3 to 6.64.0 (#115)

Bumps [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) from 6.63.3 to 6.64.0.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.63.3...6.64.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.64.0
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

