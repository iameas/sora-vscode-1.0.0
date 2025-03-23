# Sora VS Code Extension

![Sora Icon](src/assets/icon.png)

**Sora Language Support** is a **VS Code extension** for the **Sora programming language**, offering **syntax highlighting, linting, debugging, snippets, and auto-completion** to enhance the development experience.

## Features

- **Syntax Highlighting** – Improves code readability.  
- **Linting** – Detects syntax errors in real-time.  
- **Auto-completion** – Speeds up coding with smart suggestions.  
- **Code Snippets** – Predefined templates for faster coding.  
- **Debugging Support** – Step through and debug Sora code.  
- **Language Configuration** – Defines proper indentation and formatting.  

## Installation

### From the VS Code Marketplace
1. Open **VS Code**.
2. Go to **Extensions** (`Ctrl+Shift+X`).
3. Search for **"Sora Language Support"**.
4. Click **Install**.

### From Source (Manual Installation)
- Clone this repository:
   ```sh
   git clone https://github.com/iameas/sora-vscode-1.0.0.git
- Navigate to project folder:
   ```sh
   cd sora-vscode-1.0.0
- Install dependencies:
  ```sh
  npm install
- Package the extension:
  ```sh
  npm run package
- Install the extension is Visual Studio Code:
  ```sh
  code --install-extension sora-language-support.vsix
  
### Usage
Once installed, Sora files (.sora) will automatically have:

- Syntax highlighting
- IntelliSense for Sora functions
- Auto-completion for common Sora syntax

### Example code in Sora
- Printing to the console:
    ```sh
    show 'Hello, World'
- Calculations in Sora:
   ```sh
   if a is 1, and b is 2:
    show (a plus b)
---

## **Commands & Shortcuts**  
List useful commands in the extension.  

```md
## Commands  

- **Activate Sora:** `Ctrl+Shift+P` → Select **"Activate Sora"**  
- **Format Code:** `Ctrl+Shift+F`  
- **Run Code:** `F5`
