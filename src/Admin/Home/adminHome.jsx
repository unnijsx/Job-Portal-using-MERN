import Header from '../../Defaults/Header/header';
import '../../Styles/Main.css';
import SideMenuAdmin from '../SideMenu/sidemenuAdmin';

const AdminHome = () =>{
    return(
        <>
        <Header/>
        <div className='main-container'>
        <div><SideMenuAdmin/></div>
        <div className='content-box'>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
                <h1>Admin Home</h1>
            </div>
        </div>
        </div>
        </>
    )
}
export default AdminHome;