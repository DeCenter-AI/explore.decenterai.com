import React from 'react'
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
export default function page() {
    return (
        <div className='w-[90%] md:w-[80%] flex flex-col gap-8 mx-auto my-4'>
            <div className='flex items-center gap-7'>
                <div className='flex gap-2 cursor-pointer items-center'>
                    <IoIosArrowBack />
                    <span className='text-primary_7'>Back</span>
                </div>
                <div>
                    <span className='text-primary_7'>Explorer / <span className='font-bold text-primary_6'>ChatGPT</span></span>
                </div>

            </div>
            <div className='border border-primary_11 p-5 flex items-center justify-between rounded-2xl'>
                <div>
                    <div className='md:flex items-center gap-2 '>
                        <h1 className='font-logirentBold text-2xl'>ChatGPT</h1>
                        <span className='p-1 border border-primary_11 text-xs rounded-full'>AI writing and assistant</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-primary_8'>

                    <GrFavorite />
                    <span className='text-sm'>127</span>
                </div>


            </div>
            <div className='md:flex gap-5 '>
                <div className='md:w-[15%]  flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <Image alt='' priority width={156} height={144} src='/Component 18.png' />
                    </div>
                    <div className='flex items-center py-2 text-center justify-center bg-primary_11 rounded-lg'>
                        <span>Visit Website</span>
                        <Image src="/arrow_icon.png" alt='' className='pt-1' width={24} height={24} />
                    </div>


                </div>
                <div className='md:w-[85%] border flex mt-4 md:mt-0 flex-col gap-7 rounded-md border-primary_11 py-5 px-4'>
                    <div>
                        <h2 className='mb-4 '>About</h2>
                        <span className='text-primary_7 text-sm'>
                            ChatGPT (Chat Generative Pre-trained Transformer) is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language. Successive prompts and replies, known as prompt engineering, are considered at each conversation stage as a context.[2]
                            By January 2023, it had become what was then the fastest-growing consumer software application in history, gaining over 100 million users and contributing to the growth of OpenAI's valuation to $29 billion.[3][4] ChatGPT's release spurred the development of competing products, including Bard, Ernie Bot, LLaMA, Claude, and Grok.[5] Microsoft launched its Copilot based on OpenAI's GPT-4. Some observers raised concern about the potential of ChatGPT and similar programs to displace or atrophy human intelligence, enable plagiarism, or fuel misinformation.
                        </span>
                    </div>
                    <div>
                        <h2 className='mb-4 '>How to use</h2>
                        <div className='flex flex-col gap-4'>
                            <ol className='list-decimal list-inside flex flex-col gap-6   '>
                                <li className='text-primary_6 '>Visit the OpenAI Playground:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>Go to the OpenAI Playground.</li>
                                    </ul>
                                </li>
                                <li className='text-primary_6 '>Enter a Prompt:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>In the input field, enter a prompt or a question. Keep it clear and straightforward.</li>
                                    </ul>
                                </li>
                                <li className='text-primary_6 '>Run the Model:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>Click on the "Run" button to generate a response from ChatGPT.</li>
                                    </ul>
                                </li>
                                <li className='text-primary_6 '>Review and Edit:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>Read the response and, if needed, edit the prompt or ask a follow-up question.</li>
                                    </ul>
                                </li>
                            </ol>


                        </div>

                    </div>

                    <div>
                        <h2 className='mb-4 '>Prompts to use</h2>
                        <div className='flex flex-col gap-4'>
                            <ol className='list-decimal list-inside flex flex-col gap-6 '>
                                <li className='text-primary_6 '>Creative Writing:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>Write a short story about an unexpected friendship between a human and an alien.</li>
                                    </ul>
                                </li>
                                <li className='text-primary_6 '>Reflective Writing:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>Reflect on a moment in your life when you faced a significant decision and its impact on your journey.</li>
                                    </ul>
                                </li>
                                <li className='text-primary_6 '>Problem-Solving:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>Propose innovative solutions for reducing plastic waste in urban environments.</li>
                                    </ul>
                                </li>
                                <li className='text-primary_6 '>Personal Development:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>Identify three skills you would like to develop in the next six months and outline a plan to achieve them.</li>
                                    </ul>
                                </li>
                                <li className='text-primary_6 '>Inspirational:
                                    <ul className='list-disc'>
                                        <li className='text-xs ml-6 text-primary_7'>Share a quote that has inspired you and explain how it has influenced your perspective on life.</li>
                                    </ul>
                                </li>
                            </ol>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
