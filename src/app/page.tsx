import { microcmsClient } from '@/lib/microcms';

export default async function RootPage() {
  const posts = await microcmsClient.getList({ endpoint: 'posts' });

  return (
    <div>
      <p>{posts.totalCount}件</p>
      {posts.contents.map((post) => (
        <div key={post.id}>
          <span>{post.title}</span>
          {post.body.map((b, i) =>
            b.fieldId === 'richEditor' ? (
              <p key={`${b.fieldId}-${i}`}>{b.content}</p>
            ) : (
              <div key={`${b.fieldId}-${i}`}>
                <span>{b.raceName}</span>
                <p>{b.summary}</p>
                <p>{b.opinion}</p>
              </div>
            ),
          )}
        </div>
      ))}
    </div>
  );
}
