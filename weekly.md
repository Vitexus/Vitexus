Date Range: 2025-07-04 to 2025-07-11

Weekly GitHub Commits:

Repository: system
- Refactor: Update CompanyLogo usage in PotvrzeniOdeslaniUhrady and PotvrzeniPrijetiFaktury classes
- Fix namespace import for AbraFlexi in ParovacFaktur class
- Refactors CompanyLogo namespace usage

Updates references to the `CompanyLogo` class to use its local namespace instead of the fully qualified global namespace. Adds missing import for `CompanyLogo` in one file to ensure proper usage. Improves code readability and consistency.
- Refactor AbraFlexi code handling

- Updated instances of \AbraFlexi\RO::code() to \AbraFlexi\Functions::code() for consistency across multiple files.
- Replaced \AbraFlexi\RO::uncode() with \AbraFlexi\Functions::uncode() in various locations to ensure uniformity in decoding logic.
- Adjusted test cases in OrderPluginDomainTest and ParovacFakturTest to reflect the new function usage.
- Ensured all related files in the system and tests are updated accordingly to maintain functionality and compatibility.

Repository: discomp2abraflexi
- Fix filename in installation script for example environment file
- Refactors code to improve readability and functionality

Renames `.env.example` to `example.env` for clarity.

Refactors `ApiClient` and `Importer` classes to:
- Add missing type hints and improve code readability.
- Replace `AbraFlexi\RO` and `AbraFlexi\Functions` calls with consistent usage of `Functions` methods.
- Adjust logic for better error handling and data processing.

Updates unit tests to:
- Improve iteration syntax and assertion messages for better debugging.

Enhances maintainability by standardizing method calls and adding comments.

