function validarEmail(usuario) {
  return usuario.email.includes('@');
}

function validarSenha(usuario) {
  return usuario.password.length >= 8;
}

function validarIdade(usuario) {
  return usuario.age >= 18;
}

export function validadorUsuario(usuario) {
  return (
      validarEmail(usuario) &&
      validarSenha(usuario) &&
      validarIdade(usuario)
  );
}