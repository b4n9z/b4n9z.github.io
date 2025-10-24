# **Installation Guide**

Installing **DeathPulse** is simple and requires no special dependencies beyond a standard Spigot-compatible Minecraft server.
Follow the steps below to ensure a clean setup and optimal plugin performance.

---

## ⚙️ **Requirements**

Before installation, make sure your server meets the following criteria:

* **Minecraft Version:** 1.21.x or later (depending on the plugin version)
* **Server Platform:** Spigot, Paper, or any Bukkit-based implementation
* **Java Version:** Java 17 or newer
* **Permissions Plugin (optional):** *LuckPerms* or similar — for advanced permission control

> 💡 *Tip:* DeathPulse is designed to work efficiently across various Spigot forks.
> For best performance, Paper is recommended due to its enhanced optimization and API stability.

---

## 🧩 **Step-by-Step Installation**

### **1. Download the Plugin**

Visit the official [DeathPulse Releases Page](https://github.com/b4n9z/DeathPulse/releases) on GitHub and download the latest `.jar` file.
Each release includes a changelog and compatibility information.

---

### **2. Add the Plugin to Your Server**

Place the downloaded `DeathPulse-x.x.x.jar` file inside your server’s: `/plugins/` directory.

If you already have a previous version of DeathPulse, backup or remove `config.yml` from `/plugins/DeathPulse/` first *( optional depending on the plugin version )* and replace the old `.jar` file with the new one.

---

### **3. Start or Restart Your Server**

Run your Minecraft server as usual.
During startup, DeathPulse will automatically generate a default configuration folder and file at:

```
/plugins/DeathPulse/
```

This folder contains:

* `config.yml` — the main configuration file
* `death_data/` — where player death data is stored
* `debt_data/` — where player debt data is stored

Once generated, you can freely edit the configuration to suit your server’s rules and theme.

---

### **4. Customize the Configuration**

You can skip this section if you only want the original version of the plugin.

Open the `config.yml` file using your preferred text editor or one provided by your hosting server.
Within it, you’ll find detailed sections for all major systems, including:

* *Crucial Settings for Server*
* *World day Setting*
* *Health Behavior Settings*
* *Health Item Management*
* *Priority Death Setting*
* *Death Type Configuration (Ignore / Increase / Decrease)*
* *Day and Season Mechanics*
* *Notification and Message Customization*
* *Permission Overrides*

Each section includes helpful comments explaining how parameters affect gameplay.
Take your time to experiment — the configuration system is designed for both flexibility and safety.

---

### **5. Reload the Plugin**

After making your configuration changes, you don’t need to restart your server.
Simply execute the following command in-game (or via console):

```
/dp reload
```

This will reload all plugin settings instantly.

> ⚠️ *Note:* Reloading configuration frequently during heavy gameplay may cause brief server lag.
> It’s best to perform reloads during low player activity.

---

## 🧠 **Verifying the Installation**

To ensure the plugin is running correctly:

1. Join your server.
2. Run: `/dp help`
3. You should see a list of available DeathPulse commands and their descriptions.
   If this appears, your installation was successful!

You can also check your server console — a successful setup will display:

```
[DeathPulse] DeathPulse plugin enabled!
```

---

## 🔧 **Uninstallation or Upgrade**

To remove DeathPulse:

1. Stop your server.
2. Delete the `DeathPulse.jar` file from the `/plugins/` directory.
3. (Optional) Delete the `/plugins/DeathPulse/` folder if you no longer need saved data.

To upgrade, backup or remove `config.yml` from `/plugins/DeathPulse/` first *( optional depending on the plugin version )* and replace the old JAR file with the latest release and restart the server — your existing player data will remain intact unless the update specifies otherwise.

---

## ✅ **Installation Complete**

DeathPulse is now fully installed on your server.
From here, you can explore advanced customization options — such as adjusting health behaviors, creating seasonal death systems, and fine-tuning player permissions — to make your server’s gameplay experience truly unique.

---
<div class="nav-buttons">
  <a href="#/README?id=deathpulse-the-art-of-strategic-death" class="nav-button">⬅ Previous: Introduction</a>
  <a href="#/2.0.0/commands?id=command-reference-guide" class="nav-button">Next: Command Reference Guide ➡</a>
</div>
