Date Range: 2026-05-29 to 2026-06-05

Weekly GitHub Commits:

Repository: pohoda-raiffeisenbank
- feat: add extId to bank imports + require php-riesenia-pohoda >= 1.5.2

Set bankHeader/extId on every imported bank record (Statementor + Transactor)
so Pohoda can cross-reference records with the originating transaction ID.
Handle graceful fallback when export rights are missing in
checkForTransactionPresence (log warning, continue to import attempt).
Detect Pohoda error 121 (ExtID duplicate) as a silent skip.

Require php-riesenia-pohoda (>= 1.5.2) which adds extId support to
Bank/Header (Vitexus/php-riesenia-pohoda, riesenia/pohoda#63 / PR#64).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: add extId to bank imports for native Pohoda deduplication

Set bankHeader/extId (ids = transaction reference, exSystemName = app name)
on every import in both Statementor and Transactor so Pohoda stores the
external identifier in its own link table. On re-import of the same
transaction Pohoda returns error code 121; isExtIdDuplicateError() detects
this and treats it as a silent skip (success=true, duplicate=true) instead
of a failure, complementing the existing intNote-based checkForTransactionPresence().

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: catch PDOException in attachSharepointUrl to prevent fatal crash

SpojeNet\PohodaSQL\DOC picks up the MultiFlexi MySQL connection instead
of the configured MSSQL one, throwing 'Table multiflexi.DOC doesn't
exist'. The bank import already succeeded at that point, so a fatal
crash (exit 255) is wrong — catch the exception, log it, and return
false so the caller exits with code 4 instead.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: act on certificate check result and deduplicate auth error detection

pohoda-raiffeisenbank-transactions: exit(2) when checkCertificate()
fails instead of silently proceeding with an invalid certificate.

pohodaSQL-raiffeisenbank-statements-sharepoint: replace two identical
inline auth-error detection loops with PohodaBankClient::detectAuthError().

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- fix: correct exit code descriptions in all multiflexi app configs

Replace generic/wrong descriptions with accurate ones derived from the
actual PHP source scripts. Fixes code 2 (cert failure, PDF error, report
write failure), code 3/4 (mServer/SharePoint SQL), code 145 (HTTP 401
auth error), and adjusts retry flags accordingly.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- feat: animate Raiffeisen Giebelkreuz icon with slow rotation

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

Repository: Redmine2AbraFlexi
- Add uuid to app.json to link icon on multiflexi.eu

Co-Authored-By: Oz <oz-agent@warp.dev>

