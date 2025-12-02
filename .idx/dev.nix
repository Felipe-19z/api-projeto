      # To learn more about how to use Nix to configure your environment
      # see: https://firebase.google.com/docs/studio/customize-workspace
      { pkgs, ... }: {
        # Which nixpkgs channel to use.
        channel = "stable-24.05"; # or "unstable"

        # Use https://search.nixos.org/packages to find packages
        packages = [
          # pkgs.go
          # pkgs.python311
          # pkgs.python311Packages.pip
          # pkgs.nodejs_20
          pkgs.docker
          pkgs.docker-compose
          pkgs.doas-sudo-shim
          pkgs.openssl
        ];

        # Enable the Docker daemon service.
        services.docker.enable = true;
      }
