import { microcmsClient } from "@/lib/microcms";
import { PostList } from "@/ui/post-list";

export default async function RootPage() {
  const posts = await microcmsClient.getList({ endpoint: "posts" });

  return <PostList posts={posts.contents} />;
}
