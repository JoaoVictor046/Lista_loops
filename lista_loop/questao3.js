saldo = 500.00;

while(saldo > 65){
    saldo -= 65;
    console.log(`Saque efetuado: R$ 65.00 | Saldo atual: R$ ${saldo.toFixed(2)}`);
    if(saldo < 65) {
        console.log(`saldo insulficiente! seu saldo atual é de R$ ${saldo.toFixed(2)}`);
    }
}