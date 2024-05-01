# 🏗 Getting Started

Follow these steps to install the stack for the 1st time:

-   `cp .env.local.example .env.local` - make default environment variables available to Next.js, Storybook and WordPress

### WordPress

-   `nvm use`
-   `cd wordpress`
-   `npm install`
-   `npm run build:assets`
-   `npm run start:wp`

Open [http://localhost/wp-admin/](http://localhost/wp-admin/) on your browser to access to the admin. (login: **superstack**, password: **superstack**)

### Next.js

-   `nvm use`
-   `npm install`
-   `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storybook

-   `npm run storybook`

Open [http://localhost:4000](http://localhost:4000) with your browser to access to Storybook.
