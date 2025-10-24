# ❓ Frequently Asked Questions (FAQ)

Welcome to the DeathPulse FAQ!  
This section addresses the most common questions from both **server administrators** and **players**, helping you understand, configure, and master the DeathPulse system effectively.

---

## ⚙️ General Usage

### Q1. Who is DeathPulse designed for?
**A:** DeathPulse is primarily designed for **survival and PvP servers**. It introduces a new level of challenge where death is no longer just a penalty—it’s a *mechanic* to manage your health strategically. Players gain or lose maximum health depending on how they die, creating a dynamic “risk–reward” system that evolves with gameplay.

### Q2. Can DeathPulse work across multiple worlds?
**A:** Yes. DeathPulse fully supports **multi-world setups** through the `worldDaySettings` section in your `config.yml`.  
You can define the ticks-per-day for each world, ensuring day cycles remain accurate even in custom dimensions.

### Q3. Can players ever get permanently banned because of low HP?
**A:** Only if you configure it that way.  
If `minHP.enabled` is `false` and `banTime` set to `0`, or `minHP.enabled` is `true` but `amount` and `banTime` set to `0`, the player will be permanently banned once their HP reaches that level.  
Otherwise, they will either receive a timed ban or start accumulating **health debt**, depending on your configuration.

### Q4. Is DeathPulse compatible with other health-based plugins (like LifeSteal)?
**A:** Usually no, but as long as the other plugin doesn’t directly modify player health during death events, it should be safe.  
Conflicts can occur if both plugins attempt to override death-based HP logic simultaneously.

### Q5. Does DeathPulse currently support other game versions or forks?
**A:** The plugin has been tested mainly on **Spigot and Paper**. Other forks (like Purpur or Bukkit-based builds) may work but are not officially supported.

---

## 🔧 Configuration & Mechanics

### Q6. My config seems to break after editing. Why?
**A:** DeathPulse includes a built-in **validation system** ([`validateConfig()`](https://github.com/b4n9z/DeathPulse/blob/e1a43279819ec555b45964af2ff7fd4b84918726/src/main/java/io/github/b4n9z/deathPulse/Managers/ConfigManager.java#L367)) that ensures logical consistency between settings.  
If your configuration fails to load, it’s likely because some incompatible options (like conflicting priorities or day settings) were enabled together. Always check console logs for detailed validation errors.

### Q7. Can I edit the config.yml while the server is running?
**A:** Yes, safely.  
After making changes, run `/dp reload` to apply them.  
The command reloads configuration values into memory without restarting the server.

### Q8. How does DeathPulse handle overlapping death types?
**A:** The `priority` list determines which system—`IGNORE`, `INCREASE`, or `DECREASE`—takes effect first.  
When a player dies, DeathPulse checks the causes in order of priority.  
If one condition is met, the others are skipped to prevent duplication or conflict.

### Q9. Can Increase and Decrease days occur simultaneously?
**A:** In version 2.0.0, this isn’t yet supported.  
If Increase Day is set to day 10 and Decrease Day is set to day 20, Increase will also activate on day 20 because 20 is a multiple of 10. But, if increase day set to 10 and decrease day also set to 10, for now will make error.
Future updates may separate these mechanics more cleanly.

### Q10. What does the “Season System” do?
**A:** The Season System resets the **day counter**, not player data.  
It allows new gameplay “cycles” where previously restricted death types (due to `must_difference`) can be triggered again.  
This means each season offers players a chance to rebuild or optimize their HP progression.

---

## ❤️ Gameplay & Behavior

### Q11. What kind of experience is DeathPulse designed to create?
**A:** DeathPulse transforms ordinary survival gameplay into a **strategic survival experience**.  
Players must think carefully about *how* they die—some deaths can grant health (Increase-type), while others reduce it (Decrease-type).  
This system rewards creative thinking and careful risk management instead of brute survival.

### Q12. Can players increase their HP infinitely?
**A:** Potentially yes, unless you’ve enabled a maximum HP limit (`maxHP.enabled = true`).  
You can also prevent repetitive exploits by setting `must_difference` to true—forcing players to find unique death causes for each health increase.

### Q13. What happens after a player ban due to low HP?
**A:** Once their ban time expires, they are automatically unbanned.  
When rejoining, their HP is restored to the value defined by `afterBan` in `config.yml`.

### Q14. What are Health Items, and how do they work?
**A:** Health Items (such as `&cHealth Token`) are special objects that increase a player’s max HP upon right-clicking.  
They can drop when players reach max HP through death-based increases, depending on configuration.  
Whether these tokens are tradable depends on the server’s own shop or item handling system.

### Q15. Can the warning day messages (Increase Day, Decrease Day, etc.) be disabled?
**A:** Yes. Simply remove or comment out the message in `notifications.warning` within `config.yml`.  
If no text is defined, that warning won’t appear in-game.

---

## 🧩 Technical & Maintenance

### Q16. Where does DeathPulse store player data?
**A:** Data is stored in `/plugins/DeathPulse/death_data/` and `/plugins/DeathPulse/debt_data/`.  
Death data is in `.json` format (editable by text), while debt data uses `.dat` format.  
You can edit these manually, and remove using commands is safer.

### Q17. How do I back up or reset player data?
**A:** Simply back up or delete the respective folders mentioned above.  
Deleting them will reset player data completely, while copying them ensures data continuity across servers. However, player health still depends on the player data stored on `world/playerdata`. 

### Q18. Is there a web interface or API planned for DeathPulse?
**A:** No, and it is unlikely that there will be one in the future.

### Q19. Does DeathPulse work properly after using a full server reload?
**A:** Partial reloads (`/reload`) are not recommended in general Spigot practice.  
However, DeathPulse’s `/dp reload` is fully supported and safe to use for reloading configuration data only.

### Q20. Is DeathPulse still under active development?
**A:** Yes, though updates may be infrequent due to time constraints.  
The plugin remains stable and is actively maintained when major changes or bug reports arise.

---

## 🧰 Troubleshooting

### Q21. The plugin doesn’t load or the shows errors.
**A:** Make sure your `config.yml` is properly formatted (check for missing quotes or spaces).  
If the issue persists, delete the config to regenerate it and reapply your custom settings.

### Q22. Health values are not updating after death.
**A:** Verify that the corresponding death type (`increase`, `decrease`, or `ignore`) is enabled and correctly prioritized in `priority:`.

### Q23. Players aren’t receiving notifications.
**A:** Check the `notifications:` section in the config. If a message field is blank, it won’t be displayed.

---

> 💡 For more detailed technical help, visit the [DeathPulse GitHub Repository](https://github.com/b4n9z/DeathPulse/issues) and open a ticket with your configuration and console log.