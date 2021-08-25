@extends('home')

@section('conteudo')

<a href="{{route('registros.create')}}">Cadastrar</a>

<table class="table table-hover">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Pessoa</th>
            <th scope="col">Unidade</th>
            <th scope="col">Vacina</th>
            <th scope="col">Dose</th>
            <th scope="col">Data</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        @foreach($registros as $registro)
        <tr>
            <td>{{$registro->id}}</td>
            <td>{{$registro->pessoa->nome}}</td>
            <td>{{$registro->unidade->nome}}</td>
            <td>{{$registro->vacina->nome}}</td>
            <td>{{$registro->dose}}</td>
            <td>{{$registro->data}}</td>
            <td>
                <a href="{{route('registros.show', $registro->id)}}">Exibir</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
