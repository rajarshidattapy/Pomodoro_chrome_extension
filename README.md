
# 🕒 Pomodoro Timer Chrome Extension

A simple and modern Pomodoro Timer extension for Chrome, designed to help you boost productivity by working in focused time intervals (25-minute work sessions, followed by a short break). Includes an alarm and pop-up notification when the time is up!

## ✨ Features

- ⏲️ **25-minute timer**: Classic Pomodoro session.
- 🔔 **Alarm sound**: Audible alert when the session ends.
- 🔔 **Pop-up notification**: Visual alert when the time is up.
- 🛠️ **Reset Button**: Easily reset the timer at any point.

## 🚀 Installation

1. Clone this repository or download the project files:

    ```bash
    git clone https://github.com/rajarshidattapy/Pomodoro_chrome_extension.git
    ```

2. Go to `chrome://extensions/` in your Chrome browser.

3. Enable **Developer Mode** in the top right corner.

4. Click on **Load unpacked** and select the folder containing this project.

5. The Pomodoro Timer extension will now be visible in your Chrome extensions bar.

## 🛠️ Project Setup

### File Structure:

```
pomodoro-timer-extension/
├── manifest.json        # Chrome extension manifest file
├── popup.html           # HTML file for the extension's popup
├── styles.css           # Styles for the timer UI
├── script.js            # JavaScript for the Pomodoro timer logic
├── alarm.mp3            # Alarm sound (add your alarm sound)

```
### Dependencies

- No external dependencies or libraries are required. The extension uses plain **HTML**, **CSS**, and **JavaScript**.

## ⚙️ How to Use

1. Click on the Pomodoro Timer icon in the Chrome extensions toolbar to open the popup.

2. Press the **Start** button to begin the 25-minute Pomodoro session.

3. Once the time is up, an alarm will sound and a pop-up notification will appear.

4. Use the **Reset** button to reset the timer back to 25 minutes.

---

Feel free to modify and customize the extension as needed! Happy coding and stay productive with the Pomodoro method! 🎯

---

### Additional Notes

- Ensure you have the `alarm.mp3` file included in the root directory, or you can replace it with any sound file of your choice.

## 👨‍💻 Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome! For major changes, please open an issue to discuss what you would like to change.
