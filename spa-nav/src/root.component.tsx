import "./style.css";

export default function Root() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5787/5787121.png"
          alt="Logo de la página"
        />
      </div>
      <ul className="links">
        <li>
          <my-link link="/" text="Home"></my-link>
        </li>
        <li>
          <my-link link="/films" text="Películas"></my-link>
        </li>
        <li>
          <my-link link="/actor" text="Actores"></my-link>
        </li>
        <li>
          <my-link link="#" text="About"></my-link>
        </li>
        <li>
          <my-link link="/login" text="Login"></my-link>
        </li>
      </ul>
    </nav>
  );
}
