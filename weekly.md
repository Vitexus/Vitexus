Date Range: 2025-07-11 to 2025-07-18

Weekly GitHub Commits:

Repository: php-abraflexi
- AbraFlexi release v2025.6.2

Repository: pohoda-raiffeisenbank
- Add metadata, licensing info, and refactor bank client logic

Introduces Debian packaging metadata files, including licensing, testing, and upstream information. Refactors bank client to improve HTTP header handling and transaction filtering logic. Replaces `Statementor` usage with a new `BankProbe` class for enhanced transaction reporting and movement handling. Updates terminology for consistency and clarity in transaction processing.
- Add transaction reporting feature and improve error handling

Introduces a new tool to generate detailed JSON reports of Pohoda bank transactions, with customizable scope and output options. Enhances the documentation with usage instructions and updates related project assets.

Improves error handling in transaction processing by validating input data and throwing exceptions for unknown transaction types. Adds safeguards for nullable values in helper functions.

Includes workspace-specific Copilot instructions for consistent coding standards and a new SVG icon to represent the reporting feature.
- Update dependencies and improve transaction presence check logic

Upgrades multiple dependencies to newer versions for improved
compatibility and functionality. Refines the transaction presence
check logic to reset filters before querying, handle invalid
results with exceptions, and ensure robustness. Simplifies a
status message for better readability.
- Adds error code for mServer access failure and updates changelog

Introduces a new exit code (3) to signify errors accessing Pohoda mServer, improving error handling and clarity.

Fixes a bug in the status message by correcting the reference to the lastCurlResponse property.

Updates the Debian changelog with details of recent changes and version increments.
- Create dependabot.yml

Repository: discomp2abraflexi
- Changes data encoding method for unit values

Replaces the use of `uncode` with `code` for processing unit values.
This ensures consistent handling of encoded data, likely addressing issues
with incorrect or unexpected unit representations in the application.
- Replaces `uncode` with `code` for consistent data encoding

Updates multiple instances in `Importer.php` to use the `code` function instead of `uncode` for encoding data values.

This ensures consistency in data handling and aligns with expected functionality across various operations, including supplier identification, record checks, category insertion, and manufacturer code resolution.
- Fixes supplier existence check and updates setup

Refines the logic for supplier existence validation by utilizing `Functions::code` and adjusts root handling to ensure proper key retrieval or insertion.

Updates the app setup configuration to include `discomp2abraflexi-init`.

Bumps the version to 0.3.4 and updates the changelog accordingly.

