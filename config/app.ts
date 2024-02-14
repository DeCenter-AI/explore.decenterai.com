import { Metadata } from 'next'
import Favicon from '@public/favicon.ico'
import Favicon16x16 from '@public/favicon-16x16.png'
import Favicon32x32 from '@public/favicon-32x32.png'
import SafariPinnedTab from '@public/meta/safari-pinned-tab.svg'
import AppleTouchIcon from '@public/meta/apple-touch-icon.png'

export const AppName = 'Decenter AI'
const AppDescription = `
DecenterAI: An Explorer For Top Latest AI Tools
`.trim()

export const AppMetaData: Metadata = {
  applicationName: AppName,
  authors: [{ name: 'DecenterAi', url: 'https://decenterai.com' }],
  keywords: ['DecenterAI', 'AI Infra', 'AI Tools'],
  title: AppName,
  description: AppDescription,
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'icon', sizes: '16x16', url: Favicon16x16.src },
    { rel: 'icon', sizes: '32x32', url: Favicon32x32.src },
    { rel: 'mask-icon', url: SafariPinnedTab.src, color: '#5bbad5' },
    { rel: 'apple-touch-icon', url: AppleTouchIcon.src },
  ],
  manifest: '/meta/site.webmanifest',
  themeColor: '#ffffff',
  other: {
    'msapplication-TileColor': '#da532c',
  },
}
