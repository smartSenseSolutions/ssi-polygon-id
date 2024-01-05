# Revolutionizing Data Security: Embracing SSI, ZKPs, and Polygon ID in Modern Systems

In an era dominated by online interactions, our digital identities are at the forefront of our concerns. The constant fear of data breaches and unauthorized access to personal information has underscored the vulnerabilities inherent in traditional digital identity systems. The need for a secure and user-centric solution has never been more pressing.

## Table of Contents

-   [Revolutionizing Data Security: Embracing SSI, ZKPs, and Polygon ID in Modern Systems](#revolutionizing-data-security-embracing-ssi-zkps-and-polygon-id-in-modern-systems)
    -   [Table of Contents](#table-of-contents)
    -   [Project Description](#project-description)
    -   [Verifiable Credentials](#verifiable-credentials)
    -   [Schema Links](#schema-links)
    -   [Quick Start](#quick-start)
        -   [Prerequisites](#prerequisites)
        -   [Setup](#setup)
            -   [Run using Docker](#run-using-docker)
            -   [Run Locally](#run-locally)
                -   [Backend](#backend)
                -   [Frontend](#frontend)
    -   [Credits](#credits)
    -   [License](#license)

## Project Description

Our project aims to address the vulnerabilities in traditional digital identity systems by leveraging Self-Sovereign Identity (SSI), Zero-Knowledge Proofs (ZKPs), and the Polygon ID platform. This initiative is driven by the urgent need for a more secure and user-centric approach to digital identity in the face of increasing cyber threats and data breaches.

## Verifiable Credentials

The application issues four verifiable credentials using the Polygon ID issuer node:

1. **National ID Card:**

    - Required by the employer to issue employee salary credentials & laboratory to issue lab reports.

2. **Employee Schema:**

    - Required by the insurance company to issue insurance credentials.

3. **Lab Schema:**

    - Required by the insurance company to issue insurance credentials.

4. **Insurance Schema:**
    - Issued after verifying both employee and lab verifiable credentials.

## Schema Links

-   [Employment Schema](https://schema-builder.polygonid.me/schemas/d9263bc8-39f4-465a-a5de-ecdfc441ad31)
-   [National ID Schema](https://schema-builder.polygonid.me/schemas/a4b263d2-149b-4053-87b7-7a3d27151713)
-   [Lab Schema](https://schema-builder.polygonid.me/schemas/0b524eb5-f7d1-42a9-8f7d-559a100a35c5)
-   [Insurance Schema](https://schema-builder.polygonid.me/schemas/4ced05e3-7efe-43b0-ae5d-c923c9bd21bd)

## Quick Start

## Prerequisites

To successfully run this project, ensure you have the following:

-   **Polygon ID**: Download the Polygon ID Wallet App and create an Identity: Polygon ID on [Google Play](https://play.google.com/store/apps/details?id=com.polygonid.wallet) or on [App Store](https://apps.apple.com/us/app/polygon-id/id1629870183)
    -   Change the Default network to Polygon Mumbai
    -   Make sure you have enabled notifications for this app(if explicitly denied on your phone)
-   **NGROK**: For NGROK setup instructions, refer to [ngrok.readme.md](./ngrok.readme.md).
-   **RPC_URL**: To obtain the RPC_URL from Alchemy, follow the steps in [alchemy.readme.md](./alchemy.readme.md).
-   **Docker or Node.js**: To run the application locally on your system, you can either run using `Docker` or by starting the project locally using `node.js`

## Setup

-   **Run Ngrok to expose your local port**

    ```bash
    ngrok http --domain=your-static-domain.ngrok-free.app 4007
    ```

    -   Keep this terminal process running

-   **Clone the repository:**

    -   Open a second Terminal

    ```bash
    git clone https://github.com/smartSenseSolutions/ssi-polygon-id.git
    cd ssi-polygon-id/
    ```

### Run using Docker

1.  **Copy .env.example to .env:**

    ```bash
    cp .env.example .env
    ```

2.  **Update the `.env` file as below:**

    ```bash
    RPC_URL_MUMBAI=<Your RPC Url>
    NGROK_URL=<Ngrok URL of you static domain>
    ```

    -   Example:

    ```bash
    RPC_URL_MUMBAI=https://polygon-mumbai.g.alchemy.com/v2/xxxxxx-xxxxxxxxxx-xxx
    NGROK_URL=https://your-static-domain.ngrok-free.app
    ```

3.  **Run the Application using Docker**

    ```bash
    docker compose up --build
    ```

4.  **Access the Application on port [http://localhost:8000](http://localhost:8000)**

5.  **To Stop the Application**

-   Press Ctrl+C on the Terminal to stop the containers, and run the below command to remove the containers.

    ```bash
    docker compose down
    ```

### Run Locally

#### Backend

1. **Change Directory:**

    ```bash
    cd backend
    ```

2. **Copy .env.example to .env:**

    ```bash
    cp .env.example .env
    ```

3. **Set the required environment variables in .env:**

    ```bash
    RPC_URL_MUMBAI=<Your RPC Url>
    NGROK_URL=<Ngrok URL of you static domain>
    ```

    - Example:

    ```bash
    RPC_URL_MUMBAI=https://polygon-mumbai.g.alchemy.com/v2/xxxxxx-xxxxxxxxxx-xxx
    NGROK_URL=https://your-static-domain.ngrok-free.app
    ```

4. **Install packages:**

    ```bash
    npm install
    ```

5. **Run the backend application:**

    ```bash
    npm run start
    ```

#### Frontend

1. **Open new terminal in cloned repo:**

    ```bash
    cd frontend/
    ```

2. **Copy .env.example to .env:**

    ```bash
    cp .env.example .env
    ```

3. **Install dependencies:**

    ```bash
    npm ci --legacy-peer-deps
    ```

4. **Start the project on localhost:5173:**

    ```bash
    npm run dev
    ```

5. **Access the frontend on port [http://localhost:5173](http://localhost:5173)**

## License

This project is licensed under the [MIT License](LICENSE).
