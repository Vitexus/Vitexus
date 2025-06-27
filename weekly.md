Date Range: 2025-06-20 to 2025-06-27

Weekly GitHub Commits:

Repository: php-abraflexi
- Bump version to 3.6.0 and add overpayment handling
- Update for AbraFlexi 2025.5.2
- Adds support for overpayment document type in payment pairing

Extends the `sparujPlatbu` method to include an optional `overpayTo` parameter, allowing specification of the document type for overpayment during payment pairing.

Improves flexibility in handling overpayments via REST API integration.
- Updates handling of relation values and column info

Improves relation value handling by ensuring compatibility with array inputs and adjusts column info retrieval to parse JSON files instead of PHP scripts.

Updates changelog to version 3.5.4, adding a note on better relations values.

Enhances data consistency and usability across the application.
- release v3.5.1 Refactor code style and improve consistency across multiple files

Repository: spojeitisac
- current state
- Add NetBox and Spoje Linux role configurations

- Create importer environment configuration for NetBox.
- Add LDAP configuration template for NetBox.
- Implement Nginx configuration template for NetBox.
- Define variables for NetBox plugins and Python dependencies.
- Set up default users for Spoje Linux role.
- Add authorized SSH keys for various users in Spoje Linux role.
- Implement handlers and tasks for Spoje Linux role, including user creation and firewall configuration.
- Create custom Ansible modules for parsing hosts and subnets.
- Implement tasks for importing hosts and subnets into NetBox.
- Add Zabbix client configuration and installation tasks.

Repository: pohoda-raiffeisenbank
- Improves transaction handling and SharePoint integration

Updates dependencies for stability and compatibility. Refactors transaction ID handling to ensure uniqueness and reliability, improving processing logic. Enhances error handling and online status checks for better fault tolerance. Adds integration for SharePoint links to Pohoda, ensuring proper attachment of statements. Fixes typos in message handling and improves code clarity.

Relates to improved transaction tracking and document linking workflows.
- Merge branch 'main' of github.com:Spoje-NET/pohoda-raiffeisenbank
- Merge pull request #2 from Spoje-NET/lawondyss

Changed Pohoda column for transaction ID
- Merge branch 'main' into lawondyss

Repository: abraflexi-config
- refactor: remove unused Company class import in abraflexi-checker.php
- refactor: streamline namespace usage and improve code readability in abraflexi-checker.php
- Refactor AbraFlexi connection checker to support dynamic environment file and output options

- Updated initialization to accept environment file and output destination via command line options.
- Enhanced reporting by including timestamp and success status in the output.
- Added debug logging for connection tests based on application debug configuration.
- Improved error handling and reporting for saving results to the specified output destination.
- refactor: update jq command syntax and improve package dependencies
- rules fix
- coding standart psr12
- build update
- deps update

