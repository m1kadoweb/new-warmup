module.exports = function warmup(temperature) {
  if (temperature != null) {
	var fahrenheit = ((temperature*(9/5))+32);	  
    return fahrenheit;
  }
};
