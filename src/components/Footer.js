import "./footer.css";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <p className="footer">&copy;{year} Created by Laszlo Dus</p>;
}
