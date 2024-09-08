# dontWatchMe Chat
### dontWatchMe Chat is an end-to-end encrypted messaging application built with React and Firebase. It prioritizes user privacy by implementing client-side encryption, ensuring that messages are secure from the moment they leave the sender's device until they are decrypted on the recipient's device.
## Features

End-to-end encryption using RSA-OAEP
Real-time messaging with Firebase Realtime Database
Anonymous authentication for enhanced privacy
Simple and intuitive user interface

## Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v14.0.0 or later)
npm (v6.0.0 or later)
A Firebase account and project

## Installation

Clone the repository:
git clone https://github.com/cjanowski/dontWatchMeChat.git
cd dontWatchMeChat

### Install the dependencies:
npm install

### Set up your Firebase configuration:

Create a .env file in the root directory
Add your Firebase configuration:
CopyREACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

## Usage

Start the development server:
Copynpm start

Open your browser and navigate to http://localhost:3000
Start chatting securely!

### Contributing
Contributions to dontWatchMe Chat are welcome. Please feel free to submit a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
Disclaimer
While dontWatchMe Chat implements end-to-end encryption, no system is 100% secure. Use at your own risk and avoid sharing sensitive information.
Contact
### If you have any questions or feedback, please open an issue on this repository.
Happy Secure Chatting!
