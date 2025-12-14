import { STACK_ITEMS, StackItem } from "../entities";

export const StackCards = () => {
  const handleClick = (data: string) => {
    if (data?.endsWith(".pdf")) {
      window.open(data, "_blank");
    } else {
      const section = document.getElementById(`${data}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="sidebar">
      {STACK_ITEMS.map(({ icon, data, title }: StackItem) => (
        <div
          key={title}
          className="sidebar-item"
          onClick={() => handleClick(data)}
        >
          <div className="sidebar-item-title">
            {icon}
            <h3>{title}</h3>
          </div>
          <span>→</span>
        </div>
      ))}
    </div>
  );
};
