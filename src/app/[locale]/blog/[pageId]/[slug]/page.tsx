import { getBlogPost } from "@/services/blog";
import { MarkdownRenderer } from "@/components/blocks/markdown-renderer";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateArticleMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ pageId: string; slug: string }> }) {
  const { pageId, slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return generateArticleMetadata({
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      url: `/blog/${pageId}/${slug}`,
      publishedTime: new Date().toISOString(),
    });
  }

  return generateArticleMetadata({
    title: post.title,
    description: post.excerpt || post.title,
    url: `/blog/${pageId}/${post.slug}`,
    image: post.thumbnail?.url,
    publishedTime: post.publishedAt,
    category: post.page?.title,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ pageId: string; slug: string }> }) {
  const { pageId, slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto py-12 px-4 sm:px-0 lg:px-0 max-w-7xl">
      <div className="mb-8">
        <Button size={"sm"} variant="ghost" asChild className="mb-4">
          <Link href={`/blog/${pageId}`}>
            <ArrowLeft />
            Back to {post.page?.title || "Blog"}
          </Link>
        </Button>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-foreground">{post.title}</h1>

        {post.publishedAt && <p className="text-muted-foreground text-sm mb-6">Published on {format(new Date(post.publishedAt), "MMMM d, yyyy")}</p>}

        {post.thumbnail?.url && (
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10 shadow-md">
            <Image src={post.thumbnail.url} alt={post.title} fill className="object-cover" priority />
          </div>
        )}
      </div>

      <div>
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
}
