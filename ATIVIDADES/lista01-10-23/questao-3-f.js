const contaBancaria = {
    saldo: 0,
    numeroConta: '7890-X',

    depositar: function(valor) {
        if (valor > 0) {
            this.saldo = this.saldo + valor; 
            console.log("Depósito de R$ " + valor.toFixed(2) + " realizado.");
        }
        this.informarSaldo();
    },
   
    sacar: function(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo = this.saldo - valor;
            console.log("Saque de R$ " + valor.toFixed(2) + " realizado.");
        } else if (valor > this.saldo) {
            console.log("Erro: Saldo insuficiente!");
        }
        this.informarSaldo();
    },
    
   
    informarSaldo: function() {
        console.log("[Conta " + this.numeroConta + "] Saldo Atual: R$ " + this.saldo.toFixed(2));
    }
};


contaBancaria.informarSaldo();
contaBancaria.depositar(350.50);
contaBancaria.sacar(100);
contaBancaria.sacar(500); 