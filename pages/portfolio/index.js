import Link from 'next/link';
const portfolio = () => {
    return (
        <div id= "portfolio">
            <div style= {{textAlign: "center"}}>
                <h1>About My Self</h1>
                <img style={{width:"300px",alignItems:" baseline"}} src="IMG_1388.jpg" alt="" />
                <h2>All Page</h2>
            </div>
            
            <table style= {{width:" 100%;"}}>
                <tr align="center">
                    <td><Link href={"/portfolio"}>Home</Link></td>
                    <td><Link href={"/portfolio/gallery"}>Gallery</Link></td>
                    <td><Link href={"/portfolio/contact"}>Contact</Link></td>
                    <td><Link href={"/portfolio/grade_cal/grade_cal"}>GPA Calc</Link></td>
                    <td><Link href={"/"}>Mainpage</Link></td>
                </tr>
            </table>
            <div style= {{textAlign: "center"}}>
                <h2>About My Self</h2>
                <p><h3>My Name is Wisarud Wongta. I'm 20 years old. I'm a second  year in Computer Engineering in Chaingmai university </h3></p>
                <p><h3>My personal goal is to become a penetration tester. My hobby is play a video game, play a guitar and learn some new things.</h3></p>
                <p><h3>I have a bit of experience in C++,Java and a little bit of python.</h3></p>

            </div>
        
        </div>
    )
}

export default portfolio