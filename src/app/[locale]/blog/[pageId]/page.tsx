import { getBlogPage } from "@/services/blog";
import { PostCard } from "@/components/blocks/post-card";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params;
  const pageData = await getBlogPage(pageId);

  if (!pageData || Array.isArray(pageData)) {
    return generatePageMetadata({
      title: "Page Not Found",
    });
  }

  return generatePageMetadata({
    title: pageData.title,
    description: `Explore our latest articles and insights about ${pageData.title}.`,
    url: `/blog/${pageData.slug}`,
  });
}

export default async function BlogPagePage({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params;
  const pageData = await getBlogPage(pageId);

  // Check if pageData exists and is not an empty array (error case in service)
  if (!pageData || Array.isArray(pageData)) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{pageData.title}</h1>
      </div>

      {pageData.posts && pageData.posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageData.posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No posts found in this category.</p>
        </div>
      )}
    </div>
  );
}
