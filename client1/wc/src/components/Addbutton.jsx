import styles from "./Addbutton.module.css";
const Addbutton=({handleShow})=>{
    console.log("Button here ---> ", handleShow)
    return(
    <>
         
        {/* <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Email address</label>
           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="write something here"/>
        </div> */}
        
        <div className={styles.button}>
             <button type="button" onClick={()=>handleShow()} className="btn btn-outline-info" >Add new shecdule</button>
        </div>
       
        
    </>
    )
}
export default Addbutton;