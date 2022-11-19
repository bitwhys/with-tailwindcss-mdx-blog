import fs from "fs"
import {join} from "path";

const postsDirectory = join(process.cwd(), '_posts')

export const getAllPostTitles = async () => {
//  TODO: read all files from /_posts directory
  const PATH_TO_POSTS = join(process.cwd(),'_posts');
return fs.readdirSync(PATH_TO_POSTS)

}
