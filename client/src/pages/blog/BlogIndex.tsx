import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogIndex: React.FC = () => {
  const [projects, setProjects] = useState<string[]>([]);

  useEffect(() => {
    // Grab all posts using import.meta.glob (raw content to get paths)
    const modules = import.meta.glob('../../posts/**/*.md');

    const projectSet = new Set<string>();

    console.log(modules);

    for (const path in modules) {
      // path example: ../posts/project-a/intro.md
      const parts = path.split('/');
      const project = parts[parts.length - 2];
      projectSet.add(project);
    }

    setProjects(Array.from(projectSet));
  }, []);

  return (
    <div>
      <h1>Blog Topics</h1>
      <ul>
        {projects.map(project => (
          <li key={project}>
            <Link to={`/blog/${project}`}>{project.replace(/-/g, ' ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndex;
