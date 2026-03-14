import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
            <ul>
                <li>Home</li>
                <li>Search</li>
                <li>Recommendations</li>
                <li>Genres</li>
                <li>About</li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
