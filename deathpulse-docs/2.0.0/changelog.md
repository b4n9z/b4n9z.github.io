# 🧾 Changelog — Version 2.0.0

## ✨ Added
- **New Commands:**  
  Added powerful new commands such as `/dp setConfig`, `/dp setMaxHealth`, `/dp viewDeathData`, `/dp viewDebtData`, `/dp removeDebtData`, `/dp transferHealth`, and `/dp withdrawHealth` for advanced administrative control.
- **Health Item System:**  
  Introduced a customizable item that can increase player HP when used. Configurable material, name, lore, and HP per item.
- **Debt System:**  
  Players can now fall into “health debt” when their HP goes below 0 or minHP. Future health increases will first repay this debt.
- **Season System:**  
  Allows resetting of seasonal death cycles while maintaining player data, enabling repeated strategic deaths each season.
- **Priority Death System:**  
  Define which death types (`IGNORE`, `INCREASE`, `DECREASE`) are evaluated first.
- **After Ban Health:**  
  Configure the player’s post-ban HP recovery.
- **HealthItemListener Event:**  
  Added new listener for managing health item logic and interaction.

---

## 🔧 Improved
- **Config Structure:**  
  Introduced new config validation and cleaner organization. Each section now includes logical dependencies and options.
- **Death Type Handling:**  
  Improved flexibility for `must_difference`, day-based systems, and death cause customization (`TYPE::AMOUNT`).
- **Notifications:**  
  Expanded and refined in-game messages and warnings, including Increase/Decrease Day, Ignored Day, and Season Change alerts.
- **Performance & Stability:**  
  Enhanced server logging and improved reload behavior to prevent memory conflicts.
- **Permissions:**  
  Added new granular permission nodes (`dp.setConfig`, `dp.setMaxHealth`, `dp.viewDebtData`, etc.).

---

## 🐛 Fixed
- Fixed issues where `/dp reload` required a full server restart to apply config changes.  
- Corrected minor console log inconsistencies during player death processing.  
- Updated `/dp help` output for improved accuracy and readability.

---

## ⚠️ Upgrade Notes
- **Major configuration overhaul.**  
  Older configs are incompatible with 2.0.0 — backup and regenerate before upgrading.
- **Health and season systems redesigned.**  
  If upgrading, remove old `config.yml` to avoid validation conflicts.
- **Data files remain compatible.**  
  You can safely retain player data folders (`death_data`, `debt_data`).

---

> 🧩 **Release Information:**  
> Version: `2.0.0`  
> Release Type: Stable  
> Supported Servers: Spigot, Paper 1.21+  
>  
> 🔗 **Full release history and downloads:**  
> [DeathPulse GitHub Releases](https://github.com/b4n9z/DeathPulse/releases)
