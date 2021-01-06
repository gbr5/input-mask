import React, { useCallback, useState } from 'react';

import Input from './components/Input';

interface IZipCode {
  zip_code: string;
}
interface ICPFBrazilianID {
  cpf: string;
}
interface ICurrency {
  amount: string;
}
interface IDate {
  date: string;
}

const App: React.FC = () => {
  const [zipCode, setZipCode] = useState<IZipCode>({} as IZipCode);
  const [cpf, setCPF] = useState<ICPFBrazilianID>({} as ICPFBrazilianID);
  const [amount, setAmount] = useState<ICurrency>({} as ICurrency);
  const [date, setDate] = useState<IDate>({} as IDate);

  const handleZipCodeChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setZipCode({
      ...zipCode,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  }, [zipCode]);

  const handleCPFBrazilianIDChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setCPF({
      ...cpf,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  }, [cpf]);

  const handleCurrencyChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setAmount({
      ...amount,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }, [amount]);

  const handleDateChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setDate({
      ...date,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }, [date]);
  return (
    <div>
      <h1>Hello World!</h1>
      <h3>CEP:</h3>
      <Input mask="cep" placeholder="12345-123" name="zip_code" onChange={handleZipCodeChange} />
      <button type="button" onClick={() => console.log(zipCode)}>Salvar</button>
      <h3>CPF:</h3>
      <Input mask="brlID" placeholder="123.123.123-12" name="cpf" onChange={handleCPFBrazilianIDChange} />
      <button type="button" onClick={() => console.log(cpf)}>Salvar</button>
      <h3>Dinheiro em Real:</h3>
      <Input mask="currency" prefix="R$" placeholder="0,00" name="currency" onChange={handleCurrencyChange} />
      <button type="button" onClick={() => console.log(amount)}>Salvar</button>
      <h3>Dinheiro em Real:</h3>
      <Input mask="brlDateFormat" prefix="DD/MM/AA" placeholder="Dia/Mês/Ano" name="currency" onChange={handleDateChange} />
      <button type="button" onClick={() => console.log(amount)}>Salvar</button>
    </div>
  );
}

export default App;
