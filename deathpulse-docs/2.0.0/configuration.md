# **Configuration Guide**

The configuration file (`config.yml`) is the heart of **DeathPulse**, allowing server administrators to fully customize how health behaves in response to different death types, day cycles, and seasons.

Each section of the file is designed to provide precise control over gameplay balance — from defining how much health players gain or lose, to configuring when certain types of deaths are ignored entirely.

---

## ⚙️ **Crucial Settings**

```yaml
############ CRUCIAL SETTINGS ############
firstTimeSetup: 0
checkDayPeriod: 30
```

These are the foundational parameters that control how DeathPulse interacts with your Minecraft server environment.

| Setting              | Type                | Description                                                                                                                                                                                                  |
| -------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`firstTimeSetup`** | *Integer*           | Automatically generated timestamp marking when DeathPulse was first initialized on your server. <br>⚠️ **Do not modify** this value manually unless instructed. It is essential for day and season tracking. |
| **`checkDayPeriod`** | *Integer (seconds)* | Defines how frequently DeathPulse checks for day progression. <br>Lower values provide more accurate tracking but may slightly increase server load. <br>**Default:** `30` seconds                           |

> 💡 *Tip:* For most servers, a check interval between **20–40 seconds** provides optimal balance between accuracy and performance.

---

## 🌍 **World Settings**

```yaml
############ WORLD SETTINGS ############
worldDaySettings:
  world: 24000
  # <world_name>: <ticks_per_day_in_world>
  #world_nether: 24000
```

The `worldDaySettings` section determines how many **ticks** represent one “day” for each world.
By default, Minecraft uses 24000 ticks for a full day cycle (20 minutes of real time).

| Setting             | Description                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **`world`**         | Sets the default day length in ticks for the main world (Overworld).                                                  |
| **Custom Worlds**   | You can add more entries for each world if needed. For example: <br>`world_nether: 24000` or `world_the_end: 24000`.  |
| **Nether and The End Handling** | Because the Nether and The End does not have a day-night cycle, you can safely omit it or keep it at the default for consistency. |

> 🕒 *1 real Minecraft day = 24000 ticks = 20 minutes.*

---

## ❤️ **HP Settings**

```yaml
############ HP SETTINGS ############
hp:
  start: 20
  maxHP:
    enabled: false
    amount: 140
    dropHealthItem: true
  minHP:
    enabled: false
    amount: 2
    banTime: 24
  afterBan: 2
```

This section defines how player health (HP) behaves globally — including starting HP, maximum/minimum health limits, and penalties or rewards linked to HP thresholds.

### ⚡ **Parameters**

| Setting     | Description                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| **`start`** | Defines the starting health for all players (measured in HP, where 20 = 10 hearts). |

---

### 🩸 **Maximum Health Settings (`maxHP`)**

| Setting              | Description                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **`enabled`**        | Enables or disables the maximum HP system. When `true`, players cannot exceed the defined limit.                        |
| **`amount`**         | The upper HP cap a player can reach through death rewards or health items.                                              |
| **`dropHealthItem`** | If enabled, once a player reaches max HP, additional increases will drop *Health Items* instead of exceeding the limit. |

> 💡 *Example:* If a player already has 140 HP(Max HP Default Amount) and dies under an Increase rule, a Health Token will drop instead of adding more HP.

---

### ☠️ **Minimum Health Settings (`minHP`)**

| Setting       | Description                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| **`enabled`** | Enables or disables minimum HP restrictions. When disabled, players with 0 HP are banned instead of kept at 0. |
| **`amount`**  | Minimum possible HP. If `enabled` set to `true`, player cannot get lower than this amount.                                                                        |
| **`banTime`** | Defines how long (in **real-world hours**) the player remains banned. Set to `0` for a permanent ban.          |

> 🕐 *Example:* If `enabled` set to `true`, a player reaches 2 HP (minimum) and get decrease again, they will not get banned and still have 2 HP.

---

### 🫀 **After Ban Recovery**

| Setting        | Description                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`afterBan`** | Defines how much HP a player regains when returning to the server after their ban expires. |

> 🕐 *Example:* If set to `2`, they will rejoin after the ban time ends with 2 HP (1 heart).

---

## 💎 **Health Item Settings**

```yaml
############ HEALTH ITEM SETTINGS ############
healthItem:
  material: "NETHER_STAR"
  name: "&cHealth Token"
  lore:
    - "&7Right click to use"
    - ""
    - "&7Can be used to Increase your &7Max Health"
  healthPerItem: 2
  cannotToCraft: ["BEACON"]
```

Health Items are special in-game tokens that represent **maximum health increases**.
These items can be dropped or given — depending on your server’s rules.

| Setting             | Description                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **`material`**      | The base item used for the Health Token. Any valid Minecraft material (e.g., `NETHER_STAR`, `DIAMOND`, `GOLDEN_APPLE`). |
| **`name`**          | The display name shown to players. Supports color codes (e.g., `&c`, `&7`).                                             |
| **`lore`**          | Tooltip description lines visible when hovering over the item. Supports line breaks and colors.                         |
| **`healthPerItem`** | Amount of HP a player gains per token used.                                                                             |
| **`cannotToCraft`** | List of items that **cannot be crafted** using this Health Token as a material. Prevents unfair crafting loops.         |

> 💡 *Tip:* Health Tokens can be integrated with your economy for a deeper progression system.

---

## ⚰️ **Death Priority Settings**

```yaml
############ PRIORITY DEATH SETTINGS ############
priority: ["IGNORE", "INCREASE", "DECREASE"]
```

Defines the order in which DeathPulse evaluates death types.

* When multiple death types apply, higher-priority ones are processed first.
* Recommended order: `IGNORE` → `INCREASE` → `DECREASE`

---

## ⚔️ Death Type Settings

DeathPulse categorizes every death event into three functional groups:
**Ignore**, **Increase**, and **Decrease**.
Each category can also include a **Day sub-section**, allowing advanced control over how deaths behave on specific in-game or real-world days.

---

### 🧩 Ignore Death Settings

```yaml
ignore:
  enabled: false
  must_difference: false
  cause:
    - ALL
  day:
    enabled: false
    must_difference: false
    deActiveIncrease: false
    deActiveDecrease: false
    deActiveIncreaseDay: false
    deActiveDecreaseDay: false
    type: "minecraft"
    days: [19, 23, 29]
    cause:
      - ALL
```

The **Ignore** system disables any health modification when the player dies from specific causes or during special days.

| Setting               | Type      | Description                                                                                                                   |
| --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **`enabled`**         | *Boolean* | Activates or deactivates the ignore system. When `true`, players can experience deaths that have no HP consequence.           |
| **`must_difference`** | *Boolean* | When `true`, a player who already ignored a specific death cause cannot ignore it again, preventing abuse.                    |
| **`cause`**           | *List*    | Defines which death types are ignored. Use `ALL` to ignore every cause, or specify ones like `LAVA`, `FALL`, `DROWNING`, etc. |

#### 🗓 Day Sub-Settings (`ignore.day`)

| Setting                                           | Type             | Description                                                               |
| ------------------------------------------------- | ---------------- | ------------------------------------------------------------------------- |
| **`enabled`**                                     | *Boolean*        | Enables **Ignore Days**, where selected death types have no effect.       |
| **`must_difference`**                             | *Boolean*        | Prevents repeated ignores on the same day for the same death cause.       |
| **`deActiveIncrease` / `deActiveDecrease`**       | *Boolean*        | Disables Increase/Decrease effects entirely on Ignore Days.               |
| **`deActiveIncreaseDay` / `deActiveDecreaseDay`** | *Boolean*        | Disables Increase-Day or Decrease-Day events while Ignore Day is active.  |
| **`type`**                                        | *String*         | `"minecraft"` → uses in-game days; `"real"` → uses real-world days.       |
| **`days`**                                        | *List (Integer)* | List of day multiples when Ignore Day is active (e.g., `[19, 23, 29]`).   |
| **`cause`**                                       | *List*           | Which death types are ignored on these days. Use `ALL` for all type of death. |

> 💡 *You can use Ignore Days for rest periods or festivals where death penalties and rewards are disabled.*

---

### 💖 Increase Death Settings

```yaml
increase:
  enabled: true
  must_difference: true
  cause:
    - ALL::2
    - FALL::1
  day:
    enabled: false
    must_difference: true
    deActiveIgnore: false
    deActiveDecrease: false
    deActiveIgnoreDay: false
    deActiveDecreaseDay: false
    type: "minecraft"
    days: [11, 13, 17]
    cause:
      - ALL::10
      - LAVA::14
```

The **Increase** system rewards players with additional health when dying from specific causes or on special days.

| Setting               | Type                 | Description                                                                                                               |
| --------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **`enabled`**         | *Boolean*            | Enables or disables health-gain mechanics.                                                                                |
| **`must_difference`** | *Boolean*            | When `true`, prevents a player from repeatedly farming the same death cause for HP.                                       |
| **`cause`**           | *List (String Pair)* | Defines the cause and amount of HP gained. Format: `TYPE::AMOUNT` (e.g., `FALL::1`). `ALL::2` applies to all death types. |

#### 🗓 Day Sub-Settings (`increase.day`)

| Setting                                         | Type                 | Description                                                                                |
| ----------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------ |
| **`enabled`**                                   | *Boolean*            | Enables **Increase Days**, special days with increased rewards.                            |
| **`must_difference`**                           | *Boolean*            | Prevents repeated increases from the same death cause within the same day.                 |
| **`deActiveIgnore` / `deActiveDecrease`**       | *Boolean*            | Temporarily disables Ignore or Decrease mechanics during Increase Days.                    |
| **`deActiveIgnoreDay` / `deActiveDecreaseDay`** | *Boolean*            | Disables other day-based effects while Increase Day is active.                             |
| **`type`**                                      | *String*             | `"minecraft"` = in-game day cycle, `"real"` = calendar day.                                |
| **`days`**                                      | *List (Integer)*     | Specifies the active days (e.g., `[11, 13, 17]`).                                          |
| **`cause`**                                     | *List (String Pair)* | Defines the reward per cause for Increase Days. Format: `TYPE::AMOUNT` (e.g., `LAVA::14`). |

> 💡 *Strategic servers may use Increase Days to reward exploration or daring gameplay—where dying the “right way” can make you stronger.*

---

### 💀 Decrease Death Settings

```yaml
decrease:
  enabled: false
  must_difference: false
  debt: true
  cause:
    - ALL::4
    - PLAYER_ATTACK::6
  day:
    enabled: false
    must_difference: false
    deActiveIgnore: false
    deActiveIncrease: false
    deActiveIgnoreDay: false
    deActiveIncreaseDay: false
    type: "minecraft"
    days: [5, 7]
    cause:
      - ALL::16
      - PLAYER_ATTACK::18
```

The **Decrease** system penalizes players by reducing health when they die from specific causes or on certain days.

| Setting               | Type                 | Description                                                                                                                        |
| --------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **`enabled`**         | *Boolean*            | Activates or deactivates death penalties.                                                                                          |
| **`must_difference`** | *Boolean*            | Prevents losing HP multiple times from the same death cause.                                                                       |
| **`debt`**            | *Boolean*            | Enables the **Health Debt** system: if a player has no HP left to lose, the deficit is stored and subtracted from future HP gains. |
| **`cause`**           | *List (String Pair)* | Death types and the HP amount deducted. Example: `PLAYER_ATTACK::6` means –6 HP when killed by another player.                     |

#### 🗓 Day Sub-Settings (`decrease.day`)

| Setting                                         | Type                 | Description                                                                                   |
| ----------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------- |
| **`enabled`**                                   | *Boolean*            | Enables **Decrease Days**, where HP penalties become stronger.                                |
| **`must_difference`**                           | *Boolean*            | Prevents repeated losses from the same cause on the same day.                                 |
| **`deActiveIgnore` / `deActiveIncrease`**       | *Boolean*            | Disables Ignore or Increase mechanics during Decrease Days.                                   |
| **`deActiveIgnoreDay` / `deActiveIncreaseDay`** | *Boolean*            | Disables other day-based mechanics while Decrease Day is active.                              |
| **`type`**                                      | *String*             | `"minecraft"` or `"real"`. Determines whether days are tracked by in-game or real-world time. |
| **`days`**                                      | *List (Integer)*     | Specifies the days on which these penalties apply (e.g., `[5, 7]`).                           |
| **`cause`**                                     | *List (String Pair)* | Defines cause and penalty per Decrease Day (e.g., `ALL::16`).                                 |

> ⚠️ *Use Decrease Days to simulate “hardcore weeks” or high-risk seasons where every death matters.*

---

## ⛅ Season Settings

```yaml
season:
  enabled: true
  type: "real"
  day: 30
  resetWorldDay: false
```

The **Season** system allows you to reset or refresh server day periodically, adding long-term structure and replayability to your server.

| Setting             | Type      | Description                                                                                                       |
| ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| **`enabled`**       | *Boolean* | Enables or disables the season mechanic.                                                                          |
| **`type`**          | *String*  | `"real"` = based on calendar days; `"minecraft"` = based on in-game days.                                         |
| **`day`**           | *Integer* | Duration of a single season (in days). When this threshold is reached, player player can death with same cause again when season change if `must_difference` from some or all type is `true`. |
| **`resetWorldDay`** | *Boolean* | When `true`, resets world-day counters to zero at each new season.                                                |

> 💡 *Example:* With `type: "real"` and `day: 30`, every 30 real-world days a new season begins—players can die again in the same way, creating natural gameplay cycles.

---

## 🔑 Permission Settings

```yaml
############ PERMISSION SETTINGS ############
permissionsAllPlayer:
  reload: false
  setConfig: false
  setMaxHealth: false
  viewHealth: false
  viewDeathData: true
  viewDebtData: true
  resetHealth: false
  matchHealth: false
  removeDeathData: false
  removeDebtData: false
  transferHealth: true
  withdrawHealth: true
  help: true
```

The **permissionsAllPlayer** section determines which commands are available to all players without requiring a permissions plugin (e.g., *LuckPerms*).
By default, server operators (OPs) can always use all commands, regardless of these settings.

| Setting               | Type      | Default | Description                                                                                      |
| --------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------ |
| **`reload`**          | *Boolean* | `false` | Allows all players to use `/dp reload` to reload the configuration without restart server. Usually reserved for admins. |
| **`setConfig`**       | *Boolean* | `false` | Grants access to `/dp setConfig` — modifies config values live. Recommended for OPs only.        |
| **`setMaxHealth`**    | *Boolean* | `false` | Allows adjusting another player’s maximum HP.                                                    |
| **`viewHealth`**      | *Boolean* | `false` | Enables viewing another player HP, Debt, and Death Data information via `/dp viewHealth`.                                    |
| **`viewDeathData`**   | *Boolean* | `true`  | Allows viewing personal death data records.                                                      |
| **`viewDebtData`**    | *Boolean* | `true`  | Enables viewing personal **Health Debt** information.                                            |
| **`resetHealth`**     | *Boolean* | `false` | Allows resetting a player’s HP to the default start health value.                                             |
| **`matchHealth`**     | *Boolean* | `false` | Allows syncing or matching HP between players and their death data (admin control).                                   |
| **`removeDeathData`** | *Boolean* | `false` | Enables deletion of recorded death data from another players.                                                         |
| **`removeDebtData`**  | *Boolean* | `false` | Enables clearing of health debt data from another players.                                                            |
| **`transferHealth`**  | *Boolean* | `true`  | Allows using `/dp transfer` to give HP to another player without withdraw.                                        |
| **`withdrawHealth`**  | *Boolean* | `true`  | Allows converting HP into a Health Item (withdrawal system).                                     |
| **`help`**            | *Boolean* | `true`  | Allows access to `/dp help` command.                                                             |

> 💡 *Tip:* For security, keep administrative actions like `reload`, `setConfig`, `setMaxHealth`, `resetHealth`, `matchHealth`, `removeDeathData`, and `removeDebtData` disabled for all players unless you manage them via a permissions plugin.

---

## 🔔 Notification Settings

```yaml
############ NOTIFICATION SETTINGS ############
notifications:
  defaultDeathMessage: false
  player:
    maxHealth: "&bYou&f have reached the&c maximum health limit&f."
    minHealth: "&bYou&f have reached the&c minimum health limit&f."
    banReason: "&bYou&f have been&c banned&f due to low health"
    kicked: "&bYou&f have been&c kicked&f due to low health"

    ignored: "&fDied with &c{cause}&f now&c not increased&f HP"
    ignoredSameWay: "&cCan't&f ignoring again cause&c you died&f with&c same way"

    increased: "&bYou&a increased &d{increase}&f health cause: &c{cause}"
    increaseSameWay: "&bYou&c don't increased health&f with death same way"

    decreased: "&bYou&c decrease &d{decrease}&f health cause: &c{cause}"
    decreaseSameWay: "&bYou&c don't decreased health&f with death same way"

    debtPaidOff: "&bYou&f have paid off&c {debtPaid}&f health debt"
    debtReduced: "&bYou&f have reduced&c {debtPaid}&f health debt, now&c {debtLeft}&f health debt left"
    debtAdded: "&bYou&f have added&c {debtAdded}&f health debt, now&c {debtLeft}&f health debt you must pay"
    
    warning:
      ignoredDay: "&6⚠ &eToday is an &6Ignored Day&e! Deaths won't affect your HP!"
      increaseDay: "&6⚠ &eToday is an &aIncrease Day&e! Get extra HP on death!"
      decreaseDay: "&6⚠ &eToday is a &cDecrease Day&e! Be careful, you'll lose more HP on death!"
      seasonChange: "&6⚠ &eSeason changed! Reset your death data!"

  logServer:
    maxHealth: "&b{name}&f have reached the&c maximum health limit&f."
    minHealth: "&b{name}&f have reached the&c minimum health limit&f."

    increased: "&b{name}&a increase&d {increase}&f health by&b {cause}"
    decreased: "&b{name}&c decrease&d {decrease}&f health cause:&c {cause}"
    banReason: "&b{name}&f has been&c banned&f due to low health"
```

This section defines all **player messages** and **server console logs** related to health events, bans, and system warnings.
Every message supports Minecraft color codes (`&a`, `&b`, etc.) and some messages include placeholders such as `{cause}`, `{increase}`, `{decrease}`, `{name}`, `{debtPaid}`, `{debtLeft}`, etc.

---

### 🧍 **Player Notifications**

Messages shown directly to players during gameplay.

| Message Key           | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| **`maxHealth`**       | Informs a player they’ve reached the maximum HP limit.                       |
| **`minHealth`**       | Notifies a player they’ve hit the minimum HP threshold.                      |
| **`banReason`**       | Explains the reason for a health-based ban.                                  |
| **`kicked`**          | Message displayed when the player is kicked for low health.                  |
| **`ignored`**         | Informs the player that a death was ignored (no HP change).                  |
| **`ignoredSameWay`**  | Warns the player they cannot ignore repeated deaths of the same cause.       |
| **`increased`**       | Shows when HP has increased due to a valid death event.                      |
| **`increaseSameWay`** | Indicates that no HP gain occurred because the same death type was repeated. |
| **`decreased`**       | Displays HP reduction message with the cause.                                |
| **`decreaseSameWay`** | Informs that no further HP loss occurred because of repeated cause.          |
| **`debtPaidOff`**     | Confirms full repayment of Health Debt.                                      |
| **`debtReduced`**     | Informs player of partial debt repayment and remaining amount.               |
| **`debtAdded`**       | Displays new debt amount after penalties.                                    |

---

### ⚠️ **Warning Messages (Special Days & Events)**

| Key                | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| **`ignoredDay`**   | Alerts players that today is an *Ignored Day* — deaths will not affect HP.  |
| **`increaseDay`**  | Announces an *Increase Day* — deaths grant bonus HP.                        |
| **`decreaseDay`**  | Warns that today is a *Decrease Day* — HP penalties are harsher.            |
| **`seasonChange`** | Notifies all players when the season changes, indicating death can use same way once again. |

> 💡 *These notifications add immersion and make players aware of dynamic world conditions.*

---

### 🧾 **Server Log Messages**

Displayed in the console or admin logs for tracking and moderation purposes.

| Message Key     | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| **`maxHealth`** | Logs when a player reaches maximum HP.                         |
| **`minHealth`** | Logs when a player hits minimum HP.                            |
| **`increased`** | Displays HP increases in the server log with amount and cause. |
| **`decreased`** | Displays HP decreases in the server log with amount and cause. |
| **`banReason`** | Logs bans triggered by minimum HP rules.                       |

---

### ⚙️ **General Notification Settings**

| Setting                   | Type      | Default | Description                                                                                                                                      |
| ------------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`defaultDeathMessage`** | *Boolean* | `false` | Controls whether Minecraft’s built-in death messages are displayed to others. When set to `false`, DeathPulse replaces it by not displaying it. |

> 💬 *For immersive gameplay, it’s recommended to keep `defaultDeathMessage: false` so another player don't knowing you die.

---
<div class="nav-buttons">
  <a href="#/2.0.0/commands?id=command-reference-guide" class="nav-button">⬅ Previous: Command Reference Guide</a>
  <a href="#/2.0.0/faq?id=❓-frequently-asked-questions-faq" class="nav-button">Next: FAQ ➡</a>
</div>