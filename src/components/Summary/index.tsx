import { useMemo } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const { deposit, withdraw, Total } = useMemo(() => {
    const { deposits, withdrawals, total } = transactions.reduce((acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdrawals += transaction.amount;
        acc.total -= transaction.amount;
      }
  
      return acc;
    }, {
      deposits: 0,
      withdrawals: 0,
      total: 0,
    });

    const deposit = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(deposits);

    const withdraw = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(withdrawals);

    const Total = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(total);

    return { deposit, withdraw, Total };
  }, [transactions]);
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>{deposit}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>- {withdraw}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>{Total}</strong>
      </div>
    </Container>
  );
}