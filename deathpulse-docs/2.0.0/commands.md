# **Command Reference Guide**

The **DeathPulse Command System** allows server administrators and players to interact directly with the plugin — adjusting configurations, viewing player data, managing health, transferring HP, and more.
Each command follows the structure:

```
/deathpulse <subcommand>
```

or its alias:

```
/dp <subcommand>
```

---

## ⚙️ **Main Command**

| Command           | Alias | Usage              | Description                                                                                                                     | Permission | Default |
| ----------------- | ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| **`/DeathPulse`** | `/dp` | `/dp <subcommand>` | The main command for all DeathPulse functions. Subcommands provide access to configuration, player data, and health management. | `dp.admin` | op      |

> 💡 *Tip:* You can grant players access to specific subcommands through the [`permissionsAllPlayer`](2.0.0/configuration.md?id=🔑-permission-settings) section of `config.yml` or a permissions plugin such as **LuckPerms**.

---

## 🔧 **Administrative Commands**

These commands are generally used by server operators or staff to manage DeathPulse.

---

### 🔄 `/dp reload`

| Detail             | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Usage**          | `/dp reload`                                                                                                            |
| **Description**    | Reloads the plugin’s configuration file without restarting the server. Ideal for applying changes made to `config.yml`. |
| **Permission**     | `dp.reload`                                                                                                             |
| **Default Access** | op                                                                                                                 |

> ⚠️ *Frequent reloading may cause minor lag spikes; use during low activity.*

---

### ⚙️ `/dp setConfig`

| Detail             | Description                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **Usage**          | `/dp setConfig <key> <value>`                                                                                                   |
| **Description**    | Changes a configuration value directly from in-game or console. Useful for quick adjustments without editing the file manually. |
| **Permission**     | `dp.setConfig`                                                                                                                  |
| **Default Access** | op                                                                                                                         |

> 💡 Example:
> `/dp setConfig hp.start 30`
> Sets the default starting HP to 30.

---

## 👁️ **Player Data Commands**

These commands allow you to view player statistics, health data, or history stored by DeathPulse.

---

### ❤️ `/dp viewHealth`

| Detail             | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| **Usage**          | `/dp viewHealth <player>`                                      |
| **Description**    | Displays a player’s current health, death data, and debt data. |
| **Permission**     | `dp.viewHealth`                                                |
| **Default Access** | op                                                             |

> 💡 *Players can be granted access to this command by setting `viewHealth: true` in `permissionsAllPlayer`.*

---

### ⚰️ `/dp viewDeathData`

| Detail             | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| **Usage**          | `/dp viewDeathData`                                                       |
| **Description**    | Displays the user’s personal death record — including their own health.   |
| **Permission**     | `dp.viewDeathData`                                                        |
| **Default Access** | All Players ([`permissionsAllPlayer`](2.0.0/configuration.md?id=🔑-permission-settings))                                                               |

---

### 💀 `/dp viewDebtData`

| Detail             | Description                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **Usage**          | `/dp viewDebtData`                                                                             |
| **Description**    | Shows a player’s **Health Debt** information — how much HP they owe and any pending repayment. |
| **Permission**     | `dp.viewDebtData`                                                                              |
| **Default Access** | All Players ([`permissionsAllPlayer`](2.0.0/configuration.md?id=🔑-permission-settings))                                                                                    |

---

## 🔁 **Health Management Commands**

Used to reset, adjust, or synchronize player health values.

---

### 💪 `/dp setMaxHealth`

| Detail             | Description                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| **Usage**          | `/dp setMaxHealth <player> <amount>`                                                                  |
| **Description**    | Manually sets a specific player’s **maximum health**. Useful for testing or granting special bonuses. |
| **Permission**     | `dp.setMaxHealth`                                                                                     |
| **Default Access** | op                                                                                               |

---

### 🩹 `/dp resetHealth`

| Detail             | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| **Usage**          | `/dp resetHealth <player/allPlayer>`                                                |
| **Description**    | Resets one or all players HP to the default starting health defined in the config.  |
| **Permission**     | `dp.resetHealth`                                                                    |
| **Default Access** | op                                                                                  |

---

### ⚖️ `/dp matchHealth`

| Detail             | Description                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| **Usage**          | `/dp matchHealth <player/allPlayer>` |
| **Description**    | Synchronizes HP for one or all players based on stored death and health data. Useful for balancing.
| **Permission**     | `dp.matchHealth`                                                                                    |
| **Default Access** | op                                                                                             |

> Not recommended if the user frequently transfer health.

---

### 🧨 `/dp removeDeathData`

| Detail             | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| **Usage**          | `/dp removeDeathData <player/allPlayer>`                               |
| **Description**    | Deletes a player’s recorded death data, resetting their death history. |
| **Permission**     | `dp.removeDeathData`                                                   |
| **Default Access** | op                                                                     |

---

### 💳 `/dp removeDebtData`

| Detail             | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| **Usage**          | `/dp removeDebtData <player/allPlayer>`                      |
| **Description**    | Clears any recorded Health Debt for the specified player(s). |
| **Permission**     | `dp.removeDebtData`                                          |
| **Default Access** | op                                                           |

---

## 🔄 **Player Interaction Commands**

These allow players to share or manage health between one another — a unique feature of DeathPulse.

---

### 🤝 `/dp transferHealth`

| Detail             | Description                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **Usage**          | `/dp transferHealth <player> <amount>`                                                                                     |
| **Description**    | Transfers a specified amount of HP from the sender to another player. The sender loses HP equal to the amount transferred. |
| **Permission**     | `dp.transferHealth`                                                                                                        |
| **Default Access** | All Players ([`permissionsAllPlayer`](2.0.0/configuration.md?id=🔑-permission-settings))                                                                                                                |

> 💡 *This command promotes teamwork by letting allies share vitality.*

---

### 💎 `/dp withdrawHealth`

| Detail             | Description                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **Usage**          | `/dp withdrawHealth <amount>`                                                             |
| **Description**    | Converts a player HP into **Health Items**, which can be stored, traded, or used later.   |
| **Permission**     | `dp.withdrawHealth`                                                                       |
| **Default Access** | All Players ([`permissionsAllPlayer`](2.0.0/configuration.md?id=🔑-permission-settings))                                                                               |

> 💡 Example:
> `/dp withdrawHealth 10`
> Converts 10 HP from player who has send command into a Health Token.

---

## 📚 **Utility Commands**

### 🆘 `/dp help`

| Detail             | Description                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **Usage**          | `/dp help`                                                                                     |
| **Description**    | Displays a formatted list of all available DeathPulse commands, their usage, and descriptions. |
| **Permission**     | `dp.help`                                                                                      |
| **Default Access** | All Players ([`permissionsAllPlayer`](2.0.0/configuration.md?id=🔑-permission-settings))                                                                                    |

---

## 🧾 **Permission Summary**

| Permission Node      | Description                                      | Default Access |
| -------------------- | ------------------------------------------------ | -------------- |
| `dp.admin`           | Grants full access to all DeathPulse commands.   | op             |
| `dp.reload`          | Allows reloading the plugin configuration.       | op             |
| `dp.setConfig`       | Allows in-game modification of config values.    | op             |
| `dp.setMaxHealth`    | Allows setting another player’s maximum HP.      | op             |
| `dp.viewHealth`      | Allows viewing any player’s health and data.     | op             |
| `dp.viewDeathData`   | Allows viewing personal death data.              | All Players    |
| `dp.viewDebtData`    | Allows viewing personal debt data.               | All Players    |
| `dp.resetHealth`     | Allows resetting player health to default.       | op             |
| `dp.matchHealth`     | Synchronizes player health based on stored data. | op             |
| `dp.removeDeathData` | Removes death records.                           | op             |
| `dp.removeDebtData`  | Removes health debt records.                     | op             |
| `dp.transferHealth`  | Allows transferring HP to another player.        | All Players    |
| `dp.withdrawHealth`  | Allows converting HP into Health Items.          | All Players    |
| `dp.help`            | Displays command help list.                      | All Players    |