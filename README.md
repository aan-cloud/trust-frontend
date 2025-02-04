# Trust Frontend

**Trust Frontend** is the user interface component of the **TRUST** project, an online platform specializing in high-quality automotive spare parts sourced directly from trusted manufacturers.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Related Links](#related-links)

## About the Project

The **Trust Frontend** serves as the user-facing part of the **TRUST** platform, providing a seamless and efficient online shopping experience for automotive spare parts.

## Features

- **Homepage**: Displays featured products and the latest offers.
- **Product Catalog**: A comprehensive list of available products with filtering and search options.
- **Product Page**: Detailed information including images, SKU, name, price, description, and an option to add items to the shopping cart.
- **Shopping Cart**: Shows selected items with options to adjust quantities or remove items.
- **Checkout and Payment System**: A secure and efficient payment process.
- **Search Product**: Quickly find products using the search functionality.
- **Filter Product**: Narrow down product listings based on specific criteria.
- **Join to be a Seller**: Option for users to register as sellers on the platform.
- **Upload Product**: Allows sellers to add new products to the platform.
- **Seller Dashboard**: A dedicated dashboard for sellers to manage their products and view sales analytics.
- **Track Order Status**: Enables customers to monitor the status of their orders in real-time.

## Tech Stack

This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static web application development.
- **TypeScript**: A statically typed superset of JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for efficient and customizable styling.
- **Vercel**: A hosting platform for Next.js applications.

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js** (version 14 or later)
- **npm** or **yarn** as a package manager

## Installation

Follow these steps to install and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/aan-cloud/trust-frontend.git
   cd trust-frontend
   ```

2. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

## Usage

After installation, you can run the application in development mode:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`. Open this URL in your browser to view it.

## Project Structure

The main directories and files in this project are organized as follows:

```
trust-frontend/
├── public/                 # Static files such as images and icons
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Next.js application pages
│   ├── styles/             # CSS files and Tailwind configuration
│   ├── utils/              # Utility functions and helpers
│   └── ...                 # Other files and directories
├── .gitignore              # Git ignore file
├── package.json            # Project information and dependencies
├── README.md               # Project documentation
└── ...                     # Other configuration files
```

## Contributing

We welcome contributions from everyone. If you'd like to contribute, please follow these steps:

1. Fork this repository.
2. Create a new feature branch (`git checkout -b your-feature`).
3. Make your desired changes and commit them (`git commit -m 'Add feature ABC'`).
4. Push to your branch (`git push origin your-feature`).
5. Create a Pull Request to the `main` branch of the original repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Related Links

- **Website/Frontend**: [trust.muhammad-farhan.com](https://trust.muhammad-farhan.com/)
- **Backend**: [trust-api.muhammad-farhan.com](https://trust-api.muhammad-farhan.com/)
- **General Repository**: [github.com/aan-cloud/trust](https://github.com/aan-cloud/trust)
- **Backend Repository**: [github.com/aan-cloud/trust-backend](https://github.com/aan-cloud/trust-backend)

---