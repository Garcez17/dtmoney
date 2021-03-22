import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

import { Container, TransactionTypeContainer, RadioButton } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  
  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    }

    api.post('transactions', data);

    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioButton 
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => { setType('deposit'); }}
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => { setType('withdraw'); }}
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>
        
        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}