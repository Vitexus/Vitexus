Date Range: 2026-07-17 to 2026-07-24

Weekly GitHub Commits:

Repository: PHP-Realpad-Takeout
- refactor(debian): replace composer-debian with standard Composer\InstalledVersions

Modernizes Debian packaging to replace the legacy composer-debian /
composer-global-update mechanism with the standard Composer\InstalledVersions
population via a static autoloader, per the pack-as-deb skill.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release
- composer: update phpoffice/phpspreadsheet requirement from ^5.8 to ^5.9 (#43)

Updates the requirements on [phpoffice/phpspreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) to permit the latest version.
- [Release notes](https://github.com/PHPOffice/PhpSpreadsheet/releases)
- [Changelog](https://github.com/PHPOffice/PhpSpreadsheet/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHPOffice/PhpSpreadsheet/compare/5.8.0...5.9.0)

---
updated-dependencies:
- dependency-name: phpoffice/phpspreadsheet
  dependency-version: 5.9.0
  dependency-type: direct:production
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: realpad2mailkit
- refactor(realpad2mailkit): switch to upstream autoloader

php-spojenet-realpad-takeout now ships its own
/usr/share/php/RealpadTakeout/autoload.php that registers the
SpojeNet\Realpad PSR-4 autoloader and populates Composer\InstalledVersions,
so stop duplicating that registration by hand and just require it.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- ci: add MultiFlexi JSON validation workflow using validate-multiflexi-app action

Repository: pohoda-client-checker
- ci: add MultiFlexi JSON validation workflow using validate-multiflexi-app action

Repository: pohoda-raiffeisenbank
- ci: add MultiFlexi JSON validation workflow using validate-multiflexi-app action

Repository: discomp2abraflexi
- ci: add MultiFlexi JSON validation workflow using validate-multiflexi-app action

Repository: v.s.cz
- refactor(ui): guard against null $projectUrl in strstr() check

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- fix(deb.php): add local-icon fallback for missing AppStream icons

- Added a local-icon fallback mechanism in `deb.php` to use locally stocked AppStream icons when no remote icon is available from the DEP-11 cache.
- Updated menu entries and package article pages to use specific project icons instead of the generic MultiFlexi logo.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: Flexplorer
- Bump ergebnis/php-cs-fixer-config from 6.62.3 to 6.63.0 (#59)

Bumps [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) from 6.62.3 to 6.63.0.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.62.3...6.63.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.63.0
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: abraflexi-server-deb
- Fix postinst: auto-detect newest PostgreSQL version, not a stale list

DBVERSION defaulted to 11 and SUPPORTEDVERSIONS only listed 14/13/12/11/10.
On bookworm (PG15), trixie (PG17), noble (PG16), and resolute (PG18) none
of those directories exist under /usr/lib/postgresql/, so the loop never
matched and DBVERSION silently stayed at the stale default 11, causing
pg_createcluster to fail with "no initdb program for version 11 found"
and the whole package install to abort. Only jammy (PG14) happened to be
in the list and passed.

Pick the newest installed version directory instead of maintaining an
ever-growing hardcoded list.

Note: bin/pg_restore has the same class of hardcoded-list bug (13/12/11/10)
but only affects restore operations at runtime, not package install, so
it's left for a follow-up.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- Fix fresh.sh: auto-detect vendor data archive filename/compression

The vendor flexibee_2026.4.8_all.deb now ships data.tar.xz instead of
data.tar.gz, so the hardcoded tar xzvf ../../orig/data.tar.gz always
failed with "No such file or directory" even after fixing the earlier
orig/ directory-creation ordering bug. Glob for whatever data.tar.*
member ar actually extracted and let tar auto-detect the compression,
so future vendor compression changes don't break the build again.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- Fix fresh.sh: create orig/ before downloading into it

wget -O orig/flexibee_${VERSION}_all.deb ran before mkdir -p orig, so
in a fresh workspace (no pre-existing orig/ dir, e.g. the @2 parallel
workspace created by concurrent builds) the download silently failed
and later ar -x/tar extraction failed with "No such file or directory".
This only manifested now because the modernized Jenkinsfile enables
concurrent builds; the old sequential pipeline always reused the same
long-lived workspace where orig/ already existed from a prior run.

Also adds set -e so a failed download/extraction aborts immediately
instead of silently cascading into a confusing dh_install "missing
files" error several steps later.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- Rewrite Jenkinsfile with modern parallel-branches build structure

Adopts the structure from VitexSoftware/BuildImages/Test/Jenkinsfile:
parallel per-distro branches, unique per-build DH_INTERNAL_BUILDDIR/
TMPDIR to avoid conflicts between concurrent builds, a build blocker
against RebulidDEBRepoByAnsible, and safer package-name validation
before installation testing.

Keeps this package's fresh.sh/curver.sh vendor .deb fetch-and-repack
steps as a one-time global stage, and drops the redundant per-distro
./upver.sh re-download that the old sequential pipeline performed for
every distro.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- Modernize Jenkinsfile distro targets, drop EOL bullseye/focal

debian:bullseye and ubuntu:focal are EOL and no longer published on
repo.vitexsoftware.com, so builds targeting them fail apt-get update.
Switch to the currently-published targets (bookworm, trixie, jammy,
noble, resolute), matching vars/vitexsoftware-repo.yml in VSAnsible.

Also raises abraflexi.service TimeoutStartSec to 180s to accommodate
slow JVM boot, fixing systemd killing a still-starting AbraFlexi
process and leaving it orphaned while the unit shows failed.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- Increase abraflexi.service TimeoutStartSec to accommodate slow JVM boot

Raises TimeoutStartSec to 180s so systemd doesn't kill a still-starting
AbraFlexi JVM and leave the process orphaned while marking the unit failed.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: Redmine2AbraFlexi
- Bump docker/login-action from 4.2.0 to 4.4.0 (#59)

Bumps [docker/login-action](https://github.com/docker/login-action) from 4.2.0 to 4.4.0.
- [Release notes](https://github.com/docker/login-action/releases)
- [Commits](https://github.com/docker/login-action/compare/650006c6eb7dba73a995cc03b0b2d7f5ca915bee...af1e73f918a031802d376d3c8bbc3fe56130a9b0)

---
updated-dependencies:
- dependency-name: docker/login-action
  dependency-version: 4.4.0
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- ci: add MultiFlexi JSON validation workflow using validate-multiflexi-app action

Repository: abraflexi-config
- ci: add MultiFlexi JSON validation workflow using validate-multiflexi-app action
- build(release): add global build blocker for package installation race condition
- refactor(debian): remove unstable forky distribution from Jenkinsfile.release

