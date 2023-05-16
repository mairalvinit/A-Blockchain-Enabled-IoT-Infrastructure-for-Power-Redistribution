# A Blockchain Enabled IoT Infrastructure for Power Redistribution
This is a a Step Wise instruction on how to deploy our Final Year Project Named "A Blockchain Enabled IoT Infrastructure for Power Redistribution"

## 1:  Setting Up MetaMask and obatain ETH coins on Sepolia test net.

Step 1: Install MetaMask
- Open your web browser and visit the official MetaMask website (https://metamask.io).
- Download and install the MetaMask extension for your browser. MetaMask is available for Chrome, Firefox, Brave, and Edge.
- Follow the installation instructions provided by MetaMask.

Step 2: Set up MetaMask
- Click on the MetaMask extension icon in your browser's toolbar.
- Click "Get Started" on the welcome screen.
- Accept the terms of use and privacy policy.
- Set up a strong password for your MetaMask account.
- Click "Create" to generate a new wallet.

Step 3: Backup your wallet
- After creating your wallet, MetaMask will display a secret backup phrase. This phrase is crucial for recovering your wallet if you ever lose access to it.
- Write down the backup phrase on a piece of paper and store it securely. Do not store it digitally or share it with anyone.
- Confirm your backup phrase by selecting the words in the correct order.
- Click "All Done" to complete the backup process.

Step 4: Connect to Sepolia Testnet
- In the MetaMask interface, click on the network dropdown (usually displayed as "Main Ethereum Network" by default).
- Select "Custom RPC" from the network options.
- Enter the following details for the Sepolia testnet:
  - Network Name: Sepolia Testnet
  - New RPC URL: https://sepolia-testnet.example.com (replace with the actual RPC URL for the Sepolia testnet, if available)
  - Chain ID: (Enter the appropriate chain ID for the Sepolia testnet)
  - Symbol: SEPOL
  - Block Explorer URL: (Enter the URL for the Sepolia testnet block explorer, if available)
- Click "Save" to add the Sepolia Testnet to your network list.

Step 5: Obtain Testnet Coins
- Search for the official Sepolia testnet faucet on your web browser. The testnet faucet is a service that provides free testnet coins.
- Visit the testnet faucet and follow the instructions to request testnet coins.
- Enter your MetaMask wallet address when prompted.
- Complete any necessary captcha or verification steps.
- Submit the request and wait for the testnet coins to be sent to your MetaMask wallet.

Step 6: Check your Testnet Balance
- Return to the MetaMask interface.
- Ensure that you're connected to the Sepolia Testnet (the network dropdown should display "Sepolia Testnet").
- Click on the account icon in the top-right corner to view your wallet balance.
- Verify that the testnet coins you received from the faucet are visible in your wallet.

Congratulations! You have successfully downloaded and connected to MetaMask and added coins to your account on the Sepolia testnet. You're now ready to explore and interact with decentralized applications (DApps) on the testnet. Remember that the Sepolia testnet coins have no real-world value and are meant for testing purposes only.


## 2: Deploying Contract on Sepolia test-net

Step 1: Set up MetaMask
- Make sure you have MetaMask installed and connected to the Sepolia testnet as explained in the previous guide.

Step 2: Write your Smart Contract
- Develop your smart contract using a suitable programming language like Solidity.
- Save the contract code in a file with a `.sol` extension.
- For eg. 'Contract.sol' is provided in the attached zip file

Step 3: Compile the Smart Contract
- Open a Solidity compiler, such as Remix (https://remix.ethereum.org) or use a local development environment like Truffle.
- Copy and paste your 'contract.sol' code into the compiler.
- Compile the contract code to obtain the compiled bytecode and ABI (Application Binary Interface) for your contract.

Step 4: Obtain Testnet ETH
- Ensure you have a sufficient amount of testnet ETH in your MetaMask wallet to cover the deployment fees.
- If you don't have enough testnet ETH, you can use a testnet faucet or request ETH from a development community specific to the Sepolia testnet.

Step 5: Deploy the Contract
- In MetaMask, make sure you're connected to the Sepolia testnet.
- Open Remix (or your chosen development environment) and navigate to the "Deploy" section.
- Select the "Injected Web3" option to connect Remix to your MetaMask wallet.
- Choose the contract you want to deploy from the compiled contracts list.
- Specify any constructor arguments required by your contract.
- Review the gas cost estimate for deployment and ensure you have enough testnet ETH in your MetaMask wallet to cover the fees.
- Click "Deploy" or a similar button to initiate the contract deployment process.

Step 6: Confirm the Deployment
- MetaMask will open a popup window displaying the details of the deployment transaction.
- Review the gas price and total cost, and click "Confirm" or "Accept" to proceed with the deployment.
- Wait for the deployment transaction to be processed and included in a block on the Sepolia testnet.

Step 7: Verify the Contract
- Once the contract is deployed, you may want to verify it on a testnet block explorer like Etherscan or a Sepolia-specific block explorer.
- Copy the contract address from MetaMask.
- Visit the testnet block explorer website and search for your contract address.
- If the contract is successfully verified, you'll be able to see the contract code and other details on the block explorer.

Congratulations! You have successfully deployed a contract on the Sepolia testnet. Your contract is now ready to interact with on the testnet. Remember that contracts on the testnet have no real-world value and are meant for testing and development purposes.



## 3 :Upload The Arudino code and setup ESP32 in it
Sure! Here's a step-by-step guide to installing the Arduino IDE and adding support for the ESP32:

Step 1: Download and Install the Arduino IDE
- Go to the Arduino website (https://www.arduino.cc/en/software).
- Download the appropriate version of the Arduino IDE for your operating system.
- Follow the installation instructions provided by the Arduino IDE installer.

Step 2: Install the ESP32 Board
- Open the Arduino IDE.
- Go to "File" > "Preferences".
- In the "Additional Boards Manager URLs" field, enter the following URL:
```
https://dl.espressif.com/dl/package_esp32_index.json
```
- Click "OK" to close the preferences window.
- Go to "Tools" > "Board" > "Boards Manager".
- Type "esp32" in the search field.
- Select the "esp32 by Espressif Systems" board from the search results.
- Click "Install" to install the ESP32 board.

Step 3: Select the ESP32 Board
- Go to "Tools" > "Board".
- Select the "ESP32 Dev Module" or your specific ESP32 board from the list of available boards.
- Select the appropriate settings for the board, such as the CPU frequency and flash size.

Step 4: Test the ESP32 Board
- Connect your ESP32 board to your computer via USB.
- Go to "Tools" > "Port" and select the port that corresponds to your ESP32 board.
- Open the "Blink" example sketch from the "File" > "Examples" > "01.Basics" menu.
- Click the "Upload" button to compile and upload the sketch to the ESP32 board.
- Wait for the upload process to complete and verify that the onboard LED on the ESP32 board blinks.

That's it! You have now installed the Arduino IDE and added support for the ESP32 board. You can now start developing and uploading your own sketches to the ESP32 board.

## 4: Setup Blynk Cloud and make the necessary changes

Here's a step-by-step guide to setting up Blynk in the cloud:

Step 1: Create an account on the Blynk cloud
- Go to the Blynk website (https://blynk.io/) and click on the "Sign up" button in the top right corner.
- Fill out the registration form to create a new account.

Step 2: Create a new Blynk project
- Click on the "New Project" button on the Blynk dashboard.
- Give your project a name and select the device type you will be using with Blynk.
- Click the "Create" button to create your project.

Step 3: Obtain the auth token for your project
- Click on the "Settings" button on the top right of your project screen.
- In the "Device Info" section, you will see an "Auth Token" field. Copy the token to your clipboard.

Step 4: Set up your hardware device
- Install the Blynk library in your Arduino IDE (Sketch > Include Library > Manage Libraries).
- Create a new sketch in the Arduino IDE.
- Paste the following code into your sketch, replacing "your_auth_token_here" with the auth token you obtained in Step 3:

```
#define BLYNK_TEMPLATE_ID "your_template_id"
#define BLYNK_TEMPLATE_NAME "your_template_name"
#define BLYNK_AUTH_TOKEN "your_auth_token"
char ssid[] = "your_wifi_ssid_here";
char pass[] = "your_wifi_password_here";
```

-Make the necessary changes in the arudino code given the following fie and change the following fields 
- Upload the sketch to your hardware device.

Step 5: Connect your device to the Blynk cloud
- Open the Blynk app on your smartphone.
- Create a new project and select the same device type as you did in Step 2.
- In the "Devices" tab, click on the "+" button and select "Wi-Fi".
- Enter the name and password for your Wi-Fi network.
- Enter the auth token you obtained in Step 3.
- Click the "Save" button.

That's it! Your hardware device is now connected to the Blynk cloud and you can start creating widgets in your Blynk project to control and monitor your device remotely.


## 5: Install Node and run the code


Step 1: Install Node.js
-Go to the Node.js website (https://nodejs.org/en/).
-Download and install the appropriate version of Node.js for your operating system.
-Follow the installation instructions provided by the Node.js installer.


Step 2: Run Vite Application

-Unzip the the zipped FYPReact folder given
-go to the location in terminal and type "npm install"
-wait until all the dependencies get install
-add a '.env' file , and as shown in '.env.ignore' file and upload your contract address , and blynk auth token
-enter your abi of your contract and add it to 'contract.js' file
-save the file
-In the terminal type  'npm run dev' and go to the ip address mentioned in the terminal.
-your Application should start working


> Attachment : It contains a zip file containing template of the code.
> PS : you can also download the code from git hub

With Regards,

Vinit Mairal - U19EC134
Aashish Chachan - U19EC112
Vivek Damani - U19EC127
___