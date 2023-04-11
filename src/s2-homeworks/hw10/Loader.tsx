import s from './Loader.module.css'
import preloader from './bll/preloader.svg'

export const Loader = () =>{
    return (
      //  <div className={s.loader}/>
        <img src={preloader} alt={'preloader'} className={s.loader}/>
    )
}


