Date Range: 2026-07-10 to 2026-07-17

Weekly GitHub Commits:

Repository: ipex-b2b
- fix(debian/php-spojenet-ipex-b2b.install): correct AppStream metainfo file installation path
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release
- composer: update ergebnis/composer-normalize requirement (#38)

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
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: update friendsofphp/php-cs-fixer requirement (#37)

Updates the requirements on [friendsofphp/php-cs-fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) to permit the latest version.
- [Release notes](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases)
- [Changelog](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/compare/v3.89.0...v3.95.2)

---
updated-dependencies:
- dependency-name: friendsofphp/php-cs-fixer
  dependency-version: 3.95.2
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: php-subreg
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release

Repository: php-abraflexi
- composer: update friendsofphp/php-cs-fixer requirement (#109)

Updates the requirements on [friendsofphp/php-cs-fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) to permit the latest version.
- [Release notes](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases)
- [Changelog](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/compare/v3.94.0...v3.95.13)

---
updated-dependencies:
- dependency-name: friendsofphp/php-cs-fixer
  dependency-version: 3.95.13
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release

Repository: PohodaSQL
- ci: sync debian/Jenkinsfile.release from reference

Repository: ansible
- refactor(haproxy): remove decommissioned backend servers

netbox.spojenet.cz moved to netbox.spoje.net (served directly,
outside this proxy); wazuh-dev.proxy.spojenet.cz was uninstalled.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- chore(haproxy): set explicit httpchk path for nodered-dev.spojenet.cz

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: php-hspdev-huaweiapi
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release

Repository: PHP-Realpad-Takeout
- composer: update ergebnis/composer-normalize requirement (#38)

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
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: realpad2mailkit
- appstream metadata path fix
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release

Repository: pohoda-client-checker
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release

Repository: pohoda-raiffeisenbank
- chore(debian): bump version to 1.8.6 and document mServer offline diagnostics

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- fix(raiffeisenbank): report specific mServer offline reason instead of blank error

Distinguishes transport failures from HTTP-level failures (e.g. 500 from
an overloaded/restarting mServer) so the error report and status message
no longer end up empty, and drops the stale mserver requirement from the
MultiFlexi app descriptor.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release
- refactor(pohoda): catch HttpException in isOnline() calls

- Wrap `$engine->isOnline()` calls in try-catch blocks to handle curl-level failures gracefully.
- Set `$mServerOnline` to `false` and capture exception message on failure.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- composer: update ergebnis/php-cs-fixer-config requirement (#41)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.58.0...6.62.1)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.62.1
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: discomp2abraflexi
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release

Repository: Flexplorer
- Bump friendsofphp/php-cs-fixer from 3.95.11 to 3.95.13 (#56)

Bumps [friendsofphp/php-cs-fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) from 3.95.11 to 3.95.13.
- [Release notes](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases)
- [Changelog](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/compare/v3.95.11...v3.95.13)

---
updated-dependencies:
- dependency-name: friendsofphp/php-cs-fixer
  dependency-version: 3.95.13
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- Bump phpunit/phpunit from 13.1.14 to 13.2.4 (#57)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 13.1.14 to 13.2.4.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/13.2.4/ChangeLog-13.2.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/13.1.14...13.2.4)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 13.2.4
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: Redmine2AbraFlexi
- Bump docker/metadata-action from 6.1.0 to 6.2.0 (#60)

Bumps [docker/metadata-action](https://github.com/docker/metadata-action) from 6.1.0 to 6.2.0.
- [Release notes](https://github.com/docker/metadata-action/releases)
- [Commits](https://github.com/docker/metadata-action/compare/80c7e94dd9b9319bd5eb7a0e0fe9291e23a2a2e9...dc802804100637a589fabce1cb79ff13a1411302)

---
updated-dependencies:
- dependency-name: docker/metadata-action
  dependency-version: 6.2.0
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release

