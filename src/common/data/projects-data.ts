import town_01 from '../../assets/image/town/town_01.jpg'
import town_02 from '../../assets/image/town/town_02.jpg'
import town_03 from '../../assets/image/town/town_03.jpg'


export type Project = {
  id: number;
  title: string;
  photos: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Orange Street",
    photos: [
      town_01,
      town_02,
      town_03,  
    ],
  },
  {
    id: 2,
    title: "Main Street",
    photos: [
      town_02,
      town_03,
      town_01
    ],
  },
  {
    id: 3,
    title: "Sconsett",
    photos: [
      town_03,
      town_01,
      town_02
    ],
  },
  {
    id: 4,
    title: "Pocomo",
    photos: [
      town_01,
      town_02,
      town_03
    ],
  },
   {
    id: 5,
    title: "Shimmo",
    photos: [
      town_01,
      town_02,
      town_03
    ],
  },
   {
    id: 6,
    title: "India Street",
    photos: [
      town_01,
      town_02,
      town_03
    ],
  },
   {
    id: 7,
    title: "Tom Nevers",
    photos: [
      town_01,
      town_02,
      town_03
    ],
  },
   {
    id: 8,
    title: "Centre Street",
    photos: [
      town_01,
      town_02,
      town_03
    ],
  },
];