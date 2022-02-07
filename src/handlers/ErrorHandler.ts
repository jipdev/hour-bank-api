export default class ErrorHandler {
  status!: number;

  message!: string;

  constructor(status: number, message = 'Ocorreu um erro inesperado, tente novamente mais tarde!') {
    this.status = status;
    this.message = message;
  }
}
