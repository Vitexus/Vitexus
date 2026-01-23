Date Range: 2026-01-16 to 2026-01-23

Weekly GitHub Commits:

Repository: system
- ver up
- Ordering update for current php-abraflexi
- add id attribute to "Add to cart" button in Pricelist

Repository: spojeitisac
- Add Zabbix-dev playbook for Debian 13

- Added zabbix-dev.serverovna.brevnov.czf.yml playbook

- Configured for Debian 13 (Trixie) with PHP 8.4

- Fixed compatibility issues (libpcre2-dev, removed php-imap)

- Configured Zabbix Agent2 to monitor itself

- Added zabbix-dev target to Makefile

Co-Authored-By: Warp <agent@warp.dev>
- Configure NetBox to log to syslog

- Add netbox logger with console and syslog handlers

- Add syslog handler to django.request logger for error logging

- Configure syslog handler with /dev/log address and user facility

- Change syslog handler level from DEBUG to INFO for better signal/noise

Co-Authored-By: Warp <agent@warp.dev>
- Fix PostgreSQL deprecated 'db' parameter in netbox role

Replace deprecated 'db' parameter with 'database' in community.postgresql.postgresql_privs task to avoid deprecation warning.

Co-Authored-By: Warp <agent@warp.dev>

Repository: abraflexi-config
- composer: bump phpunit/phpunit from 12.5.4 to 12.5.6 (#43)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 12.5.4 to 12.5.6.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/12.5.6/ChangeLog-12.5.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/12.5.4...12.5.6)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 12.5.6
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

