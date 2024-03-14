import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações..."></input>
      <button type="submit">
        <MagnifyingGlass size={20}></MagnifyingGlass>
        Buscar
      </button>
    </SearchFormContainer>
  );
}
