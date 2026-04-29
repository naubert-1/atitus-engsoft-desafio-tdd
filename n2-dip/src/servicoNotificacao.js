export class ServicoNotificacao {
  constructor(gateway) {
    this.gateway = gateway;
  }

  notificar(usuario, mensagem) {
    this.gateway.enviar(usuario, mensagem);
  }
}

export const emailGateway = {
  enviar(usuario, mensagem) {
    console.log(`Enviando email para ${usuario.email}: ${mensagem}`);
  }
};

import { ServicoNotificacao } from '../src/servicoNotificacao.js';

test('deve chamar o gateway de envio', () => {
  const gatewayMock = {
    enviar: jest.fn()
  };

  const servico = new ServicoNotificacao(gatewayMock);

  const usuario = { email: 'teste@email.com' };

  servico.notificar(usuario, 'Olá');

  expect(gatewayMock.enviar).toHaveBeenCalledWith(usuario, 'Olá');
});