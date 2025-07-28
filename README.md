# 10-minute-school-ielts-assessment

An interactive IELTS course assessment platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Interactive course details with accordion-style navigation
- Responsive design for all devices
- TypeScript for type safety
- Modern UI with smooth animations
- Accessible components with ARIA attributes

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Atik1000/10-minute-school-ielts-assessment.git
cd 10-minute-school-ielts-assessment
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 4. Open Your Browser

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── modules/
│   └── ielts-course/
│       ├── components/
│       │   └── course-details/
│       │       └── course-details-card.tsx
│       ├── types/
│       │   └── ielts-course-data-types.ts
│       └── utils/
│           └── helpers/
│               └── helper-functions.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
