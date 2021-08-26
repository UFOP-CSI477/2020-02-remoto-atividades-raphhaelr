@extends('principal')

@section('conteudo')

<h1>Dados do registro de vacinação</h1>

<p>ID: {{$registro->id}}</p>
<p>Pessoa: {{$registro->pessoa_id}}</p>
<p>Unidade: {{$registro->unidade_id}}</p>
<p>Vacina: {{$registro->vacina_id}}</p>
<p>Dose: {{$registro->dose}}</p>
<p>Data: {{$registro->data}}</p>

<a href="{{route('registros.edit', $registro->id)}}">Editar</a>
<a href="{{route('registros.index')}}">Voltar</a>
<form name="frmDelete" action="{{route('registros.destroy', $registro->id)}}" method="POST" onsubmit="return confirm('Deseja apagar esse registro?')">
    @csrf
    @method('delete')

    <input type="submit" class="btn btn-danger" value="Excluir"/>
</form>

@endsection
