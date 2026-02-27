Date Range: 2026-02-20 to 2026-02-27

Weekly GitHub Commits:

Repository: php-abraflexi
- fix: __serialize() returns proper key-value pairs for session serialization

- __serialize() now returns associative array instead of flat property name list

- __unserialize() assigns values directly with is_string guard

- __sleep() now returns property names from __serialize()

- Removed non-existent 'init' property from serialization list

Fixes TypeError: Ease\Molecule::setupProperty() Argument #2 must be string, int given

Co-Authored-By: Oz <oz-agent@warp.dev>
- phpdoc update

Repository: ansible
- Remove broken haproxy backends

Removed backends:

- netbox.proxy.spojenet.cz (10.11.56.151:10101) - connection refused

- novak.proxy.spojenet.cz (10.11.25.23:50000) - no route to host

This resolves Zabbix alerts for non-functional backends

Co-Authored-By: Oz <oz-agent@warp.dev>
- Remove unreachable pokusa.proxy.spojenet.cz backend

Backend host 10.11.182.71 is unreachable (Destination Host Unreachable)

Removed from haproxy configuration to clean up Zabbix alerts

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: realpad2mailkit
- build pipelines update
- Fix: update PHP CS Fixer rule set to Php81 and improve error handling in realpad2mailkit

Repository: discomp2abraflexi
- do not build for forky
- crprototype validation fix
- Merge branch 'main' of github.com:Spoje-NET/discomp2abraflexi
- Update package dependencies and improve installation scripts for discomp2abraflexi

