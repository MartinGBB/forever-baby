import Input from "./Input";
import Link from "./Link";

function Header() {
  return (
    <div>
      <Link />

      <Input
        type="text"
        name="filter"
        pleaceholder="Qual o mimo de hoje para o seu anjinho?"
        disabled={ false }
      />

      <Link />
      <Link />
    </div>
  );
}

export default Header;
