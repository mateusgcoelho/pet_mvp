import Coleira from "../../assets/tutorial/coleira.png";
import Presente from "../../assets/tutorial/presente.png";
import Peixe from "../../assets/tutorial/peixe.png";


export interface TutorialDataProps {
    photo: any;
    title: string;
    instruction: string;
}

export const tutorialData: TutorialDataProps[] = [
    {
      photo: Coleira,
      title: "Bem-vindo",
      instruction: "Whata fuki is this men aditionla tes more info hiri",
    },
    {
      photo: Peixe,
      title: "Bateu a fome?",
      instruction: "Whata fuki is this men aditionla more info hiri Whata fuki more info hiri",
    },
    {
      photo: Presente,
      title: "Ultimato meu mn",
      instruction: "Whata fuki is this men aditionla tes more info hiri",
    },
];