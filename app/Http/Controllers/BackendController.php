<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class BackendController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }
}
