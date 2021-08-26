@extends('principal')

@section('conteudo')

<table class="table table-hover">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Bairro</th>
            <th scope="col">Cidade</th>
            <th scope="col">Data nascimento</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        @foreach($pessoas as $pessoa)
        <tr>
            <td>{{$pessoa->id}}</td>
            <td>{{$pessoa->nome}}</td>
            <td>{{$pessoa->bairro}}</td>
            <td>{{$pessoa->cidade}}</td>
            <td>{{$pessoa->data_nascimento}}</td>
            <td>
                <a href="{{route('pessoas.edit', $pessoa->id)}}">Editar</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
