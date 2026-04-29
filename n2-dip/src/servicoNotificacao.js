export class ServicoNotificacao {
  constructor(gatewayEmail) {
    this.gatewayEmail = gatewayEmail;
  }

  async enviarBoasVindas(usuario) {
    return await this.gatewayEmail.enviar(usuario.email, 'Bem-vindo!');
  }
}


  const servico = criarServicoNotificacao(gatewayMock);

  const usuario = { email: 'teste@email.com' };
  servico.notificar(usuario, 'Olá');

  expect(gatewayMock.enviar).toHaveBeenCalledWith(usuario, 'Olá');
});