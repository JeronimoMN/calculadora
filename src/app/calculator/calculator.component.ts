import { Component } from '@angular/core';
import { Parser } from 'expr-eval';
import Swal from 'sweetalert2';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  constructor(private router: Router){  }

  title = 'calculator';
  result=""

  clickOperator(value: string){
    this.result+= value
  }

  calculate(){
    var parser= new Parser();
    try{
      var expr= parser.parse(this.result);
      this.result = expr.evaluate({});
    }
    catch(e){
      //alert("expresión pailas"),
      Swal.fire({
        icon:'error',
        title:'Error',
        text: 'Sintax Error',
        //footer: '<a href="">Why do i have this issue</a>'
      })
      this.clear()
    }
  }

  clear(){
    this.result =""
  }

  cambiarruta(){
    this.router.navigate(['/sustentacion'])
  }

  
}
