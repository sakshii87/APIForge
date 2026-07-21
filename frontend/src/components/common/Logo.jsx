import { TbTopologyComplex } from "react-icons/tb";
import "../../styles/logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <div className="logo-icon">
        <TbTopologyComplex />
      </div>

      <div className="logo-name">
        <span className="logo-text">API</span>
        <span className="logo-highlight">Forge</span>
      </div>
    </div>
  );
}