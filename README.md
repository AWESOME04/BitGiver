# BitGiver

A decentralized donation platform using Bitcoin Lightning Network for seamless transactions between creators, charities, and organizations.

## Features

- User Authentication & Profiles
- Lightning Network Integration
- Real-time Donation Tracking
- Fundraising Campaign Creation
- Secure Payment Processing

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node js
- **Database**:  MongoDB
- **Lightning**: WebLN, Polar (testing)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm/yarn
- Polar (for Lightning Network testing)
- Lightning wallet (e.g., Alby)

### Installation

```bash
# Clone the repository
git clone https://github.com/AWESOME04/bitgiver.git

# Navigate to project directory
cd bitgiver

# navigate to the frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Lightning Network Testing with Polar (Coming Soon...)

1. Install and setup Polar
2. Create a new network with at least 2 nodes
3. Fund channels between nodes
4. Use REST API details from Polar for testing


## Project Structure

```
bitgiver/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── home/
│   │   │   └── shared/
│   │   ├── context/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── types/
│   │   └── data/
│   ├── public/
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── CONTRIBUTING.md
└── README.md
```

## Usage

1. **User Registration**
   - Sign up as creator/charity/organization
   - Complete profile information

2. **Sending Funds**
   - Click "Send Funds" in navbar
   - Enter amount and Lightning invoice
   - Confirm transaction

3. **Creating Fundraiser**
   - Click "Start Fundraising"
   - Set campaign details and goal
   - Share generated Lightning address

## Testing

For local Lightning Network testing:

```bash
# Generate invoice in Polar
lncli --network=regtest addinvoice --amt 100000

# Pay invoice
lncli --network=regtest payinvoice <payment_request>

# Check balance
lncli --network=regtest walletbalance
```

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to BitGiver.

Key areas we're currently focusing on:
1. Lightning Network Integration
2. Web3 Wallet Integration
3. Smart Contract Development
4. UI/UX Improvements

## Acknowledgments

- Lightning Network community
- React ecosystem maintainers
- Polar development team
