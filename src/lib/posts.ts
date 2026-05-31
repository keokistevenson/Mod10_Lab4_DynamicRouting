export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "This is the content for my first blog post.",
  },
  {
    id: 2,
    slug: "learning-react-router",
    title: "Learning React Router",
    content: "React Router lets us create pages based on the URL.",
  },
  {
    id: 3,
    slug: "protected-routes",
    title: "Protected Routes",
    content: "Protected routes prevent users from seeing pages unless they are logged in.",
  },
];