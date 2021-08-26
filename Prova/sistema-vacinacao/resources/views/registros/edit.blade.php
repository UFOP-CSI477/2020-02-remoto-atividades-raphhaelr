@extends('principal')

@section('conteudo')

<form action="{{route('registros.update', $registro->id)}}" method="POST">
    @csrf
    @method('PUT')


    <div class="form-group">
        <label for="inputPessoa">Pessoa:</label>

        <select id="pessoa_id" required="" name="pessoa_id" class="form-control" >
            <option value="">Selecione a pessoa</option>
            @foreach($pessoas as $pessoa)
                <option value="{{$pessoa->id}}"
                @if($registro->pessoa_id == $pessoa->id)
                    selected
                @endif
                >{{$pessoa->nome}}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="inputUnidade">Unidade:</label>
        <select id="unidade_id" required="" name="unidade_id" class="form-control">
            <option value="">Selecione a unidade</option>
            @foreach($unidades as $unidade)
                <option value="{{$unidade->id}}"
                @if($registro->unidade_id == $unidade->id)
                    selected
                @endif
                >{{$unidade->nome}}</option>
            @endforeach
        </select>
    </div>

    <div class="form-group">
        <label for="inputVacina">Vacina:</label>
        <select id="vacina_id" required="" name="vacina_id" class="form-control" onchange="getVacina()">
            <option value="">Selecione a vacina</option>
            @foreach($vacinas as $vacina)
                <option value="{{$vacina->id}}"
                @if($registro->vacina_id == $vacina->id)
                    selected
                @endif
                >{{$vacina->nome}}</option>
            @endforeach
        </select>
    </div>

    <div class="form-group">
        <label for="inputDose">Dose:</label>
        <input type="text" name="dose" class="form-control" id="inputDose" placeholder="Digite a dose" required value="{{$registro->dose}}">
    </div>

    <div class="form-group">
        <label for="inputData">Data:</label>
        <input type="date" class="form-control" name="data" id="inputData" placeholder="Digite a data" required value="{{$registro->data}}">
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>

@endsection
