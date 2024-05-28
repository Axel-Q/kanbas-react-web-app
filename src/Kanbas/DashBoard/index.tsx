export default function Dashboard() {
    return (
        <div>
            <h1 id="wd-dashboard-title">Dashboard for Axel</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px", height: "300px"}}>
                        <div className="card">
                            <img src="images/shinchan1.jpeg" alt="shinchan1" height="200px" />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5001
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Intensive Foundations of Computer Science<br />
                                    Term: Fall<br />
                                    Year: 2023<br />
                                    Section: 01
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card" >
                            <img src="images/shinchan2.png" alt="shinchan2" height="200px"/>
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    data structures <br/>
                                    Term: Fall<br/>
                                    Year: 2023<br/>
                                    Section: 01
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="images/shinchan3.png" alt="shinchan3" height="200px" />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5003
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    algorithms<br/>
                                    Term: Spring<br/>
                                    Year: 2024<br/>
                                    Section: 01
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card" >
                            <img src="images/shinchan4.png" alt="shinchan4" height="200px"/>
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5004
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    software engineering<br/>
                                    Term: spring<br/>
                                    Year: 2024<br/>
                                    Section: 01
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="images/shinchan5.png" alt="shinchan5" height="200px"   />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5005
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    database<br/>
                                    Term: spring<br/>
                                    Year: 2024<br/>
                                    Section: 01
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}} >
                        <div className="card">
                            <img src="images/shinchan6.png" alt="shinchan6" height="200px" />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5006
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    computer graphics<br/>
                                    Term: spring<br/>
                                    Year: 2024<br/>
                                    Section: 01
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="images/shinchan7.png" alt="shinchan7" height="200px" />
                            <div className="card-body" style={{height:220}}>
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5007
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    artificial intelligence<br/>
                                    Term: spring<br/>
                                    Year: 2024<br/>
                                    Section: 01
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary" > Go </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}