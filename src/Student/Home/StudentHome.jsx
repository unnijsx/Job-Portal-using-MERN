import Header from '../../Defaults/Header/header';
import '../../Styles/Main.css';
import SideMenuAdmin from '../SideMenu/sidemenuStudent';

const StudentHome = () =>{
    return(
        <>
        <Header/>
        <div className='main-container'>
        <div><SideMenuAdmin/></div>
        <div className='content-box'>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
                <h1>Student Home</h1>
            </div>
        </div>
        </div>
        </>
    )
}
export default StudentHome;