interface LiProps {
  path: string;
  selected: string;
  id: string;
  children: React.ReactNode;
  label: string;
}

export default function Li({ path, selected, id, children, label }: LiProps) {
  return (
    <li
      className={`${selected === id && "font-bold"} hover:bg-theme-highlight hover:bg-opacity-5`}
    >
      <a className="block p-4" href={path}>
        {label}
      </a>
      {children}
    </li>
  );
}
