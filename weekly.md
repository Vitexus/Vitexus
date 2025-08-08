Date Range: 2025-08-01 to 2025-08-08

Weekly GitHub Commits:

Repository: php-abraflexi
- Bump version to 3.6.1 and update changelog
- Add PHONY targets to Makefile and improve code robustness

Enhances Makefile maintainability by explicitly declaring PHONY targets and adding descriptive comments for each target.

Improves code robustness in `AbraFlexi/RO` by adding a null check to prevent potential errors when processing values.

Refines unit testing in `DateTest` by implementing and validating the `timestampToFlexiDate` method, ensuring proper functionality and type safety.
- Deprecates legacy date conversion methods

Replaces legacy timestamp and date conversion methods with new, standardized alternatives (`fromTimestamp`, `fromDateTime`, `toDateTime`). Marks old methods as deprecated to encourage migration to the updated API.

Improves consistency and clarity in handling date and datetime conversions. Updates related deprecation notices for better guidance.
- Adds placeholder test for `timestampToFlexiDate`

Introduces an incomplete unit test for the `timestampToFlexiDate` method in `DateTest`. This test is marked as incomplete to indicate that implementation is pending.

Removes commented-out placeholder test for the same method in `RWTest` to avoid redundancy and maintain code clarity.
- AbraFlexi release v2025.7.0

Repository: Redmine2AbraFlexi
- MultiFlexi definition update
- Adds artifact configuration and fixes minor issues

Introduces optional artifact configuration for JSON patterns in the application metadata to improve deployment flexibility.

Corrects a typo in a method description and refines code by using a namespaced utility function for currency decoding.

Enhances maintainability and improves clarity across the codebase.

