Date Range: 2025-05-09 to 2025-05-16

Weekly GitHub Commits:

Repository: php-subreg
- v1.4.0 release
- Update README files for clarity and formatting improvements
- Update PHP version requirements and refactor code for compatibility with PHP 8.1

Repository: ansible
- Add health check configuration for novak.proxy.spojenet.cz backend server
- Add novak.proxy.spojenet.cz backend server configuration
- Add SPDX license identifier to HAProxy role files
- Refactor HAProxy configuration and documentation for improved backend management

- Removed hardcoded variables from haproxy.yml and utilized vars_files for better organization.
- Updated README.md to clarify backend server configurations, including optional health check parameters.
- Enhanced certs.yml to conditionally execute tasks based on certificate file status.
- Modified haproxy.cfg.j2 template to support dynamic health checks and expected status codes for backend servers.
- Added health check parameters to backend server definitions in vars/haproxy.yml.
- Fix fallback certificate creation to use ansible_fqdn instead of certs_to_renew
- Update HAProxy role documentation and tasks for improved certificate management

- Enhanced README.md with detailed role description, requirements, and example playbook.
- Added tasks to create and set permissions for a fallback certificate for HAProxy.
- Removed obsolete debug tasks to streamline the certificate management process.
- Enhance Certbot module and related tasks for improved certificate management

- Implement Certbot module to gather information about managed certificates.
- Update tasks to include cleanup and debugging for better clarity.
- Refactor paths and configurations for consistency and accuracy.
- Add support for SSL version specifications in HAProxy configuration.
- Merge branch 'production' of github.com:Spoje-NET/ansible into production
- Add .ansible/.lock to .gitignore to prevent tracking of lock files
- Refactor debug messages to provide default values for improved clarity and error handling
- Refactor debug tasks to correctly reference certbot_data for improved accuracy
- Refactor debug tasks to correctly reference certbot_data for improved accuracy
- Refactor certificate removal logic to correctly reference certbot_data for improved accuracy
- Refactor HAProxy playbook structure and tasks for improved organization and clarity
- Refactor certificate retrieval and expiration checks to use local module for improved accuracy and clarity
- Refactor certificate expiration date parsing to include time for improved accuracy
- Refactor certificate expiration timestamp calculation for accuracy
- Refactor certificate expiration calculation for clarity
- Refactor certificate expiration check to improve readability and accuracy
- Add certificate management tasks for renewal and expiration checks
- Update HAProxy backend server configuration to disable SSL verification
- Update HAProxy backend server configuration to disable SSL verification
- do not httpcheck

Repository: system
- UPDATE: Modify .gitignore to exclude src/whtest.php; update composer.json dependencies; refine Adresar::takeData method signature; remove unused fluent property in Places class; correct spelling in LabelSwitches class; update copyright year in loginas.php
- Do not log text of Sms Message sent
- REFINE: Enforce strict types in ProductImage constructor parameters
- HealthCheck disabled
- typo fix
- UPDATE: Extend findPayment method to accept an array parameter and set default limit for payments

Repository: php-ease-twbootstrap-widgets
- Refactor Jenkinsfile to streamline distribution handling and remove architecture logic
- Bump version to 1.1.0 and add php8.1+ support
- Refactor and enhance code quality across multiple widget files

- Added strict typing declarations to improve type safety.
- Updated file headers to include package information and licensing details.
- Improved code formatting and consistency, including the use of `<<<'EOD'` for multi-line strings.
- Enhanced method signatures with return types for better clarity.
- Refactored JavaScript inclusion and property handling in various widget classes.
- Updated test classes to reflect changes in namespaces and improve method documentation.
- Ensured all tests have appropriate coverage annotations and are structured for clarity.

