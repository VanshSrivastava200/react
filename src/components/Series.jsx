import seriesdata from "../api/seriesdata.json";
import nstyles from '../components/index.module.css';
import { Card } from "./Card";
export const Seriesa = () => {
  return (
    <>
      <ul className={nstyles.grid}>
        {seriesdata.map((curelem) =>
            <Card Curelem={curelem} key={curelem.id}/>
        )}
      </ul>
    </>
  );
};
