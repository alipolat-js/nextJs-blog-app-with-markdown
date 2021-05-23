import getPosts from '../../src/getPosts'

export default async (req, res) => {
  const allPosts = await getPosts();
  res.status(200).json(allPosts)
}