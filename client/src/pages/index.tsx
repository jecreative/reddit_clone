import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Axios from 'axios'
import useSWR from 'swr'

import { Post } from '../types'
import PostCard from '../components/PostCard'

export default function Home() {
  const { data: posts } = useSWR('/posts')

  return (
    <div className='pt-12'>
      <Head>
        <title>readit: the front page of the internet</title>
      </Head>
      <div className='container flex pt-4'>
        {/* Posts feed */}
        <div className='w-160'>
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        {/* Sidebar */}
      </div>
    </div>
  )
}
