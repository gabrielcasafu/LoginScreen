export function passwordValidator(password) {
  if (!password) return "Password no puede estar vacío."
  if (password.length < 5) return 'Password debe tener al menos 5 caracteres.'
  return ''
}
