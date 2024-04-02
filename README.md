```markdown
# Appointment App

This is a Next.js application built with React, Node.js, and MongoDB. It allows users to create, update, and view appointments. The app features resizable components and stores appointment data in a MongoDB database.

## Prerequisites

- Node.js 
- npm 
- MongoDB URI

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ASCA1ON/appointment-app.git
```

2. Install dependencies:

```bash
cd appointment-app
npm install
```

3. Create a `.env` file in the root directory and add the following environment variable:

```
MONGODB_URI=your-mongodb-uri
```

Replace `your-mongodb-uri` with the connection string for your MongoDB instance.

4. Start the development server:

```bash
npm run dev
```

The app should now be running at `http://localhost:3000`.

## Features

- **Create Appointment**: Users can create a new appointment by providing a name and date.
- **Update Appointment**: Existing appointments can be updated with new details.
- **View Appointments**: Users can view a list of all appointments.
- **Resizable Components**: The app includes resizable components powered by the `re-resizable` library.

## Technologies Used

- **Next.js**: A React framework for building server-rendered and static React applications.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime environment for server-side execution.
- **MongoDB**: A NoSQL database for storing appointment data.
- **Axios**: A promise-based HTTP client for making API requests.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **re-resizable**: A library for creating resizable components in React.
- **react-hot-toast**: A lightweight, customizable, and beautiful toast notification library for React.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

