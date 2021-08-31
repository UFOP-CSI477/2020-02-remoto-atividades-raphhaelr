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
        <h2>Pessoas</h2>

        <a href="./index.php">Voltar</a>


        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Data de nascimento</th>
                    <th scope="col">CPF</th>
                    <th scope="col">RG</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Telefone</th>
                </tr>
            </thead>

            <tbody>
                <?php
                echo
                '<tr>
                        <th scope="row">' . $name . '</th>
                        <td>' . $birthdate . '</td>
                        <td>' . $cpf . '</td>
                        <td>' . $register . '</td>
                        <td>' . $email . '</td>
                        <td>' . $phone . '</td>
                    </tr>'
                ?>
            </tbody>
        </table>
    </div>
</body>

</html>