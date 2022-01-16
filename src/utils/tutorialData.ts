import Coleira from "../../assets/tutorial/coleira.png";
import Presente from "../../assets/tutorial/presente.png";
import Peixe from "../../assets/tutorial/peixe.png";


export interface TutorialDataProps {
    id: string;
    photo: any;
    title: string;
    instruction: string;
}

export const TutorialData: TutorialDataProps[] = [
    {
      id: "coleira-item",
      photo: Coleira,
      title: "Bem-vindo",
      instruction: "Whata fuki is this men aditionla tes more info hiri",
    },
    {
      id: "peixe-item",
      photo: Peixe,
      title: "Bateu a fome?",
      instruction: "Whata fuki is this men aditionla more info hiri Whata fuki more info hiri",
    },
    {
      id: "presente-item",
      photo: Presente,
      title: "Ultimato meu mn",
      instruction: "Whata fuki is this men aditionla tes more info hiri",
    },
];