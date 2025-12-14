import { SkillCategory } from "../entities";

interface TechStackProps {
  data: SkillCategory;
}
export function TechStacks({ data }: TechStackProps) {
  return (
    <div className="tech-stack-section">
      <div className="header">
        <div className={`icon ${data.color}`}>{data.icon}</div>
        <h3 className="title">{data.title}</h3>
      </div>

      <div className="chips">
        {data.items.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </div>

    // <div key={data.title} className="stack-section">
    //   <div className="stack-section-header">
    //     <div className={`icon ${data.color}`}>{data.icon}</div>
    //     <h3 className="title">{data.title}</h3>
    //   </div>

    //   <div className="chips">
    //     {data.items.map((item, i) => (
    //       <span key={i} className="chip">
    //         {item}
    //       </span>
    //     ))}
    //   </div>
    // </div>
  );
}
