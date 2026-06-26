Date Range: 2026-06-19 to 2026-06-26

Weekly GitHub Commits:

Repository: php-subreg
- Merge pull request #32 from Spoje-NET/dependabot/composer/phpstan/phpstan-phpunit-2.0.16

composer: update phpstan/phpstan-phpunit requirement from 2.0.12 to 2.0.16
- Merge pull request #40 from Spoje-NET/dependabot/composer/ergebnis/composer-normalize-tw-2.52

composer: update ergebnis/composer-normalize requirement from ^2.48 to ^2.52
- composer: update phpstan/phpstan-phpunit requirement

Updates the requirements on [phpstan/phpstan-phpunit](https://github.com/phpstan/phpstan-phpunit) to permit the latest version.
- [Release notes](https://github.com/phpstan/phpstan-phpunit/releases)
- [Commits](https://github.com/phpstan/phpstan-phpunit/compare/2.0.12...2.0.16)

---
updated-dependencies:
- dependency-name: phpstan/phpstan-phpunit
  dependency-version: 2.0.16
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
- Merge pull request #35 from Spoje-NET/dependabot/composer/vitexsoftware/ease-core-gte-1.50.1

composer: update vitexsoftware/ease-core requirement from >=1.49.0 to >=1.50.1
- composer: update ergebnis/composer-normalize requirement

Updates the requirements on [ergebnis/composer-normalize](https://github.com/ergebnis/composer-normalize) to permit the latest version.
- [Release notes](https://github.com/ergebnis/composer-normalize/releases)
- [Changelog](https://github.com/ergebnis/composer-normalize/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/composer-normalize/compare/2.48.0...2.52.0)

---
updated-dependencies:
- dependency-name: ergebnis/composer-normalize
  dependency-version: 2.52.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
- Merge pull request #41 from Spoje-NET/dependabot/composer/friendsofphp/php-cs-fixer-tw-3.95

composer: update friendsofphp/php-cs-fixer requirement from ^3.92 to ^3.95
- Merge pull request #39 from Spoje-NET/dependabot/composer/ergebnis/php-cs-fixer-config-tw-6.62

composer: update ergebnis/php-cs-fixer-config requirement from ^6.58 to ^6.62
- chore: replace WARP.md with AGENTS.md

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: ansible
- Rename proxy entry from animatrix to nas
- Rename proxy server from moronas to animatrix

Repository: v.s.cz
- fix: log articles.php exception to PHP error log for diagnosis

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: postinst adds DB_TYPE=mysql to existing /etc/vscz.env if missing

dpkg does not overwrite existing conffiles on upgrade, so the DB_TYPE
line shipped in debian/conf/vscz.env never reaches servers that already
had /etc/vscz.env. Patch it in postinst instead.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: ship /etc/vscz.env with DB_TYPE and fix Alert arg order in NewsShow

- Add debian/conf/vscz.env installed to /etc/vscz.env so DB_TYPE=mysql
  is present on fresh installs without manual post-install editing
- Fix swapped Alert(content, type) → Alert(type, content) in NewsShow.php

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: add DB_TYPE to env, install github_repos.php, fix Alert arg order

- articles.php and debs.php fail with 'Unimplemented Database type:' because
  /etc/vscz.env is missing DB_TYPE=mysql; add it manually on production
- projects.php fails because data/github_repos.php was not installed;
  add src/data/github_repos.php to debian/install
- Ease\TWB5\Alert constructor is Alert($type, $content) not Alert($content, $type);
  fix swapped arguments in articles.php and NewsListing.php

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: add league/commonmark autoload to production autoloader

GithubFlavoredMarkdownConverter was not found on production because
debian/autoload.php didn't include the system commonmark autoloader.
The package is installed at /usr/share/php/League/CommonMark/.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: auto-run phinx migrations in postinst

- Add phinx.php to installed files (usr/share/vitexsoftware.cz/)
- postinst: run 'phinx migrate -e production' after configure so
  future package upgrades apply DB migrations automatically
- debian/control: add php-cakephp-phinx to Depends

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: pin phinx to ^0.16 stable and symfony/yaml to ^8.1, add prefer-stable

dh_phpcomposer fails on dev-branch version strings like '0.x-dev'.
Pinning both dev-only tools to stable releases makes the version
parseable by the Debian build toolchain.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- phinx version fix
- fix: move phinx and symfony/yaml to require-dev

dh_phpcomposer can't parse '0.x-dev' version strings in require{} —
these are build/migration tools not needed at runtime in the package.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: replace InputTag with raw HTML in projects.php

InputTag constructor changed — $name now sets the tag element name via
setTagName(), so passing null crashes with typed string property error.
Use a plain HTML string for the stateless search input instead.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: data migration for 460 release articles + generator script

- Add db/migrations/20260623212556_release_articles_data.php: embeds all
  460 pre-generated EN+CS release articles as static data in git; no gh CLI
  or ANTHROPIC_API_KEY needed at migration time
- Add bin/generate_articles_migration.php: re-export current DB release
  articles into a fresh migration (run after seeding new releases)

Deploy on production: vendor/bin/phinx migrate -c phinx.php

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: per-project Phinx release seeds with bilingual import

- Add db/AbstractReleasesSeed.php: abstract base class with all GitHub release
  import logic — fetches via gh CLI, converts markdown, translates to Czech via
  Claude API, sanitizes emoji for utf8mb3 tables, deduplicates via source_url
- Add db/seeds/releases/: 160 per-project seed files (one per VitexSoftware repo)
  each extending AbstractReleasesSeed with just a REPO constant
- Add db/seeds/ReleaseArticles.php: monolithic seed to import all projects at once
- Add bin/generate_seeds.php: generator script for per-project seed files
- Add phinx.php: PHP config that reads credentials from /etc/vscz.env (replaces
  hardcoded wrong credentials in phinx.yml)
- Update phinx.yml: use default_environment instead of deprecated default_database;
  add releases/ subdir to seeds paths

Usage on production:
  ANTHROPIC_API_KEY=sk-... vendor/bin/phinx seed:run -c phinx.php -s MultifleximReleases

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: bilingual release import — CLI script, language filtering, locale-aware back link

- Add src/data/import_releases.php: imports GitHub release notes as EN+CS blog
  articles via gh CLI; translates via Claude API (claude-haiku-4-5-20251001);
  deduplicates on source_url UNIQUE index; supports --dry-run, --repo, --limit flags
- Add db/migrations/…_add_source_url_to_news.php: Phinx migration for source_url
  VARCHAR(512) UNIQUE column (already applied via PDO)
- Update NewsListing: accept $language param, filter articles by language via WHERE
- Update articles.php: detect locale via Ease\Locale::get2Code(), pass to NewsListing
- Update article.php: back link preserves current locale via ?locale= query param

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- refactor: build renderArticle with Ease\Html and Ease\TWB5 objects

Replace raw HTML string in NewsShow::renderArticle() with proper
framework objects: DivTag, H1Tag, SpanTag for the hero header and
body wrapper, TWB5\Container for the inner container, TWB5\Alert
for the empty-state. Uses DivTag for custom Bootstrap column classes
where TWB5\Col does not support multi-breakpoint class strings.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: replace deprecated strftime and restyle article page

- NewsShow: replace strftime() with date(), fixing the PHP 8.1
  deprecation call-stack dump at the top of article.php
- NewsShow: same date fallback logic as NewsListing (DatCreate →
  DatSave → empty)
- NewsShow: render dark gradient hero header with title, language
  badge, author and date — matching the blog listing style
- article.php: remove plain Card wrapper, add inline CSS for article
  body (images, pre/code blocks, blockquotes, links), add
  "← Back to articles" button

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: redesign articles page as a proper blog listing

- NewsListing now renders Bootstrap 5 card grid with excerpt, author,
  date, language badge, and "Read more" button instead of a plain <ul>
- Handles 0000-00-00 DatCreate by falling back to DatSave
- articles.php gets a dark gradient hero header and 3-column responsive grid
- Add css/blog.css for card hover animations and blog-header styles

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: add projects page listing all 160 VitexSoftware GitHub repos

- New projects.php shows all non-fork VitexSoftware repos in a
  searchable, language-filterable Bootstrap card grid
- fetch_github.sh now dynamically pulls all repos via gh repo list
  instead of a hard-coded subset; also captures pushedAt date
- github_repos.php regenerated with 165 repos (160 VitexSoftware + 5
  Spoje-NET), including kde-desktop-background-libvisual
- Add "Projects" nav link in MainMenu with a GitHub SVG icon

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: catch DB exception in articles.php to prevent empty 500

new News() connects to the database immediately; on the production
server the DB is unreachable, which throws before draw() is called
and produces an empty HTTP 500 response. Wrap in try-catch so the
page renders with a warning instead.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: News::listingQuery() return type and NewsListing missing parent constructor

- News: add \Envms\FluentPDO\Queries\Select return type to listingQuery()
  so it matches the parent class signature (required by PHP 8.x strict
  inheritance rules; caused fatal error on articles.php)
- NewsListing: call parent::__construct() so UlTag sets its tagType to
  'ul'; without it the tag type stayed empty and rendered as literal <>,
  and <li> items appeared without a wrapping <ul>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: correct repository GPG key URL in debs.php

Update from old http://repo.vitexsoftware.cz/keyring.gpg to the
correct https://repo.vitexsoftware.com/KEY.gpg.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: regex delimiter, DB resilience, and multiflexi-cli description

- MainPageMenu: switch preg_match delimiter from # to ~ to avoid
  collision with # inside character class [^/?#], which caused a
  PHP Warning: Unknown modifier ']' on every card render
- index.php: pass debPackage='multiflexi-cli' so DebPackages long
  description is pulled from the apt Packages file and shown on card
- deb.php: wrap Packages DB calls in try-catch so a DB connectivity
  failure shows a graceful alert instead of HTTP 500; also use
  AppStream homepage URL as README fallback when vcs-browser is absent
- PackageInfo: wrap packageInfo() DB call in try-catch so a failed
  query returns null (package-not-found card) rather than an exception

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: enrich carousel cards with AppStream, apt, and pre-fetched GitHub data

- DebPackages.php: parse apt Packages file for real version numbers and
  long descriptions without needing composer.json to be installed
- GitHubInfo.php: serve pre-fetched static data (no runtime API calls)
- data/github_repos.php: description, topics, language, stars for all
  49 repos; regenerate with data/fetch_github.sh via gh CLI
- MainPageMenu: show AppStream/Packages description + category badges +
  "Package details" link per card; composerVersion() falls back to apt
  version when composer.json is absent

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: modern horizontal card layout for project cards

Replace tall card-img-top layout with a compact horizontal design:
icon fixed-size (72×72) on the left, title/description/badges on the
right. Remove min-height:500px from .mp-menu-item — height now adapts
to content.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: one card per slide, full width carousel

Each carousel slide shows a single project card at full width (col-12).
CardCarousel now derives the Bootstrap column class from perSlide so
layout is fully self-contained. Col wrappers are unwrapped in toCarousel()
before handing cards to the carousel.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: Bootstrap 5 carousel for each homepage section

Each section (Applications, MultiFlexi, Utilities, Libraries) now
renders as a BS5 carousel via CardCarousel.php + MainPageMenu::toCarousel().
Libraries use 3-per-slide; others use 4-per-slide.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: use PyPI badges for Python libraries instead of Packagist

- Add PyPIBadge class (version + monthly downloads via shields.io/pypi/*)
- Add \$registry parameter to addLibraryItem() (default 'packagist')
- Python AbraFlexi and Python MultiFlexi now link to pypi.org/project/{name}/

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: correct composer.json path in debian/rules and add ext-yaml requirement

debian/rules was referencing debian/composer.json which doesn't exist;
the actual file is debian/conf/composer.json.
Also declare ext-yaml dependency used by AppStream.php.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- ci: build only for debian:trixie

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: clean root-owned debhelper artifacts before SCM checkout

debian/.debhelper/ left by a previous build was owned by root, causing
git checkout to fail with "unable to unlink old file: Operation not permitted".

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Add Packages link to navbar pointing to debs.php

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

