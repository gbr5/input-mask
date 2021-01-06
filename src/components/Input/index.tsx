import React, { InputHTMLAttributes, useCallback } from 'react';

import { cep, brlID, currency, brlDateFormat } from './masks';

import './styles.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep" | "currency" | "brlID" | "brlDateFormat";
  prefix?: string;
}

const Input: React.FC<IProps> = ({ mask, prefix, ...props }: IProps) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    mask === 'cep' && 
    cep(e);
    mask === 'brlID' && brlID(e);
    mask === 'currency' && currency(e);
    mask === 'brlDateFormat' && brlDateFormat(e);
  }, [mask]);

  return (
    <div className="input-group">
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={(e: React.FormEvent<HTMLInputElement>) => handleKeyUp(e)} />
    </div>
  );
};

export default Input;