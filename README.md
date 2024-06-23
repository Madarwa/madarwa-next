## Getting Started

Follow the steps below to get started with Madara :hammer_and_wrench:

### Madara Setup

Madara can be a bit tricky by requiring rustup installer for a nightly build.
Took my time to run wihtout errors.

Install rustc 1.69.0-nightly

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

```bash
rustup toolchain install nightly
```

Install nvm latest

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Install Cairo 1.0

```bash
curl -L https://github.com/franalgaba/cairo-installer/raw/main/bin/cairo-installer | bash
```

protobuf for buildtime (If you don't have it you will HAVE errors)

```bash
brew install protobuf
```

For madara if our repo doesn't work you can just build on the root folder, but our repo should work

```bash
cd ~
git clone https://github.com/keep-starknet-strange/madara.git
```

Then build (this may get around 3-15 minutes)

```bash
cd madara
cargo build --release
```

Run madara with our config

```bash
./target/release/madara setup --chain dev --from-local ./configs
```

After that we need to deploy contracts to our specificly configured Madara network with the Karnot 


>  Node version v20.5.1

```
git clone https://github.com/karnotxyz/madara-get-started
cd madara-get-started
npm i
```


1. Declaring a contract:

   ```
   node scripts/declare.js ./contracts/my_project_RWADEMO.contract_class ./contracts/my_project_RWADEMO.compiled_contract_class
   ```

2. Deploying a contract

   ```
   node scripts/deploy.js ./contracts/my_project_RWADEMO.contract_class <address of owner>
   ```




### Contracts

You can see demo contract, general use wallet contract, and other erc20 compliant contracts for our product.
Main idea is having new initializable storages so we let users trade or mint tokens according to them while having no fees or easier onboarding with our Madara chain.
Tried to utilize OpenZeppelin contracts as they almost always decide on the standards of different blockchain languages, even though they are hard to grasp, once understood it has really good modulation.
Tried to keep contracts as simple as possible, in demo sake of simplicity we are holding state on erc20 contract, which is okay solution, for alternative we have switched to wallet to hold the state.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Design 

https://www.figma.com/design/YL40vTRqUjaPLIsCVNuoj9/StarkHack-Design?node-id=0-1&t=utrGWvkRUQ49dhXF-1


## Demo

TBA
