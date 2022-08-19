import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-plantio',
    templateUrl: './plantio.component.html',
    styleUrls: ['../cadastros.scss']
})
export class PlantioComponent implements OnInit {


    constructor(private formBuilder: FormBuilder) {

    }

    formCadastro!: FormGroup;
    consumers: any[] = [];
    plantas: any[] = [];
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
            data: consumer.data,
            encarregado: consumer.encarregado
        });
        this.plantas = consumer.plantas.split(', ');
        this.editando = true;
        this.currId = id;
    }

    cadastrar() {
        if (this.formCadastro.valid) {
            let dados = this.formCadastro.value;
            let dateF = this.formCadastro.value.data.split('-')
            dados.data = dateF[2] + '/' + dateF[1] + '/' + dateF[0];
            dados.plantas = this.plantas.join(', ');

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
            
            this.plantas = []
            this.formCadastro.reset()
        }
    }

    inicializarFormulario() {
        this.formCadastro = this.formBuilder.group({
            data: [''],
            encarregado: [''],
            plantas: ['']
        })
    }

    insertPlantas() {
        this.plantas.push(this.formCadastro.value.plantas);
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
