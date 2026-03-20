Date Range: 2026-03-13 to 2026-03-20

Weekly GitHub Commits:

Repository: php-abraflexi
- debian autoloader fix
- Update for AbraFlexi 2026.2.6

Repository: pohoda-raiffeisenbank
- build pipelines update
- deps update

Repository: netbeans-php-tools
- Merge pull request #2 from rodrigoprimo/docs/update-phpcs-repo-link

Update PHP_CodeSniffer repository link
- Update PHP_CodeSniffer repository link

Repository: Flexplorer
- Bump phpunit/phpunit from 12.5.x-dev to 13.0.5 (#34)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 12.5.x-dev to 13.0.5.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/13.0.5/ChangeLog-13.0.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/commits/13.0.5)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 13.0.5
  dependency-type: direct:development
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- Bump ergebnis/php-cs-fixer-config from 6.60.0 to 6.60.2 (#37)

Bumps [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) from 6.60.0 to 6.60.2.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.60.0...6.60.2)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.60.2
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: abraflexi-config
- fix: correct autoload path for EaseCore in debian/autoload.php
- Refactor Jenkinsfile for improved readability and functionality

- Consolidated distribution array initialization for clarity.
- Updated stages to use consistent naming conventions and improved logging.
- Enhanced build and test stages with unique build directories to prevent conflicts.
- Simplified artifact handling and cleanup processes.
- Changed Docker image execution options from '--init' to '--ipc=host' for better compatibility.
- Removed unnecessary commands and improved the installation process for packages.
- Updated comments for better understanding of the pipeline flow.

