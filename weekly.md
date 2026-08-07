Date Range: 2026-07-31 to 2026-08-07

Weekly GitHub Commits:

Repository: php-abraflexi
- feat: add bank statement import call for BankovniUcet

Implement nacistVypis()/nacistVypisZeSouboru() to call
/c/{firma}/bankovni-ucet/{id}/nacteni-vypisu, mirroring the existing
Banka::stahnoutVypisyOnline() and Priloha::addAttachment() patterns.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: ansible
- fix(haproxy): disable duplicate cert renewal paths that skip haproxy reload

Remove redundant certbot timers and cron jobs to ensure all renewals trigger a haproxy reload.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- feat(haproxy): add mcprack backend for new app on vyvojar.spoje.net

Repository: Flexplorer
- Bump friendsofphp/php-cs-fixer from 3.95.15 to 3.95.18 (#64)

Bumps [friendsofphp/php-cs-fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) from 3.95.15 to 3.95.18.
- [Release notes](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases)
- [Changelog](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/compare/v3.95.15...v3.95.18)

---
updated-dependencies:
- dependency-name: friendsofphp/php-cs-fixer
  dependency-version: 3.95.18
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: Redmine2AbraFlexi
- Bump docker/login-action from 4.4.0 to 4.6.0 (#63)

Bumps [docker/login-action](https://github.com/docker/login-action) from 4.4.0 to 4.6.0.
- [Release notes](https://github.com/docker/login-action/releases)
- [Commits](https://github.com/docker/login-action/compare/af1e73f918a031802d376d3c8bbc3fe56130a9b0...dbcb813823bdd20940b903addbd779551569679f)

---
updated-dependencies:
- dependency-name: docker/login-action
  dependency-version: 4.6.0
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

