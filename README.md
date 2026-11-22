<div align="center">

<img src="build/logo.svg" alt="GAMEORA" width="140" />

# GAMEORA

**AI game studio for Windows — describe a game, and the agent designs it, makes the art, writes the code and plays it to check it works.**

by Imal Madhusanka

</div>

## Download

Go to **[Releases](https://github.com/imalmadhusankaphotography-creator/GAMEORA/releases)** and download `GAMEORA-Setup-<version>.exe`.

The installer isn't code-signed, so Windows SmartScreen may warn on first install:
click **More info → Run anyway**.

## First run

GAMEORA ships without an AI model. On first launch, connect one:

- **Google Gemini** — paste a Gemini API key from Google AI Studio
- **OpenRouter**, **DeepSeek**, or any of 40+ providers with your own key
- or a coding agent you already use: **Claude Code**, **Codex**, **OpenCode**

## How builds work

Every push to `main` (or **Actions → Build GAMEORA (Windows) → Run workflow**) builds
the Windows installer on GitHub Actions and publishes it as a Release `v1.0.<run number>`.
The installed app checks these Releases for updates.

## Credits and license

GAMEORA is based on [OhMyGame](https://github.com/WhiteTowerAI/ohmygame) by WhiteTowerAI,
licensed under the [Apache License 2.0](LICENSE). See [NOTICE](NOTICE) for the changes.
The original README is kept in [README.ohmygame.md](README.ohmygame.md).
GAMEORA is not affiliated with or endorsed by WhiteTowerAI.
