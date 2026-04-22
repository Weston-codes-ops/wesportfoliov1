# Portfolio Data Management

This portfolio uses multiple approaches for managing real data instead of mock data. Choose the approach that best fits your needs.

## Current Setup (Static JSON Files)

Your portfolio currently uses static JSON files in the `/data` directory:

- `data/portfolio.json` - Personal info, projects, skills, experience
- `data/blog-posts.json` - Blog posts data

### Updating Data

1. **Edit JSON files directly**: Modify the JSON files in `/data` folder
2. **Use the API endpoints**: Data is also available via API routes
   - `/api/portfolio` - Returns portfolio data
   - `/api/blog` - Returns blog posts (with optional filtering)

## Alternative Approaches

### 1. Content Management System (CMS)

For easier content management without code changes:

**Recommended CMS Options:**
- **Sanity.io** - Headless CMS with real-time collaboration
- **Contentful** - Enterprise-grade headless CMS
- **Strapi** - Open-source headless CMS
- **Notion** - Use Notion as your CMS (free option)

### 2. Database Integration

For dynamic content and user interactions:

**Database Options:**
- **SQLite** - Simple file-based database (good for small projects)
- **PostgreSQL** - Robust relational database
- **MongoDB** - NoSQL document database
- **PlanetScale** - Serverless MySQL platform

### 3. GitHub as CMS

Use GitHub repositories to store your content:

- Store blog posts as Markdown files in a `content` folder
- Use libraries like `next-mdx-remote` to render Markdown
- Automatic deployments when you update content

## Quick Start: Updating Your Data

### Method 1: Edit JSON Files (Current)

1. Open `data/portfolio.json`
2. Update your personal information, projects, skills
3. Open `data/blog-posts.json`
4. Add your real blog posts
5. The site will automatically reflect changes

### Method 2: Use API Endpoints

Replace static imports with API calls:

```javascript
// Instead of:
import portfolioData from '../../data/portfolio.json';

// Use:
const [data, setData] = useState(null);

useEffect(() => {
  fetch('/api/portfolio')
    .then(res => res.json())
    .then(setData);
}, []);
```

### Method 3: Add a CMS

1. Choose a CMS (Sanity recommended for portfolios)
2. Install the CMS SDK
3. Replace JSON imports with CMS queries
4. Content editors can update data without touching code

## Data Structure

### Portfolio Data (`portfolio.json`)

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio...",
    "email": "your.email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "avatar": "/path/to/avatar.jpg"
  },
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "description": "Project description...",
      "tags": ["Tag1", "Tag2"],
      "impact": "Impact metric",
      "github": "https://github.com/...",
      "demo": "https://demo.com",
      "featured": true
    }
  ],
  "skills": ["Skill1", "Skill2"],
  "experience": [
    {
      "id": 1,
      "company": "Company Name",
      "position": "Position Title",
      "period": "2022 - Present",
      "description": "Job description...",
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### Blog Posts Data (`blog-posts.json`)

```json
[
  {
    "id": 1,
    "title": "Blog Post Title",
    "slug": "blog-post-slug",
    "excerpt": "Post excerpt...",
    "content": "Full post content...",
    "category": "Tech",
    "date": "2026-04-15",
    "readTime": "5 min read",
    "featured": true,
    "resourceful": true,
    "tags": ["tag1", "tag2"]
  }
]
```

## Next Steps

1. **Replace placeholder data** with your real information
2. **Add your avatar** to the `public` folder
3. **Expand your projects** section with real work
4. **Write blog posts** and add them to the data
5. **Consider a CMS** if you want non-technical content updates

## Need Help?

- Check the API routes for dynamic data fetching
- Use the JSON files for simple static content
- Consider a CMS for collaborative content management