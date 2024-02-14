import React from 'react'
import { IconType } from 'react-icons'
import { CiHeart, CiGrid41, CiMoneyBill, CiPower } from 'react-icons/ci'
import { IoMusicalNoteOutline } from 'react-icons/io5'
import { TiPencil } from 'react-icons/ti'
import { BsBug, BsFillBrushFill } from 'react-icons/bs'
export interface Tab {
  id: number
  icon: React.ReactNode
 
  value: string
}

export const tabsData: Tab[] = [
  {
    id: 1,
    icon: <CiHeart size={20} />,
    value: 'favorites',
  },
  {
    id: 2,
    icon: <CiGrid41 size={20} />,
    value: 'All items',
  },
  {
    id: 3,
    icon: <IoMusicalNoteOutline size={20} />,
    value: 'Audio',
  },
  {
    id: 4,
    icon: <TiPencil size={20} />,
    value: 'Copywriting',
  },
  {
    id: 5,
    icon: <BsBug size={20} />,
    value: 'Developer Tools',
  },
  {
    id: 6,
    icon: <BsFillBrushFill size={20} />,
    value: 'Logo Generator ',
  },
  {
    id: 7,
    icon: <CiMoneyBill size={20} />,
    value: 'Sales',
  },
  {
    id: 8,
    icon: <CiPower size={20} />,
    value: 'No-Code',
  },
]
