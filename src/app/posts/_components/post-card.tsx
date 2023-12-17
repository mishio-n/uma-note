import { formatDate } from "@/lib/date-format";
import { Post, RichEdit } from "@/lib/microcms";
import { flex } from "@/styled-system/patterns";
import { SimpleTag } from "@/ui/simple-tag";
import Link from "next/link";

type Props = {
  post: Post;
};

export const PostCard: React.FC<Props> = ({ post }) => {
  const races = post.body
    .filter(
      (content): content is Exclude<typeof content, RichEdit> =>
        content.fieldId === "yosou",
    )
    .map((content) => content.raceName);

  return (
    <article>
      <header>
        <Link href={`/posts/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
        <p>{formatDate(post.updatedAt, "YYYY/MM/DD")}</p>
      </header>
      <div>
        <ul>
          {races.map((race) => (
            <li key={race}>{race}</li>
          ))}
        </ul>
      </div>
      <footer className={flex({ flexWrap: "wrap" })}>
        {post.categories.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id}>
            <SimpleTag text={category.name} />
          </Link>
        ))}
      </footer>
    </article>
  );
};
