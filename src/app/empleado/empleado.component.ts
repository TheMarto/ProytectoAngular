import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

//Variables
//nombre = "martin";
apellido = "ganz";
edad = 33;
//jugador = 3924;
player=0;
numinput = false;
userregister =false;
usertext="No hay nadie registrado";



//Funtions
updatePlayer(value: string) {
  this.player = parseFloat(value) || 0;
  //this.funinput();
}
funinput(){
  if (this.player > 0){
    this.numinput = true;
  }


}
funregis(event:Event){
  if ((<HTMLInputElement>event.target).value=="si"){
    this.usertext="usuario registrado";
  }
  //this.usertext="usuario registrado";
  //alert(event.target);
  else{
    this.usertext="No hay nadie registrado";
  }
  }

}
