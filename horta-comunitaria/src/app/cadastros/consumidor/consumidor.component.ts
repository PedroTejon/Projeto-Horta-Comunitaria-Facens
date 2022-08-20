import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';


@Component({
    selector: 'app-consumidor',
    templateUrl: './consumidor.component.html',
    styleUrls: ['../cadastros.scss']
})
export class ConsumidorComponent implements OnInit {

    constructor(private formBuilder: FormBuilder) {

    }

    formCadastro!: FormGroup;
    consumers: any[] = [];
    interesses: any[] = [];
    consumersSorted: any[] = [];
    sorted = false;
    editando = false;
    currId: any;

    ngOnInit(): void {
        fetch("http://localhost:3000" + window.location.pathname)
            .then(response => response.json())
            .then((data) => { this.consumers = data });

        this.inicializarFormulario()
    }

    edit(id: number) {
        let consumer = this.consumers.find(c => c.id == id);

        this.formCadastro.patchValue({
            nome: consumer.nome,
            bairro: consumer.bairro
        });
        this.interesses = consumer.interesses.split(', ');
        this.editando = true;
        this.currId = id;
    }

    cadastrar() {
        if (this.formCadastro.valid) {
            let dados = this.formCadastro.value;
            dados.interesses = this.interesses.join(', ');

            if (this.editando) {
                dados.id = this.currId;
                fetch('http://localhost:3000' + window.location.pathname, {
                    method: 'PUT',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                })
                this.editando = false;
                this.consumers = this.consumers.filter(consumer => consumer.id != this.currId);
            } else {
                fetch('http://localhost:3000' + window.location.pathname, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                })
            }

            this.interesses = []
            this.consumers.push(dados);
            this.consumersSorted = this.consumers.sort((a, b) => { return (a.nome.toUpperCase() > b.nome.toUpperCase()) ? 1 : ((b.nome.toUpperCase() > a.nome.toUpperCase()) ? -1 : 0) })
            this.formCadastro.reset();
        }
    }
    
    sortByAlpha(){
        this.sorted = !this.sorted;
    }

    inicializarFormulario() {
        this.formCadastro = this.formBuilder.group({
            nome: [''],
            bairro: [''],
            interesses: ['']
        })
    }

    insertInteresse() {
        this.interesses.push(this.formCadastro.value.interesses);
    }

    delete(id: number) {
        fetch('http://localhost:3000' + window.location.pathname, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        })

        this.consumers = this.consumers.filter(consumer => consumer.id != id);
    }
}
