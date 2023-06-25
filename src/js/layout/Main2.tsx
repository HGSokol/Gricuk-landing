import { useContext } from 'react';
import { Language } from '../App';
import WorkCard from '../components/WorkCard';
import { changeLanguage } from '../util/changeLanguage';
import IMG1 from '../../assets/man-installing-laminated.jpg';
import IMG2 from '../../assets/using-paintbrush.jpg';
import IMG3 from '../../assets/service-maintenance-worker-repairing.jpg';
import IMG4 from '../../assets/male-plumber-hands-fixing-metal-sink-pipe.jpg';
import IMG5 from '../../assets/person-taking-measures-on-wood.jpg';
import IMG6 from '../../assets/man-cutting-insulation-material-for-building.jpg';

export interface IArr {
  img: string;
  text: [string, string];
}

const arr: IArr[] = [
  {
    img: IMG1,
    text: [
      'Montaż płyt gipsowo-kartonowych i konstrukcji, szpachlowanie, malowanie, dekotynkowanie, kafelkowanie, laminat, parkiet, deska parkietowa',
      'Montage von Gipsplatten und -konstruktionen, Spachteln, Streichen, Entkoken, Fliesenlegen, Laminat, Parkett, Parkettbrett',
    ],
  },
  {
    img: IMG2,
    text: [
      'Osłaniamy elewacje: drewnem, ocieplamy pianką, nakładamy futro (tynk), malujemy',
      'Wir verkleiden die Fassaden: mit Holz, isolieren mit Schaum, tragen Fell (Putz) auf, streichen',
    ],
  },
  {
    img: IMG3,
    text: [
      'Elektryka, hydraulika (wszystko oprócz podłączenia kotłów)',
      'Strom, Sanitär (alles außer Anschluss der Heizkessel)',
    ],
  },
  {
    img: IMG4,
    text: [
      'Układanie ogrzewania podłogowego, Rozprowadzenie zimnej/ciepłej wody, montaż instalacji (umywalki, toalety, wanny itp.)',
      'Verlegen von Fußbodenheizungen, Kalt-/Warmwasserverteilung, Installationsinstallation (Waschtische, Toiletten, Badewannen usw.)',
    ],
  },
  {
    img: IMG5,
    text: [
      'Różnorodna stolarka, łaźnie parowe, łaźnie, sauny',
      'Eine Vielzahl von Holzarbeiten, Dampfbädern, Bädern, Saunen',
    ],
  },
  {
    img: IMG6,
    text: [
      'Różnorodna stolarka, łaźnie parowe, łaźnie, sauny',
      'Eine Vielzahl von Holzarbeiten, Dampfbädern, Bädern, Saunen',
    ],
  },
];

function Main2() {
  const { language } = useContext(Language);
  const changeLanguages = changeLanguage.bind(language);
  return (
    <div className="px-[65rem] mb-[100rem]">
      <div className="mb-[60rem] text-[40rem] font-[700]">
        {changeLanguages(['Wykonane ', 'Arbeit '])}
        <span className="text-[#FF800B]">{changeLanguages(['prace:', 'erledigt:'])}</span>
      </div>
      <div className="h-[568rem] flex flex-col flex-wrap gap-y-[25rem] gap-x-[36rem]">
        {arr.map((item, index) => {
          return (
            <div key={index}>
              <WorkCard {...item} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main2;
