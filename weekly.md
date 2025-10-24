Date Range: 2025-10-17 to 2025-10-24

Weekly GitHub Commits:

Repository: php-abraflexi
- Fix getColumnsFromAbraFlexi to handle string conditions

Convert string conditions to array with 'filter' key to prevent

TypeError when accessing array offset on string type.

This fixes issues when conditions are passed as string instead of array.
- Jenkinsfile update
- Build also for debian 12 bookworm
- Fixes incorrect handling of 'kod' key in array checks

Ensures proper validation for the presence of the 'kod' key in arrays
when determining values, defaulting to 'id' if 'kod' is absent.

This improves robustness by explicitly checking for the existence of
the 'kod' key using `array_key_exists`, avoiding potential undefined
index errors.
- Current State

Repository: Flexplorer
- Fresh multiarch Docker image published

- Updated Containerfile-based build

- Published for amd64 and arm64 platforms

- Tagged as latest and 20251024
- Add search functionality to navbar and fix companies listing

- Add NavBarSearchBox widget to main menu with Bootstrap 5 styling

- Implement typeahead.js search across all evidences

- Fix searcher.php to return proper JSON for AJAX requests

- Add exception handling in Searcher for robust multi-evidence search

- Fix CompaniesListing table structure and add Bootstrap 5 classes

- Update to php-abraflexi ^3.6 with string conditions fix

Search box positioned next to app logo with proper alignment.
- Release 1.6: Multi-arch Docker image and Kubernetes support

- Updated Containerfile for Debian 13 Trixie with modern syntax
- Multi-architecture Docker image support (amd64, arm64)
- Added Helm chart for Kubernetes deployment
- Updated documentation with Docker and Kubernetes instructions
- Replaced Dockerfile with Containerfile
- Fixed package installation issues in container build
- Updated repository GPG key URL
- Update warning panel styling - use dark purple-yellow to match theme
- Fix responseToRequest - use Bootstrap 5 Tab API and correct textarea selector
- Update Tabs component - fix for unique tab pane IDs
- Fix footer gradient overlay - ensure content stays above gradients with z-index
- Add gradient transitions on footer sides for smooth color blend
- Improve footer styling - full width and better spacing
- Improve badge contrast - use darker green for better readability
- Remove duplicate lasturl from company.php - already added in PageTop
- Fix logout.php to properly extract message body and type from Message objects
- Move lasturl panel to PageTop for correct ordering after menu and notifications
- Remove margin-top from urlPanel to fix empty space above menu
- Fix element ordering globally: replace $oPage->container->addItem with $oPage->addItem

This ensures correct rendering order across all pages:
- PageTop (menu + status messages) first
- Page content in the middle
- PageBottom (footer) last

Fixed in 27 files.
- Fix permissions.php layout and add menu for non-authenticated users
- Fix navbar overlapping: remove fixed-top and adjust z-indexes
- Fix login page element order: header, status, image, then content
- Fix status-messages layout: wrap in status-block and ensure smdrag is at bottom
- Fix status-messages: move flexibeetop image after PageTop and make messages fixed at top
- Fix status-messages positioning to appear below menu
- Enhance login page styling: better purple filter and form styling
- Style login page: purple Features panel and filtered flexibeetop image
- Fix Features panel on login page - properly add feature list to panel
- Prevent double rendering of response by checking finalized flag
- Refactor Request tab creation for better debugging
- Ensure default values for form parameters before creating SendForm
- Fix lasturl overlap: remove fixed height and ensure proper z-index
- Make #lasturl full width with word wrapping for long URLs
- Set Request tab as active when no response is shown

