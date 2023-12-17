import { Post, microcmsClient } from "@/lib/microcms";
import { css } from "@/styled-system/css";

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
      <div className={css({ py: 2 })}>
        {post.body.map((content, i) =>
          content.fieldId === "yosou" ? (
            <div key={`${content.fieldId}-${i}`}>
              <h2>{content.raceName}</h2>
              <p
                className={css({
                  whiteSpace: "pre-wrap",
                })}
              >
                {content.summary}
              </p>
              <p
                className={css({
                  whiteSpace: "pre-wrap",
                })}
              >
                {content.opinion}
              </p>
            </div>
          ) : (
            <div key={`${content.fieldId}-${i}`}>
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
