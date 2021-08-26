<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use App\Models\Vacina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $dose_unica = Registro::where('dose', 0)->count();
        $primeira_dose = Registro::where('dose', 1)->count();
        $segunda_dose = Registro::where('dose', 2)->count();

        $vacinas_doses = DB::select( DB::raw("select v.nome, sum(r.dose) as qtd from registros r, vacinas v where v.id = r.vacina_id group by v.nome"));
        $registros = DB::select( DB::raw("select sum(r.dose) as qtd from registros r") );

        return view('home', [
            'dose_unica' => $dose_unica,
            'primeira_dose' => $primeira_dose,
            'segunda_dose' => $segunda_dose,
            'registros' => $registros[0]->qtd,
            'vacinas' => $vacinas_doses
        ]);
    }
}
