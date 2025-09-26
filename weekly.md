Date Range: 2025-09-19 to 2025-09-26

Weekly GitHub Commits:

Repository: ansible
- Fix automatic certificate renewal for HAProxy

- Fix systemd letsencrypt service: remove non-existent certbot user dependency
- Fix certbot-haproxy-deploy script: correct HAProxy config path from /haproxy/haproxy.cfg to /etc/haproxy/haproxy.cfg
- Add systemd reload handler and proper service management
- Add certificate renewal tasks with force renewal for expired certs
- Deploy corrected deploy script to /usr/bin/certbot-haproxy-deploy

Fixes automatic renewal issues for novak.proxy.spojenet.cz and other certificates.
Certificate renewed successfully until 2025-12-21.

Repository: discomp2abraflexi
- Merge pull request #14 from Spoje-NET/feature/add-retry-mechanism

Add retry mechanism for cURL requests
- feat: Add retry mechanism for cURL requests

When a cURL error occurs, the application will now wait for one minute and then retry the request. The number of retries is configurable via the DISCOMP_RETRY environment variable, with a default of 10.

Repository: abraflexi-config
- composer: bump phpunit/phpunit from 12.3.11 to 12.3.12 (#19)

Bumps [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit) from 12.3.11 to 12.3.12.
- [Release notes](https://github.com/sebastianbergmann/phpunit/releases)
- [Changelog](https://github.com/sebastianbergmann/phpunit/blob/12.3.12/ChangeLog-12.3.md)
- [Commits](https://github.com/sebastianbergmann/phpunit/compare/12.3.11...12.3.12)

---
updated-dependencies:
- dependency-name: phpunit/phpunit
  dependency-version: 12.3.12
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- composer: bump phpstan/phpstan from 2.1.25 to 2.1.28 (#20)

Bumps [phpstan/phpstan](https://github.com/phpstan/phpstan) from 2.1.25 to 2.1.28.
- [Release notes](https://github.com/phpstan/phpstan/releases)
- [Changelog](https://github.com/phpstan/phpstan/blob/2.1.x/CHANGELOG.md)
- [Commits](https://github.com/phpstan/phpstan/compare/2.1.25...2.1.28)

---
updated-dependencies:
- dependency-name: phpstan/phpstan
  dependency-version: 2.1.28
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

