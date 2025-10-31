Date Range: 2025-10-24 to 2025-10-31

Weekly GitHub Commits:

Repository: pohoda-raiffeisenbank
- Document that HTTP 401 becomes Unix exit code 145

Explain that Unix exit codes are 0-255, so HTTP 401 is truncated to 145 (401 % 256). Full error details are always in the JSON report message field.
- Include actual error message in report (e.g. Certificate is blocked)
- Access Message body property instead of casting to string
- Fix Message object to string conversion in error checking
- Check status messages for auth errors when downloads return empty arrays

When downloads return empty arrays, check status messages for 401/UNAUTHORISED/Certificate errors and set appropriate exit code and report fields
- Check for null/false returns from download methods and set exit code

When downloadPDF() or downloadXML() return null/false, set proper exit code (401) and report fields to indicate download failure
- Fix exit code handling in pohodaSQL-raiffeisenbank-statements-sharepoint

- Ensure exit code is never reset to 0 after any error occurs

- Preserve first error exit code throughout script execution

- Add proper report fields when API exceptions occur (e.g. 'download failed')

- Fix indentation and code structure for proper error handling flow

- Exit code now properly reflects 401 when certificate is blocked by API
- Add certificate validation with report integration

- Capture certificate validation results in all report-generating scripts

- Add certificate_valid field to reports

- Set appropriate exit codes when certificate validation fails

- Skip processing but still generate reports on certificate failure

- Add comprehensive diagnostics to checkCertificatePresence (file existence, permissions, ownership)

- Add detailed diagnostics to checkCertificatePassword (OpenSSL errors, file size, MIME type)
- Fix PHP warnings for null array access

Add null checks before accessing importInfo['details'] array to prevent warnings about accessing array offset on null values at lines 165-166
- Fix exit code handling for API and certificate errors

- Ensure non-zero exit code on API exceptions (default to 1 if no specific code)

- Add certificate validation with detailed error reporting

- Generate JSON report with certificate info on validation failure

- Exit with code 2 on certificate errors

- Update documentation with error handling details

Repository: Flexplorer
- Bump vitexsoftware/ease-bootstrap5-widgets from 1.4.1 to 1.4.2 (#17)

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
- Fix: Clean composer.lock from /usr/lib/flexplorer in postrm

Prevents dpkg warning about non-empty directory during package removal
- Resolved conflicts by accepting remote changes

