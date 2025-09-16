import {Seriesa} from "./components/Series";
import {Buttons} from './components/Buttons'
// import Profile from "./components/Profile";
import Use from "./components/Use";
import styles from './components/index.module.css'
// import './index.css'
export const App=()=>{
  return(
    <div className={styles.container}>
      {/* <h1 className={styles.heading}>Netflix Series</h1> */}
      {/* <Seriesa/> */}
      {/* <Profile/> */}
      {/* < Buttons onClick={clickchild}/> */}
      <Use/>
    </div>
  );
};
function clickchild(event){
    event.stopPropagation()
    console.log("Child clicked")
}