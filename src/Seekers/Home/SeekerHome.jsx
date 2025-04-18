import Header from '../../Defaults/Header/header';
import '../../Styles/Main.css';
import SideMenuSeeker from '../SideMenu/sidemenuSeeker';

const SeekerHome = () =>{
    return(
        <>
        <Header/>
        <div className='main-container'>
        <div><SideMenuSeeker/></div>
        <div className='content-box'>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
                <h1>Seeker Home</h1>
            </div>
        </div>
        </div>
        </>
    )
}
export default SeekerHome;