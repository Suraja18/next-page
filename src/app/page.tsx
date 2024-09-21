import prisma from "@/lib/prisma";
import Post from "../components/Post"
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h1 className="font-bold mt-8 text-5xl text-center flex items-center justify-center">Posts</h1>
      <Link href="/post/create-post">
        <button className="float-right mt-6 mr-12 text-lg text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">
          Add Post
        </button>
      </Link>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              posts.map((post) => {
                return (
                  <>
                    <Post
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      content={post.content}
                      authorName={post.author?.name || "Unknown Author"}
                    />
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}
