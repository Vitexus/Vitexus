Date Range: 2026-08-07 to 2026-08-14

Weekly GitHub Commits:

Repository: ansible
- docs(haproxy): add grafana-dev.spojenet.cz backend server

Repository: system
- fix: uncaught fatal in Upominac::enableCustomer breaking webhook lock

Upominac.php accessed $this->customer->adresar directly, but Customer
only exposes getAdresar(). The resulting "Call to a member function
loadFromAbraFlexi() on null" fatal killed webhookprocessor.php before
it reached unlock(), so every cron run (every minute) found the prior
run's dead-PID lock and logged "Ophraned lockfile found" while
reprocessing the same stuck invoice forever.

- Replace all $this->customer->adresar with $this->customer->getAdresar()
- Fix discarded getColumnsFromAbraFlexi() result in getCustomerScore()
- Wrap webhookprocessor.php / ProcessUnprocessedChanges.php processing
  in try/finally so the lock always releases
- Fix HookReciever::gethandler() dereferencing $handler before assignment
  in its catch block
- Fix "Ophraned" -> "Orphaned" typo in the lock warning message

Repository: realpad2mailkit
- feat(multiflexi): add Realpad requirement for app configuration

Repository: discomp2abraflexi
- fix(multiflexi): add logo field to credential-prototype JSON

The package already ships the UUID-named SVG to
/usr/share/multiflexi/images/, but the JSON never referenced it, so
credential-prototype:import-json left the DB logo column empty.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>

Repository: abraflexi-config
- update for current multiflexi-cli syntax
- autoloader fix

