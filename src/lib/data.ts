export const teams = [
  {
    id: "1",
    name: "Frontend Developer",
  },
  {
    id: "2",
    name: "Backend Developer",
  },
  {
    id: "3",
    name: "Database Administrator",
  },
  {
    id: "4",
    name: "UI/UX Designer",
  },
  {
    id: "5",
    name: "DevOps Engineer",
  },
  {
    id: "6",
    name: "Scrum Master",
  },
];

export const users = [
  { id: "1", name: "Alice Johnson", teamId: "1" },
  { id: "2", name: "Bob Smith", teamId: "1" },
  { id: "3", name: "Charlie Davis", teamId: "1" },
  { id: "4", name: "Diana Evans", teamId: "1" },
  { id: "5", name: "Eve Williams", teamId: "1" },
  { id: "6", name: "Frank Taylor", teamId: "1" },
  { id: "7", name: "Grace Lee", teamId: "2" },
  { id: "8", name: "Henry Clark", teamId: "2" },
  { id: "9", name: "Ivy Scott", teamId: "2" },
  { id: "10", name: "Jack Harris", teamId: "2" },
  { id: "11", name: "Karen Brown", teamId: "3" },
  { id: "12", name: "Leo Walker", teamId: "3" },
  { id: "13", name: "Mia Hall", teamId: "4" },
  { id: "14", name: "Nora Young", teamId: "4" },
  { id: "15", name: "Oscar King", teamId: "4" },
  { id: "16", name: "Paul Wright", teamId: "4" },
  { id: "17", name: "Quincy Adams", teamId: "5" },
  { id: "18", name: "Rita Martinez", teamId: "5" },
  { id: "19", name: "Sam Thomas", teamId: "6" },
  { id: "20", name: "Tina Rodriguez", teamId: "6" },
];

export const tasks = [
  { id: "1", name: "Design Homepage", description: "Create the homepage design", status: "To Do", teamId: "4", userId: "13" },
  { id: "2", name: "Develop API", description: "Build the backend API", status: "In Progress", teamId: "2", userId: "7" },
  { id: "3", name: "Database Schema", description: "Design database schema", status: "Completed", teamId: "3", userId: "11" },
  { id: "4", name: "Deploy Application", description: "Deploy the application to production", status: "In Progress", teamId: "5", userId: "17" },
  { id: "5", name: "User Authentication", description: "Implement user authentication", status: "To Do", teamId: "1", userId: "1" },
  { id: "6", name: "Create User Stories", description: "Write user stories for the sprint", status: "Completed", teamId: "6", userId: "19" },
  { id: "7", name: "UI Testing", description: "Test the user interface for bugs", status: "To Do", teamId: "4", userId: "14" },
  { id: "8", name: "Optimize Database", description: "Optimize database performance", status: "In Progress", teamId: "3", userId: "12" },
  { id: "9", name: "Frontend Bug Fixes", description: "Fix bugs in the frontend application", status: "To Do", teamId: "1", userId: "2" },
  { id: "10", name: "Set Up CI/CD", description: "Set up continuous integration and deployment", status: "In Progress", teamId: "5", userId: "18" },
  { id: "11", name: "Sprint Planning", description: "Plan tasks for the next sprint", status: "Completed", teamId: "6", userId: "20" },
  { id: "12", name: "Code Review", description: "Review code submitted by the team", status: "To Do", teamId: "2", userId: "9" },
  { id: "13", name: "Design Mobile UI", description: "Create UI for the mobile app", status: "In Progress", teamId: "4", userId: "15" },
  { id: "14", name: "Backend Refactoring", description: "Refactor backend code for better performance", status: "To Do", teamId: "2", userId: "10" },
  { id: "15", name: "Conduct User Interviews", description: "Interview users to gather feedback", status: "Completed", teamId: "4", userId: "16" },
];

export const sprints = [
  { id: "1", name: "Sprint 1", startDate: "2024-01-01", endDate: "2024-01-14", tasks: ["1", "2", "3", "4", "5"] },
  { id: "2", name: "Sprint 2", startDate: "2024-01-15", endDate: "2024-01-28", tasks: ["6", "7", "8", "9", "10"] },
  { id: "3", name: "Sprint 3", startDate: "2024-01-29", endDate: "2024-02-11", tasks: ["11", "12", "13", "14", "15"] },
  { id: "4", name: "Sprint 4", startDate: "2024-02-12", endDate: "2024-02-25", tasks: ["1", "3", "6", "9", "14"] },
];
