@extends('principal')

@section('conteudo')

<form action="{{route('vacinas.store')}}" method="POST">
    @csrf
    <div class="form-group">
        <label for="inputNome">Nome:</label>
        <input type="text" name="nome" class="form-control" id="inputNome" placeholder="Digite o nome da vacina" required>
    </div>
    <div class="form-group">
        <label for="inputFabricante">Fabricante:</label>
        <input type="text" class="form-control" name="fabricante" id="inputFabricante" placeholder="Digite o fabricante da vacina" required>
    </div>
    <div class="form-group">
        <label for="inputDoses">Número de doses:</label>
        <input type="number" class="form-control" name="doses" id="inputDoses" placeholder="Digite o número de doses da vacina" required>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>

@endsection
