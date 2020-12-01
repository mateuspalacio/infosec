import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  unione: Array<any> = ['Introdução a legislação',
    'Importância da Proteção de dados e da Lei LGPD',
    'Engenharia Social: A base dos crimes virtuais',
    'Malwares: As ferramentas dos criminosos virtuais.',
    'Tipos de Informações sensíveis.',
    'Três pilares da SI: Integridade, Disponibilidade e Confidencialidade.',
    'Mitos da segurança da informação'
    ];
    unitwoinfra: Array<any> = [
      'DMZ',
      'Internet',
      'Intranet',
      'Extranet',
      'WAN vs LAN',
      'VPN'
    ];
    unitwothreats: Array<any> = [
      'Phishing',
'Ransomware',
'Trojan Horse',
'Backdoor',
'Rootkit',
'Spyware e Adware',
'Worms e Virus',
'Zero Day',

    ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 selectedUnity(index: any): void {
  localStorage.setItem('currentLession', index);
  this.router.navigate(['/aula']);
 }
}
