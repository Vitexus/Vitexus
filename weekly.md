Date Range: 2026-01-02 to 2026-01-09

Weekly GitHub Commits:

Repository: system
- build pipeline update
- v1.5.17 release
- build deps update
- Update for current EaseBricks

Repository: pohoda-client-checker
- deb deps update
- Refactors pipeline and improves test environment handling

Streamlines Jenkins pipeline logic with clearer variable usage,
enhances artifact management, and improves error handling for
package installation.

Updates test file headers for clarity and consistency.
Switches command syntax for JSON imports to improve reliability.

Simplifies color customization settings for a cleaner workspace
appearance.
- Improves Czech localization and environment descriptions

Enhances Czech translations for application names, field descriptions, and environment variables.
Updates several environment field descriptions for clarity and consistency between English and Czech.
Facilitates better usability and localization for Czech-speaking users.
- Resolve merge conflicts and update manifests to schema v3.2.1; pull changes

Repository: pohoda-raiffeisenbank
- MultiFlexi configuration update

Repository: discomp2abraflexi
- Improves multiflexi validation, credential import, and localization

Adds a Makefile target for validating multiflexi JSON files and updates post-install scripts to separately import application and credential type JSONs. Refines Czech localization in app config and removes a redundant credential type JSON. Also aligns code with stricter type checks and updates a dependency version for better compatibility.

Repository: Icinga-Editor
- Updates dependencies and improves Markdown rendering security

Aligns dependency versions with current standards, adds missing PHP and extension requirements, and replaces deprecated Markdown library usage with a safer, modern implementation.
Enhances security by stripping raw HTML and disallowing unsafe links in rendered Markdown.

Repository: Flexplorer
- Bump friendsofphp/php-cs-fixer from 3.92.3 to 3.92.4 (#26)

Bumps [friendsofphp/php-cs-fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) from 3.92.3 to 3.92.4.
- [Release notes](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases)
- [Changelog](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/compare/v3.92.3...v3.92.4)

---
updated-dependencies:
- dependency-name: friendsofphp/php-cs-fixer
  dependency-version: 3.92.4
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: abraflexi-config
- composer: bump ergebnis/php-cs-fixer-config from 6.58.0 to 6.58.1 (#40)

Bumps [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) from 6.58.0 to 6.58.1.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.58.0...6.58.1)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.58.1
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump friendsofphp/php-cs-fixer from 3.92.3 to 3.92.4 (#41)

Bumps [friendsofphp/php-cs-fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) from 3.92.3 to 3.92.4.
- [Release notes](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases)
- [Changelog](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/compare/v3.92.3...v3.92.4)

---
updated-dependencies:
- dependency-name: friendsofphp/php-cs-fixer
  dependency-version: 3.92.4
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

