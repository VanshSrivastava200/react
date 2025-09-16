import poster from "../assets/images/poster.webp"
import styles from '../components/index.module.css'
import styled from 'styled-components'

export const Card = ({Curelem}) => {
  const Sty=styled.button({
    color : "yellow",
    fontSize : "1.8rem"
  })
  const {id,name,img_url,rating, description,genre,watch_url} = Curelem;
  let col=rating>=8.5?"hit":"avg"
  return (
    <li key={id} className={styles.litem}>
      <img src={poster} alt="img" className={styles.img}/>
      <section className={styles.content}>
        <Sty className={styles.heading}>{name}</Sty>
      <p className={`${styles.normal} ${col}`}>Rating : {rating}</p>
      <p>Description : {description}</p>
      <p>Genre : {genre}</p>
      <button className={styles.button}><a className={styles.link} href={watch_url} target="blank">Watch</a></button>
      </section>
    </li>
  );
};
