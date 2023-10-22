# AngularCrud

``` 
ng serve - o
```

## Json Server

```
npm install -g json-server
```


Start JSON Server

```bash
json-server --watch db.json
```

Now if you go to [http://localhost:3000/tarefas/1](http://localhost:3000/itens/1), you'll get

```json
 {
  "id": 1,
  "nome": "Tarefa 1",
  "cpf": "413.293.570-19",
  "responsavel": "admin",
  "prazo": "2023-12-22",
  "status": "Liberado para Execução"
}
```


