import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-consulta-de-tarefas',
    templateUrl: './consulta-de-tarefas.component.html',
    styleUrls: ['../../cadastros/cadastros.scss', './consulta-de-tarefas.component.scss']
})
export class ConsultaDeTarefasComponent implements OnInit {
    constructor(private formBuilder: FormBuilder) { }

    formCadastro!: FormGroup;
    tarefas: any[] = [];
    tarefasSorted: any[] = [];
    sorted = false;

    ngOnInit(): void {
        this.inicializarFormulario()
    }

    inicializarFormulario() {
        this.formCadastro = this.formBuilder.group({
            data: [''],
            encarregado: ['']
        })
    }
    
    pesquisar() {
        if (this.formCadastro.valid) {
            let dados = this.formCadastro.value;
            let dateF = this.formCadastro.value.data.split('-')
            dados.data = dateF[2] + '/' + dateF[1] + '/' + dateF[0]
            
            fetch('http://localhost:3000/consulta', {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            }).then(response => response.json())
            .then((data) => {
                this.tarefas = data
            })
            this.tarefasSorted = this.tarefas.sort((a, b) => { return (a.Tipo.toUpperCase() > b.Tipo.toUpperCase()) ? 1 : ((b.Tipo.toUpperCase() > a.Tipo.toUpperCase()) ? -1 : 0) })
            this.formCadastro.reset();
        }
    }
    
    sortByAlpha(){
        this.sorted = !this.sorted;
    }
}
