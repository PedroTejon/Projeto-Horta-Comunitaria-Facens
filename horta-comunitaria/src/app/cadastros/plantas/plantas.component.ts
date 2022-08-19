import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-plantas',
    templateUrl: './plantas.component.html',
    styleUrls: ['../cadastros.scss']
})
export class PlantasComponent implements OnInit {
    constructor(private formBuilder: FormBuilder) {

    }

    formCadastro!: FormGroup;
    consumers: any[] = [];
    editando = false;
    currId: any;

    ngOnInit(): void {
        fetch('http://localhost:3000' + window.location.pathname)
            .then(response => response.json())
            .then((data) => { this.consumers = data });

        this.inicializarFormulario()
    }

    edit(id: number) {
        let consumer = this.consumers.find(c => c.id == id);

        this.formCadastro.patchValue({
            nome: consumer.nome,
            categoria: consumer.categoria
        });

        this.editando = true;
        this.currId = id;
    }

    cadastrar() {
        if (this.formCadastro.valid) {
            let dados = this.formCadastro.value;

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
            this.formCadastro.reset()
            this.consumers.push(dados);
        }
    }

    inicializarFormulario() {
        this.formCadastro = this.formBuilder.group({
            nome: [''],
            categoria: [''],
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
