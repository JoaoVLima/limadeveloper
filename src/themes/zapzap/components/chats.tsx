import React from 'react';
import postsData from '../../../data/posts.json';

export function Chats() {
    return (
        <>
            <main className={'mt-12 flex flex-col gap-1'}>

                {postsData.posts.map((post) => (
                    <article className={'w-full px-4 py-2 h-16 flex flex-row gap-3 overflow-hidden truncate hover:bg-neutral-100 dark:hover:bg-neutral-900'}>
                        <img className={'basis-1/12 rounded-full aspect-square'} src={'https://ui-avatars.com/api/?name=br&background=random'} alt={''}/>
                        <section className={'basis-10/12 flex flex-col overflow-hidden truncate'}>
                            <h4 className={'text-inherit'}>GitHub</h4>
                            <p className={'text-neutral-500 truncate'}>Projeto atualizado</p>
                        </section>
                        <time className={'basis-1/12 text-neutral-500'} dateTime="2025-01-28 19:00">Ontem</time>
                    </article>
                ))}

            </main>
        </>
    );
}
