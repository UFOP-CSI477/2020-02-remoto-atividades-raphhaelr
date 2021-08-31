<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Pessoas</title>
</head>

<body>

    <div style="margin: 2rem;">

        <h2>Cadastrar pessoa</h2>


        <form method="POST" action="../validar.php" name="formData" onsubmit="checkForm()">
            <div>
                <label for="name" class="form-label">Nome:</label>
                <input type="text" name="name" id="name" class="form-control" />
            </div>

            <div>
                <label for="birthdate" class="form-label">Data de nascimento:</label>
                <input type="date" name="birthdate" id="birthdate" class="form-control" />
            </div>

            <div>
                <label for="cpf" class="form-label">CPF:</label>
                <input type="text" name="cpf" id="cpf" class="form-control" placeholder="000.000.000-00" />
            </div>

            <div>
                <label for="register" class="form-label ">RG:</label>
                <input type="text" name="register" id="register" class="form-control" />
            </div>

            <div>
                <label for="email" class="form-label">E-mail:</label>
                <input type="email" name="email" id="email" class="form-control" />
            </div>

            <div>
                <label for="phone" class="form-label">Telefone:</label>
                <input type="text" name="phone" id="phone" class="form-control" />
            </div>

            <div class="buttonContainer" style="margin-top: 2rem;">
                <button type="submit" class="btn btn-primary" onclick="checkForm()">Cadastrar</button>
            </div>

        </form>

    </div>

</body>

</html>