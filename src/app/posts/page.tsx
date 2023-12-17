import { Post, microcmsClient } from "@/lib/microcms";
import { PostList } from "@/ui/post-list";

export default async function PostsPage() {
  const posts = await microcmsClient.getList<Post>({ endpoint: "posts" });

  return <PostList posts={posts.contents} />;
}
