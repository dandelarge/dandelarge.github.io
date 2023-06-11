import { readFile } from "fs/promises"
import { join } from "path"
import Test from './test.mdx'

async function getTestPost() {
  const testPost = await readFile(join(__dirname, 'test.mdx'), 'utf-8');
  return testPost;
}

export default function Blog() {
  return (
    <div className='prose dark:prose-invert '>
      <Test />
    </div>
  )
}