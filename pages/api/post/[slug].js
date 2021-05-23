import getPosts from '../../../src/getPosts'

export default async function handler(req, res) {
  const { slug } = req.query;
  const allPosts = await getPosts();
  const post = allPosts.find(post => post.slug == slug);

  if (post) {
    res.status(200).json(post)
  } else {
    res.status(404).json({
      message: "Error. No such post!"
    })
  }
}