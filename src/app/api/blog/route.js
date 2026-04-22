import { NextResponse } from 'next/server';
import blogPostsData from '../../../../data/blog-posts.json';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');

    let filteredPosts = blogPostsData;

    if (category && category !== 'All') {
      filteredPosts = filteredPosts.filter(post => post.category === category);
    }

    if (featured === 'true') {
      filteredPosts = filteredPosts.filter(post => post.featured);
    }

    return NextResponse.json(filteredPosts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}