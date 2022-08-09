public class Main {
    public static void main(String[] args) {

        Cliente Guilherme = new Cliente();
        Guilherme.setNome("Guilherme");
        Conta conta1 = new ContaPoupanca(Guilherme);
        ContaInterface conta2 = new ContaCorrente(Guilherme);


        conta1.depositar(1000d);
        conta1.depositar(50d);
        conta1.transferir(1000d, conta2);
        conta2.imprimirExtrato();
        conta1.imprimirExtrato();
    }
}
