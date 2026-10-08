# AGENTS.md

## Git

- Always commit and push directly to `main`. Do not create feature branches or pull requests.
- The active `gh` account on this machine (`alexwork1611`) cannot push to this repo. Push as `alexcrisan1611`:

  ```bash
  TOKEN=$(gh auth token --user alexcrisan1611)
  git -c credential.helper= -c "credential.helper=!f() { echo username=alexcrisan1611; echo password=$TOKEN; }; f" push origin main
  ```
