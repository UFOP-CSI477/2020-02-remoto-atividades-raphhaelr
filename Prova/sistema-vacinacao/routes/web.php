<?php

use App\Models\Pessoa;
use App\Http\Controllers\PessoaController;
use App\Http\Controllers\VacinaController;
use App\Http\Controllers\UnidadeController;
use App\Http\Controllers\RegistroController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/login', function () {
    return view('login');
})->name('login');

Route::resource('/pessoas', PessoaController::class);

Route::resource('/vacinas', VacinaController::class);

Route::resource('/unidades', UnidadeController::class);

Route::resource('/registros', RegistroController::class);



