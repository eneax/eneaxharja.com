---
title: "Home Rentals"
date: "2023-06-25"
---

A full stack application built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [NextAuth](https://next-auth.js.org), [Prisma](https://www.prisma.io), [MongoDB](https://www.mongodb.com/atlas/database) and deployed on [Vercel](https://vercel.com/home).

![Home Rentals - Next.js full stack application](1.png)
_Home Rentals - Next.js full stack application_

## Environment Variables

Create a `.env` file in your root directory:

```
DATABASE_URL=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

## Getting Started

To run this project locally:

```bash
npm i

npx prisma db push

npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Code available on [GitHub](https://github.com/eneax/home-rentals).
