import { getBlogPosts } from "@/services/blog";
import { PostCard } from "@/components/blocks/post-card";
import { generatePageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  return generatePageMetadata({
    title: t("title"),
    description: t("description"),
    url: "/blog",
  });
}

export default async function MainBlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = await getBlogPosts();
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{t("title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("description")}</p>
      </div>

      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">{t("noPosts")}</p>
        </div>
      )}
    </div>
  );
}
