import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type searchFormSchemaType = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: searchFormSchemaType) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações..."
        {...register("query")}
      ></input>
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}></MagnifyingGlass>
        Buscar
      </button>
    </SearchFormContainer>
  );
}
