import React from 'react'
import { IconType } from 'react-icons'
import { CiHeart, CiGrid41, CiMoneyBill, CiPower, CiFaceSmile } from 'react-icons/ci'
import { IoCodeSlashOutline, IoColorPaletteOutline, IoGiftOutline, IoImage, IoImageOutline, IoMusicalNoteOutline } from 'react-icons/io5'
import { TiPencil, TiGroupOutline } from 'react-icons/ti'
import { PiBrain, PiClipboard, PiFirstAid, PiFirstAidLight, PiFolderNotch, PiGameController, PiGuitar, PiHeartbeatLight, PiNewspaperClipping, PiNewspaperLight, PiPenNibStraight, PiSealWarningDuotone, PiShirtFolded, PiStudentLight, PiVideoCameraLight, PiWarehouseDuotone } from "react-icons/pi";
import { BsBug, BsFillBrushFill } from 'react-icons/bs'
import { CgGym, CgProfile } from "react-icons/cg";
import { IoCameraOutline } from "react-icons/io5";
import { AiOutlineExperiment, AiOutlineMail } from "react-icons/ai";
import { LiaGavelSolid } from "react-icons/lia";
import { TbPrompt } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa6";


export interface Tab {
  id: number
  icon: React.ReactNode

  value: string
}

export const tabsData: Tab[] = [
  // {
  //   id: 1,
  //   icon: <CiHeart size={20} />,
  //   value: 'favorites',
  // },
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
  {
    id: 9,
    icon: <PiBrain size={20} />,
    value: 'Memory',
  },
  {
    id: 10,
    icon: <CgProfile size={20} />,
    value: 'Profile Photos',
  },
  {
    id: 11,
    icon: <IoCameraOutline size={20} />,
    value: 'Image Editing',
  }, {
    id: 12,
    icon: <IoImageOutline size={20} />,
    value: 'Image Generator',
  },
  {
    id: 13,
    icon: <PiVideoCameraLight size={20} />,
    value: 'Personalize Videos',
  },
  {
    id: 14,
    icon: <PiPenNibStraight size={20} />,
    value: 'General Writing',
  },
  {
    id: 15,
    icon: <PiNewspaperClipping size={20} />,
    value: 'Paraphrasing',
  },
  {
    id: 16,
    icon: <PiFolderNotch size={20} />,
    value: 'Resources',
  },
  {
    id: 17,
    icon: <PiNewspaperLight size={20} />,
    value: 'Research',
  },
  {
    id: 18,
    icon: <PiClipboard size={20} />,
    value: 'Human Resources',
  },
  {
    id: 19,
    icon: <AiOutlineExperiment size={20} />,
    value: 'Experiments',
  },
  {
    id: 20,
    icon: <PiShirtFolded size={20} />,
    value: 'Fashion',
  },
  {
    id: 21,
    icon: <CiFaceSmile size={20} />,
    value: 'Fun Tools',
  },
  {
    id: 22,
    icon: <PiGameController size={20} />,
    value: 'Gaming',
  },
  {
    id: 23,
    icon: <PiGuitar size={20} />,
    value: 'Music',
  },
  {
    id: 24,
    icon: <IoGiftOutline size={20} />,
    value: 'Gift Ideas',
  },
  {
    id: 25,
    icon: <LiaGavelSolid size={20} />,
    value: 'Legal Assistant',
  },
  {
    id: 26,
    icon: <AiOutlineMail size={20} />,
    value: 'Email Assistant',
  },
  {
    id: 27,
    icon: <PiStudentLight size={20} />,
    value: 'Education Assistant',
  },
  {
    id: 28,
    icon: <IoCodeSlashOutline size={20} />,
    value: 'Coding Assistant',
  },
  {
    id: 29,
    icon: <PiHeartbeatLight size={20} />,
    value: 'Life Assistant',
  },
  {
    id: 30,
    icon: <IoColorPaletteOutline size={20} />,
    value: 'Design Assistant',
  },
  {
    id: 31,
    icon: <TbPrompt size={20} />,
    value: 'Prompts',
  },
  {
    id: 32,
    icon: <RiCustomerService2Line size={20} />,
    value: 'Customer Support',
  },
  {
    id: 33,
    icon: <PiFirstAidLight size={20} />,
    value: 'Healthcare',
  },
  {
    id: 34,
    icon: <CgGym size={20} />,
    value: 'Productivity',
  },
  {
    id: 35,
    icon: <PiWarehouseDuotone size={20} />,
    value: 'Real Estate',
  },
  {
    id: 36,
    icon: <FaNetworkWired size={20} />,
    value: 'Infrastructure',
  },
  {
    id: 37,
    icon: <TiGroupOutline size={20} />,
    value: 'Dao',
  },
]
