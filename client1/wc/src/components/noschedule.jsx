import styles from "./noschedule.module.css";
const Noschedule=()=>{
 return(
    <>
    <div className={styles.noschedule}>
        
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
           <strong>NO SCHEDULES!</strong> There are No schedules,you can add below.
           
        </div>
        
        
    </div>
    
    </>
 )
}
export default Noschedule;