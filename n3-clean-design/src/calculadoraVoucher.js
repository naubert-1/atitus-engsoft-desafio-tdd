import { calcularVoucher } from './voucher';

test('aplica desconto fixo', () => {
  const voucher = { tipo: 'fixo', valor: 20 };
  expect(calcularVoucher(100, voucher)).toBe(80);
});

test('aplica desconto percentual', () => {
  const voucher = { tipo: 'percentual', valor: 10 };
  expect(calcularVoucher(200, voucher)).toBe(180);
});

test('respeita valor mínimo', () => {
  const voucher = { tipo: 'fixo', valor: 20, minimo: 100 };
  expect(calcularVoucher(50, voucher)).toBe(50);
});

test('respeita limite máximo de desconto', () => {
  const voucher = { tipo: 'percentual', valor: 50, maximo: 30 };
  expect(calcularVoucher(200, voucher)).toBe(170);
});



function aplicarMinimo(total, voucher) {
  if (voucher.minimo && total < voucher.minimo) {
    return total;
  }
  return null;
}

function calcularDescontoFixo(voucher) {
  return voucher.valor;
}

function calcularDescontoPercentual(total, voucher) {
  let desconto = (total * voucher.valor) / 100;

  if (voucher.maximo && desconto > voucher.maximo) {
    desconto = voucher.maximo;
  }

  return desconto;
}

function calcularDesconto(total, voucher) {
  if (voucher.tipo === 'fixo') {
    return calcularDescontoFixo(voucher);
  }

  if (voucher.tipo === 'percentual') {
    return calcularDescontoPercentual(total, voucher);
  }

  return 0;
}

export function calcularVoucher(total, voucher) {
  const bloqueado = aplicarMinimo(total, voucher);
  if (bloqueado !== null) return bloqueado;

  const desconto = calcularDesconto(total, voucher);
  return total - desconto;
}