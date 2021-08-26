@extends('principal')

@section('conteudo')

<form action="{{route('pessoas.update', $pessoa->id)}}" method="POST">
    @csrf
    @method('PUT')


    <div class="form-group">
        <label for="inputNome">Nome:</label>
        <input type="text" name="nome" class="form-control" id="inputNome" placeholder="Digite o nome da vacina" required value="{{$pessoa->nome}}">
    </div>
    <div class="form-group">
        <label for="inputBairro">Bairro:</label>
        <input type="text" class="form-control" name="bairro" id="inputBairro" placeholder="Digite o fabricante da vacina" required value="{{$pessoa->bairro}}">
    </div>

    <div class="form-group">
        <label for="inputCidade">Cidade:</label>
        <input type="text" class="form-control" name="cidade" id="inputCidade" placeholder="Digite o fabricante da vacina" required value="{{$pessoa->cidade}}">
    </div>

    <div class="form-group">
        <label for="inputDataNascimento">Data nascimento:</label>
        <input type="date" class="form-control" name="data_nascimento" id="inputDataNascimento" placeholder="Digite o fabricante da vacina" required value="{{$pessoa->data_nascimento}}">
    </div>

    <button type="submit" class="btn btn-primary">Atualizar</button>
    <button type="reset" class="btn btn-danger">Limpar</button>
</form>

@endsection
