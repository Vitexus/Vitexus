Date Range: 2026-01-23 to 2026-01-30

Weekly GitHub Commits:

Repository: php-subreg
- composer restore
- build pipelines update
- Add AppStream metadata

- Added metainfo.xml file following AppStream specification

- Extracted metadata from debian/control

- Included project URLs and developer information

- Added proper categorization and content rating

Co-Authored-By: Warp <agent@warp.dev>
- Update debian/Jenkinsfile to latest version from DebianRepository
- composer: update phpstan/phpstan-phpunit requirement (#25)

Updates the requirements on [phpstan/phpstan-phpunit](https://github.com/phpstan/phpstan-phpunit) to permit the latest version.
- [Release notes](https://github.com/phpstan/phpstan-phpunit/releases)
- [Commits](https://github.com/phpstan/phpstan-phpunit/compare/2.0.11...2.0.12)

---
updated-dependencies:
- dependency-name: phpstan/phpstan-phpunit
  dependency-version: 2.0.12
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: php-abraflexi
- Merge pull request #91 from Spoje-NET/dependabot/composer/ergebnis/php-cs-fixer-config-tw-6.59

composer: update ergebnis/php-cs-fixer-config requirement from ^6.58 to ^6.59
- composer: update ergebnis/php-cs-fixer-config requirement

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.58.0...6.59.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.59.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
- Update for AbraFlexi 2026.1.1
- build pipelines update
- fix: Update Jenkinsfile.release to improve build and test stages, and correct remote repository path

Repository: ansible
- Remove aiolos.vitexsoftware.com from HAProxy backend servers configuration
- Add duplicate entry for aiolos.vitexsoftware.com in HAProxy backend servers

Repository: php-hspdev-huaweiapi
- build pipelines update

Repository: system
- Fix Upominac to properly set firma before calling getCustomerDebts

getCustomerDebts() in abraflexi-bricks v1.5 no longer accepts addressID parameter.

Instead, firma must be set on the Customer object first.

Co-Authored-By: Warp <agent@warp.dev>
- Remove debug messages from code

Cleaned up debug/logging statements that were used for troubleshooting.

Co-Authored-By: Warp <agent@warp.dev>
- Fix external ID extraction in DomainCredit plugin

getExternalID() returns an object with a 'ref' property, not the ID directly.

Fixed both abraFlexiAddressToSubregUserName() and abraFlexiAddressToSubregCredit()

to properly extract the ID using (int)$subregID->ref

Co-Authored-By: Warp <agent@warp.dev>
- Fix PHP 8.2+ deprecation warning for dynamic property myTable

Declared myTable property to avoid PHP 8.2+ deprecation warning about dynamic properties.

Co-Authored-By: Warp <agent@warp.dev>
- Update to abraflexi-bricks v1.5 and fix compatibility issues

- Updated composer dependency to vitexsoftware/abraflexi-bricks ^1.5

- Fixed DomainCredit plugin to properly load Adresar with external IDs

- Fixed Pricelist to use custom detail level to load price fields

- Updated all Customer property access from direct to getter methods

Co-Authored-By: Warp <agent@warp.dev>
- Update customer and order handling to use getAdresar() method for improved data access
- Fix type casting for Ipex ID in requestData calls and comment out user initialization in adminlogin

Repository: spojeitisac
- Add zabbix-web-service installation and configuration to role

Added automated installation and configuration of zabbix-web-service

for PDF report generation from Zabbix dashboards.

New files:

- tasks/zabbix_web_service.yml: Installation and configuration tasks

- templates/zabbix_web_service.conf.j2: Configurable template

- handlers/main.yml: Service restart handler

New variables (with defaults):

- spoje_zabbix_webservice_install: true (can disable installation)

- spoje_zabbix_webservice_logfile: /var/log/zabbix/zabbix_web_service.log

- spoje_zabbix_webservice_logfilesize: 1 (MB)

- spoje_zabbix_webservice_debuglevel: 3 (0-5)

- spoje_zabbix_webservice_allowedip: '127.0.0.1,::1'

- spoje_zabbix_webservice_listenport: 10053

- spoje_zabbix_webservice_ignoreurlcerterrors: 1

Updated documentation with configuration examples and usage notes.

Co-Authored-By: Warp <agent@warp.dev>
- Document zabbix-web-service and clarify its role vs browser monitoring

Added documentation to clarify that zabbix-web-service is a separate

component from browser monitoring:

- zabbix-web-service: PDF report generation (port 10053, embedded Chromium)

- Browser monitoring: Active web checks (port 4444, Selenium + browser pollers)

Included comparison table and post-installation configuration notes.

Co-Authored-By: Warp <agent@warp.dev>
- Fix Selenium max-sessions configuration for Zabbix browser monitoring

Problem:

- Selenium was only providing 1 concurrent session slot due to CPU auto-detection

- Only 1 browser poller was active in Zabbix despite StartBrowserPollers=5

- WebDriverURL missing /wd/hub endpoint in defaults

Solution:

- Added selenium_max_sessions variable (default: 5) to webdriver role

- Configure Selenium with override-max-sessions=true to bypass CPU detection

- Added --max-sessions flag to systemd service ExecStart

- Added SE_NODE_MAX_SESSIONS environment variable

- Fixed stereotype quoting in TOML template

- Updated WebDriverURL default to include /wd/hub endpoint

- Updated documentation to clarify StartBrowserPollers must match selenium_max_sessions

Testing:

- Verified on zabbix-dev.serverovna.brevnov.czf (10.11.56.207)

- Selenium Grid now reports 5 available session slots

- All 5 Zabbix browser poller processes running

Co-Authored-By: Warp <agent@warp.dev>
- Create reusable spoje_zabbix_server role and refactor playbook

Created new role roles/services/spoje_zabbix_server that consolidates:

- PostgreSQL database setup

- TimescaleDB configuration

- Apache web server

- PHP configuration

- Zabbix Server, Web, and Agent deployment

- User management tasks

Simplified playbooks/zabbix-dev.serverovna.brevnov.czf.yml:

- Reduced from 223 lines to 39 lines

- Replaced 8 separate role includes with single reusable role

- Centralized Zabbix configuration in one place

- Improved maintainability and reusability

Co-Authored-By: Warp <agent@warp.dev>
- Fix Zabbix web database configuration

Add explicit database connection parameters for Zabbix web interface to match server configuration.

Fixes: Unable to determine current Zabbix database version: the table "dbversion" was not found.

Co-Authored-By: Warp <agent@warp.dev>
- Add Debian 13 support for Zabbix agent role

Added zabbix_agent_version and zabbix_valid_agent_versions configuration to support Debian 13 (Trixie) in the zabbix_agent role.

Co-Authored-By: Warp <agent@warp.dev>
- Filter comment lines from ssh-keyscan output

Added regex filter to exclude comment lines (starting with #) from ssh-keyscan output before adding to known_hosts, preventing module errors.

Co-Authored-By: Warp <agent@warp.dev>
- Fix deprecated local_action mapping syntax

Updated local_action to use string syntax instead of deprecated mapping format to avoid Ansible 2.23 deprecation warning.

Co-Authored-By: Warp <agent@warp.dev>
- Add Debian 13 support for Zabbix web role

Added zabbix_web_version and zabbix_valid_web_versions configuration to support Debian 13 (Trixie) in the zabbix_web role, matching the version support already defined for zabbix_server.

Co-Authored-By: Warp <agent@warp.dev>
- Merge branch 'main' of github.com:Spoje-NET/spojeitisac
- Override list of valid server versions
- Add zabbix_server_startbrowserpollers configuration to Zabbix server role
- Add Zabbix configuration and requirements for PostgreSQL and Zabbix collections
- Add webdriver service role for Selenium with ChromeDriver

- Created complete Ansible role for deploying Selenium Standalone Server

- Configures Selenium to listen on port 4444 with ChromeDriver

- Installs Java, Chromium, and ChromeDriver via apt

- Runs as systemd service under dedicated selenium user

- Opens port 4444 through UFW firewall

- Includes comprehensive role documentation

Co-Authored-By: Warp <agent@warp.dev>
- add key
- add key
- adding user anton
- spoje_linux role update
- Update Zabbix playbook to use common/spoje_linux role instead of sshusers
- Add Ansible role for Samba Domain Member configuration

- Introduced a new Ansible role for configuring Samba as a domain member in an Active Directory environment.
- Added necessary files including playbook, inventory, and variable definitions.
- Created templates for Samba and Kerberos configuration.
- Implemented a quick-start script for easier deployment.
- Included detailed documentation in README and QUICKSTART files.
- Added example host variables for specific server configurations.
- Implemented error handling and verification steps in the playbook.
- Reorganize roles into hierarchical structure and update playbooks

- Reorganized roles/ into three categories:

  - roles/common/ - shared base configurations (spoje_linux)

  - roles/services/ - reusable service roles (netbox, zabbix_client, etc.)

  - roles/hosts/ - host-specific orchestration roles

- Created host-specific roles for:

  - vyvojar.brevnov.czf

  - netbox.spojenet.cz

  - haproxy.spojenet.cz

  - se-app01 (Windows)

  - multi.spojenet.cz

- Updated all playbooks to use new role structure

- Fixed deprecated apt_key usage in spoje_linux role

- Fixed deprecated get_md5 parameter in stat module

- Updated WARP.md documentation with new architecture

Co-Authored-By: Warp <agent@warp.dev>

Repository: PHP-Realpad-Takeout
- Add WARP.md for project documentation and update Jenkinsfile.release remote repository path
- Add AppStream metadata

- Added metainfo.xml file following AppStream specification

- Extracted metadata from debian/control

- Included project URLs and developer information

- Added proper categorization and content rating

Co-Authored-By: Warp <agent@warp.dev>

Repository: realpad2mailkit
- Fix: update import command in postinst script and correct Czech translations in JSON schema
- MultiFlexi definition update to describe exitcodes.
- Fix: update JSON schema reference and improve error handling for mailing list retrieval
- Merge branch 'main' of github.com:Spoje-NET/realpad2mailkit

Repository: pohoda-client-checker
- composer: update ergebnis/php-cs-fixer-config requirement (#19)

Updates the requirements on [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) to permit the latest version.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.58.0...6.59.0)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.59.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: update friendsofphp/php-cs-fixer requirement (#20)

Updates the requirements on [friendsofphp/php-cs-fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) to permit the latest version.
- [Release notes](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases)
- [Changelog](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/CHANGELOG.md)
- [Commits](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/compare/v3.92.0...v3.93.0)

---
updated-dependencies:
- dependency-name: friendsofphp/php-cs-fixer
  dependency-version: 3.93.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: update ergebnis/composer-normalize requirement (#21)

Updates the requirements on [ergebnis/composer-normalize](https://github.com/ergebnis/composer-normalize) to permit the latest version.
- [Release notes](https://github.com/ergebnis/composer-normalize/releases)
- [Changelog](https://github.com/ergebnis/composer-normalize/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/composer-normalize/compare/2.48.0...2.49.0)

---
updated-dependencies:
- dependency-name: ergebnis/composer-normalize
  dependency-version: 2.49.0
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: Flexplorer
- build pipeline update
- composer locked
- Add AppStream metadata

- Added metainfo.xml file following AppStream specification

- Extracted metadata from debian/control

- Included project URLs and developer information

- Added proper categorization and content rating

Co-Authored-By: Warp <agent@warp.dev>
- Bump vitexsoftware/abraflexi-bricks from 1.4.1 to 1.5.0 (#29)

Bumps [vitexsoftware/abraflexi-bricks](https://github.com/VitexSoftware/php-abraflexi-bricks) from 1.4.1 to 1.5.0.
- [Release notes](https://github.com/VitexSoftware/php-abraflexi-bricks/releases)
- [Changelog](https://github.com/VitexSoftware/php-abraflexi-bricks/blob/main/CHANGELOG.md)
- [Commits](https://github.com/VitexSoftware/php-abraflexi-bricks/compare/1.4.1...v1.5.0)

---
updated-dependencies:
- dependency-name: vitexsoftware/abraflexi-bricks
  dependency-version: 1.5.0
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

Repository: abraflexi-config
- composer: bump symfony/process from 8.0.4 to 8.0.5 (#48)

Bumps [symfony/process](https://github.com/symfony/process) from 8.0.4 to 8.0.5.
- [Release notes](https://github.com/symfony/process/releases)
- [Changelog](https://github.com/symfony/process/blob/8.1/CHANGELOG.md)
- [Commits](https://github.com/symfony/process/compare/v8.0.4...v8.0.5)

---
updated-dependencies:
- dependency-name: symfony/process
  dependency-version: 8.0.5
  dependency-type: indirect
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump phpunit/phpunit from 12.5.7 to 12.5.8 (#47)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 12.5.7 to 12.5.8.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/12.5.8/ChangeLog-12.5.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/12.5.7...12.5.8)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 12.5.8
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump phpstan/phpstan from 2.1.33 to 2.1.37 (#44)

---
updated-dependencies:
- dependency-name: phpstan/phpstan
  dependency-version: 2.1.37
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- build pipelines update
- composer: bump phpunit/phpunit from 12.5.6 to 12.5.7 (#45)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 12.5.6 to 12.5.7.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/12.5.7/ChangeLog-12.5.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/12.5.6...12.5.7)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 12.5.7
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump ergebnis/php-cs-fixer-config from 6.58.1 to 6.58.2 (#46)

Bumps [ergebnis/php-cs-fixer-config](https://github.com/ergebnis/php-cs-fixer-config) from 6.58.1 to 6.58.2.
- [Release notes](https://github.com/ergebnis/php-cs-fixer-config/releases)
- [Changelog](https://github.com/ergebnis/php-cs-fixer-config/blob/main/CHANGELOG.md)
- [Commits](https://github.com/ergebnis/php-cs-fixer-config/compare/6.58.1...6.58.2)

---
updated-dependencies:
- dependency-name: ergebnis/php-cs-fixer-config
  dependency-version: 6.58.2
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

