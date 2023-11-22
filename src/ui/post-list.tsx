import { Post } from "@/lib/microcms";
import Link from "next/link";

type PostListProps = {
	posts: Post[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<Link href={`/posts/${post.id}`}>
						<span>{post.title}</span>
					</Link>
					<span>{post.categories[0].name}</span>
				</div>
			))}
		</div>
	);
};
