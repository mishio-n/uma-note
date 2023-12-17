import { Post, microcmsClient } from "@/lib/microcms";

type Props = {
  params: {
    postId: string;
  };
};

export const runtime = "edge";

export async function generateStaticParams() {
  const posts = await microcmsClient.getList<Post>({ endpoint: "posts" });
  const params = posts.contents.map((post) => ({ postId: post.id }));
  return params;
}

export default async function PostPage({ params }: Props) {
  const post = await microcmsClient.getListDetail<Post>({
    endpoint: "posts",
    contentId: params.postId,
  });

  return (
    <div>
      <span>{post.title}</span>
      <span>{post.categories[0].name}</span>
    </div>
  );
}
