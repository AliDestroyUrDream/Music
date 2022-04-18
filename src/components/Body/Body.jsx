import style from './Body.module.css'

const Body = () => {
     return (
          <div className={style.body}>

               <div className={style.container1}>
                    <div className={style.box1}>a</div>
                    <div className={style.box2}>s</div>
                    <div className={style.box3}>d</div>
                    <div className={style.box4}>f</div>
               </div>
               <div className={style.container1}>
                    <div className={style.box11}>a</div>
                    <div className={style.box22}>s</div>
                    <div className={style.box33}>d</div>
                    <div className={style.box44}>f</div>
               </div>
               <div className={style.container1}>
                    <div className={style.box111}>a</div>
                    <div className={style.box222}>s</div>
                    <div className={style.box333}>d</div>
                    <div className={style.box444}>f</div>
               </div>

          </div>
     );
}

export default Body;