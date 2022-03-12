export const settings = {
  logo: 'crow',
  defaultListDescription: '<p>This page is about me!!!</p>',
  defaultColumnIcon: 'list-alt',
  footerInfo: 'Marcin 2022 @All rights reserved',
};

export const pageContents = {
  title: 'Marcin Skowronek',
  subtitle: 'Hobby',
};

export const aboutData = {
  title: 'Info',
  image: 'https://images.unsplash.com/photo-1625682734260-40d190fb4648?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  section: 'Gallery',
  name: 'Marcin Skowronek',
  description: 'I am a software developer who is skilled in perseverance, consistency and accuracy in pursuit of goals. I would like to use my skills and experience gained so far in creating and designing software in your company.'
};

const lists = [
  {
    id: 'list-1',
    title: 'I play the guitar',
    description: 'One of my skills is playing the guitar, which I am improving all the time. I use an acoustic guitar with a warm tone and a good grip. Would you like to play? Feel free to join me!',
  },
  {
    id: 'list-2',
    title: 'I walk in the mountains',
    description: 'I love exploring the nature, and seeing mountains especially moves me.',
  },
  {
    id: 'list-3',
    title: 'I stroke cats',
    description: 'I own two Siberian cats that I groom and most importantly stroke every day.',
  },
];

const photos = [
  {
    id: 'photo-1',
    imageSrc: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?cs=srgb&dl=pexels-negative-space-160107.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=840',
    alterText: 'laptop with code',
  },
  {
    id: 'photo-2',
    imageSrc: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?cs=srgb&dl=pexels-cottonbro-6804581.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=840',
    alterText: 'computer on table',
  },
  {
    id: 'photo-3',
    imageSrc: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?cs=srgb&dl=pexels-cottonbro-5474295.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=840',
    alterText: 'hands on laptop',
  }
]

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  photos: [...photos],
};

export default initialStoreData;
