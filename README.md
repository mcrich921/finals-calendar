# Finals Calendar Wesleyan
Check it out [here](https://finals-scheduler.vercel.app/)!

## Inspiration
Just last week, I was trying to plan out the end of my semester and found it incredibly painful to scroll through a pdf to find my finals. I was inspired to create a tool that simplifies this process for students at Wesleyan University. With the constant stresses and time constraints of college, I wanted to make it easy for students to plan their semester and stay organized.

## What it does
Finals Calendar Wesleyan is a web app that allows students to filter, search, and select their courses from a list. Once selected, the app adds the final exam times to the student’s Google Calendar, helping them stay on top of their final exams and important deadlines.

## How I built it
I built this app using React to create a dynamic, interactive user experience. I used PapaParse to load class data from a CSV file I got from a simple python pdf scraping script, and implemented features like search, filtering by subject, and toggling selected classes.

## Challenges I ran into
- How to effectively display information without it being overwhelming
- Trying to use both a new API (Google Calendar) and a new framework (React)
- Ensuring smooth filtering and search functionality, especially with cases like multiple classes having the same name and number but different sections.

## Accomplishments that I'm proud of
- Implemented a clean and intuitive interface that makes scheduling finals much quicker
- Integrated Google Calendar event creation for finals
- Developed a filtering and search feature that lets users easily find their courses by subject or name

## What I learned
- Improved our React skills, particularly in managing state and handling complex user interactions.
- The importance of UI/UX design, especially when dealing with data-driven applications that need to remain user-friendly and efficient.

## What's next for Finals Calendar Wesleyan
- Implement Google Calendar API for an even easier transition
- Make the app more customizable by adding different types of events (e.g., official class times).
- Expand the app to support other universities and automate course schedule import for a broader audience.
