class CarRenting {
	var carId = '';
	var carsService;

	function completePurchase(carsService, carId, Payment payment) {
		this._carId = carId;
		if(payment.isFinished()) {
			carsService = rentCar //metoda blokujaca
		}
	}
}