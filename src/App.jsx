import {Seriesa} from "./components/Series";
// import Profile from "./components/Profile";
import styles from './components/index.module.css'
// import './index.css'
export const App=()=>{
  return(
    <div className={styles.container}>
      <h1 className={styles.heading}>Netflix Series</h1>
      <Seriesa/>
      {/* <Profile/> */}
    </div>
  );
};