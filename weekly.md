Date Range: 2026-08-22 to 2026-08-29

Weekly GitHub Commits:

Repository: spojeitisac
- refactor(mcp_rack): update package names for mcp-server-zabbix and mcp-server-netbox

The zabbix-mcp-server and netbox-mcp-server Debian packages were renamed to mcp-server-zabbix and mcp-server-netbox; updating the Ansible role/playbooks that install them by exact apt package name so they don't break.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- feat(playbooks): add Pohoda Daily Digest deployment playbook

Adds a new Ansible playbook to automate the setup of the Pohoda Daily Digest in MultiFlexi for development environments. This ensures that the configuration is reproducible and versioned, avoiding manual changes during deployments.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- refactor(mcp_rack): update package names to match new convention

The abraflexi-mcp-server Debian package was renamed to mcp-server-abraflexi; updating the Ansible role/playbooks that install it by exact apt package name so they don't break.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- fix(mcp-rack): update fastmcp run command and fix service names

- Updated `mcp-rack-run.sh.j2` to pass MCPConfig path positionally instead of via the removed --config flag.
- Renamed `zabbix-mcp-server`/`netbox-mcp-server` entries' `name` field to `zabbix`/`netbox`, fixing naming mistakes in systemd units.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- feat(mcp-rack): add AbraFlexi instances, static creds, and catalog auto-registration

- Deploy two abraflexi-mcp-server instances on SE-MCP-RACK01 (Spoje.NET
  s.r.o. and SpojeNet IT s.r.o.), each with its own static per-server
  credentials rather than a Vaultwarden secure note.
- mcp_rack: support optional static per-server env files (item.env) as
  an alternative to Vaultwarden, and make the wrapper script resilient
  when Vaultwarden bootstrap creds are missing/unset.
- mcprack_app: auto-register every mcp_rack_servers entry as an
  McpServer catalog row (new register_mcp_server.py + register_servers.yml)
  so installed servers show up in /admin/servers.
- mcprack_app: configure PUBLIC_BASE_URL so CLI-generated
  (`mcprack user config show/download`) relay URLs resolve to the
  production IP (10.11.25.175) instead of localhost.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- refactor(roles): add mcprack_app role and update mcp_rack role for production deployment

- Added new `mcprack_app` role to deploy the Flask catalog web app on SE-MCP-RACK01.spojenet.local.
- Updated `mcp_rack` role with fixes, improvements, and restructuring.
- Refactored playbooks and roles to follow a one-host/one-playbook/one-host-role convention.
- Fixed relative-path bug in `playbooks/mcp_store_credentials.yml`.
- Documented conventions/gotchas in AGENTS.md.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: pohoda-raiffeisenbank
- fix(apps): truncate long descriptions to fit DB column length
- feat(multiflexi): add tool for sorting bank statement PDF/XML files into per-year subfolders

- Introduce MultiFlexi, a script that sorts bank statement files in the SharePoint working folder.
- Creates per-year subfolders to organize statements by year.
- Updates README and AGENTS/.env.example with new documentation.
- Merge branch 'production'
- refactor(multiflexi): fix regex artifact paths and update STATEMENT_SAVE_DIR
- Production same as main (#45)

* release(debian): disable ubuntu:resolute for now due to multiflexi-database-connection issue

multiflexi-database-connection isn't published for ubuntu:resolute yet, so every release build fails at the post-build install-test on that distro even though the actual .deb builds fine on bookworm/trixie/jammy/noble.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

* fix(tests): repair stale PHPUnit skeleton tests and gate on credential availability

Signatures for PohodaBankClient/Statementor/Transactor had drifted from
their tests (missing required args, wrong scope names, uninitialized
typed properties), and a stray "../" in tests/test.env pointed CERT_FILE
outside the repo. Restore each test's real assertions against current
signatures, and add a CredentialGuard trait so tests needing a live RB
certificate, reachable mServer, or the external PohodaSQL runtime class
skip cleanly instead of erroring when those aren't available locally.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

* Release v1.8.8

---------

Co-authored-by: Claude Sonnet 5 <noreply@anthropic.com>
- Release v1.8.8
- fix(tests): repair stale PHPUnit skeleton tests and gate on credential availability

Signatures for PohodaBankClient/Statementor/Transactor had drifted from
their tests (missing required args, wrong scope names, uninitialized
typed properties), and a stray "../" in tests/test.env pointed CERT_FILE
outside the repo. Restore each test's real assertions against current
signatures, and add a CredentialGuard trait so tests needing a live RB
certificate, reachable mServer, or the external PohodaSQL runtime class
skip cleanly instead of erroring when those aren't available locally.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- Merge remote-tracking branch 'origin/main' into production
- feat(link-fixer): ensure and relocate XML statements to OFFICE365_PATH_XML

pohoda-sharepoint-link-fixer.php now also detects XML statements
belonging to ACCOUNT_NUMBER sitting alongside the PDFs in OFFICE365_PATH
(e.g. uploaded before OFFICE365_PATH_XML was configured, or from before
that feature existed) and relocates them to OFFICE365_PATH_XML, reported
under the new xml_moved report key. Respects LINK_FIX_APPLY the same way
as the existing fixed/corrected/removed operations (dry-run reports only,
apply actually moves). Adds GraphSharePointClient::moveFile() (Graph
PATCH .../drive/items/{id} with a parentReference.path) and a legacy-REST
doMoveXml closure (File::moveToEx()) for the two auth paths.

Also adds GraphSharePointClient::ensureFolder() and wires it into
pohoda-raiffeisenbank-setup.php (when OFFICE365_PATH_XML is set): Graph's
simple upload PUT does not auto-create missing parent folders, so without
this the first XML upload/move into a not-yet-created OFFICE365_PATH_XML
would 404.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- docs(setup): document DOC grant SQL, extend setup to grant UPDATE/DELETE

Add the manual GRANT INSERT/UPDATE/DELETE ON dbo.DOC example to the
README's Setup command section, and extend pohoda-raiffeisenbank-setup.php
to grant all three (previously INSERT only) so it matches - UPDATE/DELETE
are needed by the link fixer's --apply "corrected"/"removed" cases, not
just attachSharepointUrl()'s INSERT.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- feat(setup): grant DOC INSERT to the runtime DB user

pohoda-raiffeisenbank-setup.php now optionally connects via DB_* (point
it at an admin-capable account, e.g. sa) and runs GRANT INSERT ON dbo.DOC
to a separate GRANT_INSERT_TO username, so
PohodaBankClient::attachSharepointUrl() can actually write the SharePoint
link attachment. GRANT_INSERT_TO is a plain field, not folded into DB_*,
since the standard MultiFlexi SQLServer/DatabaseConnection credential only
ever supplies DB_CONNECTION/DB_HOST/DB_PORT/DB_DATABASE/DB_USERNAME/
DB_PASSWORD/DB_SETTINGS - a custom DB_APP_USERNAME would never get
populated by attaching one.

Reproduced against the dev MultiFlexi test database: without this grant,
both pohodaSQL-raiffeisenbank-statements-sharepoint.php (exit code 4) and
pohoda-sharepoint-link-fixer.php's --apply mode fail outright with
"The INSERT permission was denied on the object 'DOC'".

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- feat(multiflexi): declare SharePoint link-format fields for link fixer

Add SHAREPOINT_PERMANENT_LINK, SHAREPOINT_LINK_TYPE, and
SHAREPOINT_LINK_SCOPE to pohoda_sharepoint_link_fixer.multiflexi.app.json,
matching the definitions already present in the sibling statements/uploader
app.json files. The script has read and used these three since the
permanent-link-upgrade feature was added, but they were never declared
here, so MultiFlexi's UI had no field for them at all (SHAREPOINT_LINK_TYPE
in particular needs the "set" type to render as a dropdown of valid values
instead of free text).

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
- fix(pohoda-sharepoint-link-fixer): cast SharePoint filename key back to string

PHP silently coerces purely-numeric string array keys to int, so a
SharePoint item literally named e.g. "20260821" (no matter the actual
extension check that follows) makes $name an int instead of a string
when iterating $sharepointFiles - crashing preg_match() with "Argument
#2 ($subject) must be of type string, int given" under PHP 8+'s strict
internal function signatures. Reproduced against a real, actively-used
SharePoint folder on the dev MultiFlexi instance. The two other Graph
listFiles() consumers (checker/uploader scripts) only do
array_key_exists() lookups with a non-numeric needle, so they aren't
affected by the same coercion.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

