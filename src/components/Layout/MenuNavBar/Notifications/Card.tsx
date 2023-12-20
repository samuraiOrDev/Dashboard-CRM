import Image from 'next/image'
import React from 'react'

interface Props {
  time: string
  messageSubject: string
  message: string
  image: string
}
export const Card = ({ time, messageSubject, message, image }: Props) => {
  return (
    <li className="relative mb-2">
      <div className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors">
        <div className="flex py-1">
          <div className="my-auto">
            <Image
              src={image}
              className="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"
              width={36}
              height={36}
              alt={`${messageSubject}-image`}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h6 className="mb-1 font-normal leading-normal text-sm"><span className="font-semibold">{messageSubject}</span>{message}</h6>
            <p className="mb-0 leading-tight text-xs text-slate-400">
              <i className="mr-1 fa fa-clock"></i>
              {time}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
