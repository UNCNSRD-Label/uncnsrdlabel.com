# UNCNSRD

Monorepo for applications.

## Develop locally

If you haven't already done so, clone this Github repository to your local machine.

## Install dependencies

Use [pnpm](https://pnpm.io/installation) to install dependencies with the following command:

```bash
pnpm install
```

## Configure

You can configure the project using either the Vercel CLI or manually if you do not have access to UNCNSRD's Vercel account, please see the relevant sections below:

### Configure using Vercel CLI

#### Logging in

Use the [Vercel CLI](https://vercel.com/download) to log in to your personal account:

```bash
vercel login
```

#### Linking the project

Link the project:

```bash
vercel link
```

#### Export development environment variables to a local .env file

Use the Vercel CLI to download the development env vars:

```bash
vercel env pull .env.local
```

Running this command will create a new `.env.local` file in your project folder.

##### Removing TURBO

**Important:** Remove the `TURBO_REMOTE_ONLY` environment variable from the file in order to be able to run the development server or to build the code locally.

### Configure manually

### Setting up the env vars locally

Download the `.env.local` file from https://drive.google.com/file/d/1Os2ikh9L8ylgykwLfleyXjcA6Jcdg8JF/view?usp=drive_link and save it to the root of the project.

### Run the Next.js client

Run the following command to start the development server:

```bash
pnpm run dev
```

Finally, navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the application rendered.
