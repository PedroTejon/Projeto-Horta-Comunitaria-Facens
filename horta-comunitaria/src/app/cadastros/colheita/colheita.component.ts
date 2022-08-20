import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';


@Component({
    selector: 'app-colheita',
    templateUrl: './colheita.component.html',
    styleUrls: ['../cadastros.scss']
})
export class ColheitaComponent implements OnInit {


    constructor(private formBuilder: FormBuilder) {

    }

    formCadastro!: FormGroup;
    consumers: any[] = [];
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
        let dateF = consumer.data.split('/')
        let data = dateF[2] + '-' + dateF[1] + '-' + dateF[0];
        
        this.formCadastro.patchValue({
            data: data,
            encarregado: consumer.encarregado,
            planta: consumer.planta
        });
        this.editando = true;
        this.currId = id;
    }

    cadastrar() {
        if (this.formCadastro.valid) {
            let dados = this.formCadastro.value;
            let dateF = this.formCadastro.value.data.split('-')
            dados.data = dateF[2] + '/' + dateF[1] + '/' + dateF[0];

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

            this.consumers.push(dados);
            this.consumersSorted = this.consumers.sort((a, b) => { return (a.planta.toUpperCase() > b.planta.toUpperCase()) ? 1 : ((b.planta.toUpperCase() > a.planta.toUpperCase()) ? -1 : 0) })
            this.formCadastro.reset();
        }
    }
    
    sortByAlpha(){
        this.sorted = !this.sorted;
    }

    inicializarFormulario() {
        this.formCadastro = this.formBuilder.group({
            data: [''],
            encarregado: [''],
            planta: ['']
        })
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
