import { Post } from "@/lib/microcms";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import Link from "next/link";
import { SimpleTag } from "./simple-tag";

type PostListProps = {
  posts: Post[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={flex({ gap: 8, direction: "column" })}>
      {posts.map((post) => (
        <div key={post.id} className={flex({ direction: "column", gap: 1 })}>
          <Link href={`/posts/${post.id}`}>
            <h2 className={css({ fontSize: "lg" })}>{post.title}</h2>
          </Link>
          <div className={flex({ flexWrap: "wrap" })}>
            {post.categories.map((category) => (
              <Link href={`/categories/${category.id}`} key={category.id}>
                <SimpleTag text={category.name} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
