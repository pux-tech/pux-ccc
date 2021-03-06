# pux-ccc

Predictive UX Candidate Coding Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started with this Repo...

### Installation

Install dependencies with

```bash
$> yarn
```

Then run the development server:

```bash
$> yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Instructions

You've been asked to build a React component that is a table displaying the best selling albums of all time for 3 countries - the UK, the US, and Canada. All the tools and data you'll need to complete this assignment are contained within this repository, but if you feel you need to add packages to assist your efforts, feel free to do so.

- The source data is located in `__data__` in the project root.
- The rest endpoint for `axios` or `fetch`, whichever you prefer, is `http://localhost:3000/api/albums` (go ahead and curl it after you get the application running)
- See `pages/api/albums.ts` for more information.

### Tasks

- Read all these instructions (!!)
- Fork this repository.
- Install dependencies, run the application and open in your browser.
- Most of your work should be in `pages/index.tsx` and the React components in `components/`
- Change "Your Title Here" to whatever you wish.
- Come up with a way to fetch the data from "the backend", so to speak.
- Display the data in the table **sorted by country (A-Z), then rank (1-5)**.
- Format the "Sold" column with comma separators.
- Configure the filter input component with a listener such that any character typed in will match/partial match **either** the artist name or the album name (case-insensitive) and filter the table data accordingly.
- For example, if "eagle" is entered, the table should show only 2 records for "The Eagles".
- Clearing the filter input should reset the data to show all records.

### Nice to Have

- Can you make the column headers clickable and execute a sort?
- Can you implement a creative way to show albums only from a specific country without using the filter input field?
- Can you create a Typescript interface or type for the album data?
- Surprise us with something else creative.

### When You're Finished

- Commit all changes.
- Share your repo / branch with Predictive UX
