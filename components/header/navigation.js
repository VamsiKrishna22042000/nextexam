import Link from "next/link";

const Navigation = () => {
  return (
    // Navigation Bar
    <nav id="navbar" className="navbar">
      <ul>
        <li className="dropdown">
          <Link href="/category/syllabus" passHref>
            <div>
            <span>Syllabus</span>
            <i className="bi bi-chevron-down dropdown-indicator"></i>
            </div>
          </Link>
          
          <ul>
            <li>
              <Link href="/blog/jpsc-prelims-syllabus">Prelims</Link>
            </li>
            <li>
              <Link href="/blog/jpsc-mains-syllabus">Mains</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/category/current-affairs">Current Affairs</Link>
        </li>
        <li className="dropdown">
          <Link href="/category/prelims" passHref>
            <div>
            <span>Prelims</span>
            <i className="bi bi-chevron-down dropdown-indicator"></i>
            </div>
          </Link>
          
          <ul>
            <li>
              <Link href="/category/history">History</Link>
            </li>
            <li>
              <Link href="/category/geography">Geography</Link>
            </li>
            <li>
              <Link href="/category/culture">Culture</Link>
            </li>
            <li>
              <a href="#">Economics</a>
            </li>
            <li>
              <a href="#">Polity</a>
            </li>
            <li>
              <a href="#">Science & Technology</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/category/mains" passHref>
            <div>
            <span>Mains</span><i className="bi bi-chevron-down dropdown-indicator"></i>
            </div>
          </Link>
          
          <ul>
            <li>
              <a href="#">Paper III (History & Geography)</a>
            </li>
            <li>
              <a href="#">
                Paper IV (Indian Constitution & Polity, Public Administration &
                Good Governance)
              </a>
            </li>
            <li>
              <a href="#">
                Paper V (Indian Economy, Globalization and Sustainable
                Development)
              </a>
            </li>
            <li>
              <a href="#">
                Paper VI (General Sciences, Environment & Technology
                Development)
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
