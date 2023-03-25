class Calculator {
  constructor() {
    this.buffer = '0';
    this.operator = '';
    this.total = 0;
  }
  setScreen(number){
    const screen = document.querySelector('.screen');
    screen.innerHTML = number;
  }
  buttonClick(button) {
    if (isNaN(button)) {
      this.buttonSymbol(button);
    }else {
      this.buttonNumber(button);
    }
  }
  buttonSymbol(symbol) {
    switch (symbol) {
      case 'C':
        this.buffer = '0';
        this.operator = '';
        this.total = 0;
        this.setScreen(this.buffer);

      case '←':
        if(this.buffer.length == 1){
          this.buffer = '0';
        }else{
          this.buffer = this.buffer.substring(0, this.buffer.length - 1);
        }
        this.setScreen(this.buffer);
        break;
      case '=':
        this.calculate(parseFloat(this.buffer));
        this.operator = '';
        break;

      case '+':
      case '−':
      case '×':
      case '÷':
        this.operator = symbol;
        this.calculate(parseFloat(this.buffer));
        this.buffer = '0';
        this.setScreen(this.buffer);
        break;
    }
  }
  buttonNumber(number) {
    if (this.buffer === '0') {
      this.buffer = number;
    } else {
      this.buffer += number;
    }
    this.setScreen(this.buffer);
  }

  calculate(value) {
    if (this.total === 0) {
      this.total += value;
    }else{
      switch (this.operator) {
        case '+':
          this.total += value;
          break;

        case '−':
          this.total -= value;
          break;

        case '×':
          if(this.buffer != 0){
            this.total *= value;
          }
          break;

        case '÷':
          if(this.buffer != 0){
            this.total /= value;
          }
          break;
      }
    }
    this.setScreen(this.total);
  }
}

const click = new Calculator;
const buttons = Array.from(document.getElementsByClassName('cal-button'));
buttons.forEach(button => {
  button.addEventListener('click', getButton =>{
    click.buttonClick(getButton.target.innerHTML);
  })
})



