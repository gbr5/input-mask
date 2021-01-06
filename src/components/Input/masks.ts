export function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;

  return e;
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  
  e.currentTarget.value = value;

  return e;
}

export function brlID(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 11;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  e.currentTarget.value = value;
}

export function brlDateFormat(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 6;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9][0-9])$/, "");
  value = value.replace(/^(\d{2})(\d{2})(\d{2})/, "$1/$2/$3");
  e.currentTarget.value = value;
}