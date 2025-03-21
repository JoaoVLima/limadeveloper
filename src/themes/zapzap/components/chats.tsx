import React from 'react';
import postsData from '../../../data/posts.json';

export function Chats() {
    return (
        <>
            <main className={'mt-12 flex flex-col gap-1'}>
                <article className={'w-full px-4 py-2 h-16 flex flex-row gap-3 overflow-hidden truncate'}>
                    <img className={'basis-1/12 rounded-full aspect-square'} src={'https://ui-avatars.com/api/?name=br&background=random'} alt={''}/>
                    <section className={'basis-10/12 flex flex-col overflow-hidden truncate'}>
                        <h4 className={'text-inherit'}>GitHub</h4>
                        <p className={'text-neutral-500 truncate'}>Projeto atualizado</p>
                    </section>
                    <time className={'basis-1/12 text-neutral-500'} dateTime="2025-01-28 19:00">Ontem</time>
                </article>

                {/*<div className='max-w-2xl mx-auto p-4 space-y-4 bg-[#efeae2]'>*/}
                {/*    {postsData.posts.map((post) => (*/}
                {/*        <div key={post.id} className='flex'>*/}
                {/*            <div className='rounded-lg bg-white p-3 shadow-sm max-w-[80%] space-y-2'>*/}
                {/*                <div className='flex items-center space-x-2'>*/}
                {/*                    <span className='font-semibold text-[#075e54]'>{post.author}</span>*/}
                {/*                </div>*/}

                {/*                {post.image && (*/}
                {/*                    <img*/}
                {/*                        src={post.image}*/}
                {/*                        alt='Message content'*/}
                {/*                        className='w-full rounded-lg'*/}
                {/*                    />*/}
                {/*                )}*/}

                {/*                <div className='space-y-1'>*/}
                {/*                    <p className='text-gray-800'>{post.content}</p>*/}
                {/*                    <div className='flex items-center justify-end text-xs text-gray-500 space-x-2'>*/}
                {/*                        <time>{new Date(post.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</time>*/}
                {/*                        <svg className='w-4 h-4 text-[#53bdeb]' fill='currentColor' viewBox='0 0 16 15'>*/}
                {/*                            <path*/}
                {/*                                d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z'/>*/}
                {/*                        </svg>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </main>
        </>
    );
}
