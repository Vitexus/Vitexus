Date Range: 2025-05-02 to 2025-05-09

Weekly GitHub Commits:

Repository: ansible
- Add netbox inventory configuration and update HAProxy backend servers
- Update HAProxy playbook variables and enhance footer in index template
- Refactor certificate handling: combine private key and fullchain into PEM file, set permissions, and remove deprecated deployment task
- Remove certificate copy task from HAProxy SSL directory
- Remove certificate and private key combination task and related debug messages; update file path for Fullchain Certificates deployment.
- Change command to shell for combining certificate and private key, and set ignore_errors to false
- Fix order of certificate and private key in PEM file combination
- ensure that private key is present in haproxy certificat
- Add certificate existence check and deployment for HAProxy using Certbot
- Fix interpreter path in settings, update certificate request command, add NetBox inventory file, and include requirements
- Fix variable name for Certbot request result registration
- Update Certbot request command and remove setup task
- Implement certificate management: extract, debug, and remove unused certificates
- Add Certbot installation and renewal tasks for HAProxy
- show all points required to finish the game
- svg logo id fix
- Hide logo when click on it
- spoje logo added
- better certbot debug
- Update progress info: change message to indicate points needed to win game
- Update progress info display: enhance message format for points needed and next achievement
- Update progress info: change message to indicate points needed to win game and next achievement
- Fix points calculation for unlocking links: ensure minimum points needed is 10
- progress info fix
- Update points counter display: show current points and total required points
- Enhance points tracking: add points counter, update logic for enabling links, and modify explosion effects
- Enhance HAProxy stats page: add class to site list, disable items on load, and enable on explosion count
- Refactor HAProxy role: update service handlers, add Nginx tasks, and enhance configuration templates

Repository: system
- REFINE: Enforce strict types in ProductImage constructor parameters
- FIX: Uncaught TypeError: Ease\\Html\\ImgTag::__construct(): Argument #2 ($alt) must be of type string

