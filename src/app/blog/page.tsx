import { readFileSync } from "fs"
import { MDXRemote } from 'next-mdx-remote/rsc'

function getTestPost() {
  const testPost = readFileSync('src/app/blog/test.mdx', 'utf-8');
  return testPost;
}

export default async function Blog() {

  const source = getTestPost();
  return (
    <div className='prose dark:prose-invert '>
      <MDXRemote source={source} />
    </div>
  )
}