import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import Form from ".";

it("armazena os valores corretamente", async () => {
  const handleAddMock = jest.fn();
  const setTransactionsList = jest.fn();
  const transactionsList = [];

  render(<Form
    handleAdd={handleAddMock}
    transactionsList={transactionsList}
    setTransactionsList={setTransactionsList}
  />);

  const descricaoInput = screen.getByTestId("descricao");
  const valorInput = screen.getByTestId("valor");
  const entradaRadio = screen.getByTestId("entrada");
  const saidaRadio = screen.getByTestId("saida");
  const adicionarButton = screen.getByText("ADICIONAR");

  expect(descricaoInput).toHaveValue('');
  expect(valorInput).toHaveValue(null);
  expect(entradaRadio).toBeChecked();
  expect(saidaRadio).not.toBeChecked();
  fireEvent.change(descricaoInput, { target: { value: "Exemplo de transação" } });
  fireEvent.change(valorInput, { target: { value: "50" } });
  fireEvent.click(saidaRadio);

  expect(descricaoInput).toHaveValue("Exemplo de transação");
  expect(valorInput).toHaveValue(50);
  expect(entradaRadio).not.toBeChecked();
  expect(saidaRadio).toBeChecked();

  fireEvent.click(adicionarButton);

  expect(descricaoInput).toHaveValue("");
  expect(descricaoInput).toHaveValue("");
  expect(valorInput).toHaveValue(null);
  expect(entradaRadio).not.toBeChecked();
  expect(saidaRadio).toBeChecked();

  expect(handleAddMock).toHaveBeenCalledTimes(1);
  expect(handleAddMock).toHaveBeenCalledWith({
    id: expect.any(Number),
    descricao: "Exemplo de transação",
    quantia: '50',
    saida: true,
  });
});
