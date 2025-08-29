Date Range: 2025-08-22 to 2025-08-29

Weekly GitHub Commits:

Repository: ipex-b2b
- dev pipeline update
- ci: sync debian/Jenkinsfile.release from reference

Repository: php-subreg
- composer: update ergebnis/php-cs-fixer-config requirement (#10)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.52.0...6.53.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.53.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- build deps update
- ci: sync debian/Jenkinsfile.release from reference

Repository: php-abraflexi
- devel build pipeline update
- ci: sync debian/Jenkinsfile.release from reference

Repository: apache2-auth-redmine
- dev pipeline update

Repository: php-hspdev-huaweiapi
- ci: sync debian/Jenkinsfile.release from reference
- dev pipeline update

Repository: PHP-Realpad-Takeout
- ci: sync debian/Jenkinsfile.release from reference

Repository: realpad2mailkit
- Build deps update
- ci: sync debian/Jenkinsfile.release from reference

Repository: pohoda-client-checker
- composer: update ergebnis/php-cs-fixer-config requirement (#7)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.52.0...6.53.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.53.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- build deps update
- ci: sync debian/Jenkinsfile.release from reference

Repository: pohoda-raiffeisenbank
- build deps update
- ci: sync debian/Jenkinsfile.release from reference

Repository: discomp2abraflexi
- build deps update
- ci: sync debian/Jenkinsfile.release from reference

Repository: v.s.cz
- Fix Bootstrap 5 navbar responsivity issues

- Update MainMenu CSS classes to pure Bootstrap 5 syntax
  Remove mixed Bootstrap 4 classes (navbar-inverse, bg-inverse, navbar-toggleable-sm)
  Use proper Bootstrap 5 classes: navbar navbar-dark bg-secondary
- Improve VSInit autoload fallback mechanism for development
  Add multiple autoload paths and fallback autoloader
  Enables better development environment support

This change works with the updated php-ease-twbootstrap5 library
to fix mobile hamburger menu functionality.

Fixes: Hamburger menu not working on mobile devices
- Document package database synchronization in WARP.md

- Add Package Database Integration section explaining debs2sql automation
- Document connection to VSAnsible multiflexi-repo-republish.yml playbook
- Explain database structure and error handling for missing packages
- Provide manual update procedure for troubleshooting
- Complete documentation of the repository-website integration workflow
- Add error handling for packages not found in database

- Handle case when packageInfo() returns null (package not in database)
- Display user-friendly message when package is not indexed
- Provide link to browse repository directly
- Prevent fatal errors when accessing non-indexed packages
- Fixes broken package.php pages for packages not in local database
- Fix package name extraction for RSS feed links

- Extract package name from existing <link> element instead of parsing title
- Properly handle URL parameters to get clean package name without version
- Fallback to regex parsing if link element is not available
- Fixes broken links like package.php?package=php-vitexsoftware-multiflexi-core%202.1.0.52~bookworm
- Now correctly links to package.php?package=php-vitexsoftware-multiflexi-core
- Add WARP.md documentation and package links in Latest Packages RSS feed

- Add comprehensive WARP.md with project architecture, commands, and deployment info
- Modify RSS feed JavaScript to make package titles clickable
- Package titles now link to package.php?package=PACKAGENAME for detailed info
- Improve developer experience with structured documentation

Repository: netbeans-php-tools
- Remove unsupported debian:bullseye from build distributions

- Remove debian:bullseye from Jenkins build matrix
- Debian 11 Bullseye is now end-of-life and unsupported
- Focus on supported distributions: bookworm, trixie, forky
- Part of infrastructure cleanup for current Debian releases
- Update Jenkinsfile to latest template with debian:forky support

- Update to latest Jenkinsfile template from BuildImages/Test/
- Includes debian:forky distribution for building packages
- Improved artifact handling and test procedures
- Part of infrastructure update for new Debian release
- Add debian:forky to Jenkins build distributions

- Add debian:forky target to Jenkins pipeline distributions array
- Enables building Debian packages for Forky (testing) distribution
- Part of infrastructure update to support new Debian release

Repository: Flexplorer
- Remove unsupported debian:bullseye from build distributions

- Remove debian:bullseye from Jenkins build matrix
- Debian 11 Bullseye is now end-of-life and unsupported
- Focus on supported distributions: bookworm, trixie, forky
- Part of infrastructure cleanup for current Debian releases
- Update Jenkinsfile to latest template with debian:forky support

- Update to latest Jenkinsfile template from BuildImages/Test/
- Includes debian:forky distribution for building packages
- Improved artifact handling and test procedures
- Part of infrastructure update for new Debian release
- Bump ergebnis/php-cs-fixer-config from 6.52.0 to 6.53.0 (#10)

Bumps [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) from 6.52.0 to 6.53.0.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.52.0...6.53.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.53.0
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: php-ease-twbootstrap-widgets
- Remove unsupported debian:bullseye from build distributions

- Remove debian:bullseye from Jenkins build matrix
- Debian 11 Bullseye is now end-of-life and unsupported
- Focus on supported distributions: bookworm, trixie, forky
- Part of infrastructure cleanup for current Debian releases
- Update Jenkinsfile to latest template with debian:forky support

- Update to latest Jenkinsfile template from BuildImages/Test/
- Includes debian:forky distribution for building packages
- Improved artifact handling and test procedures
- Part of infrastructure update for new Debian release
- Add debian:forky to Jenkins build distributions

- Add debian:forky target to Jenkins pipeline distributions array
- Enables building Debian packages for Forky (testing) distribution
- Part of infrastructure update to support new Debian release

Repository: Redmine2AbraFlexi
- Remove unsupported debian:bullseye from build distributions

- Remove debian:bullseye from Jenkins build matrix
- Debian 11 Bullseye is now end-of-life and unsupported
- Focus on supported distributions: bookworm, trixie, forky
- Part of infrastructure cleanup for current Debian releases
- Update Jenkinsfile to latest template with debian:forky support

- Update to latest Jenkinsfile template from BuildImages/Test/
- Includes debian:forky distribution for building packages
- Improved artifact handling and test procedures
- Part of infrastructure update for new Debian release
- Add debian:forky to Jenkins build distributions

- Add debian:forky target to Jenkins pipeline distributions array
- Enables building Debian packages for Forky (testing) distribution
- Part of infrastructure update to support new Debian release
- Build deps update
- ci: sync debian/Jenkinsfile.release from reference

Repository: abraflexi-config
- Remove unsupported debian:bullseye from build distributions

- Remove debian:bullseye from Jenkins build matrix
- Debian 11 Bullseye is now end-of-life and unsupported
- Focus on supported distributions: bookworm, trixie, forky
- Part of infrastructure cleanup for current Debian releases
- Update Jenkinsfile to latest template with debian:forky support

- Update to latest Jenkinsfile template from BuildImages/Test/
- Includes debian:forky distribution for building packages
- Improved artifact handling and test procedures
- Part of infrastructure update for new Debian release
- composer: bump ergebnis/php-cs-fixer-config from 6.51.0 to 6.53.0 (#7)

Bumps [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) from 6.51.0 to 6.53.0.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.51.0...6.53.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.53.0
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump spojenet/flexibee from 3.6.0 to 2025.7.0 (#8)

Bumps [spojenet/flexibee](https://github.com/Spoje-NET/php-abraflexi) from 3.6.0 to 2025.7.0.
- [Release notes](https://github.com/Spoje-NET/php-abraflexi/releases)
- [Commits](https://github.com/Spoje-NET/php-abraflexi/compare/3.6.0...2025.7.0)

---
updated-dependencies:
- dependency-name: spojenet/flexibee
  dependency-version: 2025.7.0
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump phpunit/phpunit from 12.3.2 to 12.3.6 (#9)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 12.3.2 to 12.3.6.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/12.3.6/ChangeLog-12.3.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/12.3.2...12.3.6)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 12.3.6
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- ci: sync debian/Jenkinsfile.release from reference

