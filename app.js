async function loadConfig() {
  try {
    const themeModule = await import("./theme.mjs");
    const currentTime = new Date().getHours();

    if (currentTime < 18) {
      themeModule.setLightTheme();
    } else {
      themeModule.setDarkTheme();
    }
  } catch (error) {
    console.error("Failed to load theme module:", error);
  }
}

// Load the configuration
loadConfig();
