Date Range: 2026-09-04 to 2026-09-11

Weekly GitHub Commits:

Repository: PohodaSQL
- badge position update
- feat(SpojeNet/PohodaSQL): fix duplicate číselné řady by agenda

- Refactor `CiselnaRada::isKnown()` to include `RelCrAg` for agenda-scoped lookup
- Modify `CiselnaRada::create()` to persist `RelCrAg` on auto-created rows
- Add unit tests to validate agenda-scoped number series behavior

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01AjaUFk1JnxEDKtFf1ah6Gx
- docs(README): add Debian packaging badge

Repository: apache2-auth-redmine
- chore(debian): enable and fix chown issue for forky distribution

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01YVPQmZBdyuxFj1rTiJe9p6

Repository: system
- Release v1.6.3
- fix: correct cwd typo in zabbix-system-api-health, add ZABBIX_* to required config

- bin/zabbix-system-api-health had a duplicated "cd cd" typo
- Init.php's required-config list now includes ZABBIX_SERVER, ZABBIX_HOST,
  ZABBIX_SOURCE, matching what's already configured on the deployed instance

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01UnKyfQehQ1Z9ZRMEe4yyWB
- fix(HealthCehck): skip ISPConfig check when credentials are unset

checkIspConfig() called the ISPConfig SOAP client and logged an error
every run even when ISPCONFIG_SERVER/LOGIN/PASSWORD were blank, which
flooded Zabbix with recurring "EASE Error Message" problems on
system.spoje.net after the credentials were intentionally disabled.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01UnKyfQehQ1Z9ZRMEe4yyWB

Repository: Redmine2AbraFlexi
- Readme update
- feat: allow REDMINE_WORKER_MAIL to contain multiple user emails

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01KW2Udp7vyHe5ariwAXNFNx

Repository: igdebi
- chore(debian): enable debian:forky and backport chown fix

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01YVPQmZBdyuxFj1rTiJe9p6

