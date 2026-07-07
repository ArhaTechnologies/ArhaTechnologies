import { Link } from "react-router-dom";
import { technologyCategories } from "../data/technologyData";

export default function TechnologyMarquee() {

  const technologies = technologyCategories.flatMap(category =>
    category.technologies.map(tech => ({
      ...tech,
      color: category.color,
    }))
  );

  return (
    <section className="technology-section">

      <div className="container">

        <div className="technology-heading">

          <span className="technology-subtitle">
            ENGINEERING EXCELLENCE
          </span>

          <h2 className="gradient-text">
            Technologies We Work With
          </h2>

          <p>
            We leverage industry-leading technologies to build
            scalable, secure and future-ready digital solutions.
          </p>

        </div>

        <div className="technology-marquee">

          <div className="technology-track">

            {[...technologies, ...technologies].map((tech, index) => {

              const Icon = tech.icon;

              return (

                <Link
                  key={index}
                  to={`/technology/${tech.slug}`}
                  className="technology-pill"
                >

                  <div
                    className="technology-pill-icon"
                    style={{
                      background: `${tech.color}15`,
                      border: `1px solid ${tech.color}40`
                    }}
                  >

                    <Icon
                      size={18}
                      color={tech.color}
                    />

                  </div>

                  <span>{tech.name}</span>

                </Link>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}