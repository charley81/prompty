'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

export default function PromptCard(
  post,
  handleTagClick,
  handleEdit,
  handleDelete
) {
  const [copied, setCopied] = useState('')

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <Image
          src={post.post.creator.image}
          alt="user image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-gray-900">
            {post.post.creator.username}
          </h3>
          <p className="font-inter text-sm text-gray-500">
            {post.post.creator.email}
          </p>
        </div>
        <div className="copy_btn" onClick={() => {}}>
          <Image
            src={
              copied === post.post.prompt
                ? '/assets/icons/tick.svg'
                : 'assets/icons/copy.svg'
            }
            alt="copy button"
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post.post.prompt}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.post.tag)}
      >
        {post.post.tag}
      </p>
    </div>
  )
}
