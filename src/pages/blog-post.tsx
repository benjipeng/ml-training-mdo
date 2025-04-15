import { useParams } from "react-router-dom";
import { MdxRenderer } from "@/components/mdx-renderer";
import { getPostBySlug } from "@/utils/blog-utils";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <p className="mt-4 text-muted-foreground">
            Sorry, the post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <p className="mt-4 text-muted-foreground">
            Sorry, the post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const PostContent = post.component;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <article className="prose prose-zinc mx-auto dark:prose-invert max-w-3xl">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <MdxRenderer>
          <PostContent />
        </MdxRenderer>
      </article>
    </div>
  );
}
