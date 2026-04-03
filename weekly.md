Date Range: 2026-03-27 to 2026-04-03

Weekly GitHub Commits:

Repository: discomp2abraflexi
- Fix multiple logical and security issues across codebase

- Fix SSL hostname verification (CURLOPT_SSL_VERIFYHOST false -> 2)
- Declare authSessionId property to prevent PHP 8.2+ deprecation
- Remove unused $postParams from doCurlRequest()
- Remove redundant XML validation in getResult()
- Add html_entity_decode to getResultByFromTo() for consistency
- Handle curl_exec false return in getImage()
- Fix updatePrice() key mismatch when called from allTimeItems()
- Remove duplicate typZasobyK overwrite ignoring config
- Fix error counter mismatch (local $errors vs $this->errors)
- Capture insert response code before image uploads in freshItems()
- Fix scopeToInterval specific-date range reset to midnight
- Fix missing space in December DateTime string
- Remove duplicate init calls in discomp2abraflexi-init.php
- Fix stray minus operator before Shared::init()
- Rename WARP.md to AGENTS.md
- credential prototype definition keyword fix

Repository: Flexplorer
- Bump spojenet/flexibee from 3.7.0 to 3.7.2 (#38)

Bumps [spojenet/flexibee](https://github.com/Spoje-NET/php-abraflexi) from 3.7.0 to 3.7.2.
- [Release notes](https://github.com/Spoje-NET/php-abraflexi/releases)
- [Commits](https://github.com/Spoje-NET/php-abraflexi/compare/v3.7.0...v3.7.2)

---
updated-dependencies:
- dependency-name: spojenet/flexibee
  dependency-version: 3.7.2
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

