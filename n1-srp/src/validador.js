export function validadorUsuario(usuario) {
  return (
      validarEmail(usuario) &&
      validarSenha(usuario) &&
      validarIdade(usuario)
  );
}
