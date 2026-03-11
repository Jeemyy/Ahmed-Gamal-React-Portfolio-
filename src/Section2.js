import Post2 from "./Post2"
import Post2_2 from "./Post2_2"
export default function Section2() {
    return (
        <div>
            <section className="sec2" id="sec2">
                <div className="about" id="about">
                    <h1>About <span>Me</span></h1>
                    <div className="page">
                        <Post2 />
                        <Post2_2 />
                    </div>
                </div>
                </section>
        </div>
    )
}