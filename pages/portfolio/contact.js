import Link from 'next/link';

const contact = () => {
    return (
        <div id= "contact">
            <h1 style = {{textAlign:"center"}}>Contact</h1>
            <table style= {{width:" 100%;"}}>
                <tr align="center">
                    <td><Link href={"/portfolio"}>Home</Link></td>
                    <td><Link href={"/portfolio/gallery"}>Gallery</Link></td>
                    <td><Link href={"/portfolio/contact"}>Contact</Link></td>
                    <td><Link href={"/portfolio/grade_cal/grade_cal"}>GPA Calc</Link></td>
                    <td><Link href={"/"}>Mainpage</Link></td>
                </tr>
            </table>

            <p><h1>Wisarud Wongta</h1></p>
            <p> <h3>wisarud2k@gmail.com</h3></p>
            <p><h4>(+66)-959-3880</h4></p>
            <form>
                <h4>
                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname"></input><br></br>
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" ></input><br></br><br></br>
                    <label for="gender">gender:</label>
                    <input type="radio" name="gender" id="male"></input>
                    <label for="male">male</label>
                    <input type="radio" name="gender" id="female"></input>
                    <label for="male">female</label>
                    <input type="radio" name="gender" id="non-bi"></input>
                    <label for="male">non-binary</label><br></br>
                    <label for="message">message</label><br></br>
                    <input type="text" name="message" id="message"></input><br></br>
                    <label for="phone">phone</label><br></br>
                    <input type="text" name="phone" id="phone"></input><br></br>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </h4>
                
            </form>
        </div>
    )
}

export default contact