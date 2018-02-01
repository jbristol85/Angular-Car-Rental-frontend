/* global angular */

(function(){
var app = angular.module('joshRentals', []);

app.controller('RentalController', function(){
	this.products = cars;
});

app.controller("RentController", function(){
	this.rentedCar = function(cars){
		if(cars.available > cars.rented){
			cars.rented = cars.rented +1;
			console.log(cars.rented);
		}else if (cars.available == cars.rented){
			cars.canRent = false;
		}
	};
});




var cars=
[
	{
		make:"Honda",
		model: "Pilot",
		type: 'SUV',
		description:"Full size AWD SUV with room for 8",
		price: 60,
		available: 4,
		rented:2,
		canRent: true,
		image:"https://www.liahondaofwilliamsville.com/assets/stock/colormatched/white/640/cc_2015hon011j_640/cc_2015hon011j_640_gx.jpg"
	},
	{
		make:"Toyota",
		model:"Camry",
		type:"Sedan",
		description:"Mid-Sized sedan that seats 6",
		price: 40,
		available:4,
		rented:1,
		canRent: true,
		image:"https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2018/camry/3T3/4.png?q=85&fm=jpg&w=1024&fit=max&cs=strip&bg=fff"
	},
	{
		make:"Toyota",
		model:"Tacoma",
		type:'Pickup',
		description:"4x4 pickup truck",
		price: 70,
		available:4,
		rented:3,
		canRent: true,
		image:"https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2018/tacoma/8T0/4.png?q=85&fm=jpg&w=1024&fit=max&cs=strip&bg=fff"
	}
	];
	
})();


