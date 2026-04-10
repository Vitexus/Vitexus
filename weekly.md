Date Range: 2026-04-03 to 2026-04-10

Weekly GitHub Commits:

Repository: php-abraflexi
- Merge pull request #99 from castillo-n/fix/empty-results-parse-error

Fix undefined array key 0 in RW::parseError() when results is empty

Repository: Flexplorer
- Bump vitexsoftware/ease-bootstrap5-widgets from 1.4.1 to 1.4.2 (#39)

Bumps [vitexsoftware/ease-bootstrap5-widgets](https://github.com/VitexSoftware/php-ease-twbootstrap5-widgets) from 1.4.1 to 1.4.2.
- [Release notes](https://github.com/VitexSoftware/php-ease-twbootstrap5-widgets/releases)
- [Commits](https://github.com/VitexSoftware/php-ease-twbootstrap5-widgets/compare/1.4.1...1.4.2)

---
updated-dependencies:
- dependency-name: vitexsoftware/ease-bootstrap5-widgets
  dependency-version: 1.4.2
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- Remove composer.json and update package dependencies in control file

- Deleted the composer.json file as it is no longer needed.
- Updated the debian/control file to include specific PHP package dependencies.
- Removed the use of phpcomposer in the rules file to streamline the build process.
- Add autoload.php for Flexplorer and update installation paths

- Introduced debian/conf/autoload.php to handle autoloading of Flexplorer classes and dependencies.
- Updated debian/install to include autoload.php in the installation path.
- Changed source format from '3.0 (git)' to '3.0 (native)' in debian/source/format.
- Update Debian packaging for Flexplorer

- Changed Build-Depends to use pkg-php-tools instead of composer-debian.
- Updated the package dependencies to use ${phpcomposer:Debian-require}.
- Removed composer.json installation from the package.
- Removed composer.lock and autoload.php cleanup from postrm script.
- Updated rules to use dh with phpcomposer and corrected paths in Init.php.

