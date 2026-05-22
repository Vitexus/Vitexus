Date Range: 2026-05-15 to 2026-05-22

Weekly GitHub Commits:

Repository: ipex-b2b
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: php-subreg
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: php-abraflexi
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- resolute build
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: PohodaSQL
- docs: add URL attachment example using DOC::urlAttachment and Agenda constants

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- docs: add usage examples to README

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- docs: add Packagist badges to README

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: sync struct definitions with live Pohoda SQL DB and add 16 new agenda classes

- Rename WARP.md to AGENTS.md
- Add pohodaSQL.svg as AppStream metainfo stock icon
- Sync 7 existing classes (Adresar, Faktura, FakturaPolozka, Majetek,
  MajetkoveOperace, OdpisovyPlan, DOC) with real StwPh_12345678_2026 schema;
  fix CiselnaRada missing 'array' type on $struct
- Add 16 new classes generated from live DB: BankovniVypis, BankovniVypisPol,
  CasoveRozliseni, CasoveRozliseniPol, HotovostniOperace, HotovostniOperacePol,
  Nabidka, NabidkaPol, ObjednavkaPrijata, ObjednavkaPrijataPol, Pokladna,
  PokladnaPol, Uhrada, Zamestnanec, Zasilka, ZasilkaPol
- Add PHPUnit test suite covering all 26 classes (35 tests, 81 assertions)
- Update README with full Available Classes table and DB sync note
- Bump version to 0.2.2 in debian/changelog

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: resolve merge conflict - keep forky disabled with reason comment

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Migrace na Debian PHP autoloader systém

- Aktualizován debian/README.Debian s instrukcemi pro Debian autoloader
- Přechod z vendor/autoload.php na /usr/share/php/*/autoload.php
- Využití pkg-php-tools a phpab pro generování autoloaderu
- Dokumentace pro migraci existujících aplikací
- Add AppStream metadata

- Added metainfo.xml file following AppStream specification

- Extracted metadata from debian/control

- Included project URLs and developer information

- Added proper categorization and content rating

Co-Authored-By: Warp <agent@warp.dev>
- Update debian/Jenkinsfile to latest version from DebianRepository
- build update
- debian: modernise packaging with InstalledVersions, AppStream metainfo, and parallel CI

- Add type=library to composer.json
- debian/control: fix Section/Architecture, bump Standards-Version, add jq+appstream Build-Depends, uncomment Vcs-* fields, drop explicit composer dep (transitive via ease-core)
- debian/rules: bake PKG_VERSION/PKG_SOURCE/PKG_TYPE at build time via jq+sed; install SVG icon to hicolor theme; validate metainfo with appstreamcli
- debian/autoload.php: static PSR-4 autoloader with InstalledVersions block (build-time placeholders)
- debian/php-spojenet-pohoda-sql.metainfo.xml: AppStream generic component with stock icon
- debian/Jenkinsfile: replace serial loop with parallel branches, update distros to trixie/forky/resolute, add Aptly publish stage
- debian/source/format: 3.0 (native) → 3.0 (quilt)
- debian/gbp.conf, debian/watch: add missing files
- debian/postinst: remove obsolete composer-global-update call

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: apache2-auth-redmine
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: php-hspdev-huaweiapi
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: system
- Switch phinx dependency from php-robmorgan-phinx to php-cakephp-phinx

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Replace ease-bricks with ease-html-widgets dependency; resolve stash conflict

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: PHP-Realpad-Takeout
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: add ubuntu:resolute to build targets

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: realpad2mailkit
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: add ubuntu:resolute to build targets

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: pohoda-client-checker
- chore: untrack .phpunit.result.cache

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- chore: ignore root-level .phpunit.result.cache

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: getopt long options, APP_NAME guard, accountNumber typo; update docs

- pohoda-transaction-report: fix getopt longopts from one concatenated
  string to ['output::', 'environment::'] so --environment actually works
- pohoda-transaction-report: guard APP_NAME define with defined() ||
  to avoid a PHP notice when debian/autoload.php has already set it
- BankProbe: rename accuntNumber() → accountNumber()
- BankProbeTest: update @covers and call site to match renamed method
- README.md: restructure — move misplaced JSON out of License section,
  deduplicate config, show --environment long-option form in examples
- debian/README.Debian: correct autoloader path and class install path,
  update repo URL

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: comment out 'ubuntu:jammy' distribution in Jenkinsfile
- docs: update README and changelog with usage instructions and environment variables
- deb: modernise packaging with static autoloader and AppStream metadata

Add debian/autoload.php with Composer\InstalledVersions injection baked
in at build time; replace legacy vendor-path rewrite with proper autoload
install; add man pages for both binaries; fix auto-generated metainfo
summary/description and ship pohoda-client-checker.svg as hicolor icon.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- resolute build
- update for current multiflexi-cli syntax
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: pohoda-raiffeisenbank
- Merge branch 'main' of github.com:Spoje-NET/pohoda-raiffeisenbank
- build pipeline update
- Merge pull request #22 from Spoje-NET/dependabot/github_actions/actions/checkout-6

Bump actions/checkout from 5 to 6
- Merge pull request #36 from Spoje-NET/dependabot/composer/friendsofphp/php-cs-fixer-tw-3.95

composer: update friendsofphp/php-cs-fixer requirement from ^3.92 to ^3.95
- chore: release 1.5.0, fix multiflexi app.json schemas and translations

- Release 1.5.0 (noble) in debian/changelog
- Bump schemaVersion to 3.1.0 in transactions and bank-report app.json
- Add exit code 2 to transactions and bank-report app.json
- Add exit code 3 (mServer unreachable) to statements app.json
- Translate all CS descriptions in statements app.json from English to Czech
- Fix RESULT_FILE typo upoad→upload in sharepoint uploader app.json

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- chore: bump to 1.5.0, update docs and tests for mServer-based SharePoint attachment

- Bump version to 1.5.0 in debian/changelog
- Remove DB_* env vars and PohodaSQL references from README.md
- Remove DB_* fields and SQLServer requirement from multiflexi app.json
- Add testAttachSharepointUrl() to PohodaBankClientTest

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: replace PohodaSQL direct DB attachment with mServer XML

MultiFlexi's Native Executor injects its own DB_* env vars (MySQL),
overriding the SQL Server credentials from the credential store, causing
SpojeNet\PohodaSQL\DOC to connect to the wrong database.

Replace direct SQL attachment with PohodaBankClient::attachSharepointUrl()
which sends a bnk:attachments/typ:urlAddress update via Pohoda mServer XML,
removing the DB_* dependency entirely.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: add php-vgrem-php-spo as dependency for SharePoint support

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: resolve APP_NAME redefinition warning and PohodaBankClient not found error

Move \define('APP_NAME', ...) before require_once in all scripts so the
script-specific name wins over the fallback set in the packaged autoload.php.
Fix autoloader path by removing spurious src/ prefix so Pohoda\RaiffeisenBank\
classes resolve correctly. Fix debian/rules sed line numbers so
declare(strict_types=1) remains the first statement after <?php.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- syntax fix in build pipeline
- do not build for problematic distros
- chore: add man pages, standardize autoloader, and improve build system packaging
- feat: add ubuntu:resolute to build targets

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: discomp2abraflexi
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: Icinga-Editor
- Switch phinx dependency from php-robmorgan-phinx to php-cakephp-phinx

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: v.s.cz
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Replace php-vitexsoftware-ease-bricks with php-vitexsoftware-ease-html-widgets

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: netbeans-php-tools
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Migrace na Debian PHP autoloader systém

- Aktualizován debian/README.Debian s instrukcemi pro Debian autoloader
- Přechod z vendor/autoload.php na /usr/share/php/*/autoload.php
- Využití pkg-php-tools a phpab pro generování autoloaderu
- Dokumentace pro migraci existujících aplikací
- Add AppStream metadata

- Added metainfo.xml file following AppStream specification

- Extracted metadata from debian/control

- Included project URLs and developer information

- Added proper categorization and content rating

Co-Authored-By: Warp <agent@warp.dev>

Repository: Flexplorer
- fix: update outdated footer links to current abra.eu/flexibee.eu URLs

- Replace dead ticket system URLs (flexibee.eu/podpora/Tickets/*)
  with Support Portal (podpora.flexibee.eu) and Technical Support contact
- Update download URL: stazeni-abraflexi -> abra.eu/flexi/podpora/stazeni-abra-flexi/
- Fix typo: 'Deverloper' -> 'Developer' in license request link
- Add Knowledge Base (podpora.flexibee.eu) to Docs section

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: inject package name, version and type into autoload.php at build time

The static debian/autoload.php template had 'unknown' and '0.0.0'
placeholders that were previously filled by dh_phpcomposer but no
longer are after switching to a static autoloader. Add sed substitutions
in override_dh_install to populate them from dpkg-parsechangelog, which
restores the correct version shown in the page footer via
Composer\InstalledVersions::getRootPackage().

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: remove non-existent disconnect() call in User::tryToLogin()

AbraFlexi\RO has no disconnect() method since at least 3.7.3.
curlInit() already creates a fresh curl_init() handle, making
the disconnect() call both broken and redundant.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: replace broken sed glob in rules with exact Init.php path substitutions

The previous `s/..../\/usr\/share\/php\/flexplorer/g` used unescaped dots
which are regex wildcards in sed, causing every 4 characters in Init.php
to be replaced with the path string — completely corrupting the installed file.

Replace with explicit literal substitutions:
- '../vendor/autoload.php' -> '/var/lib/flexplorer/autoload.php'
- '../i18n' -> '/usr/share/locale'

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: disable ubuntu:resolute build in Jenkinsfile

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Merge pull request #47 from VitexSoftware/replace-warp-with-agents

docs: replace WARP.md with AGENTS.md
- docs: replace WARP.md with AGENTS.md

Swap out the legacy AI developer context document (WARP.md) for the
new AGENTS.md format used by modern AI agent tooling.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: resolve open_basedir violations, APP_NAME conflict and postinst constant name mismatches

- Fix config.php relative paths (../configurations/, ../backups) that escaped
  open_basedir by adding sed transformations in debian/rules to rewrite them
  to /etc/flexplorer/ and /var/lib/flexplorer/backups at package build time
- Guard APP_NAME define in Init.php to avoid conflict with autoload-defined value
- Fix postinst sed patterns: DEFAULT_FLEXIBEE_* -> DEFAULT_ABRAFLEXI_* and
  DEFAULT_BACKUP_DIRECTORY -> BACKUP_DIRECTORY to match actual config.php constants
- Add mkdir -p in postinst to create backup directory on install
- Add APP_NAME guard to debian/autoload.php template for consistency

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Replace php-vitexsoftware-ease-bricks with php-vitexsoftware-ease-html-widgets

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Remove generated autoloader, use static debian/autoload.php

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Re-add --with phpcomposer, declare pkg-php-tools build-dep

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Drop --with phpcomposer from dh call

Package uses a static autoloader; pkg-php-tools is not needed.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Move debian/conf/* to debian/, fix installed package path issues

- Relocate all conf files directly under debian/ and remove debian/conf/
- Update flexplorer.install and drop stale debian/conf/composer.json jq line
- Patch Init.php via sed to use /etc/flexplorer/.env instead of ../.env
  (avoids open_basedir violation in installed package)
- Patch PageBottom.php via sed to use /var/lib/flexplorer/autoload.php
  instead of composer.lock (not present in deb package installs)

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: php-ease-twbootstrap-widgets
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: Redmine2AbraFlexi
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: abraflexi-config
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: igdebi
- fix: disable debian:forky build in Jenkinsfile(s)

Forky is still unstable/research-only. The full Debian package
ecosystem is not yet available for Forky, causing cascading
unmet dependency failures. Re-enable once the full stack builds
cleanly for Forky.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: wait for RebulidDEBRepoByAnsible before apt test installation

Polls the Jenkins job color before entering the Test stage so apt-get
does not hit the repository while it is being rebuilt by the Ansible
republish job. Uses waitUntil instead of buildBlocker (plugin absent).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: block build when RebulidDEBRepoByAnsible is running

Prevents test installation failures caused by apt-get hitting the
repository while it is being rebuilt by the Ansible republish job.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

