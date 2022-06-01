import Tarefa from "./Task"
import Somar from "./Somar"
import Menu from "./Menu"
import MenuSuperior  from "./MenuSuperior"
import Rodape from "./Rodape"
import styles from './Painel.module.css'


const painel = () => {
  return (
    <div>
        <header >
            <div className={styles.div_header} >
                <MenuSuperior/>                
            </div>
        </header>
        <body className={styles.body_app}>
            <div className={styles.div_menu}>
                <Menu/>
            </div>
            <div className={styles.div_tarefa}>
                
            </div>
            <div className={styles.div_soma}>
                <Somar/>
            </div>
        </body>
        <footer>
            <div className={styles.footer}>
                 <Rodape/>
            </div> 
        </footer> 
    </div>
        
    )
}     


export default painel