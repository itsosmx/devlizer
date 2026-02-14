import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getFormatter, getTranslations } from "next-intl/server";

interface PostCardProps {
  post: {
    title: string;
    excerpt: string;
    thumbnail?: {
      url: string;
    };
    publishedAt: string;
    slug: string;
    page: {
      title: string;
      slug: string;
    };
  };
  className?: string;
}

export async function PostCard({ post, className }: PostCardProps) {
  const t = await getTranslations("BlogPage");
  const format = await getFormatter();

  return (
    <Card className={cn("h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 p-0", className)}>
      {post.thumbnail && (
        <div className="relative w-full h-48 sm:h-56">
          <Image src={post.thumbnail.url} alt={post.title} fill className="object-cover" />
        </div>
      )}
      <CardHeader>
        <div className="text-sm text-muted-foreground mb-2">
          {format.dateTime(new Date(post.publishedAt), {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
          <Link href={`/blog/${post.page.slug}/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/blog/${post.page.slug}/${post.slug}`}>{t("readMore")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
