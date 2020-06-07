import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import { isArray } from 'util';

const postsDirectory = path.join(process.cwd(),'posts')

export const getStoredPostsData = ()=>{
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName=>{
    const id = fileName.replace(/\.md$/,'')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult =  matter(fileContents)

    return {
      id,
      title:matterResult.data.title,
      date:matterResult.data.date
    }
  })

  return allPostsData.sort((pre,cur)=>{
    if(pre.date<cur.date){
      return 1
    }else{
      return -1
    }
  })
}

export const getAllPostIds = ()=>{
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
  return {
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  };
});
}

export const getPostData = async(_id:string|string[])=>{
  const id = isArray(_id)?_id[0]:_id
  const fullPath = path.join(postsDirectory,`${id}.md`)
  const fileContents = fs.readFileSync(fullPath,'utf8')
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content)
  const content = processedContent.toString()

return {
  id,
  content,
  title: matterResult.data.title as string,
  date: matterResult.data.date as string,
};
}