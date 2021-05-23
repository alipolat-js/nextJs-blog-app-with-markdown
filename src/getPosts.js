const getPosts = async () =>{

  return [
    {
      postID: "99612",
      slug: "all-text-styles-with-markdown",
      title: "All text styles with markdown",
      date: "02.08.2021",
      imaging: 8561,
      metaKeys: "text styles, markdown, all text styles with markdown",
      description: "All text styles with markdown",
      content: require(`./posts/99612.md`).default,
    },
    {
      postID: "75315",
      slug: "lorem-ipsum",
      title: "Lorem ipsum",
      date: "02.08.2021",
      imaging: 4901,
      metaKeys: "lorem, ipsum, dolor, consectetur",
      description: "Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.",
      content: require(`./posts/75315.md`).default,
    },
    {
      postID: "45327",
      slug: "lorem-ipsum-dolor-sit",
      title: "Lorem ipsum dolor sit",
      date: "02.08.2021",
      imaging: 3056,
      metaKeys: "lorem, ipsum, dolor, consectetur",
      description: "Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.",
      content: require(`./posts/45327.md`).default,
    },
    {
      postID: "86514",
      slug: "lorem",
      title: "Lorem",
      date: "02.08.2021",
      imaging: 6041,
      metaKeys: "lorem, ipsum, dolor, consectetur",
      description: "Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.",
      content: require(`./posts/86514.md`).default,
    },
    {
      postID: "10394",
      slug: "lorem-ipsum-dolor-sit-amet",
      title: "Lorem ipsum dolor sit amet",
      date: "02.08.2021",
      imaging: 11014,
      metaKeys: "lorem, ipsum, dolor, consectetur",
      description: "Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.Lorem impsum dolor sit.",
      content: require(`./posts/10394.md`).default,
    },
  ]
}

export default getPosts 