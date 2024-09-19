import React from "react";

interface BadgeProps {
  number: number;
  imagePath: string;
}

const Badge: React.FC<BadgeProps> = ({ number, imagePath }) => {
  const badges = [];
  for (let i = 0; i < number; i++) {
    badges.push(<img key={i} src={imagePath} alt="Badge" className="badge" />);
  }
  return (
    <div
      className="badges-container"
      style={{ display: "flex", justifyContent: "center", columnGap: "5px" }}
    >
      {badges}
    </div>
  );
};

export default Badge;
