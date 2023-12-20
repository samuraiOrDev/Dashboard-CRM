
import React, { useState } from 'react'
import { Card } from './Card'

export const Notifications = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const handleNotifications = () => setShowNotifications(prevState => !prevState)

  const arraysNotifications = [
    {
      time: '13 minutes ago',
      messageSubject: 'New message',
      message: ' from Laur',
      image: '/img/team-2.jpg'
    },
    {
      time: '1 day',
      messageSubject: 'New album',
      message: ' by Travis Scott',
      image: '/img/small-logos/logo-spotify.svg'
    },
    {
      time: '3 days',
      messageSubject: 'New message',
      message: ' from Jenna',
      image: '/img/team-3.jpg'
    },
    {
      time: '1 week',
      messageSubject: 'New message',
      message: ' from Laur',
      image: '/img/team-2.jpg'
    }
  ]
  return (
    <li className="relative flex items-center pr-2">
      <button className="block p-0 transition-all text-sm ease-nav-brand text-slate-500" aria-expanded="false">
        <i className="cursor-pointer fa fa-bell" onClick={handleNotifications}></i>
      </button>
      {
        showNotifications && (
          <ul className="text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-2 before:left-auto before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer before:-top-5 transform-dropdown-show">
            {
              arraysNotifications.map(({ time, messageSubject, message, image }, index) => (
                <Card
                  key={index}
                  time={time}
                  messageSubject={messageSubject}
                  message={message}
                  image={image} />
              ))
            }
          </ul>)
      }
    </li>
  )
}
