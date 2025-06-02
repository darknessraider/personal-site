import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

type Post = {
  name: string;
  path: string;
};

const ProjectPosts: React.FC = () => {
  const { project } = useParams<{ project: string }>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!project) return;

    const allModules = import.meta.glob('../../posts/**/*.md');


    const loadPosts = async () => {
      const filteredPosts = Object.entries(allModules)
        .filter(([path]) => path.includes(`/posts/${project}/`))
        .map(([path]) => {
          const parts = path.split('/');
          const name = parts[parts.length - 1].replace('.md', '');
          return { name, path }
        });
      setPosts(filteredPosts);
    };

    loadPosts();
  }, [project]);

  return (
    <div>
      <h1>Posts in {project?.replace(/-/g, ' ')}</h1>
      <ul>
        {posts.map(post => (
          <li key={post.name}>
            <Link to={`/blog/${project}/${post.name}`}>{post.name.replace(/-/g, ' ')}</Link>
          </li>
        ))}
      </ul>
      <Link to="/blog">← Back to projects</Link>
    </div>
  );
};

export default ProjectPosts;
