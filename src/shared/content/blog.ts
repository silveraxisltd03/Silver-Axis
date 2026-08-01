export interface BlogPost {
  slug: string;
  title: string;
}

// Placeholder posts for the homepage insights section — replace once the blog ships.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'custom-web-application-development',
    title: 'Custom Web Application Development: What You Need to Know',
  },
  {
    slug: 'mobile-design-trends',
    title: "Trends in Mobile Design: What's Next for Your Business?",
  },
  {
    slug: 'generative-ai-business-operations',
    title: 'How Generative AI Is Transforming Business Operations',
  },
  {
    slug: 'cloud-computing-small-business',
    title: 'How Cloud Computing Can Transform Small Businesses',
  },
];
