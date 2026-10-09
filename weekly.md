Date Range: 2026-10-02 to 2026-10-09

Weekly GitHub Commits:

Repository: ipex-b2b
- Update API client classes for current IPEX REST API spec (#46)

Co-authored-by: google-labs-jules[bot] <161369871+google-labs-jules[bot]@users.noreply.github.com>
Co-authored-by: Vitexus <2621130+Vitexus@users.noreply.github.com>

Repository: php-subreg
- composer: update phpstan/phpstan-phpunit requirement (#48)

Updates the requirements on [phpstan/phpstan-phpunit](https://github.com/phpstan/phpstan-phpunit) to permit the latest version.
- [Release notes](https://github.com/phpstan/phpstan-phpunit/releases)
- [Commits](https://github.com/phpstan/phpstan-phpunit/compare/2.0.18...2.0.21)

---
updated-dependencies:
- dependency-name: phpstan/phpstan-phpunit
  dependency-version: 2.0.21
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: system
- refactor(system): disable IPEX API call in HealthCheck

- Remove IPEX line from bin/APIHealthCheck.php
- Remove 'ipex' key from raw()
- Move IPEX monitoring to Zabbix via MultiFlexi credential

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- refactor(debian): replace Jenkinsfile-parael with canonical BuildImages/Test/Jenkinsfile

Node-local workspace isolation fixes the AccessDeniedException on
.git/objects at unstash (shared NFS workspace) that fails debian:bookworm.
installOrder is empty: install all produced packages.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- refactor(system): replace old LinkToDocument with AbraFlexi DocumentLink

- Update composer dependencies to include `vitexsoftware/ease-bootstrap5-widgets-abraflexi`
- Modify `VoIPcredit.php` to use `AbraFlexi\ui\TWB5\DocumentLink` instead of `SpojeNet\System\ui\LinkToDocument`
- Remove the old `LinkToDocument` class

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>

Repository: v.s.cz
- texts update

Repository: Flexplorer
- Bump vitexsoftware/ease-html-widgets from 1.1.1 to 1.1.2 (#78)

Bumps [vitexsoftware/ease-html-widgets](https://github.com/VitexSoftware/php-vitexsoftware-ease-html-widgets) from 1.1.1 to 1.1.2.
- [Release notes](https://github.com/VitexSoftware/php-vitexsoftware-ease-html-widgets/releases)
- [Commits](https://github.com/VitexSoftware/php-vitexsoftware-ease-html-widgets/compare/1.1.1...1.1.2)

---
updated-dependencies:
- dependency-name: vitexsoftware/ease-html-widgets
  dependency-version: 1.1.2
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- build(deps-dev): bump phpunit/phpunit from 13.3.5 to 13.4.0 (#82)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 13.3.5 to 13.4.0.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/13.4.0/ChangeLog-13.4.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/13.3.5...13.4.0)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 13.4.0
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- fix(debian): include missing autoload files for AbraFlexi classes

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(debian): ignore transient apt index 403 during Jenkins test stage
- fix(debian): local-clone into build tree (no git alternates)

git clone --shared left objects/info/alternates pointing at the bare
mirror outside the Docker mount, so git inside the container failed.
- fix(debian): use git clone --shared instead of worktrees

Concurrent git worktree add against one bare mirror races on
worktrees/ metadata and leaves checkouts that are not git repos.
- fix(debian): seed node-local git mirrors via credentialed checkout

Parallel branches on agents other than the SCM bootstrap node cannot
git-fetch origin (no SSH creds). Seed from checkout scm when needed.
- fix(debian): migrate Jenkinsfile to node-local builds (no NFS stash)

Shared NFS workspaces cause AccessDeniedException and unstash races across
agents. Build on node-local disk via the BuildImages Test/Jenkinsfile pattern.
- chore(debian): clean up root-owned files before Jenkins unstash

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- fix(debian/Jenkinsfile): add chmod to writable .git before unstash

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- chore(debian): bump version to 1.10 and update changelog

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- Refactor(Flexplorer): Apply v.s.cz visual style and add Selenium test suite

- Updated `.gitignore` to include Python and pytest cache directories
- Added `ASSET_VERSION` constant to `WebPage.php` for versioning CSS
- Created `vitex.css` with v.s.cz theme and updated Flexplorer UI
- Added Selenium test suite for Flexplorer (26 tests)
- Updated `composer.lock`, `flexplorer.svg`, and image files

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- chore(debian): consolidate SCM checkout and fix node scope for Publish to Aptly

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- docs(README): add Debian packaging badge
- Bump friendsofphp/php-cs-fixer from 3.95.26 to 3.95.27 (#79)

Bumps [friendsofphp/php-cs-fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) from 3.95.26 to 3.95.27.
- [Release notes](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases)
- [Changelog](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/compare/v3.95.26...v3.95.27)

---
updated-dependencies:
- dependency-name: friendsofphp/php-cs-fixer
  dependency-version: 3.95.27
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: php-ease-twbootstrap-widgets
- chore(debian): add build tools for jq and moreutils

debian/rules runs jq and sponge in override_dh_install; the build failed
with exit 127 on debian:trixie and ubuntu:noble.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
- feat(debian): add static autoloader and remove deprecated postinst

composer-global-update is deprecated and gone; the postinst failed with
exit 127 and left dependent packages unconfigured.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>

Repository: abraflexi-config
- composer: bump phpunit/phpunit from 13.3.4 to 13.4.0 (#116)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 13.3.4 to 13.4.0.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/13.4.0/ChangeLog-13.4.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/13.3.4...13.4.0)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 13.4.0
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

