# NoGuess: Encrypt your Secrets

## Overview

NoGuess is a steganography project that leverages Electron-Vite for the desktop application, Node.js for the backend, and React.js for the front end. Steganography is the practice of hiding one piece of information within another in a way that is not easily detectable. In the context of this project, it involves hiding data within digital images.

## How it Works

The project allows users to embed secret messages or files within image files without altering the visible appearance of the image. It employs techniques to modify the least significant bits of pixel values in the image, making the changes imperceptible to the human eye.

## Features

- **Image Steganography:** Embed secret messages or files within image files.
- **Secure Encryption:** Implement robust encryption algorithms to protect the hidden information.
- **User-Friendly Interface:** Provide an intuitive and easy-to-use interface for users to interact with the application.
- **Cross-Platform Compatibility:** Build a desktop application using Electron to ensure compatibility with Windows, macOS, and Linux.

## Use Cases

1. **Secure Communication:**
   - Users can hide sensitive messages within images to securely transmit information.

2. **Data Concealment:**
   - Embed files or data within images to conceal information from unauthorized access.

3. **Digital Watermarking:**
   - Apply steganography for digital watermarking to protect intellectual property in images.

4. **Covert Communication:**
   - Enable covert communication by hiding messages within seemingly innocuous images.

5. **Educational Purposes:**
   - Provide a tool for educational purposes to demonstrate steganography concepts and techniques.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) - Ensure that Node.js is installed on your system.

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/noGuess.git
    ```

2. Navigate to the project directory:

   ```bash
   cd noGuess
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the backend server:

   ```bash
   npm run start-server
   ```

2. Start the frontend development server:

   ```bash
   npm run dev
   ```

3. Open the Electron application:

   ```bash
   npm run electron
   ```

4. Use the application to perform image steganography.

### Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md) for more details.

## Acknowledgments

- Special thanks to [Author Name] for their [Library/Tool] which inspired and helped in certain parts of this project.
- The steganography techniques employed in this project are based on the works of [Researcher Name] in the field of steganography.
