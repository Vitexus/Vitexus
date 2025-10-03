Date Range: 2025-09-26 to 2025-10-03

Weekly GitHub Commits:

Repository: php-abraflexi
- Add WARP.md configuration file for AI assistance

- Comprehensive documentation for Warp AI to work effectively in this repository
- Includes development commands for testing, code quality, and evidence class generation
- Documents core architecture: RO/RW base classes and evidence system
- Covers auto-generation process unique to this AbraFlexi API client
- Incorporates coding standards from GitHub Copilot instructions
- Provides implementation patterns and configuration options
- version bump to 3.6.3
- Update for AbraFlexi 2024.7.1
- Adds new traits and updates actions for order management

Incorporates multiple traits into the `ObjednavkaVydana` class to enhance functionality and organization.

Updates the action identifiers in `Actions.json` to include support for the new `objednavka-prijata` action, improving the order management capabilities.

These changes aim to streamline the handling of orders and ensure better maintainability of the code.
- Enhance VAT Rate Query and Clean Up Test Files

- Updated the SazbaDph class to include a filter for only active VAT rates in the query parameters.
- Removed unnecessary blank lines at the end of multiple test files to maintain consistency and adhere to coding standards.
- Merge pull request #77 from Spoje-NET/test-suite-finalization

Finalize and Fix PHPUnit Test Suite
- Finalize and fix PHPUnit test suite

This commit finalizes the PHPUnit test suite by addressing multiple issues, including fatal errors, incomplete tests, and empty test classes.

The following changes have been made:

- **Environment Setup:** Installed PHP, Composer, and all required PHP extensions to ensure the test suite can run without issues.
- **Error Fixes:**
    - Resolved an `ArgumentCountError` in `FunctionsTest` by providing the correct arguments to the `evidenceToClassName` method.
    - Fixed a fatal error in `SazbaDphTest` by correcting the call to `getColumnsFromAbraFlexi` and using the correct property names for date filtering (`platiOdData`, `platiDoData`) and the VAT rate (`szbDph`).
    - Addressed an exception in `RelationTest` by ensuring the `getRelationTarget` method in the `Relation` class correctly passes the evidence to the `RW` constructor.
- **Incomplete Tests:**
    - Completed the tests in `DateTest` and `DateTimeTest`, adding assertions to validate the behavior of the `Date` and `DateTime` classes.
    - Corrected a bug in the `DateTime` class that caused issues with date format parsing and microsecond precision.
- **Empty Test Classes:**
    - Added basic tests to nine previously empty test classes to ensure they can be instantiated correctly and to remove "No tests found" warnings. The following test classes were updated:
        - `ActionsTest`
        - `AdresarTest`
        - `BankaTest`
        - `CenikTest`
        - `ChangesTest`
        - `CompanyTest`
        - `DodavatelTest`
        - `DodavatelskaSmlouvaTest`
        - `ExceptionTest`

The test suite is now stable, and all existing tests pass. The number of warnings has been significantly reduced, and a solid foundation has been laid for further test development.

Repository: discomp2abraflexi
- Improves error handling for API response validation

Enhances the validation of API responses by checking for empty responses.

If the last CURL response is empty or does not start with '<', it now throws a more informative exception including a default message for empty responses.

This change aims to provide clearer error messages and improve debugging.
- Merge branch 'main' of github.com:Spoje-NET/discomp2abraflexi
- Update config types from checkbox to bool for clarity

Changes the type of `DISCOMP_API_DEBUG` and `APP_DEBUG` from checkbox to bool to improve clarity and consistency in the configuration settings.

This update aligns the configuration types with their intended use, enhancing the overall readability and maintainability of the code.

Repository: Redmine2AbraFlexi
- Merge pull request #17 from VitexSoftware/dependabot/github_actions/docker/login-action-3.6.0

Bump docker/login-action from 3.5.0 to 3.6.0
- Bump docker/login-action from 3.5.0 to 3.6.0

Bumps [docker/login-action](https://github.com/docker/login-action) from 3.5.0 to 3.6.0.
- [Release notes](https://github.com/docker/login-action/releases)
- [Commits](https://github.com/docker/login-action/compare/184bdaa0721073962dff0199f1fb9940f07167d1...5e57cd118135c172c3672efd75eb46360885c0ef)

---
updated-dependencies:
- dependency-name: docker/login-action
  dependency-version: 3.6.0
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>

Repository: abraflexi-config
- Update Copilot instructions and dependencies for clarity and compatibility

Enhances the Copilot instructions file with detailed guidelines for
code style, testing, documentation, and development practices.

Updates multiple dependencies in `composer.lock` to newer versions
to maintain compatibility and address potential issues or improvements
in the libraries.

The dependency updates include:
- `justinrainbow/json-schema` (6.5.1 -> 6.5.2)
- `marc-mabe/php-enum` (v4.7.1 -> v4.7.2)
- `symfony/console` (v7.3.3 -> v7.3.4)
- `symfony/process` (v7.3.3 -> v7.3.4)
- `symfony/string` (v7.3.3 -> v7.3.4)

No changes in core logic or functionality were introduced.
- composer: bump phpunit/phpunit from 12.3.12 to 12.3.15 (#21)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 12.3.12 to 12.3.15.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/12.3.15/ChangeLog-12.3.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/12.3.12...12.3.15)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 12.3.15
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump phpstan/phpstan from 2.1.28 to 2.1.29 (#22)

Bumps [phpstan/phpstan](https://github.com/phpstan/phpstan) from 2.1.28 to 2.1.29.
- [Release notes](https://github.com/phpstan/phpstan/releases)
- [Changelog](https://github.com/phpstan/phpstan/blob/2.1.x/CHANGELOG.md)
- [Commits](https://github.com/phpstan/phpstan/compare/2.1.28...2.1.29)

---
updated-dependencies:
- dependency-name: phpstan/phpstan
  dependency-version: 2.1.29
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

