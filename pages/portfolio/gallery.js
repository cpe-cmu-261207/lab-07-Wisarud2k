import Link from 'next/link';

const gallery = () => {
    return(
        <div id ="gallery">
            <h1 style = {{textAlign:"center"}}>My Gallery</h1>

            <table style= {{width:" 100%;"}}>
                <tr align="center">
                    <td><Link href={"/portfolio"}>Home</Link></td>
                    <td><Link href={"/portfolio/gallery"}>Gallery</Link></td>
                    <td><Link href={"/portfolio/contact"}>Contact</Link></td>
                    <td><Link href={"/portfolio/grade_cal/grade_cal"}>GPA Calc</Link></td>
                    <td><Link href={"/"}>Mainpage</Link></td>
                </tr>
            </table>

            <table style={{width:"100%"}} >
        <tr>
            <th><figure>
                <img style= {{width:"600px",alignItems:" baseline"}} src="\pic\000052.JPG" alt="trip1" />
                <figcaption>Some street art in Lampang solo trip</figcaption>
            </figure></th>
            <th><figure>
                <img style= {{width:"600px"}} src="\pic\000056.JPG" alt="trip2"></img>
                <figcaption>Old Builing in Lampang solo trip</figcaption>
            </figure></th>
        </tr>
        <tr>
            <th><figure>
                <img style= {{width:"600px"}} src="\pic\000057.JPG" alt="trip3"></img>
                <figcaption>White bridge in Lampang solo trip</figcaption>
            </figure></th>
            <th><figure>
                <img style= {{width:"600px"}} src="\pic\000063.JPG" alt="trip4"></img>
                <figcaption>Beautiful waterfall walk path</figcaption>
            </figure></th>
        </tr>
        <tr>
            <th><figure>
                <img style= {{width:"600px"}} src="\pic\mina1.jpg" alt="mina1"></img>
                <figcaption>My life source01</figcaption>
            </figure></th>
            <th><figure>
                <img style= {{width:"600px"}} src="\pic\mina2.jpg" alt="mina2"></img>
                <figcaption>My life source02</figcaption>
            </figure></th>
        </tr>
        <tr>
            <th><figure>
                <img style= {{width:"600px"}} src="\pic\mina3.jpg" alt="mina3"></img>
                <figcaption>The most beautiful curve in woman is her smile 01</figcaption>
            </figure></th>
            <th><figure>
                <img style= {{width:"600px"}} src="\pic\mina4.jpg" alt="mina4"></img>
                <figcaption>The most beautiful curve in woman is her smile 02</figcaption>
            </figure></th>
        </tr>
    </table>
        </div>
    )
}

export default gallery