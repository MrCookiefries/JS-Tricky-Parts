function createAccount(pin, amount = 0) {
	const bankAccount = { pin, amount };
	return {
		checkBalance: pin => pin !== bankAccount.pin
			? "Invalid PIN." : `$${bankAccount.amount}`,
		deposit: (pin, amount) => {
			if (pin !== bankAccount.pin) return "Invalid PIN.";
			bankAccount.amount += amount;
			return `Succesfully deposited $${amount}. Current balance: $${bankAccount.amount}.`;
		},
		withdraw: (pin, amount) => {
			if (pin !== bankAccount.pin) return "Invalid PIN.";
			if (bankAccount.amount - amount < 0) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
			bankAccount.amount -= amount;
			return `Succesfully withdrew $${amount}. Current balance: $${bankAccount.amount}.`;
		},
		changePin: (oldPin, newPin) => {
			if (oldPin !== bankAccount.pin) return "Invalid PIN.";
			bankAccount.pin = newPin;
			return `PIN successfully changed!`;
		}
	};
}

module.exports = { createAccount };
