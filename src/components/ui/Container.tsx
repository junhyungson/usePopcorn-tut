import { useState } from "react";

interface ContainerProps {
  // movies: MovieData[];
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open: boolean) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Container;
