Date Range: 2026-03-06 to 2026-03-13

Weekly GitHub Commits:

Repository: ipex-b2b
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: php-subreg
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: php-abraflexi
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: php-hspdev-huaweiapi
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: PHP-Realpad-Takeout
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use pkg-php-tools and --init

Align with MultiFlexi production build template.

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: realpad2mailkit
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use pkg-php-tools and --init

Replace deprecated composer-debian with pkg-php-tools.

Add --init flag to Docker container runs.

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: sync Jenkinsfile.release with updated buildimages template

Install pkg-php-tools before debuild-pbuilder and composer-debian/multiflexi-sqlite in test stage.

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: pohoda-client-checker
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: pohoda-raiffeisenbank
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: discomp2abraflexi
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>

Repository: abraflexi-config
- fix: remove --ipc=host to prevent faked-sysv collision in parallel builds

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use pkg-php-tools and --init

Replace deprecated composer-debian with pkg-php-tools.

Add --init flag to Docker container runs.

Co-Authored-By: Oz <oz-agent@warp.dev>
- fix: correct EaseCore autoloader path to Ease

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: sync Jenkinsfile.release with updated buildimages template

Install pkg-php-tools before debuild-pbuilder and composer-debian/multiflexi-sqlite in test stage.

Co-Authored-By: Oz <oz-agent@warp.dev>
- ci: update Jenkinsfile.release to use multiflexi build images

Use multiflexi-<distroFamily>:<distroCode> Docker images instead of

multiflexi-<distroCode>:latest for builds with repo.multiflexi.eu.

Add workspace cleanup to prevent permission issues.

Co-Authored-By: Oz <oz-agent@warp.dev>
- fix: add 30-minute timeout to prevent stuck builds

Parallel branches can hang indefinitely if Docker operations or

package installation gets stuck. Wrap each branch in a timeout.

Co-Authored-By: Oz <oz-agent@warp.dev>
- fix: clean debian build dirs before build to prevent permission issues

Docker runs leave root-owned files in debian/ subdirs that cause

PathRemover failures on subsequent builds.

Co-Authored-By: Oz <oz-agent@warp.dev>
- fix: use chain-include autoloaders from Debian dependency packages

PSR-4 autoloader cannot find classes installed via Debian packages

since they use non-standard directory layout (EaseCore/ not Ease/).

Chain-include the classmap autoloaders from php-vitexsoftware-ease-core

and php-spojenet-abraflexi packages instead.

Co-Authored-By: Oz <oz-agent@warp.dev>
- fix: Use static PSR-4 autoloader for Debian packaging

Create debian/autoload.php with spl_autoload_register that loads

classes from /usr/share/php/ (standard Debian PHP path).

This resolves 'Class Ease\Shared not found' errors during install.

Co-Authored-By: Oz <oz-agent@warp.dev>
- fix: Replace heredoc with echo in debian/rules

Makefiles treat each line as a separate shell invocation,

so heredocs spanning multiple lines cause 'missing separator' errors.

Co-Authored-By: Oz <oz-agent@warp.dev>
- fix: Replace composer-debian with Debian autoloader

- Remove composer-debian check from bin wrapper script

- Generate proper Debian autoloader in override_dh_auto_build

- Fix sed patterns to use /usr/share/php/ paths instead of /var/lib/composer/

- Add sed to fix client.json path for installed package

Co-Authored-By: Oz <oz-agent@warp.dev>

