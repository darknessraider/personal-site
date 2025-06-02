import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const PostPage: React.FC = () => {
  const { project, post } = useParams<{ project: string; post: string }>();
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (!project || !post) return;

    // Import the markdown content as raw text
    const loadPost = async () => {
      try {
        const postModule = await import(`../../posts/${project}/${post}.md?raw`);
        setContent(postModule.default);
      } catch (error) {
        setContent('# Post not found');
      }
    };

    loadPost();
  }, [project, post]);

  return (
    <div>
      <Link to={`/blog/${project}`}>← Back to posts</Link>
      <article>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default PostPage;
