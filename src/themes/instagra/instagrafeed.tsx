import React from 'react';
import postsData from '../../data/posts.json';

export function InstagraFeed() {
    return (
        <div className='max-w-2xl mx-auto p-4 space-y-6'>
            {postsData.posts.map((post) => (
                <div key={post.id} className='bg-white border border-gray-200 rounded-lg shadow-sm'>
                    <div className='p-4 flex items-center space-x-3'>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5'>
                            <div className='w-full h-full rounded-full bg-white p-0.5'>
                                <img
                                    src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                                    alt={post.author}
                                    className='w-full h-full rounded-full'
                                />
                            </div>
                        </div>
                        <span className='font-semibold'>{post.author}</span>
                    </div>
                    
                    <img src={post.image} alt='Post content' className='w-full aspect-square object-cover' />
                    
                    <div className='p-4 space-y-3'>
                        <div className='flex space-x-4'>
                            <button className='hover:text-gray-600'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                                </svg>
                            </button>
                            <button className='hover:text-gray-600'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <span className='font-semibold'>{post.likes} likes</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>{post.author}</span>
                            <span>{post.content}</span>
                        </div>
                        <div className='text-gray-500 text-sm'>
                            {new Date(post.timestamp).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
