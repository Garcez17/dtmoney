import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>18/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>05/03/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$21.000</td>
            <td>Desenvolvimento</td>
            <td>18/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}