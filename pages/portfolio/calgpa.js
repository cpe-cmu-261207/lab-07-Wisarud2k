import Link from 'next/link';
import {gpaCalScript} from "../portfolio"

const calgpa = () => {
    return(
        <div id="calgpa" >
            <h1 style={{textAlign:'center'}}>GPA Calculator</h1>

            <table style= {{width:" 100%;"}}>
                    <tr align="center">
                        <td><Link href={"/portfolio"}>Home</Link></td>
                        <td><Link href={"/portfolio/gallery"}>Gallery</Link></td>
                        <td><Link href={"/portfolio/contact"}>Contact</Link></td>
                        <td><Link href={"/portfolio/calgpa"}>GPA Calc</Link></td>
                        <td><Link href={"/"}>Mainpage</Link></td>
                    </tr>
                </table>

            <table style={{width: "100%"}} id="tbl1" border="1px">
            <tr>
                <th>id</th>
                <th>subject</th>
                <th>Semester</th>
                <th>grade</th>
                
            </tr>
            <tr>
                <th> <input type="number" placeholder="Your Subject ID ..." id="id"></input></th>
                <th> <input type="text" placeholder="Your Subject ..." id="subject"></input></th>
                <th><select name="semester" id="semester">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select></th>
                <th> <select name="grade" id="grade">
                    <option>A</option>
                    <option>B+</option>
                    <option>B</option>
                    <option>C+</option>
                    <option>C</option>
                    <option>D+</option>
                    <option>D</option>
                    <option>F</option>
                </select></th>
                <th><form><button type="submit" id="submit">Add</button></form></th>
            </tr>
            </table>
        </div>
    )
}

export default calgpa