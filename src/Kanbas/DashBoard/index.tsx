export default function Dashboard() {
    return (
        <div>
            <h1 id="wd-dashboard-title">Dashboard for Axel</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="images/shinchan1.jpeg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/Home">
                            CS5001
                        </a>
                        <p className="wd-dashboard-course-title">
                            Intensive Foundations of Computer Science
                        </p>
                        <a href="#/Kanbas/Courses/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="images/shinchan2.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/Home">
                            CS5002
                        </a>
                        <p className="wd-dashboard-course-title">
                            data structures
                        </p>
                        <a href="#/Kanbas/Courses/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="images/shinchan3.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/Home">
                            CS5003
                        </a>
                        <p className="wd-dashboard-course-title">
                            algorithms
                        </p>
                        <a href="#/Kanbas/Courses/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="images/shinchan4.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/Home">
                            CS5004
                        </a>
                        <p className="wd-dashboard-course-title">
                            software engineering
                        </p>
                        <a href="#/Kanbas/Courses/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="images/shinchan5.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/Home">
                            CS5005
                        </a>
                        <p className="wd-dashboard-course-title">
                            database
                        </p>
                        <a href="#/Kanbas/Courses/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="images/shinchan6.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/Home">
                            CS5006
                        </a>
                        <p className="wd-dashboard-course-title">
                            computer graphics
                        </p>
                        <a href="#/Kanbas/Courses/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="images/shinchan7.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/Home">
                            CS5007
                        </a>
                        <p className="wd-dashboard-course-title">
                            artificial intelligence
                        </p>
                        <a href="#/Kanbas/Courses/Home"> Go </a>
                    </div>
                </div>
            </div>
        </div>
    );
}