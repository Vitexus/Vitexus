Date Range: 2025-06-27 to 2025-07-04

Weekly GitHub Commits:

Repository: php-abraflexi
- AbraFlexi release v2025.6.0
- Code reformat
- Code helper class introduced
- Add new evidence classes for AbraFlexi

- Created classes for various evidence types including StavCeniku, StavObchodnihoDokladu, StavSkladuKDatu, StavSmlouvy, StavUctu, StavZakazky, Stredisko, StromKoren, Subjekt, SumaceSestavy, Text, TypAktivity, TypAtributu, TypBanka, TypDokladu, TypFakturyPrijate, TypFakturyVydane, TypInternihoDokladu, TypLeasingu, TypMajetku, TypNabidkyPrijate, TypNabidkyVydane, TypNakladu, TypObjednavkyPrijate, TypObjednavkyVydane, TypOrganizace, TypPohledavky, TypPokladniPohyb, TypPoptavkyPrijate, TypPoptavkyVydane, TypProdejky, TypSkladovyPohyb, TypSmlouvy, TypStavuCeniku, TypUzivatelskeVazby, TypVzajemnychZapoctu, TypZakazky, TypZavazku, Ucet, UcetniDenik, UcetniOdpis, UcetniOsnova, UlozenePriznaniDph, UlozenePriznaniKonVykDph, Umisteni, UmisteniUctu, UmisteniVeSkladu, UmisteniVeSkladuMistnost, UmisteniVeSkladuPolice, UmisteniVeSkladuRegal, Uzivatel, UzivatelskaVazba, UzivatelskyDotaz, UzivatelskyDotazParametr, UzivatelskyDotazVlastnost, Vazba, VazebniDoklad, VykazHospodareni, VysledovkaPoUctech, VzajemnyZapocet, Xslt, Zakazka, ZalohaKOdpoctu, Zapujcka, ZavazekPolozka.

- Updated force_update_all.sh to include generate_actions_json.php.
- Added generate_evidence_classes.php script for generating evidence classes based on JSON configuration.
- Fix date formatting in evidence queries to use Date::$format
- Refactors `RO` class and removes unused code

Simplifies the `RO` class by removing redundant use statements
and unused methods. Updates references to static `Functions`
methods for clarity and consistency. Cleans up unnecessary
whitespace and comments in both `RO` and `RW` classes. Removes
an incomplete and unused test case from `ROTest`.
- Updates dependencies and refactors URL handling

#61 Upgrades PHP requirement to ^8.1 and updates multiple package dependencies for improved compatibility and functionality.

Refactors URL encoding logic by introducing the `Functions` class to streamline operations and enhance code maintainability.
- Deprecates unused methods and refactors date formatting

Replaces deprecated `Functions::$DateFormat` and `Functions::$DateTimeFormat` with the new `Date::$format` for improved consistency and maintainability.

Removes numerous deprecated methods across multiple classes to reduce code clutter and improve readability.

Updates versioning and internal comments to reflect the latest changes. Adjusts shell scripts for proper handling of version strings.
- #61 Dropped support for php older than 8.1
- Overpayments handling works now

